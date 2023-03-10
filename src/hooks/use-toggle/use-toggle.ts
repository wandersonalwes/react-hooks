import { useState } from "react";

export function useToggle<T = string>(options: T[] = []) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const toggleValue = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  const currentValue = options[currentIndex];

  return [currentValue, toggleValue] as const;
}
