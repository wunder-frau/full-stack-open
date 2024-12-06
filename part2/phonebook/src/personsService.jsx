import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(response => response.data);
};

const remove =(id)=> {
  return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

const update =(id, updatedObj)=> {
  {console.log('4', id)}
  {console.log('5', updatedObj)}
  return axios.put(`${baseUrl}/${id}`, updatedObj).then(response => response.data)
}

export default {
  getAll,
  create,
  remove,
  update,
};
