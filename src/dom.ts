import { GET as works } from "./index";
const { GET: doesNotWork }: typeof import(".") = await import(
  "./index" + "?anything"
);

setInterval(async () => {
  document.body.innerHTML = await doesNotWork().text();
}, 250);
