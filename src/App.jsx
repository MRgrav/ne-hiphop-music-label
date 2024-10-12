import { Router, Route } from "@solidjs/router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Home from "./pages/Home";
import WallVideo1 from "../src/assets/background_clip_1.mp4";
import WallVideo2 from "../src/assets/background_clip_2.mp4";
import WallVideo3 from "../src/assets/blackPanther_wall.mp4";
import { createSignal } from "solid-js";
import MusicSubmission from "./pages/MusicSubmission";
import Footer from "./components/Footer";
import { Client } from 'appwrite';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const videoArray = [WallVideo1, WallVideo2, WallVideo3];

  const randomInt = getRandomInt(0, 2);

  const [videoPath, setVideoPath] = createSignal(videoArray[randomInt]);

  return (
    <>
        <video class="video-background top-0" autoplay muted loop>
          <source src={videoPath()} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="relative h-auto border-4 border-t-0 border-zinc-950 bg-transparent">
          
          <Navbar />
          <main class="h-auto">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/music" component={MusicSubmission} />
          </Router>
          </main>
        </div>
        <section>{/* <Footer /> */}</section>
        <Footer />
      
    </>
  );
}

export default App;
