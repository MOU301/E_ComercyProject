import axios from 'axios'
export async function getUser() {
      const response = await axios.get('http://localhost/study/rest_api/Syria/read.php');
      return response
  }
  