import { A } from "@solidjs/router";

export default function Link(props) {
  return (
      <li class="hover:border-b-2 border-white hover:scale-95">
        <a href={props.path}>{props.children}</a>
      </li>
  );
}
