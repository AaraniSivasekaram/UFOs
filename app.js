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

