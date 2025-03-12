import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);

        setError(error.message);
      }
    };

    getPosts();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
