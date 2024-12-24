import './Card.css';

const Card = ({ pokemon }) => {
  return (
    <>
      <div className="card">
        <h1 className="card-title">{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="card-body">
          <span className="title">タイプ: </span>
          <span>{pokemon.types.map((type) => type.type.name).join(', ')}</span>
        </div>
        <div className="card-body">
          <span className="title">特性: </span>
          <span>{pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</span>
        </div>
        <div className="card-body">
          <span className="title">高さ: </span>
          <span>{pokemon.height}</span>
        </div>
        <div className="card-body">
          <span className="title">重さ: </span>
          <span>{pokemon.weight}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
