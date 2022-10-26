import React, { Fragment, useEffect, useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist"
import { catLogoToolBar } from "../../utils/textForImages"
import '../generalStyles.scss'
import { Menu } from 'antd';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const navigation = [
    { name: 'Equipo de trabajo', href: '/team' },
    { name: 'Contacto', href: '/contact-us' },
]
export const Toolbar = (props) => {
    const href = window.location.pathname
    const navigate = useNavigate()
    const [resolvePath, setResolvePath] = useState(useResolvedPath(href));
    const onChangeView = (newDestination) => {
        navigate(newDestination, { replace: true })
    }

    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    const resolvePath2 = useResolvedPath(href)
    useEffect(() => {
        setResolvePath(resolvePath2);
        return () => {

        };
    }, [resolvePath2])
    const [current, setCurrent] = useState('principal-menu');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        onChangeView(e.key)

    }
    const items = [{
        label: '',
        key: 'principal-menu',
        icon: <BiMenuAltRight />,
        children: [
            {
                type: 'group',
                label: 'Proyectos ventas',
                icon: <AiOutlineShoppingCart />,
                children: [
                    {
                        label: 'standard purshage',
                        key: '/buy-me',
                    },
                    {
                        label: 'exchange app',
                        key: 'change-for',
                    },
                ],
            },
            {
                type: 'group',
                label: 'blogs y chats',
                children: [
                    {
                        label: 'forum',
                        key: '/foro',
                    },
                    {
                        label: 'chats',
                        key: '/who-are-you',
                    },
                ],
            },
            {
                key:'login',
                label: 'Sign In'
            },{
                key:'sign-up',
                label: 'Sign Up'
            },
            {
                key:'team',
                label: 'Nosotros'
            },
            
        ],
    }]

    return (
        <>
            {resolvePath?.pathname != "/" && (
                <nav className="menu-projects" aria-label="Global">
                    <div className="toolbar-logo-container flex w-full items-center justify-between md:w-auto">
                        <Link to={'/principal'}>
                            <img
                                alt={catLogoToolBar}
                                className="h-8 w-auto sm:h-10 toolbar-logo"
                            />
                        </Link>
                    </div>
                    <p className="toolbar-p-title">Your Zone</p>

                    <Menu
                    className="menu-parent"
                        onClick={(e) => onClick(e)}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items} />

                    {/* {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="toolbar-button-menu">
                        {item.name}
                    </Link>
                ))} */}
                    {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Log in
                    </a> */}
                </nav>)}

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

