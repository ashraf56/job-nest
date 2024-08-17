
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <header className="flex h-14 w-full shrink-0 bg-slate-300 items-center px-4 md:px-6 ">
            <Link href={'/'} className="mr-6 flex">
                <div className="flex flex-row items-center justify-center gap-2 ">
                    <p className=" font-CustomFont font-extrabold uppercase text-2xl tracking-widest">NEST</p>
                </div>

            </Link>
            <nav className="ml-auto hidden lg:flex gap-6 ">
                <Button variant={'ghost'} size={"default"} className="uppercase hover:bg-transparent" >
                    <Link href={'/'}
                    >
                        Home
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent"  >
                    <Link href={'/'}
                    >
                        About us
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent" >
                    <Link href={'/'}
                    >
                        ALL Products
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent" >
                    <Link href={'/'}
                    >
                        Products Management
                    </Link>
                </Button>



            </nav>
        


            {/* this code   for mobile and tablet device */}
            <Sheet>
                <SheetTrigger asChild >
                    <Button variant="outline" className="block lg:hidden ml-auto">
                     menu
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <nav className="ml-auto flex flex-col gap-6 mt-5">
                                <Button variant={'outline'} size={"default"} >
                                    <Link href={'/'}
                                    >
                                        Home
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link href={'/'}
                                    >
                                        About us
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link href={'/'}
                                    >
                                        ALL Products
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link href={'/'}
                                    >
                                        Products Management
                                    </Link>
                                </Button>



                            </nav>
                            
                        </SheetDescription>
                    </SheetHeader>

                </SheetContent>
            </Sheet>


        </header>
        </div>
    );
};

export default Navbar;