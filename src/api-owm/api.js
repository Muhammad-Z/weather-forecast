import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.params = {...config.params, appid: "aec112ac0df781f177b949f3e8e1b7b4"};
    //const token = TokenService.getLocalAccessToken();
  /*   if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      //config.headers["x-access-token"] = token; // for Node.js Express back-end
    } */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* instance.interceptors.response.use(
  (res) => {
    const originalConfig = res.config;

    //store token taken from signUp or signIn
    if ((originalConfig.url === "/auth/login"
      || originalConfig.url === "/auth/register")) {
       // TokenService.setUser(res.data)
    }
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/auth/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refreshToken: TokenService.getLocalRefreshToken(),
          });
          const { accessToken } = rs.data;
         // TokenService.updateLocalAccessToken(accessToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
); */
export default instance;