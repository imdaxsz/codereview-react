import { Exhibition } from 'types';
import { useEffect, useState } from 'react';
import { getDetailExhibition } from '@src/apis';
import { useLocation } from 'react-router-dom';

export default function useBooking() {
  const id = useLocation().pathname.split('/')[2];
  const [data, setData] = useState<Exhibition | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async (id: number) => {
    try {
      const res = await getDetailExhibition({ id });
      if (res instanceof Error) {
        console.log("Error with fetching exhibition data:", res);
        setIsError(true);
        return;
      }
      setData(res);
    } catch (error) {
      console.log('Unexpected error with fetching exhibition data:', error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!/^\d+$/.test(id)) {
      setIsError(true);
      return;
    }
    fetchData(Number(id));
  }, [id]);

  return { data, isLoading, setIsLoading, isError };
}
