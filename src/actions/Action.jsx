export const incnumber = (n) =>{
    return {
        type:"INCREMENT",
        payload:n
    }

}

export const decnumber = (n) =>{
    return {
        type :"DECREMENT",
        payload:n
    }
    
}