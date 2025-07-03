import { error } from "console";

export const fetchImages = async (count: number) => {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random/${count}`
    );

    if (!response.ok) {
      throw new Error(`Ошибка при загрузке изображений: ${response.status}`);
    }

    const data = await response.json();

    return [...data.message];
  } catch {
    console.error("Ошибка загрузки изображений:", error);
  }
};
