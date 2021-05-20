import axios from "axios"

const API = process.env.API_URL

function getItems(query:string) {
  return axios.get(`${API}/sites/MLA/search?q=​:${query}`)
}

export default getItems