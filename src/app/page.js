'use client'
import GoogleChartExample from './components/Chart'


import React, { useEffect, useState } from "react";

function SchoolGenderCounts() {
  const [jsonData] = useState([
    {
      SN: 1,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Tulsi Hansda",
      Caste: "PVTG",
      Class: 1,
      Age: 6,
      Gender: "F"
    },
    {
      SN: 2,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Rohan Hembram",
      Caste: "GEN",
      Class: 1,
      Age: 6,
      Gender: "M"
    },
    {
      SN: 3,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Roshni Patra",
      Caste: "GEN",
      Class: 1,
      Age: 6,
      Gender: "F"
    },
    {
      SN: 4,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Churamani Hembram",
      Caste: "SC",
      Class: 1,
      Age: 6,
      Gender: "F"
    },
    {
      SN: 5,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Rohit Hansda",
      Caste: "GEN",
      Class: 1,
      Age: 6,
      Gender: "M"
    },
    {
      SN: 6,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Rohan Karmakar",
      Caste: "GEN",
      Class: 1,
      Age: 6,
      Gender: "M"
    },
    {
      SN: 7,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Laxmi Hembram",
      Caste: "SC",
      Class: 1,
      Age: 6,
      Gender: "F"
    },
    {
      SN: 8,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Nischintpur",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Anju Singh",
      Caste: "ST",
      Class: 1,
      Age: 6,
      Gender: "F"
    },
    {
      SN: 9,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Payal Patra",
      Caste: "OBC",
      Class: 1,
      Age: 6,
      Gender: "F"
    },
    {
      SN: 10,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Kushal Hansda",
      Caste: "SC",
      Class: 1,
      Age: 6,
      Gender: "M"
    },
    {
      SN: 11,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Aarush Patra",
      Caste: "ST",
      Class: 1,
      Age: 6,
      Gender: "M"
    },
    {
      SN: 12,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Nischintpur",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Ritu Singh",
      Caste: "GEN",
      Class: 2,
      Age: 7,
      Gender: "F"
    },
    {
      SN: 13,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Nischintpur",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Virishti Patra",
      Caste: "PVTG",
      Class: 2,
      Age: 7,
      Gender: "F"
    },
    {
      SN: 14,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Akash Patra",
      Caste: "ST",
      Class: 2,
      Age: 7,
      Gender: "M"
    },
    {
      SN: 15,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Parbin Hembram",
      Caste: "OBC",
      Class: 2,
      Age: 7,
      Gender: "M"
    },
    {
      SN: 16,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Rudrakshi Hembram",
      Caste: "GEN",
      Class: 2,
      Age: 7,
      Gender: "F"
    },
    {
      SN: 17,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Amrita Karmakar",
      Caste: "ST",
      Class: 2,
      Age: 7,
      Gender: "F"
    },
    {
      SN: 18,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Nischintpur",
      Schoolname: "ADARSH M.S.MAHULIYA, GHAT",
      Studentname: "Rakash Singh",
      Caste: "GEN",
      Class: 2,
      Age: 7,
      Gender: "M"
    },
    {
      SN: 19,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "M.S.HIRAGANJ, GHAT",
      Studentname: "Shubhadra Karmakar",
      Caste: "GEN",
      Class: 2,
      Age: 7,
      Gender: "F"
    },
    {
      SN: 20,
      State: "Jharkhand",
      Block: "Ghatshila",
      Address: "Dewli",
      Schoolname: "M.S.HIRAGANJ, GHAT",
      Studentname: "Suraj Hansda",
      Caste: "GEN",
      Class: 3,
      Age: 8,
      Gender: "M"
    },
    // Add more data as needed
  ]);

  const [schoolGenderCounts, setSchoolGenderCounts] = useState({});

  useEffect(() => {
    // Calculate the counts for each school name with gender
    calculateSchoolGenderCounts();
  }, []);

  const calculateSchoolGenderCounts = () => {
    const counts = {};

    jsonData.forEach((item) => {
      const schoolName = item["Schoolname"];
      const gender = item["Gender"];
      const key = `${schoolName} - ${gender}`;

      if (counts[key]) {
        counts[key]++;
      } else {
        counts[key] = 1;
      }
    });

    setSchoolGenderCounts(counts);
  };

  return (

    <div>
      <GoogleChartExample />
      <h2>School Name - Gender Counts:</h2>
      <ul>
        {Object.entries(schoolGenderCounts).map(([key, count]) => (
          <li key={key}>
            {key}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SchoolGenderCounts;
