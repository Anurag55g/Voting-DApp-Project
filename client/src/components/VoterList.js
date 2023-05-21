import { useState, useEffect } from "react";

function VoterList({ state }) {
  const [list, setlist] = useState([])
  useEffect(() => {
    const { contract } = state;
    async function List_Voter() {
      const lists = await contract.methods.voterList().call();
      console.log(lists)
      setlist(lists)
    }
    contract && List_Voter();
  }, [state])

  return <>
    <div className="Table">
      <h3>Voter List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>VoteTo</th>
          </tr>
        </thead>
        {list.map((voter) => {
          return (
            <tbody>
              <tr className="tableData">
                <td>{voter.voterId}</td>
                <td>{voter.name}</td>
                <td>{voter.age}</td>
                <td>{voter.gender}</td>
                <td>{voter.voterAddress}</td>
                <td>{voter.voteCandidateId}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  </>;
}
export default VoterList;
