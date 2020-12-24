// assign data from data.js to a descriptive variable
var ufoRecords = data;

// construct main table
var tbody = d3.select("tbody");
console.log(ufoRecords);

// Step 5: Use d3 to update each cell
ufoRecords.forEach(function(record) {
  console.log(record);
  var row = tbody.append("tr");
  Object.entries(record).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});



// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// // var form = d3.select("#datetime");

// // Create event handlers 
// button.on("click", runEnter);
// // form.on("submit", runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     var filteredData = ufoRecords.filter(record => record.datetime === inputValue);
    
//     var tbody = d3.select("#ufo-table").select("tbody");
    
//     // Use d3 to append one table row `tr` for each UFO record object
//     // this shows in console long like an separate rows of objects
//     ufoRecords.forEach(function(record) {
//         console.log(record);
//         var row = tbody.append("tr");
//     });

//     // Use d3 to append 1 cell per UFO report value (datetime, state, country, shape
//     // durationMinutes, comments), and update each cell's text
//     Object.entries(record).forEach(function([key, value]) {
//         var cell = row.append("td");
//         cell.text(value);
//         });


//     };


        // var data = filteredData(function(record.datetime) {
    // //     return (
    //     table.append("tr").text(`${record.datetime}`),
        // table.append("tr").text(`${record.state}`),
        // table.append("tr").text(`${record.country}`),
        // table.append("tr").text(`${record.shape}`),
        // table.append("tr").text(`${record.durationMinutes}`),
        // table.append("tr").text(`${record.comments}`),
 


    // var patientsAsString = patients.join(', ');



    // // remove any children from the table
    // table.html("");

    // define variables?
    // var patients = filteredData.map(function(patient) {
    //     return (`${patient.fullName}: ${patient.age}`);
    //   });
    
    // var date = filteredData.map(function(record) {
    //     return (`${record.datetime}`);
    //   });
 

    //example of selecting nested elements
    // d3.select("tr").selectAll("td").style('background-color','yellow');