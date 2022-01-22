const axios = require('axios');

async function makeGetRequest() {
  
  // let res = await ;
  const res =await axios.get('http://localhost:3000/users')   
  //console.log(res)   


  let data = res.data;
  console.log(data);
}

makeGetRequest();
