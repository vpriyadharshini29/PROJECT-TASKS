document.getElementById("fetchDataBtn").addEventListener("click", function() {
    fetchAPIData("https://jsonplaceholder.typicode.com/posts/1");
  });
  
  async function fetchAPIData(url) {
    try {
      const response = await fetch(url);
      
     
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
  
     
      console.log("API Response:", data);
  
     
      document.getElementById("responseData").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  
     
      localStorage.setItem("lastApiResponse", JSON.stringify(data));
  
    } catch (error) {
     
      console.error("API Error:", error.message);
  
     
      document.getElementById("errorData").innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  
     
      const errorData = {
        message: error.message,
        time: new Date().toISOString(),
      };
      localStorage.setItem("lastApiError", JSON.stringify(errorData));
    }
  }
  
 
  window.onload = function() {
    const lastApiResponse = localStorage.getItem("lastApiResponse");
    const lastApiError = localStorage.getItem("lastApiError");
  
    if (lastApiResponse) {
      document.getElementById("responseData").innerHTML = `<h3>Last API Response:</h3><pre>${lastApiResponse}</pre>`;
    }
  
    if (lastApiError) {
      const error = JSON.parse(lastApiError);
      document.getElementById("errorData").innerHTML = `<h3>Last API Error:</h3><p style="color: red;">${error.message} at ${error.time}</p>`;
    }
  };
  