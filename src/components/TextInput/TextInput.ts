import "./TextInput.css";

export const TextInput = (field: string, id: string, inputType: string) => {
  const containerDiv = document.querySelector(".inputs-div") as HTMLDivElement;

  const inputDiv = document.createElement("div") as HTMLDivElement;
  inputDiv.classList.add("input-div");

  const input = document.createElement(`${inputType}`) as HTMLInputElement;
  input.placeholder = `${field}`;
  input.id = `${id}`;

  if (input.id === "key") {
    input.type = "password";
  }

  inputDiv.append(input);
  containerDiv.append(inputDiv);
};
