import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content, id) => {
    const object = { content, id, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

const addVote = async (id) => {
    const anecdoteObject = await axios.get(baseUrl+"/"+id)
    const newVoteCount = anecdoteObject.data.votes + 1
    const object = {
      content: anecdoteObject.data.content, 
      votes: newVoteCount }
    const response = await axios.put(baseUrl+"/"+id, object)
    return response.data
  }

export default {
    getAll,
    createNew,
    addVote
}