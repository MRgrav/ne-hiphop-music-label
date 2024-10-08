export default function MenuButton() {
  return (
    <>
      <input type="checkbox" id="menuButton" />
      <label for="menuButton" class="menuToggle">
        <div class="menuBars" id="menuBar1"></div>
        <div class="menuBars" id="menuBar2"></div>
        <div class="menuBars" id="menuBar3"></div>
      </label>
    </>
  );
}