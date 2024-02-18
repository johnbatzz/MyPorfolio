
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';

export default function NavMobile(props: any) {
    const { isOpen = false, currentPage = 'home', onClose = () => { } } = props;
    return (
        <>
            <Transition appear show={isOpen} as={Fragment} >
                <Dialog as="div" className="relative max-w-full" onClose={() => { onClose(currentPage) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-30 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-40  overflow-y-auto">
                        <div className="flex items-center justify-center min-h-[280px] text-center w-full mt-[60px]">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-500"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full min-h-[280px] overflow-visible text-left align-middle transition-all transform bg-gray-800 rounded-md">
                                    <Dialog.Title
                                        as="h3"
                                        className="w-full text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='absolute right-4 top-4'>
                                        </div>
                                    </Dialog.Title>
                                    <div className="flex items-center justify-center">
                                        <div
                                            className=" w-full md:block md:w-auto" >
                                            <ul
                                                className={`
                                                flex flex-col p-4 mt-4 
                                                md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 gap-0`}>
                                                <li>
                                                    <a href="#home"
                                                        onClick={() => onClose('home')}
                                                        className={`
                                                            ${currentPage === 'home' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                                            block py-2 pl-3 pr-4 text-whites rounded 
                                                            md:p-0  md:dark:bg-transparent" 
                                                            aria-current="page
                                                        `}
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#overview"
                                                        onClick={() => onClose('exp')}
                                                        className={`
                                                            ${currentPage === 'exp' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                                            block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                                                            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                                                        `}
                                                    >
                                                        Overview
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#tech-skills"
                                                        onClick={() => onClose('tech-skills')}
                                                        className={`
                                                            ${currentPage === 'tech-skills' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                                            block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100
                                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                                                            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                                                        `}
                                                    >
                                                        Technical Skills
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#portfolio"
                                                        onClick={() => onClose('portfolio')}
                                                        className={`
                                                            ${currentPage === 'portfolio' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                                            block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent
                                                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white `
                                                        }
                                                    >
                                                        Portfolio
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#experiences"
                                                        onClick={() => onClose('experiences')}
                                                        className={`
                                                            ${currentPage === 'experiences' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                                            block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent
                                                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white `
                                                        }
                                                    >
                                                        Experiences
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#education"
                                                        onClick={() => onClose('education')}
                                                        className={`
                                                            ${currentPage === 'education' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                                            block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent
                                                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white `
                                                        }
                                                    >
                                                        Education
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/resume/JohnAndrewBatulan.pdf"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        download
                                                        className={`
                                                            dark:text-green-400
                                                            block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100
                                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent
                                                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white `
                                                        }
                                                    >
                                                        Get My CV
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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