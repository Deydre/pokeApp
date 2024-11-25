import React from "react";

const DetailCard = (pokemon) => {
  console.log(pokemon)
  const { id, species, types, height, weight, abilities } = pokemon.data;
  const idThreeLength = String(id).padStart(3, '0')
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  let nameUppercase = species.name.charAt(0).toUpperCase() + species.name.slice(1).toLowerCase();

  return <article className={`card-detail`}>

    <div id="stats">
      <div>
        <h5>#{idThreeLength}</h5>
        <h3>{nameUppercase}</h3>
      </div>
      <p><strong>Height:</strong> {height * 10} cm</p>
      <p><strong>Weight:</strong> {weight / 10} kg</p>
      <p><strong>Ability:</strong> {abilities[0].ability.name}</p>
      <p><strong>Types:</strong> {types[0].type.name} {types[1] ?", " + types[1].type.name : ""}</p>
    </div>
    <div>
      <img src={imageUrl} alt={nameUppercase} />
    </div>
  </article>;

};

export default DetailCard;
