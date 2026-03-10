import { useState, useEffect } from 'react';


// 4 - custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando o post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(url);

      const data = await res.json();

      setData(data);
    }

    fetchData();

  }, [url, callFetch]);


  // 5 - refatorando o post
  useEffect(() => {
    if (method === "POST") {
      let fetchOptions = [url, config];


    }
  }, [config])

  return { data };
}