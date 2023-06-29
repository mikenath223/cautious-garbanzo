import { useCallback, useState } from 'react';

type UseLocalStorageResult<T> = [T | undefined, (value: T) => void];

function useLocalStorage<T>(key: string, initialValue?: T): UseLocalStorageResult<T> {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error retrieving value from localStorage for key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting value in localStorage for key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage