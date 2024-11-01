import { Button } from "./components/Button/Button";
import { Main } from "./components/MainHtml/MainHtml";
import { Result } from "./components/Result/Result";
import { TextInput } from "./components/TextInput/TextInput";
import "./style.css";
import { decrypt } from "./utils/decrypt";
import { encrypt } from "./utils/encrypt";

const printMain = () => {
  Main();
  TextInput("Text to encrypt/decrypt", "text", "textarea");
  TextInput("Key", "key", "input");
  Button("encrypt", encrypt);
  Button("decrypt", decrypt);
  Result();
};

printMain();
