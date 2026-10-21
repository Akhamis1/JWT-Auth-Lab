import { useEffect, useState } from "react";
import { getMyEntries } from "../services/entryService";

function MyEntries() {
  const [entries, setEntries] = useState([]);
  async function getEntries() {
    const response = await getMyEntries();
    setEntries(response);
  }
  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div>
      <h1>My Entries</h1>
      {entries.map((oneEntry) => {
        return (
          <div key={oneEntry._id}>
            <h2>title: {oneEntry.title}</h2>
            <p>entryBody: {oneEntry.entryBody}</p>
            <p>isPublic: {oneEntry.isPublic ? "true" : "false"}</p>
            
    
          </div>
        );
      })}
    </div>
  );
}

export default MyEntries;
