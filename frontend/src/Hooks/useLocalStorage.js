import { useState } from "react";
import React from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  React.useEffect(() => {}, [storedValue]);
  return [
    storedValue,
    function setVal(...args) {
      setStoredValue(...args);
      try {
        window.localStorage.setItem(
          keyName,
          JSON.stringify(
            storedValue,
            ((obj) => {
              let cache = [];
              return (key, value) =>
                typeof value === "object" && value !== null
                  ? cache.includes(value)
                    ? undefined // Duplicate reference found, discard key
                    : cache.push(value) && value // Store value in our collection
                  : value;
            })(),
            2
          )
        );
      } catch (err) {
        console.log(err);
      }
    },
    function setNonPersist(...args) {
      setStoredValue(...args);
      console.log("not persisted");
    },
  ];
};
