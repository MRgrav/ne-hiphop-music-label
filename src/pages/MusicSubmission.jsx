import InputLabeled from "../components/InputLabeled";

export default function MusicSubmission() {
  return (
    <>
        <div class="mx-auto py-10 px-4 max-w-lg min-h-900px h-svh top-0">
            <div class="absolute inset-0 bg-black opacity-50"></div>  
            <div class="relative z-10 rounded-lg border-2 border-zinc-800 bg-zinc-950 p-4 my-4">
              <p class="text-red-500 text-2xl font-semibold ps-4 ">Form</p>
            </div>
            <div class="relative z-10">
                <form action="" class="gap-4 rounded-lg border-2 border-zinc-800 bg-zinc-950 p-4 pb-6 md:p-10 md:pt-4">
                    <InputLabeled label={"Artist's Name"}  name="artist"/>
                    <InputLabeled label={"Song's Name"} name="song"/>
                    <InputLabeled label={"Email Address"} name="email" type="email" />
                    <InputLabeled label={"Artist's Name"}  name="artist"/>
                    <InputLabeled label={"Song's Name"} name="song"/>
                    <InputLabeled label={"Song's Name"} name="song"/>
                    <InputLabeled label={"Email Address"} name="email" type="email" />
                </form>
            </div>
            <div class="relative z-10 flex justify-end rounded-lg border-2 border-zinc-800 bg-zinc-950 p-4 my-4">
              <button class="px-6 py-2 bg-gradient-to-bl hover:scale-95 border-red-900 hover:bg-gradient-to-b from-red-700 to-violet-700 text-xl font-semibold text-white rounded-md shadow-lg shadow-black" >Submit</button>
            </div>
        </div>
    </>
  )
}
