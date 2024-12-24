import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [prevURL, setPrevURL] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        let res = await getAllPokemon(initialURL);
        setNextURL(res.next);
        setPrevURL(res.previous);
        loadPokemon(res.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let res = await getAllPokemon(prevURL);
    setNextURL(res.next);
    setPrevURL(res.previous);
    loadPokemon(res.results);
    setLoading(false);
  };

  const handleNextPage = async () => {
    if (!nextURL) return;
    setLoading(true);
    let res = await getAllPokemon(nextURL);
    setNextURL(res.next);
    setPrevURL(res.previous);
    loadPokemon(res.results);
    setLoading(false);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredPokemon = pokemonData.filter((pokemon) => {
    if (!selectedType) return true;
    return pokemon.types.some((t) => t.type.name === selectedType);
  });

  return (
    <>
      <Navbar onTypeChange={handleTypeChange} />
      <div className="App">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="container">
            {filteredPokemon.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} />;
            })}
          </div>
        )}
      </div>
      <div className="footer">
        <button className="button" onClick={handlePrevPage} disabled={!prevURL}>
          前へ
        </button>
        <button className="button" onClick={handleNextPage} disabled={!nextURL}>
          次へ
        </button>
      </div>
    </>
  );
}

export default App;
