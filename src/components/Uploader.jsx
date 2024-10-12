export default function Uploader(props) {
    return (
        <Show when={props.status}>
            <div class="absolute top-0 left-0 flex justify-center w-screen h-screen z-20 bg-black bg-opacity-75">
                <div class="uploader my-auto z-50">

                </div>
                <div>
                    <span class="text-white pt-3 animate-pulse">Uploading</span>
                </div>
            </div>
        </Show>
    )
}
