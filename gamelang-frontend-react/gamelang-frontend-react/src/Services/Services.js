import axios from 'axios'

const REST_API_URL = 'http://localhost:3000/words'

export const addWord = (word) => axios.post(REST_API_URL + '/add-word',word)
export const getWords = (language) => axios.get(REST_API_URL + '/language/' + language)
export const deleteWord = (wordId) => axios.delete(REST_API_URL + '/' + wordId)
export const getWordById = (wordId) => axios.get(REST_API_URL + '/' + wordId)
export const updateWord = (wordId, word) => axios.patch(REST_API_URL + '/' + wordId , word)
export const getWordsByDate = (date) => axios.get(REST_API_URL + '/date/' + date)



