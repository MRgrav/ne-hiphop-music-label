import InputLabeled from "../components/InputLabeled";
import TextareaLabeled from "../components/TextareaLabeled";
import InputFileLabeled from "../components/InputFileLabeled";
import Button from "../components/Button";
import { createSignal, Show } from "solid-js";
import { account, databases, bucket } from "../appwrite/appwriteConfig";
import MessagePOP from "../components/MessagePOP";
import { ID } from "appwrite";
import Loader from "../components/Loader";
import Uploader from "../components/Uploader";

// Function to determine if the user is a guest (replace with your logic)
const isGuest = () => {
    // Check if user is logged in or not
    // You might use a separate state variable or access user data
    return true; // Replace with actual logic
};

export default function MusicSubmission() {
    const [title, setTitle] = createSignal();
    const [audioFile, setAudioFile] = createSignal(null);
    const [songURL, setSongURL] = createSignal(null);
    const [artistName, setArtistName] = createSignal();
    const [email, setEmail] = createSignal("");
    const [phoneNumber, setPhoneNumber] = createSignal();
    const [address, setAddress] = createSignal();
    const [description, setDescription] = createSignal();
    const [fileSizeError, setFileSizeError] = createSignal(false);
    const [isGuest, setIsGuest] = createSignal(true);
    const [isFile, setIsFile] = createSignal(true);
    const [isUploading, setIsUploading] = createSignal(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsUploading(true);
        console.log("submitting");

        if (audioFile && audioFile.size > 40 * 1024 * 1024) {
            setFileSizeError(true);
            console.log(fileSizeError());
            return;
        }

        let musicData, fileUpload = null;

        try {
            // Upload the audio file to Appwrite Storage
            if (isFile()) {
                fileUpload = await bucket.createFile(
                    import.meta.env.VITE_BUCKET,
                    ID.unique(),
                    audioFile()
                );
            }

            // Prepare music data
            if (isGuest()) {
                musicData = {
                    song_title: title(),
                    song_url: songURL() || null,
                    song_id: isFile() ? fileUpload?.$id : null,
                    description: description() || null,
                    artist_name: artistName(),
                    phone: phoneNumber(),
                    email: email(),
                    address: address()
                };
            } else {
                musicData = {
                    song_title: title(),
                    song_url: songURL() || null,
                    song_id: null,
                    description: description() || null,
                    artist_id: null,
                };
            }

            // await databases.createDocument(import.meta.env.VITE_MUSIC_COLLECTION, title, musicData);

            const response = await databases.createDocument(
                import.meta.env.VITE_DATABASE,
                import.meta.env.VITE_MUSIC_COLLECTION,
                ID.unique(),
                musicData
            );

            // Handle successful submission
            console.log("Music demo submitted successfully!");
        } catch (error) {
            console.error("Error submitting music demo:", error);
        }
        setIsUploading(false);
    };

    return (
        <>
            <Uploader status={isUploading()} />
            <MessagePOP message="" status=""/>
            <div class="mx-auto py-4 px-4 max-w-xl min-h-900px h-auto top-0">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="flex relative z-10 rounded-lg border-2 border-zinc-800 bg-zinc-950 px-4 my-2 pt-2">
                    <p class="text-red-500 text-4xl font-semibold ps-4 font-mono">
                        Demo Music Form
                    </p>
                    <Show when={isGuest()}>
                        <span class="pb-1 px-3 text-sm rounded-2xl shadow-md bg-indigo-950 text-white h-fit ms-auto me-0 -mt-4 animate-bounce">
                            Guest
                        </span>
                    </Show>
                </div>
                <div class="relative z-10">
                    <form
                        action=""
                        class="gap-4 rounded-lg border-2 border-zinc-800 bg-zinc-950 p-4 pb-6 md:p-10 md:pt-4"
                        onSubmit={handleSubmit}
                    >
                        <div class="flex space-x-2 w-fit mt-2" >
                                <label class="radio flex flex-grow items-center justify-center rounded-lg cursor-pointer">
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="html"
                                        class="peer hidden"
                                        checked={isFile()}
                                        onChange={() => setIsFile(true)}
                                    />
                                    <span class="text-sm tracking-widest peer-checked:bg-zinc-700 peer-checked:font-semibold peer-checked:px-4 peer-checked:text-white text-zinc-500 p-1 px-2 rounded-t-md transition duration-200 ease-in-out">
                                        File
                                    </span>
                                </label>

                                <label class="radio flex flex-grow items-center justify-center rounded-lg cursor-pointer">
                                    <input type="radio" name="radio" value="react" checked={!isFile()}
                                    onChange={() => setIsFile(false)} class="peer hidden" />
                                    <span class="text-sm tracking-widest peer-checked:bg-zinc-700 peer-checked:font-semibold peer-checked:px-4 peer-checked:text-white text-zinc-500 p-1 px-2 rounded-t-md transition duration-200 ease-in-out">
                                        URL
                                    </span>
                                </label>
                            </div>
                        <div class="border border-zinc-700 shadow px-3 pt-2 rounded-b-lg mb-6">
                            <Show when={isFile()}>
                                <InputFileLabeled
                                    label="Song File"
                                    onChange={(file) => {
                                        setAudioFile(file);
                                        console.log(audioFile());
                                    }}
                                />
                                <Show when={fileSizeError()}>
                                    <div class="text-red-500">File size cannot exceed 40 MB.</div>
                                </Show>
                            </Show>
                            <Show when={!isFile()}>
                                <InputLabeled
                                    label={"Song's URL"}
                                    name="url"
                                    required="false"
                                    onChange={setSongURL}
                                />
                            </Show>
                        </div>
                        <InputLabeled
                            label={"Song Title"}
                            name="song"
                            onChange={setTitle}
                        />
                        <Show when={isGuest()}>
                            <InputLabeled
                                label={"Artist's Name"}
                                name="artist"
                                onChange={setArtistName}
                            />
                            <InputLabeled
                                label={"Email ID"}
                                name="email"
                                type="email"
                                onChange={setEmail}
                            />
                            <InputLabeled
                                label={"Contact Number"}
                                name="phone"
                                type="tel"
                                onChange={setPhoneNumber}
                            />
                            <InputLabeled
                                label={"Address"}
                                name="address"
                                onChange={setAddress}
                            />
                        </Show>
                        <TextareaLabeled
                            label={"Description"}
                            name="description"
                            onChange={setDescription}
                            max={300}
                        />
                        <div class="flex justify-between pt-4">
                            <Button
                                classList="bg-orange-500 hover:bg-gradient-to-tr from-orange-500 to-red-700 text-white"
                                type="button"
                            >
                                <a href="/">Cancel</a>
                            </Button>
                            <Button
                                classList="bg-green-500 hover:bg-gradient-to-br from-green-500 to-blue-700 text-white"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
                <div class="relative z-10 flex justify-end rounded-lg border-2 border-zinc-800 bg-zinc-950 py-2 px-6 mt-2 mb-14">
                    <div class="py-2 px-4 text-blue-600 tracking-wider text-center w-full">
                        <a href="">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </>
    );
}
