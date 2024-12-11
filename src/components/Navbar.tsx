"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { supabase } from '@/services/clients';

const subMenuItemsOne = [
        {
                title: 'Technology',
                description: 'Latest tech news and updates',
                icon: <Zap className="size-5 shrink-0" />,
        },
        {
                title: 'Business',
                description: 'Insights and trends in business',
                icon: <Sunset className="size-5 shrink-0" />,
        },
        {
                title: 'Health & Wellness',
                description: 'Tips for a healthy lifestyle',
                icon: <Trees className="size-5 shrink-0" />,
        },
        {
                title: 'Lifestyle',
                description: 'Guides to improve your daily life',
                icon: <Book className="size-5 shrink-0" />,
        },
        {
                title: 'Science',
                description: 'Discoveries and research updates',
                icon: <Zap className="size-5 shrink-0" />,
        },
        {
                title: 'Education',
                description: 'Resources for learning and growth',
                icon: <Trees className="size-5 shrink-0" />,
        },
        {
                title: 'Entertainment',
                description: 'Latest in movies, music, and more',
                icon: <Sunset className="size-5 shrink-0" />,
        },
        {
                title: 'Trending',
                description: 'What’s popular right now',
                icon: <Book className="size-5 shrink-0" />,
        },
];

const subMenuItemsTwo = [
    {
        title: 'Help Center',
        description: 'Get all the answers you need right here',
        icon: <Zap className="size-5 shrink-0" />,
    },
    {
        title: 'Terms of Service',
        description: 'Our terms and conditions for using our services',
        icon: <Book className="size-5 shrink-0" />,
    },
    {
        title: 'Contact Us',
        description: 'We are here to help you with any questions you have',
        icon: <Sunset className="size-5 shrink-0" />,
    },
];

