import { useState } from "react";

const useLocalStorage = (key, startingValue) => {
  const [item, setItemState] = useState(() => {
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem === null ? startingValue : +localStorageItem;
  });

  const setItem = (value) => {
    setItemState(value);
    localStorage.setItem(key, value);
  };

  return { item, setItem };
};

export default useLocalStorage;
