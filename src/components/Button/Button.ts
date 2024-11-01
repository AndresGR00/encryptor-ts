import "./Button.css";

export const Button = (name: string, action: () => void) => {
  const containerDiv = document.querySelector(".buttons-div") as HTMLDivElement;
  const button = document.createElement("button") as HTMLButtonElement;
  button.textContent = `${name}`;
  button.classList.add(name);
  button.addEventListener("click", action);

  containerDiv.appendChild(button);
};
