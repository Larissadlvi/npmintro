const axios = require('axios');
//ver como hacer el post en axios: axios.post(url localhost,newuser = params)
async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      }
      //const res =await axios.post('http://localhost:3000/users', params)
      //let res = await ;

    console.log(res.data);
}

makePostRequest();
