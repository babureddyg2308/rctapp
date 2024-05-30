
const fetchLabTests = async () => {
    try {
      const response = await fetch('https://backend-3-yhcs.onrender.com/labTests');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching lab tests:', error);
      throw error;
    }
  };
  
  export { fetchLabTests };
  