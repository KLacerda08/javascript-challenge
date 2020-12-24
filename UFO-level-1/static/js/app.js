// assign data from data.js to a descriptive variable
var ufoRecords = data;

// ******* CONSTRUCT MAIN TABLE *******
// Use a function that can be reused with the filtered data upon date input

// Find the table body html element
var tbody = d3.select("#ufo-table").select("tbody");

function buildTable(ufoRecords) {
    // Use d3 to add rows for each UFO sighting record, add cells, populate each cell
    ufoRecords.forEach(function(record) {
        var row = tbody.append("tr");
        Object.entries(record).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// call the function
buildTable(ufoRecords);

// ******* CONSTRUCT the EVENT LISTENER *******

// Select the button and create event handler for button
var button = d3.select("#filter-btn");
button.on("click", runEnter);

// Select the form and create event handler for form
var form = d3.select("form");
form.on("submit", runEnter);

// Complete the event handler function
function runEnter() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // create a filtered data set 
    var filteredData = ufoRecords.filter(record => record.datetime === inputValue);
    console.log(filteredData);
    //clear the table 
    tbody.html("");
    // build the filteredtable if the input value is not blank 
    if (inputValue !== "") {
        buildTable(filteredData);}
        else {
            buildTable(ufoRecords);}
};
