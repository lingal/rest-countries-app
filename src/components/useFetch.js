import { useState, useEffect} from 'react';

import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = (url) => {
    axios
      .get(url)
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, isLoading, setData };
};

export default useFetch;