const Navbar = () => {
        const [user, setUser] = useState<any>(null);
        const router = useRouter(); 

        useEffect(() => {
                const fetchSession = async () => {
                const {
                        data: { session },
                } = await supabase.auth.getSession();
                setUser(session?.user || null);
                };

                fetchSession();
        }, []);

        const handleLogout = async () => {
                const { error } = await supabase.auth.signOut();
                if (error) {
                console.error("Logout failed:", error.message);
                } else {
                setUser(null);
                router.push("/"); 
                }
        };

    return (
        <div className=''>
            <div className="container py-4 max-w-7xl">
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        <a href="/" className="flex items-center gap-2">
                                <img
                                        src="/icon.jpg"  
                                        className="w-8 rounded-md"
                                        alt="logo"
                                />
                            <span className="text-xl font-extrabold ">Publisher</span>
                        </a>
                        <div className="flex items-center space-x-2">
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href="#"
                            >
                                About
                            </a>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href="#"
                            >
                                Contact
                            </a>
                            {user && (
                                <NavigationMenu>
                                    <a
                                        className={cn(
                                            'text-muted-foreground',
                                            navigationMenuTriggerStyle,
                                            buttonVariants({
                                                variant: 'ghost',
                                            }),
                                        )}
                                        href="#"
                                    >
                                     Community
                                    </a>
                                    <NavigationMenuList>
                                        <NavigationMenuItem className="text-muted-foreground">
                                            <NavigationMenuTrigger>
                                                <span>Discover</span>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="w-80 p-3">
                                                    <NavigationMenuLink>
                                                        {subMenuItemsOne.map((item, idx) => (
                                                            <li key={idx}>
                                                                <a
                                                                    className={cn(
                                                                        'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                    )}
                                                                    href="#"
                                                                >
                                                                    {item.icon}
                                                                    <div>
                                                                        <div className="text-sm font-semibold">
                                                                            {item.title}
                                                                        </div>
                                                                        <p className="text-sm leading-snug text-muted-foreground">
                                                                            {item.description}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </NavigationMenuLink>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem className="text-muted-foreground">
                                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="w-80 p-3">
                                                    <NavigationMenuLink>
                                                        {subMenuItemsTwo.map((item, idx) => (
                                                            <li key={idx}>
                                                                <a
                                                                    className={cn(
                                                                        'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                    )}
                                                                    href="#"
                                                                >
                                                                    {item.icon}
                                                                    <div>
                                                                        <div className="text-sm font-semibold">
                                                                            {item.title}
                                                                        </div>
                                                                        <p className="text-sm leading-snug text-muted-foreground">
                                                                            {item.description}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </NavigationMenuLink>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {user ? (
                            <>
                                <Button onClick={handleLogout} className='font-bold bg-black text-white' variant="outline">
                                    Logout <span className="mr-4 font-normal">@{user.email.split('@')[0]}</span>
                                </Button>
                            </>
                        ) : null}
                        {!user && (
                                <>
                                        <Button variant="default" className="bg-black text-white" onClick={() => router.push('/login')}>
                                                Login
                                        </Button>
                                        <Button variant="outline" onClick={() => router.push('/signup')}>
                                                Sign Up
                                        </Button>
                                </>
                        )}
                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                className="w-8"
                                alt="logo"
                            />
                            <span className="text-xl font-bold">Publisher</span>
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={'outline'} size={'icon'}>
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="/logo.png"
                                                className="w-8"
                                                alt="logo"
                                            />
                                            <span className="text-xl font-bold">Publisher</span>
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="my-8 flex flex-col gap-4">
                                    <a href="#" className="font-semibold">
                                        About
                                    </a>
                                    <a href="#" className="font-semibold">
                                        Contact
                                    </a>
                                    <hr></hr>
                                    {/* if user is login */}
                                    {user ? (
                                        <>
                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="products" className="border-b-0">
                                                <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                                                        Discover
                                                </AccordionTrigger>
                                                <AccordionContent className="mt-2">
                                                        {subMenuItemsOne.map((item, idx) => (
                                                        <a
                                                                key={idx}
                                                                className={cn(
                                                                'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                )}
                                                                href="#"
                                                        >
                                                                {item.icon}
                                                                <div>
                                                                <div className="text-sm font-semibold">
                                                                        {item.title}
                                                                </div>
                                                                <p className="text-sm leading-snug text-muted-foreground">
                                                                        {item.description}
                                                                </p>
                                                                </div>
                                                        </a>
                                                        ))}
                                                </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="resources" className="border-b-0">
                                                <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                                                        Resources
                                                </AccordionTrigger>
                                                <AccordionContent className="mt-2">
                                                        {subMenuItemsTwo.map((item, idx) => (
                                                        <a
                                                                key={idx}
                                                                className={cn(
                                                                'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                )}
                                                                href="#"
                                                        >
                                                                {item.icon}
                                                                <div>
                                                                <div className="text-sm font-semibold">
                                                                        {item.title}
                                                                </div>
                                                                <p className="text-sm leading-snug text-muted-foreground">
                                                                        {item.description}
                                                                </p>
                                                                </div>
                                                        </a>
                                                        ))}
                                                </AccordionContent>
                                                </AccordionItem>
                                        </Accordion>
                                            <a href="/dashboard" className="font-semibold">
                                                Dashboard
                                            </a>
                                            <Button onClick={handleLogout} className='font-bold' variant="outline">
                                                Logout <span className="mr-4 font-normal">@{user.email.split('@')[0]}</span>
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button variant="outline" onClick={() => router.push('/login')}>
                                                Login
                                            </Button>
                                            <Button variant="outline" onClick={() => router.push('/signup')}>
                                                Sign Up
                                            </Button>
                                        </>
                                    )}
                                </div>

                                {/* <div className="border-t pt-4">
                                    <div className="grid grid-cols-2 justify-start">
                                        <a
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'justify-start text-muted-foreground',
                                            )}
                                            href="#"
                                        >
                                            Press
                                        </a>
                                        <a
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'justify-start text-muted-foreground',
                                            )}
                                            href="#"
                                        >
                                            Contact
                                        </a>
                                        <a
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'justify-start text-muted-foreground',
                                            )}
                                            href="#"
                                        >
                                            Imprint
                                        </a>
                                        <a
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'justify-start text-muted-foreground',
                                            )}
                                            href="#"
                                        >
                                            Sitemap
                                        </a>
                                        <a
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'justify-start text-muted-foreground',
                                            )}
                                            href="#"
                                        >
                                            Legal
                                        </a>
                                        <a
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'justify-start text-muted-foreground',
                                            )}
                                            href="#"
                                        >
                                            Cookie Settings
                                        </a>
                                    </div>
                                </div> */}

                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Navbar;
