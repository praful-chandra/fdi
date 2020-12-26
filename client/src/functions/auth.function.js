import axios from "axios";

export const createOrUpdateUser = async (token) => {
  axios.defaults.headers.common["authtoken"] = token;

  return await axios.post("/auth/create-or-update-user", {});
};



export const currentUser = async (token) => {
  axios.defaults.headers.common["authtoken"] = token;

  return await axios.post("/auth/current-user", {});
};



export const currentAdmin = async (token) => {
  axios.defaults.headers.common["authtoken"] = token;

  return await axios.post("/auth/current-admin", {});
};

export const currentManager = async(token)=>{
  axios.defaults.headers.common["authtoken"] = token;
  return await axios.post("/auth/current-manager", {});

}



export const roleBasedRedirect = async (user, history,intent) => {
  if(intent){
      history.push(`${intent.from}`)
  }else   if (user.role === "Admin") {
    history.push("/admin/dashboard");
  } else if(user.role === "Manager"){
    history.push("/manager/dashboard")
  }
  else {
    history.push("/user/dashboard");
  }
};
