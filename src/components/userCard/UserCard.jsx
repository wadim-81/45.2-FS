import MyButton from "../myButton/MyButton";

// eslint-disable-next-line no-unused-vars
function UserCard({name,age,lastname}) {

   
const handleClick =() => {
    alert(`Hello,${name}!`)
}


    return(
        <div>
            <p> Name:{name}</p>
            <p> Age:{age}</p>
            <p> Lastname:{lastname}</p>
            <MyButton func={handleClick}text={`Chose ${name}`}/>
        </div>
    )
}
export default UserCard;