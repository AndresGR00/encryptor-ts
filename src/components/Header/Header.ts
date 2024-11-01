import "./Header.css";

export const Header = () => {
  const app = document.querySelector("#app") as HTMLDivElement;
  const header = document.createElement("header") as HTMLHeadingElement;
  const title = document.createElement("h1") as HTMLHeadingElement;
  title.innerText = "Encrypt What You Want";
  header.appendChild(title);
  app.appendChild(header);
};
