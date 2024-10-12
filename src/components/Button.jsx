export default function Button(props) {
    const { classList="", type="", children=""} = props;
  return (
    <>
        <button class={`px-6 py-2 rounded focus:scale-95 hover:scale-95 shadow font-sans font-semibold tracking-wider ${classList} `} type={type}>
            {children}
        </button>
    </>
  )
}
