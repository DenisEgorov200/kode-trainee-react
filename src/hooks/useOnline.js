import { useEffect, useState } from 'react';

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showRealTimeStatus, setShowRealTimeStatus] = useState(false);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  useEffect(() => {
    if (!isOnline) {
      setShowRealTimeStatus(true);
    } else {
      const timer = setTimeout(() => {
        setShowRealTimeStatus(false);
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isOnline]);

  return {
    isOnline,
    showRealTimeStatus,
  };
};
