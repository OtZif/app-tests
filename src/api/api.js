import axios from "axios";

const api = "http://localhost:3000";

export const fetchTests = () =>
  axios.get(`${api}/tests`).then(result => console.log(result.data))



export function* getFromServ() {
  const response = yield axios.get(`${api}/tests`);
  const data = yield response.data;
  return data;
}

export const postToServ = (id, performer, album, genre, label) => {
  axios
    .post("http://localhost:3000/items", {
      id: id,
      performer: performer,
      album: album,
      genre: genre,
      label: label
    })
    .then(res => console.log("Сработал POST", res));
};

export const editFieldServ = (id, performer, album, genre, label) => {
  axios
    .put(`http://localhost:3000/items/${id}`, {
      id,
      performer,
      album,
      genre,
      label
    })
    .then(res => console.log("Сработал PUT", res))
};

export const delFromServ = id => {
  axios
    .delete(`http://localhost:3000/items/${id}`)
    .then(res => console.log("Сработал DELETE", res));
};