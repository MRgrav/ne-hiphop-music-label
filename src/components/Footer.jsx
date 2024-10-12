import Link from "./Link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <>
      <div class="relative flex flex-col">
        <div>
          <div class="bg-zinc-950 h-36 w-full"></div>
        </div>
        <div>
          <div class="bg-zinc-900 min-h-36 p-4">
            <div class="flex flex-col md:flex-row mx-auto w-9/12 shadow-2xl shadow-black -mt-36 p-4 py-8 bg-zinc-900 hover:rounded justify-around">
              <div class="max-w-96 min-w-40">
                <div class="border-b-4 border-red-600 w-20 mx-auto md:mx-0 mt-4 md:my-3"></div>
                <div class="text-white text-center md:text-left">
                  <p class="font-medium text-2xl">Sitemaps</p>
                  <ul class="text-zinc-300 gap-6 w-fit mt-2 mx-auto md:mx-0">
                    <Link path="/">Home</Link>
                    <Link path="/about">About</Link>
                    <Link path="/login">Admin</Link>
                    <Link path="/about">About</Link>
                  </ul>
                </div>
              </div>
              <div class="max-w-96 min-w-40">
                <div class="border-b-4 border-red-600 w-20 mx-auto md:mx-0 mt-4 md:my-3"></div>
                <div class="text-white text-center md:text-left">
                  <p class="font-medium text-2xl">Contacts</p>
                  <div class="mx-auto md:ms-0 md:me-auto">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="text-center pt-4 tracking-wider text-zinc-400">
                copy &copy; 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
