import qs from "qs";
import axios from "axios";

const CLIENT_ID = "YOUR_CLIENT_ID";
const ROOT_API = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_API}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },

  fetchImages(token) {
    return axios.get(`${ROOT_API}/3/account/me/images`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  upload(token, images) {
    const promises = images.map((image) => {
      const formData = new FormData();
      formData.append("image", image);

      return axios.post(`${ROOT_API}/3/image`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    // imgur handle upload 1 at time (no multiple upload)
    return Promise.all(promises);
  },
};
