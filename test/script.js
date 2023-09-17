const jsonData = [
    {
        "SN": 1,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Tulsi Hansda",
        "Caste": "PVTG",
        "Class": 1,
        "Age": 6,
        "Gender": "F"
    },
    {
        "SN": 2,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Rohan Hembram",
        "Caste": "GEN",
        "Class": 1,
        "Age": 6,
        "Gender": "M"
    },
    {
        "SN": 3,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Roshni Patra",
        "Caste": "GEN",
        "Class": 1,
        "Age": 6,
        "Gender": "F"
    },
    {
        "SN": 4,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Churamani Hembram",
        "Caste": "SC",
        "Class": 1,
        "Age": 6,
        "Gender": "F"
    },
    {
        "SN": 5,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Rohit Hansda",
        "Caste": "GEN",
        "Class": 1,
        "Age": 6,
        "Gender": "M"
    },
    {
        "SN": 6,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Rohan Karmakar",
        "Caste": "GEN",
        "Class": 1,
        "Age": 6,
        "Gender": "M"
    },
    {
        "SN": 7,
        "State": "Jharkhand",
        "Block": "Ghatshila",
        "Address": "Dewli",
        "School Name": "ADARSH M.S.MAHULIYA, GHAT",
        "Student Name": "Laxmi Hembram",
        "Caste": "SC",
        "Class": 1,
        "Age": 6,
        "Gender": "F"
    }
];

// Create an object to store counts for each school name and gender
const schoolGenderCounts = {};

// Iterate through the JSON data and count school names with genders
jsonData.forEach(item => {
    const schoolName = item["School Name"];
    const gender = item["Gender"];

    // Create a key in the format "School Name - Gender"
    const key = `${schoolName} - ${gender}`;

    if (schoolGenderCounts[key]) {
        schoolGenderCounts[key]++;
    } else {
        schoolGenderCounts[key] = 1;
    }
});

// Print the counts for each school name with gender
console.log("School Name - Gender Counts:");
for (const key in schoolGenderCounts) {
    console.log(`${key}: ${schoolGenderCounts[key]}`);
}
