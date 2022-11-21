let token = localStorage.getItem("authToken");
//let token = ""

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};