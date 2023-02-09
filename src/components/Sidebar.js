import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    const [activeNav, setActiveNav] = useState(1);

    const dashboardNav = [
        {
            id: 1,
            title: 'Overview',
            link: '/dashboard/overview',
        },
        {
            id: 2,
            title: 'PV',
            // link: '/dashboard/pv'
            link: '/dashboard/overview'
        },
        {
            id: 3,
            title: 'PU',
            // link: '/dashboard/pu'
            link: '/dashboard/overview'
        },
        {
            id: 4,
            title: 'SCV',
            // link: '/dashboard/scv'
            link: '/dashboard/overview'
        },
        {
            id: 5,
            title: 'IO',
            // link: '/dashboard/io'
            link: '/dashboard/overview'
        },
        {
            id: 6,
            title: 'CE',
            // link: '/dashboard/ce'
            link: '/dashboard/overview'
        },
    ]

    return (
        <>
            <div className='w-full h-full'>
                <nav className='w-full h-full'>
                    <ul className='mt-2'>
                        {
                            dashboardNav.map((ele) => {
                                const { id, title, link } = ele;

                                return (
                                    <li key={id} className={`h-[40px] flex items-center justify-between pr-[13px] mb-[6px] relative ${activeNav === id && 'before:content-[""] before:absolute beofore:left-0 before:top-0 before:h-full before:w-[4px] before:bg-[#FF3E5B] text-[#FF3E5B]'}`}>
                                        <Link onClick={() => setActiveNav(id)} to={link} className={`w-full h-full font-bold text-[14px] flex items-center gap-[10px] relative pl-[15px]`}>
                                            <span>
                                                {
                                                    activeNav === id ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.21349 1.2136V8.00089H6.54567V1.2136H1.21349ZM0.971118 0.24411C0.569544 0.24411 0.244003 0.569651 0.244003 0.971225V8.24326C0.244003 8.64484 0.569544 8.97038 0.971119 8.97038H6.78804C7.18961 8.97038 7.51515 8.64484 7.51515 8.24326V0.971225C7.51515 0.569651 7.18961 0.24411 6.78804 0.24411H0.971118Z" fill="#E31837" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.45411 14.7864V7.99911H14.7863V14.7864H9.45411ZM9.21174 15.7559C8.81017 15.7559 8.48463 15.4303 8.48463 15.0288V7.75674C8.48463 7.35516 8.81017 7.02962 9.21174 7.02962H15.0287C15.4302 7.02962 15.7558 7.35516 15.7558 7.75674V15.0288C15.7558 15.4303 15.4302 15.7559 15.0287 15.7559H9.21174Z" fill="#E31837" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.21344 10.9085V14.7864H6.54561V10.9085H1.21344ZM0.971065 9.93896C0.56949 9.93896 0.24395 10.2645 0.24395 10.6661V15.0288C0.24395 15.4303 0.569491 15.7559 0.971065 15.7559H6.78799C7.18956 15.7559 7.5151 15.4303 7.5151 15.0288V10.6661C7.5151 10.2645 7.18956 9.93896 6.78799 9.93896H0.971065Z" fill="#E31837" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.45411 5.09152V1.21357H14.7863V5.09152H9.45411ZM9.21174 6.061C8.81017 6.061 8.48463 5.73546 8.48463 5.33389V0.971199C8.48463 0.569624 8.81017 0.244083 9.21174 0.244083H15.0287C15.4302 0.244083 15.7558 0.569624 15.7558 0.971199V5.33389C15.7558 5.73546 15.4302 6.061 15.0287 6.061H9.21174Z" fill="#E31837" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.21349 1.2136V8.00089H6.54567V1.2136H1.21349ZM0.971118 0.24411C0.569544 0.24411 0.244003 0.569651 0.244003 0.971225V8.24326C0.244003 8.64484 0.569544 8.97038 0.971119 8.97038H6.78804C7.18961 8.97038 7.51515 8.64484 7.51515 8.24326V0.971225C7.51515 0.569651 7.18961 0.24411 6.78804 0.24411H0.971118Z" fill="#000" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.45411 14.7864V7.99911H14.7863V14.7864H9.45411ZM9.21174 15.7559C8.81017 15.7559 8.48463 15.4303 8.48463 15.0288V7.75674C8.48463 7.35516 8.81017 7.02962 9.21174 7.02962H15.0287C15.4302 7.02962 15.7558 7.35516 15.7558 7.75674V15.0288C15.7558 15.4303 15.4302 15.7559 15.0287 15.7559H9.21174Z" fill="#000" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.21344 10.9085V14.7864H6.54561V10.9085H1.21344ZM0.971065 9.93896C0.56949 9.93896 0.24395 10.2645 0.24395 10.6661V15.0288C0.24395 15.4303 0.569491 15.7559 0.971065 15.7559H6.78799C7.18956 15.7559 7.5151 15.4303 7.5151 15.0288V10.6661C7.5151 10.2645 7.18956 9.93896 6.78799 9.93896H0.971065Z" fill="#000" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.45411 5.09152V1.21357H14.7863V5.09152H9.45411ZM9.21174 6.061C8.81017 6.061 8.48463 5.73546 8.48463 5.33389V0.971199C8.48463 0.569624 8.81017 0.244083 9.21174 0.244083H15.0287C15.4302 0.244083 15.7558 0.569624 15.7558 0.971199V5.33389C15.7558 5.73546 15.4302 6.061 15.0287 6.061H9.21174Z" fill="#000" />
                                                        </svg>
                                                    )
                                                }
                                            </span>
                                            {title}
                                        </Link>

                                        {/* arrow */}

                                        {/* {
                                            activeNav === 1 ? ('') : (
                                                <span>
                                                    {
                                                        activeNav === id ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.35 1.00385L6.12693 5.73462C6.26539 5.87308 6.26539 6.10385 6.12693 6.24231L1.35 10.9731C1.21154 11.1115 0.980774 11.1115 0.842312 10.9731L0.33462 10.4654C0.196158 10.3269 0.196158 10.0962 0.33462 9.95769L4.09616 6.24231C4.23462 6.10385 4.23462 5.87308 4.09616 5.73462L0.357697 2.01923C0.219235 1.88077 0.219235 1.65 0.357697 1.51154L0.865389 1.00385C1.00385 0.888461 1.21154 0.888461 1.35 1.00385Z" fill="#FF3E5B" />
                                                            </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.35 1.00385L6.12693 5.73462C6.26539 5.87308 6.26539 6.10385 6.12693 6.24231L1.35 10.9731C1.21154 11.1115 0.980774 11.1115 0.842312 10.9731L0.33462 10.4654C0.196158 10.3269 0.196158 10.0962 0.33462 9.95769L4.09616 6.24231C4.23462 6.10385 4.23462 5.87308 4.09616 5.73462L0.357697 2.01923C0.219235 1.88077 0.219235 1.65 0.357697 1.51154L0.865389 1.00385C1.00385 0.888461 1.21154 0.888461 1.35 1.00385Z" fill="#706E6B" />
                                                            </svg>
                                                        )
                                                    }
                                                </span>
                                            )
                                        } */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar