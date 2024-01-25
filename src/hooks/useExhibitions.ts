import { getApiExhibitionList } from '@src/apis';
import { useEffect, useState } from 'react';
import { Exhibition } from 'types';

export default function useExhibitions() {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const res = await getApiExhibitionList();
      setExhibitions(res);
    } catch (error) {
      console.log("Error with fetching exhibition list: ", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchList();
  }, [])

  return { exhibitions, isLoading };
}
