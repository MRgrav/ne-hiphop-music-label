export default function InputLabeled(props) {
    // Destructure the label from props
    const { label, classList = "", name = "", id = "", type="" } = props;

    // add validation
  
    return (
      <div class={`form-control ${classList} relative w-full mt-8`}>
        <input class="bg-black" type={"text"} name={name} id={id} required autocomplete="off" />
        <label>
          {Array.from(label).map((char, index) => (
            <span style={{  "transition-delay": `${index * 40}ms`, }} key={index}>
              {char}
            </span>
          ))}
        </label>
      </div>
    );
}
  