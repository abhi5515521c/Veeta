// Frontend config
const API_BASE = import.meta.env.VITE_API_URL || window.VITE_API_URL || "http://localhost:8001";
console.log("API Base URL:", API_BASE);

export { API_BASE };
