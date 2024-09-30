import { useEffect, useState } from "react";

export function getStorageValue(key: string, defaultValue: any) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  return localStorage.setItem(key, JSON.stringify(defaultValue));
};
