//let token = localStorage.getItem("authToken");
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZmVhMDFiMC04ZGMzLTQyYTktODRhMi02NjllNjczNDI1MGYiLCJ1c2VyUHJvZmlsZUlkIjoiYjk5YzdjNTEtZGI5ZS00NDMxLWFkMmEtMWEzYThjNjA2OGMyIiwiZW1haWwiOiJwZWRyb0Bob3RtYWlsLmNvbSIsImlhdCI6MTY2ODk5MTg4NywiZXhwIjoxNjc5NzkxODg3LCJzdWIiOiJiOTljN2M1MS1kYjllLTQ0MzEtYWQyYS0xYTNhOGM2MDY4YzIifQ.whkLZyJvvvb16MOmXaoDoe9-A2UzLcwf3PBgyOx-Oog"
export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};