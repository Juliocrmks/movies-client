import React, { useEffect, useState } from "react";
import axios from "axios";

const Bracket = () => {
  const [bracket, setBracket] = useState();
  useEffect(() => {
    // Fetch the bracket data from your server using axios or any other method
    axios
      .get("http://localhost:3001/bracket") // Adjust the URL as needed
      .then((response) => {
        console.log(response)
        setBracket(response.data.bracket);
      })
      .catch((error) => {
        console.error("Failed to fetch bracket data:", error);
      });
  }, []);

  return (
    <>
      {bracket && (

        <div>
          {bracket.map((match) => (
            <div key={`match-${match.round}-${match.matchNumber}`}>
              <p>
                Round {match.round}, Match {match.matchNumber}
              </p>
              <p>
                Entry 1: {match.entry1 ? match.entry1.entry.name : "TBD"}
                {match.winner === match.entry1?._id && " (Winner)"}
              </p>
              <p>
                Entry 2: {match.entry2 ? match.entry2.entry.name : "TBD"}
                {match.winner === match.entry2?._id && " (Winner)"}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Bracket;
