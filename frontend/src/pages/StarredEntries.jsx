import React, { useState, useEffect } from "react";
import axios from "axios";
import EntryContainer from "@/components/EntryContainer";
import Navbar from "@/components/Navbar";
import Entry from "@/components/Entry";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function StarredEntries() {
  const [entries, setEntries] = useState([]);
  const [maximize, setMaximize] = useState(false);
  const navigate = useNavigate();
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
    console.log(entries[0]);
  }, [entries]);

  function Home() {
    navigate("/home");
  }
  const handleMaximize = () => {
    setMaximize(!maximize);
  };

  return (
    <>
      <div className="background max-w-screen flex min-h-screen flex-col ">
        <Navbar />
        <div className="mt-[13vh] flex items-center px-[2%] ">
          <ChevronLeft
            onClick={Home}
            className="mb-3 ml-[-10px] mt-2.5"
            size={32}
            color="#0F2851"
          />
          <p className="ml-[12px] mb-2 text-4xl font-semibold text-deep-blue ">
            Starred Entries
          </p>
        </div>
        <div className="flex">
          <div className="ml-14 mt-4">
            {entries[0] && (
              <Entry
                maximize={maximize}
                handleMaximize={handleMaximize}
                entryData={entries[0]}
              />
            )}
          </div>
          {!maximize && (
          <div className="flex flex-col">
            {entries.slice(0,).map((entry, i) => (
              <a href={`/edit?id=${entry._id}`} key={i}>
              <EntryContainer key={i} title={entry.title} date={entry.date} />
              </a>
            ))}
          </div>
          ) }
        </div>
      </div>
    </>
  );
}

export default StarredEntries;
