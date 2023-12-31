//To concate the path for the public folder
export const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

export const setupAxios = (axios, store) => {
  axios.interceptors.request.use(
    (req) => {
      const {
        auth: { userData },
      } = store.getState();

      if (!userData && userData.isLogged) {
        req.headers["Authorization"] = `Bearer ${userData.isLogged}`;
        console.log("req.headers: ", req.headers);
      } else {
        delete req.headers.common["Authorization"];
      }

      return req;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(null, (err) => {
    if (err.response) {
      if (err.response.status === 403) {
        store.dispatch({ type: "login/fail" });

        return Promise.reject(err);
      } else return Promise.reject(err);
    } else if (err.request) {
      return Promise.reject({
        response: {
          data: {
            message: "Something went wrong, Please try again later!!!",
          },
        },
      });
    }
  });
};
