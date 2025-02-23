const API_URL = "http://localhost:5000/api/auth"; // ✅ Ensure this matches backend

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.error || "Signup failed!";
    }
};
