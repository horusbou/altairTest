import { useState, useEffect } from 'react';
import { customers } from '../data';

const useFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(customers as T);
        setIsLoading(false);
      }, 20);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
