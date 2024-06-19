import { useSelector } from 'react-redux';
import {  ApiState } from './store'; // Ngimpor tipe RootState saka store sampeyan
const useApiData = (): ApiState => {
  const data = useSelector((state: any) => state.api.data);
  const status = useSelector((state: any) => state.api.status);
  const error = useSelector((state: any) => state.api.error);

  return { data, status, error };
};

export default useApiData;