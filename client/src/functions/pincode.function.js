import axios from "axios";

export const addPincode = async (pinObj) => {
  try {
    const response = await axios.post("/pincode", pinObj);

    if (response && response.data) {
      return response.data;
    }
  } catch (err) {
    return { error: "Internal server error !" };
  }
};

export const listPincode = async ()=>{
    try {
        const response = await axios.get("/pincode");
    
        if (response && response.data) {
          return response.data;
        }
      } catch (err) {
        return { error: "Internal server error !" };
      }
}

export const updatePincode = async (pinOnj) =>{
    try{
        const response = await axios.patch("/pincode",pinOnj);
    
        if (response && response.data) {
          return response.data;
        }

    } catch (err) {
        return { error: "Internal server error !" };
      }
}

export const deletePincode = async (groupName)=>{
  try{
    const response = await axios.delete(`/pincode/${groupName}`);

    if (response && response.data) {
      return response.data;
    }

} catch (err) {
    return { error: "Internal server error !" };
  }
}

export const lookupPin = async pin =>{
  try{
    const response = await axios.get(`/pincode/${pin}`);

    if (response && response.data) {
      return response.data;
    }

} catch (err) {
    return { error: "Internal server error !" };
  }
}