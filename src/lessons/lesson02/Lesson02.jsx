import MyButton from "../../components/myButton/MyButton";

function Lesson02() {
  const element = <h4> это JSX из переменной element! </h4>;
  const text = " эта строка пришла из переменной текст";

  const react = {
    devoloper: "Facebook",

    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };
  function showDevoloper(obj) {
    if (obj.devoloper) {
      return "Devoloper:" + obj.devoloper;
    }
   
    return "передайте валидный обьект";

    //переменная для тернарного оператора 
  }
  const isLoggedIn = true;

  return (
  <div>
    <p>
      В JSX мы можем пользоваться динамическими данными, которые приходят из
      тела react компонента или других файлов:
    </p>
    {element}
    <h2> JSX components 💥 </h2>
    <p> здесь будет строка ;{text}</p>
    <p>здесь можно писать задачи {20 + 22} </p>
    {/* если true будет картинка тернарный оператор */}
     {isLoggedIn ? (<img width={"90px"} src={react.logo} alt="react.logo" />) : ""} 
    
    <p>react devoloper: {react.developer}</p>

    <p> {showDevoloper(react)} </p>
  const element = <h4>пример тернарного оператора </h4>;
<p>
    пользователь <b>{ isLoggedIn ? "в данный момент" : "не" }  авторизирован</b>
    </p>
<p></p>

<MyButton/>
<MyButton/>
<MyButton/>

  </div>
  );
}

export default Lesson02;
