import "./MainHtml.css";

export const Main = () => {
  const app = document.querySelector("#app") as HTMLDivElement;

  const main = document.createElement("main") as HTMLElement;

  const inputsDiv = document.createElement("div") as HTMLDivElement;
  inputsDiv.classList.add("inputs-div");

  const buttonsDiv = document.createElement("div") as HTMLDivElement;
  buttonsDiv.classList.add("buttons-div");

  const errorDiv = document.createElement("div") as HTMLDivElement;
  errorDiv.classList.add("error-div");

  const outputDiv = document.createElement("div") as HTMLDivElement;
  outputDiv.classList.add("output-div");

  main.appendChild(inputsDiv);
  main.appendChild(buttonsDiv);
  main.appendChild(errorDiv);
  main.appendChild(outputDiv);
  app.appendChild(main);
};
