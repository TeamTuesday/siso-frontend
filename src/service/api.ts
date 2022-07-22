import axios from 'axios';

const send = async ({method = '', path = '', data = {}} = {}) => {
  const commonUrl = 'http://13.124.104.234:8080';

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

  const response: {data: Record<string, any>} = await axios(options);
  return response.data;
};

const getApi = ({path = ''} = {}) => {
  return send({method: 'GET', path});
};
const putApi = ({path = '', data = {}} = {}) => {
  return send({method: 'PUT', path, data});
};
const postApi = ({path = '', data = {}} = {}) => {
  return send({method: 'POST', path, data});
};
const delApi = ({path = '', data = {}} = {}) => {
  return send({method: 'DELETE', path, data});
};

export {getApi, putApi, postApi, delApi};
