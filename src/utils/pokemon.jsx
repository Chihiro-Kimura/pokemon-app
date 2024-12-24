export const getAllPokemon = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error('Error fetching all Pokemon:', error);
    throw error;
  }
};

export const getPokemon = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};
