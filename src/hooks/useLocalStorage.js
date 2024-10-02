import React from "react";

function useLocalStorage(keyItem, initialValue) {
  let parsedItem = localStorage.getItem(keyItem) ? JSON.parse(localStorage.getItem(keyItem)) : initialValue;
  localStorage.setItem(keyItem, JSON.stringify(parsedItem));
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(keyItem, JSON.stringify(newItem));
    setItem(newItem);
  }
  return [item, saveItem];
}

export { useLocalStorage }