// import { createSignal } from "solid-js";
// import MusicSvg from "../assets/upload-file.gif";

// export default function InputFileLabeled(props) {
//   const [fileName, setFileName] = createSignal("Select a file ...");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFileName(file ? file.name : "");
//   };
//   return (
//     <div class="relative w-full mb-4 mt-2 bg-zinc-300 p-4">
//       <input
//         class="hidden "
//         type="file"
//         name=""
//         id="file"
//         onChange={handleFileChange}
//       />
//       <label htmlFor="file" class="flex text-black  align-middle mx-auto">
//         <div class="me-6 border-2 rounded bg-red-800 shadow">
//           <img src={MusicSvg} alt="" width={70} />
//         </div>
//         <p class="my-auto font-semibold font-snas text-xl">{fileName()}</p>
//       </label>
//     </div>
//   );
// }

import { createSignal, Show } from "solid-js";
import MusicSvg from "../assets/upload-file.gif";

export default function InputFileLabeled(props) {
  const { label = "Song File", onChange } = props; // Set default label

  const [fileName, setFileName] = createSignal("Select a file ...");
  const [audioFile, setAudioFile] = createSignal(null); // Store the actual file
  const [fileSizeError, setFileSizeError] = createSignal(false); // Optional flag

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      // Handle no file selected case (optional)
      return;
    }

    // Check file size only if file is selected
    if (file.size > 40 * 1024 * 1024) {
      setFileSizeError(true);
      return;
    }

    setAudioFile(file);
    setFileName(file.name);
    setFileSizeError(false);

    // Call the parent component's onChange handler if provided
    if (onChange) {
      onChange(file); // Pass the actual file object
    }
  };

  return (
    <div class="relative w-full mb-4 mt-2 bg-zinc-500 p-4">
      <input
        class="hidden "
        type="file"
        name=""
        id="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file" class="flex text-black  align-middle mx-auto">
        <div class="me-6">
          <img src={MusicSvg} alt="" width={70} height={70} class="min-w-14 rounded-md shadow-lg"/>
        </div>
        <p class="my-auto font-semibold font-snas text-lg">
          {fileName()}
        </p>
      </label>
      <Show when={fileSizeError()} >
            <span class="text-sm tracking-wider text-red-500 bg-yellow-300 px-4">File size cannot exceed 40 MB.</span>
          </Show>
    </div>
  );
}
