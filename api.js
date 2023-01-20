import axios from 'axios'

const base = axios.create({
  baseURL: "https://gym.switchdreams.com.br/api"
})

export default async function getUsers() {
  try {
    const response = await base.get('/users')
    return response
  } catch (error) {
    alert(error.toString())
  }
}