const initialState=0;
const changeTheNumber=(state=initialState,action)=>{
 switch(action.type){
     case "increament": return state+1;
     case "decreament": return state-1;
     default: return state;

}
}
export default changeTheNumber;