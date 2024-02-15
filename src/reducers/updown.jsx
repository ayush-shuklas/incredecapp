const initialstate = 0;

const changenumber = (state = initialstate, actions) =>{
    switch(actions.type){
    case  "INCREMENT" 
    :return state + actions.payload;

    case "DECREMENT" 
    :return state - actions.payload;

    default :return state;
}
}

export default changenumber;