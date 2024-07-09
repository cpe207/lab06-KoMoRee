// const axios = require("axios");
import axios from "axios";


const getUser = async (userId: number) => {
  
  try{
    let respond = await axios.get("https://jsonplaceholder.typicode.com/users/"+userId);
    let user =  respond.data.name;
    return user;
  } catch(err){
    return await "INVALID USER ID";
  }
  
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;
