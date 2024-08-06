import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetchGet = (
  url,
  shouldStartLoading = false,
  data = {},
  authToken = '',
) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetch = async () => {
      if (shouldStartLoading) {
        setLoading(true);
        setResponse(null);
        setError(null);
        axios({
          url,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authToken,
            Accept: 'application/json',
          },
          params: data,
        })
          .then(resp => {
            // console.log(resp.data,'resp-----');
            const definedObj = {
              status: resp.status,
              data: resp.data,
            };

            setResponse(definedObj);
            // if (definedObj.code !== 1000) {
            // setError(true);
            // }
          })
          .catch(err => {
            // console.log(err,'err');
            setError(true);
            const definedObj = {
              status: err.response.status,
              data: err.response.data,
            };

            setResponse(definedObj);
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };

    fetch();

    return () => {
      source.cancel();
    };
  }, [url, shouldStartLoading]);

  return {response, loading, error};
};

export default useFetchGet;
