import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import React, { Fragment } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist"
const navigation = [
    { name: 'Proyectos', href: '/projects' },
    { name: 'Equipo de trabajo', href: '/team' },
    { name: 'Contacto', href: '/contact-us' },
]
export const Toolbar = (props) => {
    const navigate = useNavigate()
    const onChangeView = () => {
        console.log('on change view')
        navigate("principal", {replace:true})
    }



    return (
        <>
            <Popover

            >
                <div className="relative flex items-centerjustify-between px-4 pt-6 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <Link to={'/principal'}>
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt="Your Company"
                                        className="h-8 w-auto sm:h-10 toolbar-logo"
                                    />
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                            {navigation.map((item) => (
                                <Link key={item.name} to={item.href} className="font-medium text-gray-500  border-b-4 border-transparent hover:text-blue-500 hover:border-current">
                                    {item.name}
                                </Link>
                            ))}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Log in
                            </a>
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close main menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <CustomLink
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-fuchsia-600 hover:text-blue-600"
                                    >
                                        {item.name}
                                    </CustomLink>
                                ))}
                            </div>
                            <a
                                href="#"
                                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                            >
                                Log in
                            </a>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            {props.children}
        </>


    )
}
const CustomLink = ({ href, children, ...props }) => {
    const resolvePath = useResolvedPath(href)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    console.log('is active', isActive)
    console.log('resolvePath', resolvePath)
    const path = window.location.pathname
    return (
        <li className={isActive ? "active" : ""}>
            <Link href={href} {...props}>
                {children}
            </Link>
        </li>
    )
}

const CustomMenu = () => {


    <details className="group">
        <summary
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg group hover:bg-gray-100 hover:text-gray-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>

            <span className="ml-3 text-sm font-medium"> Teams </span>

            <span
                className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </summary>

        <nav className="flex flex-col mt-2 ml-8 space-y-1">
            <a
                href=""
                className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
                Banned Users
            </a>

            <a
                href=""
                className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
                Calendar
            </a>
        </nav>
    </details>

}