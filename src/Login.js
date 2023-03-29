import API from "./API";


async function componentDidMount(email,id) {
      // Load async data.
      let userData = await API.get('/login', {
       params: 
       {"email": email,
       "id":id
       }
     });
     localStorage.setItem('token', userData.data);
 }

export default componentDidMount;