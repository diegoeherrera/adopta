

export function initState(){
    return function (dispatch){

        console.log("paso por action")
     const url='http://localhost:3004/Mascotas'
    fetch(url,{method:"GET"})
    .then(response=>{return response.json()})
    .then(response=>{
        console.log("paso por action")
            dispatch({
                type:"INITIAL_GET_OK",
                data:response
            })
        }
    )
    .catch(err=>console.log("errorrrrr: ",err))

    }

}