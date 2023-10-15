import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';


const CheckOutForm = ({ price, carts }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch("https://af-elegance-server-md-arefin.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.clientSecret);
                setClientSecret(data.clientSecret);
            })
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "Anonymous",
                        email: user?.email || "Unknown",
                    },
                },
            },
        );

        if (paymentError) {
            console.log(paymentError);
        }

        setProcessing(false);
        console.log(paymentIntent);

        if (paymentIntent.status === "succeeded") {
            setTransactionID(paymentIntent.id)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment Successful',
                showConfirmButton: false,
                timer: 1500
            });

            const payment = {
                email: user.email,
                transactionID: paymentIntent.id,
                price,
                carts,
                date: new Date(),
                orderStatus: "delivery Pending"
            }

            fetch("https://af-elegance-server-md-arefin.vercel.app/payment", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (
        <div className='mx-2 lg:ml-[550px]'>
            {
                cardError && <p className='text-red-600 text-xl my-20'>
                    <span className='text-black'>Error: </span>{cardError}</p>
            }
            {
                transactionID && <p className='text-green-600  text-xl my-20'><span className='text-black'>Transaction ID: </span>{transactionID}</p>
            }

            <form onSubmit={handleSubmit} className="">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn bg-black text-white' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;