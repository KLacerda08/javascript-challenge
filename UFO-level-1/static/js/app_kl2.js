// from data.js
var ufoRecords = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

// var filteredData = people.filter(person => person.bloodType === inputValue);
// console.log(filteredData);  

// var patients = filteredData.map(function(patient) {
//   return (`${patient.fullName}: ${patient.age}`);
// });

    var filteredData = ufoRecords.filter(record => record.datetime === inputValue);
    var tbody = d3.select("#ufo-table").select("tbody");
    // Use d3 to append one table row `tr` for each UFO record object
    ufoRecords.forEach(function(record) {
        console.log(record);
        var row = tbody.append("tr");
    });





    // var data = filteredData(function(record.datetime) {
    // //     return (
    //     table.append("tr").text(`${record.datetime}`),
        // table.append("tr").text(`${record.state}`),
        // table.append("tr").text(`${record.country}`),
        // table.append("tr").text(`${record.shape}`),
        // table.append("tr").text(`${record.durationMinutes}`),
        // table.append("tr").text(`${record.comments}`),
 

    // Date	City	State	Country	Shape	Duration	Comments

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
 
    };


    //example of selecting nested elements
    // d3.select("tr").selectAll("td").style('background-color','yellow');


// CODE that works

// ******* CONSTRUCT MAIN TABLE - SIMPLE VERSION, NO FUNCTION *******

// // Find the table body html element
// var tbody = d3.select("#ufo-table").select("tbody");
// console.log(ufoRecords);

// Use d3 to add rows for each UFO sighting record, add cells, populate each cell
// ufoRecords.forEach(function(record) {
// //   console.log(record);
//   var row = tbody.append("tr");
//   Object.entries(record).forEach(function([key, value]) {
//     // console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });


// ******* CONSTRUCT MAIN TABLE - WITH A FUNCTION *******
// // Find the table body html element
// var tbody = d3.select("#ufo-table").select("tbody");

// function buildTable(ufoRecords) {
//     // Use d3 to add rows for each UFO sighting record, add cells, populate each cell
//     ufoRecords.forEach(function(record) {
//         var row = tbody.append("tr");
//         Object.entries(record).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// }

// // call the function
// buildTable(ufoRecords);


//  ***** In progress but at least the first date search worked ****
//Complete the event handler function 
// function runEnter() {
//     //clear the table 
//     tbody.html("");   
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // create a filtered data set 
//     var filteredData = ufoRecords.filter(record => record.datetime === inputValue);
//     // // Use d3 to add rows for each filtered UFO sighting record, add cells, populate each cell
//     // filteredData.forEach(function(record) {
//     //     // console.log(record);
//     //     var tbody = d3.select("#ufo-table").select("tbody");
//     //     var row = tbody.append("tr");
//     //     Object.entries(record).forEach(function([key, value]) {
//     //     // console.log(key, value);
//     //         var cell = row.append("td");
//     //         cell.text(value);
//     //     });
//     // });
//     // build new table with filtered data
//     console.log(filteredData);
//     buildTable(filteredData);
// };