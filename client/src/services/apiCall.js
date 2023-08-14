async function apiCall(endpoint, method, body = null) {
    try {
      const options = {
        method,
        headers: {},
      };
  
      if (method === "POST") {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
      }
  
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
        options
      );
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(JSON.parse(errorMessage).message);
      }
  
      return response.json();
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
  
  export default apiCall;
  