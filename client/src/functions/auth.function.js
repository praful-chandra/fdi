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

export const currentUser = async (token)=>{

  return await axios.post("/auth/current-user",{},{
    headers:{
      authtoken : token
    }
  })
}

export const currentAdmin = async (token)=>{

  return await axios.post("/auth/current-admin",{},{
    headers:{
      authtoken : token
    }
  })
}

export const roleBasedRedirect = async (user,history) =>{
  if(user.role === 'Admin'){
    history.push('/admin/dashboard')
  }else{
    history.push('/user/dashboard');
  }
}