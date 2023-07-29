const initialState = 0;

const   changeTheNumber = (state = initialState, action) =>{
    switch(action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - action.payload;
        default : return state;
    }
}

export default changeTheNumber


























// const initialState = 0;
// const changeNumber = (state = initialState, action) => {
//     switch(action.type){
//         case "INCREMENT" : return state + action.payload;
//         case "DECREMENT" : return state - action.payload;
//         default : return state;
//     }
// }

// export default changeNumber;