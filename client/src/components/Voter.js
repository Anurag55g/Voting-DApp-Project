import VoterRegister from "./VoterRegister";
import VoterList from "./VoterList";

function Voter({state,account}){
    return<>
    <VoterRegister state={state} account={account}></VoterRegister>
    <VoterList state={state}></VoterList>
    </>

}
export default Voter;