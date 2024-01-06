import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://king-prawn-app-dndfk.ondigitalocean.app` + url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, [url]);
  return data;
};

export { useFetchData };
