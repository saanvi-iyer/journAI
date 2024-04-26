import React, { useState, useEffect } from "react";
import axios from "axios";
import EntryContainer from "@/components/EntryContainer";
import Navbar from "@/components/Navbar";
import Entry from "@/components/Entry";

function StarredEntries() {
  const [entries, setEntries] = useState([]);

  const fetchData = async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/entry/starred",
        {
          headers: { Authorization: ` ${access_token}` },
        },
      );
      setEntries(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if(entries)
    console.log(entries.slice(0,1).slice(0));
  }, [entries]);

  return (
    <>
      <div className="background max-w-screen flex min-h-screen flex-col overflow-y-scroll">
        <Navbar />
        <div className="mt-[10vh] flex flex-col">
          {entries.entry && (
            <Entry
              maximize={maximize}
              handleMaximize={handleMaximize}
              entryData={entries.slice(0).entry}
            />
          )}
          {entries.slice(1).map((entry, i) => (
            <EntryContainer key={i} title={entry.title} date={entry.date} />
          ))}
        </div>
      </div>
    </>
  );
}

export default StarredEntries;
