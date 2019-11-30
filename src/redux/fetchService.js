class Service {
  constructor() {
    this.token = "";
  }

  setToken = token => {
    this.token = token;
    localStorage.setItem("token", token);
  };

  getToken = () => {
    const token = localStorage.getItem("token");
    this.token = token;
  };

  fetchMyApi = async config => {
    const URL = "http://127.0.0.1:5000" + config.path;

    const response = await fetch(URL, {
      method: config.method,
      headers: config.body
        ? {
            "Content-Type": "application/json"
          }
        : {},
      body: JSON.stringify(config.body)
    });

    if (parseInt(response.status / 100, 10) === 2) {
      return response;
    } else {
      const ERROR_TEXT = await response.text();
      throw new Error(ERROR_TEXT);
    }
  };

  fetchAnimeApi = async config => {
    const URL = config.absoluteURL || "https://kitsu.io/api/edge" + config.path;

    const response = await fetch(URL, {
      method: config.method,
      headers: config.body
        ? {
            "Content-Type": "application/json"
          }
        : {},
      body: JSON.stringify(config.body)
    });

    if (parseInt(response.status / 100, 10) === 2) {
      return response;
    } else {
      const ERROR_TEXT = await response.text();
      throw new Error(ERROR_TEXT);
    }
  };
}

export default new Service();
