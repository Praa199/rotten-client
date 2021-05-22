export const ACCESS_TOKEN = "accessToken";

// REACT_APP_SERVER_URL

const URL = process.env.REACT_APP_SERVER_URL;

export const SERVER_URL = URL ? `${URL}/api` : `http://localhost:5000/api`;
