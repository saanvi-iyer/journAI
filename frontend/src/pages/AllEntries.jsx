import React, { useState, useEffect } from "react";
import axios from "axios";
import EntryContainer from "@/components/EntryContainer";
import Navbar from "@/components/Navbar";

function AllEntries() {
  const [entries, setEntries] = useState([]);

  const fetchData = async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("http://localhost:3000/api/entry", {
        headers: { Authorization: ` ${access_token}` },
      });
      setEntries(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="background max-w-screen flex min-h-screen flex-col overflow-y-scroll">
        <Navbar />
        <div className="mt-[13vh] flex h-[90vh] flex-col flex-wrap justify-start">
          {entries.map((entry, i) => (
            <a href={`/edit?id=${entry._id}`} key={i}>
              <EntryContainer title={entry.title} date={entry.date} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllEntries;
