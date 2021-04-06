import axios from 'axios'

const DataBase = axios.create({
    baseURL: 'https://zoomxdb.herokuapp.com'
})

export default DataBase
