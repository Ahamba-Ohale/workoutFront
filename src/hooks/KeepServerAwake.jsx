import axios from 'axios';
import { useEffect } from 'react';

const KeepServerAwake = () => {
  useEffect(() => {
    const keepAlive = async () => {
      try {
        const response = await axios.get('https://your-backend-server.com/keep-alive');
        console.log(response.data);
      } catch (error) {
        console.error('Error keeping server awake:', error);
      }
    };

    // Call keepAlive initially
    keepAlive();

    // Call keepAlive every 50 minutes (3000000 milliseconds)
    const intervalId = setInterval(keepAlive, 3000000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component doesn't render anything
};

export default KeepServerAwake;
