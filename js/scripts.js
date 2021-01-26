// Create a website where you can keep track of all the places you've been.
//  Each destination should be an object with multiple properties, like 
//  location, landmarks, time of year, notes, etc. Display those properties 
//  when a user clicks on a place's name. Complete the business logic for your
//  object (including specs, which should go in your README).
//   If you complete the business logic, you may work on adding a user 
//   interface.

// Business Logic for PlacesIveBeen -----

function  PlacesIveBeen() {
  this.places = {};
  this.currentId = 0;
}

PlacesIveBeen.prototype.addPlace = function(place)  {
  place.id = this.assignId();
  this.places[place.id] = place;
}

PlacesIveBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}

PlacesIveBeen.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  } 
  return false;
}

// Business Logic for Place ------
function Place(location, landmarks, timeOfYear, notes)  {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.update = function() {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
// User Interface Logic
let placesIveBeen = new PlacesIveBeen();

$(document).ready(function()  {
  $("#places").submit(function(event) {
    event.preventDefault();

const inputLocation = $("#location").val();
const inputLandmark = $("#landmark").val();
const inputTimeOfYear = $("#timeOfYear").val();
const inputNotes = $("#notes").val();
let newPlace = new Place(inputLocation, inputLandmark, inputTimeOfYear, inputNotes)
placesIveBeen.addPlace(newPlace);
console.log(placesIveBeen.places);
  });
});