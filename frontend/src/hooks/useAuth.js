import { useState, useEffect } from 'react';
import { useSelector} from  "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);

  const [auth, seAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(user) { 
      seAuth(true);
    } else {
      seAuth(false);
    };

    setLoading(false);
  }, [user]);

  return {auth,  loading};
};

export default useAuth