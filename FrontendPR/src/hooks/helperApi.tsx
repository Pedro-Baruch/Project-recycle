let token = localStorage.getItem("authToken");
export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};