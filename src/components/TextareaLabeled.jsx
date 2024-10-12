export default function TextareaLabeled(props) {
  const { label, classList = "", name = "", id = "" } = props;

  return (
    <>
      <div class="form-control  relative w-full mt-8">
        <textarea required=""></textarea>
        <label>
          {Array.from(label).map((char, index) => (
            <span style={{ "transition-delay": `${index * 40}ms` }} key={index}>
              {char}
            </span>
          ))}
          {/* <span style="transition-delay:0ms">M</span>
          <span style="transition-delay:50ms">e</span>
          <span style="transition-delay:100ms">s</span>
          <span style="transition-delay:150ms">s</span>
          <span style="transition-delay:200ms">a</span>
          <span style="transition-delay:250ms">g</span>
          <span style="transition-delay:300ms">e</span> */}
        </label>
      </div>
    </>
  );
}
