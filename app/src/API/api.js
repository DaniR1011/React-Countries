import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const API = axios.create({
  baseURL: "http://localhost:8080/countries",
  timeout: 6000,
  headers: APIHeaders,
});

export const getCountries = async () => {
  const { data } = await API.get();
  return data;
};

export const getCountry = async (id) => {
  const { data } = await API.get(`/${id}`);
  return data;
};

export const postCountry = async (item) => {
  const res = await API.post(API.baseURL, item);
  return res;
};