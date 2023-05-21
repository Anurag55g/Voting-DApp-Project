import Vote from "./Vote";

function VoterRegister({state,account}) {

  async function voter_registration(event){
    try{   
      event.preventDefault();
      const {contract} = state;
      const name = document.querySelector("#name").value;
      const age = document.querySelector("#age").value;
      const gender = document.querySelector("#gender").value;
      const transaction = await contract.methods.voterRegister(name,age,gender).send({from:account,gas:480000});
      console.log(transaction);
    }
    catch(error){
      alert(error)
    }
  }

  return (
    <div>
      <div className="btnContainer">
        <form className="form" onSubmit={voter_registration}>
          <label className="label2" htmlFor="name">
            Name:
          </label>
          <input className="innerBoxVote" type="text" id="name"></input>

          <label className="label2" htmlFor="age">
            Age:
          </label>
          <input className="innerBoxVote" type="text" id="age"></input>

          <label className="label2" htmlFor="gender">
            Gender:
          </label>
          <input className="innerBoxVote" type="text" id="gender"></input>

          <button className="regBtn" type="submit">
            Register
          </button>
        </form>
      </div>
      <Vote state={state} account={account}></Vote>
    </div>
  );
}
export default VoterRegister;
