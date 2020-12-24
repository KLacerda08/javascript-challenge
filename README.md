# UFO Sightings

![Aliens Have Landed in Grover's Mill, NJ!](Images/War-of-the-Worlds-for-web.jpg)

## Table of contents
* [Assignment](#assignment)
* [Data Sources](#data_sources)
* [UFO Table Design](#design)
* [References](#ref)

## Assignment
Use JavaScript programming to construct an interactive table of UFO sightings.  

## Data Sources
The basic website design (html structure and css, as well as file links) were provided in the files below: 
- UFO sightings data: https://github.com/KLacerda08/javascript-challenge/tree/main/UFO-level-1/Resources/Instructions/StarterCode/static/js/data.js
- Basic website design
* html: https://github.com/KLacerda08/javascript-challenge/tree/main/UFO-level-1/Resources/Instructions/StarterCode/index.html
* css: https://github.com/KLacerda08/javascript-challenge/tree/main/UFO-level-1/Resources/Instructions/StarterCode/static/css/style.css
* app.js file (essentially blank)

## UFO Table Design
Using the app.js file, a descriptive variable was assigned to link to the data.js file.  A javascript 
function was designed to build the table with all the data. This table is displayed on the page upon 
opening. An event listener function was then designed to "filter" the table data according to the date 
entered into the search field. Mechanically, upon pressing enter in the search field or pressing the 
"Filter Table" button, this function: 
- creates a filtered dataset according to the date entered into the search field
- reconstructs and displays the table with the filtered data 

If the date is not in the dataset, the table is blank. If the search field is cleared, it reconstructs the original table.  

## References
Readme image source: https://communitynews.org/2018/09/07/martian-weekend-80th-anniversary-war-of-the-worlds/