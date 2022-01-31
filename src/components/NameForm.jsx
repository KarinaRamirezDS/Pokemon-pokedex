import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate} from "react-router-dom";
import "./NameForm.styles.css"



const NameForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //state
    const [name, setName] = useState("");
    
    
    //Funcione enviar datos form
    const submit = (e) => {
        e.preventDefault();
       
       // console.log(name)
        dispatch({ type: "SET_NAME", payload: name});
        navigate("/pokedex");
    }
  return(
      <section className="principal">
        <div> 
            <img src="/img/logo.png" className="imagen1"/>
        </div>
        <div>
            <img src="/img/es.gif"/>
          </div>
          
          
        <div > 
           <h1 className="hello"> ¡Hello Trainer!</h1>
        </div>
    
        
          <div className="con">


          <form  onSubmit={submit}>
              <label > <b></b> <br></br>
                <input type="text"
                        value={name}
                        onChange={e => setName(e.target.value) }   placeholder='Give me your name to start'  required/>
        
              </label>
              <div>
                   <button > GO </button>
              </div>
             
          </form>
          
          
              {/* <div> 
                    <img src="/img/trainer.png" alt="entrenador" className="imagen2" />
              </div> */}


           </div>
          
      </section>
      
  )

  
};

export default NameForm;
