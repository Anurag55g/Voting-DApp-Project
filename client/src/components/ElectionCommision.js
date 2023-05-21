function ElectionCommision({state,account}) {

  async function voting_Time(){
    try{   
      const {contract} = state;
      const startTime = document.querySelector("#start").value;
      const endTime = document.querySelector("#end").value;
      const transaction = await contract.methods.voteTime(startTime,endTime).send({from:account,gas:480000});
      alert("Voting Started!")
    }
    catch(error){
      alert(error)
    }
  }
  async function votingResult(){
    try{
      const {contract} = state;
      await contract.methods.result().send({from:account,gas:480000});
      alert("Result Announcced")
    }
    catch(error){
      return(error)
    }
  }

  async function Emergency(){
    try{
      const {contract} = state;
      await contract.methods.emergency().send({from:account,gas:480000});
      alert("Emergency!!!")
    }
    catch(error){
      return(error)
    }
  }
  
  return (
    <>
      <div>
        <form className="form" onSubmit={voting_Time}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick={Emergency}>
          Emergency
        </button>
        <button className="resBtn" onClick={votingResult}>
          Result
        </button>
      </div>
    </>
  );
}
export default ElectionCommision;
