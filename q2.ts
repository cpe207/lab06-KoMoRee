// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{
    let todoRespond = await axios.get("https://jsonplaceholder.typicode.com/todos/"+todoId);
    let ownerRespond = await axios.get("https://jsonplaceholder.typicode.com/users/"+todoRespond.data.userId);

    const result = {
      owner:  ownerRespond.data.name,
      title: todoRespond.data.title,
      completed:  todoRespond.data.completed
    }

    return  await result;

  } catch(err){
    return  await "INVALID TODO ID";
  }
  
  

};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));


export default getTodo;
