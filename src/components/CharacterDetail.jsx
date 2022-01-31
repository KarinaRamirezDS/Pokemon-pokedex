import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  console.log(pokemon)

  return (
    <section className="individual">
      <div>
         <h2 className="detail">{pokemon.name}</h2>
      </div>
  
      <div >
         <img className='imagenPokemon' src={pokemon.sprites?.other.dream_world?.front_default} alt='pokemon'/>
      </div>
    
      <div className="contenedor">

      <div className='peso'>
          <div>
            <p> <b>Weight: </b>  {pokemon.weight} / </p>
          </div> 
          <div>
            <p>  <b>  Height: </b>   {pokemon.height} </p>
          </div>
      </div>

     
      
      <div className="tipoPokemon">
      <p><b> Tipo:</b>   {pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</p>
            
      </div>

      <div className='abilityes'>  
      <b>Abilities: </b>
      <ul >
        {
          pokemon?.abilities?.map(pokemon => (
            <li key={pokemon.ability.name}>
              <p>{pokemon?.ability?.name}</p>
            </li>
          ))
        }
    
       </ul>
      </div>
      <div className='stats'>
        <h1>Stats</h1>
      <ul className="">
             {pokemon?.stats?.map(item => (
               <li>
               <span className=""><b>{item.stat.name}: </b> </span>
               <span className="">{item.base_stat}</span>
               </li>
               
             ))}
          </ul>
      </div>
     
     
      
      </div>
     
     
    </section>
  );
};

export default CharacterDetail;
