import CryptoJS from "crypto-js";

export const encrypt = () => {
  const inputText = document.querySelector("#text") as HTMLInputElement;
  let text = inputText.value;

  const inputKey = document.querySelector("#key") as HTMLInputElement;
  let key = inputKey.value;

  if (!text || !key) {
    alert("Both fields must be completed");
  } else {
    const outputText = document.querySelector(
      ".output-text"
    ) as HTMLTextAreaElement;
    outputText.innerHTML = CryptoJS.AES.encrypt(text, key).toString();
  }
};
