import Link from "./Link";
import MenuButton from "./MenuButton";

export default function Navbar () {
    return (
        <>
            <header class="top-0 z-40 sticky border-t-4 border-zinc-950 p-1 backdrop-blur-md">
                <div class="flex mx-auto content-between bg-opcaity-0">
                    <div class="text-xl md:text-2xl lg:text-3xl px-4 md:px-10 py-3 md:py-6 rounded-br-lg bg-zinc-950 me-auto">
                        <p class="bg-clip-text font-black tracking-wide text-transparent bg-gradient-to-r hover:bg-gradient-to-tr from-pink-700 to-violet-600">
                            GamusaDev
                        </p>
                    </div>
                    <ul class="md:flex gap-x-6 px-10 py-8 text-white hidden">
                        <Link path="/" >Home</Link>
                        <Link path="/music" >Submit</Link>
                    </ul>
                    <div class="pe-4 py-2 md:py-6 md:hidden scale-75">
                        <MenuButton />
                    </div>
                </div>
                <div class="bg-gradient-to-r from-zinc-950 to-red-950 p-4 mt-2 md:hidden">
                    <ul class="text-white text-right">
                        <li class="py-2 hover:pe-5 hover:border-2 hover:border-l-0 rounded-e-md">Home</li>
                        <li class="py-2 hover:pe-5 hover:border-2 hover:border-l-0 rounded-e-md">Contacts</li>
                        <li class="py-2 hover:pe-5 hover:border-2 hover:border-l-0 rounded-e-md">About</li>
                    </ul>
                </div>
            </header>
        </>
    )
}