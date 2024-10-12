import { Motion, Presence } from "@motionone/solid";
import { A } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";

export default function Home() {
  const [isButtonClicked, setIsButtonClicked] = createSignal(false);

  const handleSubmit = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 2000); // Reset after 2 seconds
  };

  const [isLogoAnimated, setIsLogoAnimated] = createSignal(false);

  createEffect(() => {
    // Trigger logo animation after a short delay
    setTimeout(() => setIsLogoAnimated(true), 500);
  });

  //   return (
  //     <>
  //         <div class="mx-auto container py-10 px-4">
  //             <div>

  //             </div>
  //         </div>
  //     </>
  //   )

  return (
    <>
      <section
        id="home"
        class="relative flex items-center justify-center overflow-hidden h-dvh cursor-crosshair"
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 text-center animate-fade-in-up text-white">
          <h1 class="text-6xl md:text-8xl font-bold mb-4">East Hill Records</h1>
          <p class="text-xl md:text-2xl mb-8">Where Beats Meet the Streets</p>
          <div class="mt-20 relative">
          <A href="/music" class="go-button cursor-none">Get Started</A>
          </div>
        </div>
      </section>
      <section>
        <div class="relative w-full -mt-24 bg-zinc-950 z-40">
          <form action="" class="mx-auto max-w-2xl w-full py-8">
            <div class="flex p-4">
              <div class="flex-grow">
                <input
                  class="p-2 px-4 md:p-4 rounded-md hover:rounded-lg w-full bg-zinc-800 outline-0 tracking-wider text-red-400"
                  type="email"
                  name=""
                  id=""
                  placeholder="your email address"
                />
              </div>
              <div class="ps-2 md:ps-6">
                <button class="bg-red-600 text-white font-bold rounded-lg shadow px-4 md:px-6 py-2 md:py-4 hover:bg-red-700 border-0 focus:scale-90">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );

  return (
    <div
      style={{
        "background-image":
          "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        "background-size": "cover",
        "background-position": "center",
        height: "100vh",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      }}
    >
      <Motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, easing: "ease-out" }}
      >
        <button
          onClick={handleSubmit}
          style={{
            "background-color": "#ff4136",
            color: "white",
            border: "none",
            padding: "15px 30px",
            "font-size": "18px",
            "border-radius": "5px",
            cursor: "pointer",
            "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Submit
        </button>
      </Motion.div>

      <Presence>
        {isButtonClicked() && (
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "20px",
              "background-color": "#2ecc40",
              color: "white",
              padding: "10px 20px",
              "border-radius": "5px",
            }}
          >
            Submitted Successfully!
          </Motion.div>
        )}
      </Presence>

      <Motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          easing: "ease-in-out",
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          "background-color": "#ff4136",
          "border-radius": "50%",
        }}
      />
    </div>
  );
}
