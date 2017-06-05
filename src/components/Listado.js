import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {initState} from './Redux_/Actions'
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

                 <h3>as</h3>
             )
    }
}



export default connect(state=>state,{initState})(Listado);