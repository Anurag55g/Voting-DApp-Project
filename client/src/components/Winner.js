import { useEffect,useState } from "react";

function Winner({state}){
  const[win,setwin] = useState("Not Announced");
  useEffect(()=>{
    const {contract} = state;
    async function winnerAnnounce(){
      const onlywinner = await contract.methods.winner().call();
      if (onlywinner!== "0x0000000000000000000000000000000000000000"){
        setwin(onlywinner) 
      }
    }
    contract && winnerAnnounce(); 
  },[state])

  return <div className="win">Winner is : {win}</div>;
}
export default Winner;
