import axios from 'axios';

const send = async <T>({method = '', path = '', data = {}} = {}) => {
  const commonUrl = String(JSON.parse('__myapp').env.BASE_URL);

  const url = commonUrl + path;

  const getToken = localStorage.getItem('authToken') || false;

  const headers = {
    'content-Type': 'application/json',
    'x-Auth-Token': getToken
  };

  const options = {
    method,
    url,
    headers,
    data
  };

  const response: {data: T} = await axios(options);

  return response.data;
};

const getApi = <T>({path = ''} = {}) => {
  return send<T>({method: 'GET', path});
};
const putApi = <T>({path = '', data = {}} = {}) => {
  return send<T>({method: 'PUT', path, data});
};
const postApi = <T>({path = '', data = {}} = {}) => {
  return send<T>({method: 'POST', path, data});
};
const delApi = <T>({path = '', data = {}} = {}) => {
  return send<T>({method: 'DELETE', path, data});
};

export {getApi, putApi, postApi, delApi};
