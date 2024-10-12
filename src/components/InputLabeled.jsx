import { createSignal, Show } from "solid-js";

export default function InputLabeled(props) {
  // Destructure the label from props
  const {
    label,
    classList = "",
    name = "",
    id = "",
    type = "",
    onChange
  } = props;
  const [value, setValue] = createSignal('');

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const [isEmail, setIsEmail] = createSignal(false);
  const [errorMessage, setErrorMessage] = createSignal('');
  // add validation
  if (type === "email") {
    //check email
  }


  return (
    <div class={`form-control ${classList} relative w-full mb-7 mt-2`}>
      <input
        class="bg-black"
        type={"text"}
        name={name}
        id={id}
        autocomplete="off"
        required
        value={value()}
        onChange={handleChange}
      />
      <label>
        {Array.from(label).map((char, index) => (
          <span style={{ "transition-delay": `${index * 40}ms` }} key={index}>
            {char}
          </span>
        ))}
      </label>
      <Show when={isEmail()}>
      <div class="text-red-400 tracking-widest bg-red-500 bg-opacity-25 w-full px-3" >
        <small>{errorMessage()}</small>
      </div>
      </Show>
    </div>
  );
}
