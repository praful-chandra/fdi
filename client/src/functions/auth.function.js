import axios from 'axios';


export const createOrUpdateUser = async (token) => {
    return await axios.post(
      "/auth/create-or-update-user",
      {},
      {
        headers: { authtoken: token },
      }
    );
  };