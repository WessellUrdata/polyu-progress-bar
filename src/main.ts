import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const app = mount(App, {
  // biome-ignore lint/style/noNonNullAssertion: This is provided by Svelte
  target: document.getElementById("app")!,
});

export default app;
