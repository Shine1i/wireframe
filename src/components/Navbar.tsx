import {Link, useNavigate} from '@tanstack/react-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Globe } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useEffect, useRef, useState} from "react";

const languages = [
    { value: "en", label: "EN" },
    { value: "sv", label: "SV" },
    { value: "de", label: "DE" },
    { value: "fr", label: "FR" },
    { value: "es", label: "ES" },
]
const HOVER_DELAY = 150;

export function Navbar() {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        clearTimer();
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        clearTimer();
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, HOVER_DELAY);
    };

    const handleProfileClick = () => {
        setIsDropdownOpen(false);
        navigate({ to: '/profile' });
    };

    useEffect(() => {
        return () => clearTimer();
    }, []);



    return (
        <Disclosure as="nav" className="relative bg-gradient-to-r from-purple-dark to-blue-dark shadow-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link to="/">
                                <div className="w-12 h-12 bg-white/20 border border-white/40 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs font-semibold">
                                        <img src="https://12stepsplan.com/wp-content/plugins/apostrophe-twelve-steps/template/img/logo-min.png" alt="TanStack Logo" className="h-10" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                to="/"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white/80 hover:border-white/50 hover:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                to="/exercises"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white/80 hover:border-white/50 hover:text-white"
                            >
                                Exercises
                            </Link>
                            <Link
                                to="/helplines"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white/80 hover:border-white/50 hover:text-white"
                            >
                                Helplines
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Language selector */}
                        <div className="flex items-center">
                            <Select defaultValue="en">
                                <SelectTrigger className="w-18 h-8 border-none shadow-none text-sm text-purple-dark font-semibold !bg-[#ffffff] hover:!bg-[#f5f5f5] focus:ring-purple/50 [&>svg]:text-purple-dark rounded-lg px-3">
                                    <Globe className="w-4 h-4 text-purple-dark mr-1" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map((lang) => (
                                        <SelectItem key={lang.value} value={lang.value}>
                                            {lang.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Profile dropdown */}
                        <div
                            className="relative cursor-pointer ml-2"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                onClick={handleProfileClick}
                                className="relative cursor-pointer flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <div className="size-8 rounded-full !bg-[#ffffff] flex items-center justify-center">
                                    <span className="text-purple-dark text-xs font-bold">U</span>
                                </div>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                                    <Link
                                        to="/contacts"
                                        className="block px-4 py-2 text-sm text-foreground hover:bg-purple/10"
                                    >
                                        My Contacts
                                    </Link>
                                    <Link
                                        to="/diary"
                                        className="block px-4 py-2 text-sm text-foreground hover:bg-purple/10"
                                    >
                                        Diary
                                    </Link>
                                    <Link
                                        to="/therapy-notes"
                                        className="block px-4 py-2 text-sm text-foreground hover:bg-purple/10"
                                    >
                                        Therapy Notes
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-4 bg-gradient-to-r from-purple-dark to-blue-dark">
                    <DisclosureButton
                        as={Link}
                        to="/"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-white/80 hover:border-white/50 hover:bg-white/10 hover:text-white"
                    >
                        Home
                    </DisclosureButton>
                    <DisclosureButton
                        as={Link}
                        to="/exercises"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-white/80 hover:border-white/50 hover:bg-white/10 hover:text-white"
                    >
                        Exercises
                    </DisclosureButton>
                    <DisclosureButton
                        as={Link}
                        to="/helplines"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-white/80 hover:border-white/50 hover:bg-white/10 hover:text-white"
                    >
                        Helplines
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
