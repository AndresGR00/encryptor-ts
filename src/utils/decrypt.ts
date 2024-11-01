import CryptoJS from "crypto-js";

export const decrypt = () => {
  const inputText = document.querySelector("#text") as HTMLInputElement;
  const text = inputText.value;

  const inputKey = document.querySelector("#key") as HTMLInputElement;
  let key = inputKey.value;

  if (!text || !key) {
    alert("Both fields must be completed");
  } else {
    const outputText = document.querySelector(
      ".output-text"
    ) as HTMLTextAreaElement;

    const decryptedMessage = CryptoJS.AES.decrypt(text, key);
    const decryptedText = decryptedMessage.toString(CryptoJS.enc.Utf8);

    outputText.innerHTML = decryptedText;
  }
};
