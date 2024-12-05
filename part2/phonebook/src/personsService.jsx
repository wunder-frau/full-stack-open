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

const update =(persons, updatedObj)=> {
  {console.log('4', persons.id)}
  {console.log('5', updatedObj)}
  return axios.put(`${baseUrl}/${persons.id}`, updatedObj).then(response => response.data)
}

export default {
  getAll,
  create,
  remove,
  update,
};
