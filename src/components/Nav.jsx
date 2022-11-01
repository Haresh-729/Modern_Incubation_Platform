// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
import { Popover } from '@headlessui/react';
// import {
//     ArrowPathIcon,
//     Bars3Icon,
//     BookmarkSquareIcon,
//     CalendarIcon,
//     ChartBarIcon,
//     CursorArrowRaysIcon,
//     LifebuoyIcon,
//     PhoneIcon,
//     PlayIcon,
//     ShieldCheckIcon,
//     Squares2X2Icon,
//     XMarkIcon,
// } from '@heroicons/react/24/outline'
import {Bars3Icon} from '@heroicons/react/24/outline'
// import Logo from '../assets/modernvate-blue.png';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';


// const Services = [
//     {
//         name: 'Analytics',
//         description: 'Get a better understanding of where your traffic is coming from.',
//         href: 'https://modernsolnhub.com/',
//         icon: ChartBarIcon,
//     },
//     {
//         name: 'Engagement',
//         description: 'Connect directly to your customers in a more meaningful way.',
//         href: 'https://modernsolnhub.com/',
//         icon: CursorArrowRaysIcon,
//     },
//     { name: 'Security', description: "Your customers' data will be safe and secure.", href: 'https://modernsolnhub.com/', icon: ShieldCheckIcon },
//     {
//         name: 'Integrations',
//         description: "Connect with third-party tools that you're already using.",
//         href: 'https://modernsolnhub.com/',
//         icon: Squares2X2Icon,
//     },
//     {
//         name: 'Automations',
//         description: 'Build strategic funnels that will drive your customers to convert',
//         href: 'https://modernsolnhub.com/',
//         icon: ArrowPathIcon,
//     },
// ]

// const callsToAction = [
//     { name: 'Watch Demo', href: 'https://modernsolnhub.com/', icon: PlayIcon },
//     { name: 'Contact Sales', href: 'https://modernsolnhub.com/', icon: PhoneIcon },
// ]

// const resources = [
//     {
//         name: 'Help Center',
//         description: 'Get all of your questions answered in our forums or contact support.',
//         href: 'https://modernsolnhub.com/',
//         icon: LifebuoyIcon,
//     },
//     {
//         name: 'Guides',
//         description: 'Learn how to maximize our platform to get the most out of it.',
//         href: 'https://modernsolnhub.com/',
//         icon: BookmarkSquareIcon,
//     },
//     {
//         name: 'Events',
//         description: 'See what meet-ups and other events we might be planning near you.',
//         href: 'https://modernsolnhub.com/',
//         icon: CalendarIcon,
//     },
//     { name: 'Security', description: 'Understand how we take your privacy seriously.', href: 'https://modernsolnhub.com/', icon: ShieldCheckIcon },
// ]

// const recentPosts = [
//     { id: 1, name: 'Boost your conversion rate', href: 'https://modernsolnhub.com/' },
//     { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: 'https://modernsolnhub.com/' },
//     { id: 3, name: 'Improve your customer experience', href: 'https://modernsolnhub.com/' },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Nav() {
    return (
        <Popover className="relative bg-cover w-screen overflow-x-hidden">
            <div className="mx-auto  px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        {/* <Link to='/'>
                            <span className="sr-only">ModernVate</span>
                            <img className="h-8 w-auto sm:h-10" src={Logo} alt="ModernVate"/>
                            <span className=" lg:text-left font-bold text-blue">M</span>
                            <span className=" lg:text-left font-bold">odern</span>
                            <span className=" lg:text-left font-bold text-blue">V</span>
                            <span className=" lg:text-left font-bold">ate</span>
                        </Link> */}
                        <Link to='/'>
                            <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-4 w-52 h-auto" src="https://i.ibb.co/R9cKZRv/Group-27.png" alt="img desc" />
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">

                        {/* <a href="https://modernsolnhub.com/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </a> */}
                        <Link to="/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </Link>

                        <Link to="/service" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base font-medium text-gray-500 hover:text-gray-900">
                            Services
                        </Link>

                        {/* <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
                                    >
                                        <span>Services</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true" />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {Services.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <a
                                                                href={item.href}
                                                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                <span className="ml-3">{item.name}</span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover> */}

                        {/* <a href="https://modernsolnhub.com/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </a> */}
                        <Link to="/about" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base font-medium text-gray-500 hover:text-gray-900">
                            About Us
                        </Link>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        {/* <a href="https://modernsolnhub.com/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-indigo-900">
                            Login
                        </a> */}
                        <Link to='/login' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 whitespace-nowrap text-base font-medium text-gray-500 hover:text-indigo-900">Login</Link>
                        {/* <a
                            href="https://modernsolnhub.com/"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" >
                            Register
                        </a> */}
                        <Link to='/register' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                            Register
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {Services.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="https://modernsolnhub.com/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="https://modernsolnhub.com/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    About
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="https://modernsolnhub.com/"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="https://modernsolnhub.com/" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition> */}
        </Popover>
    )
}
