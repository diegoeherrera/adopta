import React from 'react';
import './welcomeStyle.css';
import {Link} from 'react-router-dom';
import Listado from './Listado'
import {connect} from 'react-redux'







const WelcomeComp = (state)=>{
    console.log("welcome: ",state)
    return (
      
        
                <div className="mainCont">
                    <div className="welcomeMsg">                         
                        <h2>Bienvenidos a Adoptar</h2>
                        <p>La aplicacion para conseguir tu nuevo mejor amigo :)</p>  
                        <button className="vamosBtn"type="button"><Link to="/listado">¡Buscar Amigos!</Link></button>
                    </div>

            
                    </div>
    
        
    )
}

export default connect(state=>state)(WelcomeComp);