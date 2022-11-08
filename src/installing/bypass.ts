declare const $: (arg: string) => any;

const bypass = () => {
  setInterval(() => $("#answer").off("paste"), 1000);
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
