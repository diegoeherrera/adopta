import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {initState} from './Redux_/Actions'
import './Listado.css'
/*
const Listado = (state)=>{
    console.log("Listado: ",state)
    
    return(
        <div>
            <h2>dasdasd</h2>

        </div>
    )
}*/

class Listado extends React.Component{
    componentWillMount() {
   //cuando es clase se declara asi
   this.props.initState()

  }



    render(){
          console.log("caca",this.props.estadoInicial)
          
        return (
                <div className="ListGrid">
                    {
                     this.props.estadoInicial.map((item)=>{
                     return (
                                <div>
                                    <div className="card">
                                        <img src={item.foto}/>
                                        <div>
                                            <span className="Petdata cardInfo">Nombre:{item.nombre}</span>
                                            <span className="Petdata cardInfo">Sexo:</span>                                    
                                            <span  className="Petdata cardInfo">tipo:</span>
                                            <span  className="Petdata cardInfo">Ubicacion:</span>
                                        </div>
                                        <button className="adoptBtn ">Adoptar!</button>
                                        </div>
                                    </div>
                                
                            )
                         }
                     )
                }
            </div>
        )
    }
}



export default connect(state=>state,{initState})(Listado);