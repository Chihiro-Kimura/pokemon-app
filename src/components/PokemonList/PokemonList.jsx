import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemonData }) => {
  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
