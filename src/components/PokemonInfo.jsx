import React, { useEffect, useState} from 'react';
import axios from "axios";
import Stats from './Stats';
import { Link } from "react-router-dom";


const PokemonInfo = ({url}) => {
   //state
    const [pokemon, setPokemon] = useState({});
   //use Effect 
    useEffect(() => {
        axios.get(`${url}`)
           .then(res => {
               setPokemon(res.data)
               //console.log(res.data);

           })
    }, [])



    const style = pokemon.types?.[0].type.name + " cardCover" ;
    const styles = pokemon.types?.[1]?.type.name + "card" ;
  
  


  return (
 
     
     <div className="contenedor">
        <div className="card">
           
        <div className={style}>
          <div className={styles}>
        
             <img src={pokemon.sprites?.other.dream_world?.front_default} alt='{pokemon.name}'/>
          </div>
          <div >
           <Link className="link" to={`/pokedex/${pokemon.id}`} >
              <h1>{pokemon.name}</h1>
           </Link>
          </div>

        </div>

        <div>

       
        

        <div className="info">

            <hr />
              {/* <p>Type:  {pokemon.types?.[0].type.name} </p>
              <p> {pokemon.type?.[1]?.type.name} </p> */}

              <ul>
                    {pokemon?.types?.map((tipos) =>  (
                       <li key={tipos.slot}>
                          <p> {tipos?.type?.name} </p>
                       </li>
                       ))}
                      
              </ul>
           
        </div>

        <div className="lista">
      
          <ul className="">
             {pokemon?.stats?.map(item => (
                <Stats 
                  key={item.stat.name} 
                  item={item}
               />
             ))}
          </ul>
        </div>
      </div>

        </div>

        
  </div>
  )
};

export default PokemonInfo;
