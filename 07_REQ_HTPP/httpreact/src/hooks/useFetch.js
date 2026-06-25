import { useState, useEffect } from 'react';


// 4 - custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 8 - desafio da aula

  const [idItem, setIdItem] = useState("");


  // 5 - refatorando o post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading

  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  // 8 - desafio da aula (add de recebimento de id)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
      })
      setIdItem(data);
    }

    setMethod(method);
  }

  useEffect(() => {

    const fetchData = async () => {

      // 6 - loading

      setLoading(true);

      try {
        const res = await fetch(url)

        const data = await res.json();

        setData(data);

      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }


      setLoading(false);
    }

    fetchData();

  }, [url, callFetch]);


  // 5 - refatorando o post

  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions)

        json = await res.json();

      }
      if (method === "DELETE") {
        const deleteUrl = `${url}/${idItem}`;

        const res = await fetch(deleteUrl, config);

        json = await res.json();

        console.log(`item ${json.name} deletado com sucesso!`);
      }

      setCallFetch(json);

    };

    httpRequest();
  }, [config, method, url])

  return { data, httpConfig, loading, error };
}