import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";
import "./lesson01.css";

function Lesson01() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="ViteLogo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo
                    react"
            alt="React Logo"
          />
        </a>
      </div>

      <h1> Привет это реакт🏴‍☠️ </h1>
      <p className="read-the-docs"> Этот проэкт создан на сборщике Vite 👨‍💻 </p>
    </>
  );
}
export default Lesson01;
