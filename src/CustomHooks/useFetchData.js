import { useState, useEffect } from "react";

const useFetchSizes = (url) => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    fetch(`https://king-prawn-app-dndfk.ondigitalocean.app` + url)
      .then((response) => response.json())
      .then((data) => setSizes(data))
      .catch((error) => console.error("Error:", error));
  }, [url]);

  return sizes;
};

const useFetchToppings = (url) => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    fetch(`https://king-prawn-app-dndfk.ondigitalocean.app` + url)
      .then((response) => response.json())
      .then((data) => setToppings(data))
      .catch((error) => console.error("Error:", error));
  }, [url]);
  return toppings;
};

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

export { useFetchSizes, useFetchToppings, useFetchData };
