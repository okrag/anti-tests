declare const UNDEFINED: ReferenceError;

const bypass = () => {
  Object.defineProperty(document, "hasFocus", {
    get: () => UNDEFINED,
  });
  window.addEventListener("error", () => true);
};

export const createScript = () => {
  const bypassString = bypass.toString();
  const scriptContent = bypassString.slice(
    bypassString.indexOf("{") + 1,
    bypassString.lastIndexOf("}"),
  );

  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.innerHTML = scriptContent;
  document.body.appendChild(script);
};
