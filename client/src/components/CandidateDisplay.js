import { useState, useEffect } from "react";

function CandidateDisplay({ account, state }) {
  const [list, setlist] = useState([])
  useEffect(() => {
    const { contract } = state;
    async function List() {
      const list = await contract.methods.candidateList().call();
      setlist(list);
    }
    contract && List()
  }, [state])
  return <>
    <div className="Table">
      <h3>Candidate List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Party</th>
            <th>Address</th>
            <th>Gender</th>
          </tr>
        </thead>
        {list.map((candidate) => {

          return (
            <tbody className="tableData">
              <tr key={candidate.candidateId}>
                <td>{candidate.candidateId}</td>
                <td>{candidate.name}</td>
                <td>{candidate.party}</td>
                <td>{candidate.candidateAddress}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  </>;
}
export default CandidateDisplay;
