export default api = {
  post: async (model, endPoint, errorMessage) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.onload = () => {
        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve();
        } else {
          reject(xhr.responseText);
        }
      };
      xhr.onerror = (e) => {
        reject(errorMessage);
      };
  
      xhr.open("POST", endPoint);
      xhr.setRequestHeader("Content-type", "application/json");
  
      xhr.send(JSON.stringify(model));
    });
  },
  get: async (model, endPoint, errorMessage) => {
    console.log(endPoint);
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = function() {
            if ( xhr.readyState === 4 ) {
                resolve( xhr.responseText );
            }
        };
  
        xhr.onerror = (e) => {
          reject(errorMessage);
        };
  
        xhr.open("GET", endPoint );
        xhr.send(model);
    });
  }
}
