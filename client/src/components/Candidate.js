import CandidateRegister from "./CandidateRegister";
import CandidateDisplay from "./CandidateDisplay";

function Candidate({state,account}){
    return<>
    <CandidateRegister state={state} account={account}></CandidateRegister>
    <CandidateDisplay state={state}></CandidateDisplay>
    </>

}
export default Candidate;