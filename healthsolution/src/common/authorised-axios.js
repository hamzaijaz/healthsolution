import axios from "axios";

const AuthorisedClient = () => {
  const defaultOptions = {
    baseURL: "https://dfevents20200129060749.azurewebsites.net/api", //"http://localhost:7071/api",
    method: "get, post",

    headers: {
      "Access-Control-Allow-Origin":
        "*, http://localhost:7071, http://localhost:7071/api, https://dfevents20200129060749.azurewebsites.net/api",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization",
      "X-API-KEY": "841ieqv12oj4txb8nxmoimplxqn2irx1s62wrk6o"
    }
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instance;
};

export default AuthorisedClient();
