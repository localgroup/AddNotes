import { useState, useEffect } from 'react';
import { ACCESS_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem(ACCESS_TOKEN);
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    navigate('/', { replace: true }); // Navigate to "/" and replace the current URL
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(ACCESS_TOKEN);
    navigate('/login', { replace: true }); // Navigate to "/login" and replace the current URL
  };

  return { isLoggedIn, login, logout };
};

export default useLoginStatus;