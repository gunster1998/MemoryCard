export const fetchCardss = async () => {
  try {
    const response = await fetch(`https://api.opendota.com/api/heroStats`);

    if (!response.ok) {
      throw new Error(`Ошибка при загрузке карточек: ${response.status}`);
    }

    const data = await response.json();

    return [...data];
  } catch {
    console.error("Ошибка загрузки карточек:", Error);
  }
};
