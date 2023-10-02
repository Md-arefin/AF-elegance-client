import { Dialog, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Modal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    };

    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Tab.Group>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                                <Tab
                                                    className={({ selected }) =>
                                                        classNames(
                                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                            selected
                                                                ? 'bg-white shadow'
                                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                        )
                                                    }
                                                >
                                                    Login
                                                </Tab>
                                                <Tab
                                                    className={({ selected }) =>
                                                        classNames(
                                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                            selected
                                                                ? 'bg-white shadow'
                                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                        )
                                                    }
                                                >
                                                    Create Account
                                                </Tab>
                                            </Tab.List>
                                        </Dialog.Title>

                                        <div className="mt-2">
                                            <Tab.Panels className="mt-2">
                                                <Tab.Panel
                                                    className={classNames(
                                                        'rounded-xl bg-white ',
                                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                    )}
                                                >
                                                    <Login />
                                                </Tab.Panel>

                                                {/* SignUp Tab */}

                                                <Tab.Panel
                                                    className={classNames(
                                                        'rounded-xl bg-white',
                                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                    )}
                                                >
                                                    <SignUp />
                                                </Tab.Panel>
                                            </Tab.Panels>
                                        </div>
                                    </Tab.Group>

                                    <div className="mt-4 ml-12 lg:ml-20">
                                        <button
                                            type="button"
                                            className="rounded-md border w-3/4 border-transparent bg-red-500 px-4 py-2 font-medium text-white"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
