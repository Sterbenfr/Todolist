import API from "./API";


async function add(Task,key) {
      // Load async data.
      let userData = await API.post('/api/posts/set', {
       params: 
       {"Task": Task,
       "key":key
       }
     });
 }

export default add;