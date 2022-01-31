import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonInfo from "./PokemonInfo";
import {useNavigate} from "react-router-dom";



const Characters = () => {

    //useSelector
    const name = useSelector((state) => state.name);
    //State
    const [pokemons, setPokemons] = useState([]);
    const[types, setTypes] = useState([]);
    const[typesSearch, setTypesSearch] = useState("");
    const[page, setPage] = useState(1);
    

    const navigate = useNavigate();


   //UseEffect conexión API con axios.get
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then( res => {
           setPokemons(res.data.results)
        })
          
    }, []);


    useEffect(()  => {
      axios.get(`https://pokeapi.co/api/v2/type/`)
        .then( res => {
           setTypes(res.data.results)   
        })
        
    }, []);

    //Funciones

    const filterType = url => {
      
      axios.get(url)
       .then(res => setPokemons(res.data.pokemon))
       setPage(1);
      
    }
    
   // console.log(pokemons)
   //*********Buscador */
   const search = () => navigate(`/pokedex/${typesSearch}`)
   //Paginador
   
   const pokemonsPerPage = 8;
   const lastPokemonsIndex = page * pokemonsPerPage;
   const firstPokemonsIdex = lastPokemonsIndex - pokemonsPerPage;

   const totalPages = Math.ceil(types.length / pokemonsPerPage);
   //console.log(totalPages)
   const pokemonsPaginated = pokemons.slice(firstPokemonsIdex, lastPokemonsIndex);

   let pagesNumber = [];

   for(let i = 1; i <= totalPages; i++){
     if(pagesNumber.length < 2){
       pagesNumber.push(i)
     }
   }
  // console.log(pagesNumber)


  return (
    <section>
     
        
      <div className= "logoo"> 
        <img src="/img/pokemonlogo.png" className="imagenpokemon"/>
      </div> 
      

      <div className="welcome">
          <p>Welcome {name}!</p>
      </div>

      <div className="filter" > 

        <select onChange={e => filterType(e.target.value)}>
          <option>Choose of type </option>
               {types.map(type => (
          <option key={type.name} value={type.url}> {type.name} </option>
                ))
               }
      
        </select>

        <div className="search">
          <div> <input types="text" value={typesSearch} onChange={e => setTypesSearch(e.target.value)}/></div>
          <div> <button onClick={search}><i className="fas fa-search"></i></button></div>
        </div>
          
      </div>


    
     
     <div  >
    
    <ul  className="contenedor">
      {
        pokemonsPaginated?.map((pokemon) => (
          <li key={pokemon.url}>
          
            <PokemonInfo url={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
          </li>
      ))
      }
    </ul>



     </div>

     <div className="paginacion">

          {
              page !== 1 && (
                <button className='page' onClick={() => setPage(page - 1) } ><i className="fas fa-backward"></i></button>
              )
          }
          {
            pagesNumber.map(number => <button className='page' key={number} onClick={() => setPage(number)}>{number}</button>)
          }
          <div  className='pageNumber'>{page} / {totalPages}</div>
          {
            page !== totalPages && (
              <button className='page' onClick={() => setPage(page + 1) }><i className="fas fa-forward"></i></button>
            )
          }

     </div>
    
    
    </section>
  );
};

export default Characters;
