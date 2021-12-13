const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = async (endpoint, data, method = "GET") => {
  try {
    const url = `${baseUrl}${endpoint}`;
    if (method === "GET") {
      const resp = await fetch(url);
      return await resp.json();
    } else {
      //puede ser put, patch o post
      const resp = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchConToken = async (endpoint, data, method = "GET") => {
  try {
    const token = localStorage.getItem("token") || "";
    const url = `${baseUrl}${endpoint}`;
    if (method === "GET") {
      const resp = await fetch(url, {
        headers: {
          "x-token": token,
        },
      });
      return await resp.json();
    } else {
      //puede ser put, patch o post
      const resp = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(data),
      });

      return await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
};
