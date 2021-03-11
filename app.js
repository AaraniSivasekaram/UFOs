// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Creat function for building table
function buildTable(data) {
    // Clear out existing data
    tbody.html("");
    // Loop through each object in the data and append each value in a row
    data.forEach((dataRow) => {
      let row = tbody.append("tr");
      // Loop through each field and add each value as a table cell
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
  });
}

// Create handle click function
function handleClick() {
    let date = d3.select("#datetime").property("value");
    // Create filter data variable
    let filteredData = tableData;
    // Add if statement to filter Date input
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table using filtered data, if no date was entered, filterData will be original dataTable
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);