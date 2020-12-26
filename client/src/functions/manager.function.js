import axios from "axios";

export const listManagerRoles = async () => {
  try {
    const res = await axios.get("/manager/roles");
    if (res.data && !res.data.error) {
      return res.data;
    }
  } catch (err) {
    return { error: "Internal Server Error !!" };
  }
};

export const toggleManagerRole = async (role) => {
  try {
      const res = await axios.post("/manager/role",{role});
      if(res.data && !res.data.error){
          return{ success : true}
      }
  } catch (err) {
    return { error: "Internal Server Error !!" };
  }
};
