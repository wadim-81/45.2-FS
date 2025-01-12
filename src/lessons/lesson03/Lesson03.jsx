import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";
import Lesson04 from "../lesson04/Leson04";
function Lesson03() {
  return (
    <div>
      <h2> React Props children 💥👨‍👩‍👧‍👦 </h2>
      <p>
        Props ильзуется для передачи данных от родительских компонентов к
        дочерним компонентам. Это один из основных механизмов передачи данных в
        React
      </p>
      {/* <MyButton />
      <MyButton />
      <MyButton /> */}
      <UserCard name={'Bilbo'} age={45}lastname={'Baggins'}/>
      <UserCard name={'Gendolf '} age={450}lastname={'White'}/>
    </div>
  );
}
export default Lesson03;
