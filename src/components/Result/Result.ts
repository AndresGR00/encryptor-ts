import "./Result.css";

export const Result = () => {
  const main = document.querySelector(".output-div") as HTMLDivElement;
  const outputDiv = document.createElement("div") as HTMLDivElement;
  outputDiv.classList.add("output-div");
  const output = document.createElement("p") as HTMLParagraphElement;
  output.classList.add("output-text");
  output.innerHTML = "Result";

  outputDiv.appendChild(output);
  main.appendChild(outputDiv);
};
