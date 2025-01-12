// в первой трети импорт из др файлов + работа с неизмен данными
import "./Lesson04.css"
import { useState } from "react";

function Lesson04() {
  //во второй трети - теле функции  мы работаем с измен данными
  //вызов функ, асинхронные запросы
  //вызов спец методов внутри реакт
  //код ниже сраюотал бы в обычном script.js  но не обнавляет данные на сранице реакт
  /* let count = 1;
  const handlePLus = () => {
    count++;
    console.log(count);  };*/
  //! иместо него мы исп функцию  useState()
  // в useState мы передаем начальное значение для переменной и в ответ получаем
  // массив из двух элементов : 1 перем состояния, 2 функции, которой мы эту переменную перезаписываем
  // для удобствп данные собираем из масива через деструктуризацию
  const [count, setCount] = useState(1);
  const handlePlus = () => {
    // с помощью функции прилагающейся к переменной изменяем ее добавив к предыдущему состоянию 1
    setCount((prev) => prev + 1);
  };
  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };
  //реализуем кнопку-переключатель для того чтобы прятать и показывать счетчик
  const [isVisible, setIsVisible] = useState(false);
  const handleSwitcher = () => {
    setIsVisible((prev) => !prev);
    
  };
  const [color, setColor] = useState("white");
  const handleRed = () => {
    setColor("Red");
  };
  const handleGreen = () => {
    setColor("Green");
  };
  const handleBlue = () => {
    setColor("Blue");
  };
  return (
    // * в последней трети - после return мы показываем верстку и отображаем данные в тегах
    <div>
      <h2>UseState() hook :haken:</h2>
      <p>
        Чтобы при изменении переменной, как в примере ниже мы видели результат и
        компонент обновился - не достаточно обычной переменной 🫤:
      </p>
      <p>
        Нужно использовать специальную переменную состояния из встроенной в
        React функции useState()
      </p>
      <div>
        <button onClick={handleSwitcher}>
          :⌛: {!isVisible ? "Show" : "Hide"} counter :⌛:
        </button>
      </div>
      {/* если в переменной isVisible будет true - отобрази данные после && (двойного амперсанда)  */}
      {isVisible && (
        <div className="counter" style={{backgroundColor:color}}>
          <button onClick={handleRed } className="Red">Red</button>
          <button onClick={handleGreen } className="Green">Green</button>
          <button onClick={handleBlue } className="Blue">Blue</button>
          <p>React Counter with useState hook:</p>
          <button onClick={handleMinus}>-</button>
          <span>{count}</span>
          <button onClick={handlePlus}>+</button>
        </div>
      )
      }
    </div>
  );
}

export default Lesson04;




// добавьте три кнопки 'red', 'green', 'blue'
// сделайте так чтобы по нажатию на разные кнопки менялся цвет counter контейнера




