
const stateShape = [
    {
        nombreMascota:"",
        nombreUsr:"",
        fotoMascota:"",
        ubicacion:""
    }
]

export const estadoInicial = (state=[],action) =>{
 
    switch (action.type) {
        case "INITIAL_GET_OK":
            console.log("paso por reducer")
            return state.concat(action.data)
            break;
    
        default:
        return state;
            break;
    }
}





/*

const initialState = {}

function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
*/
/*
const initState = (state=[],action) =>{
    switch (action.Type) {
        case "INITIAL_GET_OK":
            return state
            break;
    
        default:
        return state;
            break;
    }
}


const state = initState;


export default state;*/