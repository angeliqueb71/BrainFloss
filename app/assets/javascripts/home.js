// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/



// random numbers
  // var whichVid = Math.floor((Math.random() * 3) + 1);
  // var swPeeps = Math.floor((Math.random() * 87) + 1);
  // var pokePeeps = Math.floor((Math.random() * 721) + 1);
  //
  //
  // // star wars api
  // $.getJSON("https://swapi.co/api/people/" + swPeeps,
  //   function(response) {
  //     console.log(response);
  //
  //     var name = response.name;
  //     var height = "Height: " + response.height;
  //     var mass = "Mass: " + response.mass;
  //     var hair = "Hair: " + response.hair_color;
  //     var skin = "Skin: " + response.skin_color;
  //     var eyes = "Eyes: " + response.eye_color;
  //     var birth_year = "Birth Year: " +response.birth_year;
  //     var gender = "Gender: " + response.gender;
  //     var species = response.species;
  //     var homeworld = response.homeworld;
  //     var films = response.films;
  //
  //
  //     $.getJSON(species + "?format=json",
  //       function(response) {
  //         console.log(response);
  //
  //         var speciesName = "Species: " + response.name;
  //         var content = document.getElementById("content");
  //
  //         var s = document.createElement("p");
  //         s.innerHTML = speciesName;
  //         content.appendChild(s);
  //       }
  //     );
  //
  //
  //     $.getJSON(homeworld + "?format=json",
  //       function(response) {
  //         console.log(response);
  //
  //         var homeworldName = "Homeworld: " + response.name;
  //         var content = document.getElementById("content");
  //
  //         var eight = document.createElement("p");
  //         var content = document.getElementById("content");
  //         eight.innerHTML = homeworldName;
  //         content.appendChild(eight);
  //       }
  //     );
  //
  //
  //     for (i = 0; i < response.films.length; i++) {
  //
  //       var film = response.films[i];
  //
  //         $.getJSON(film + "?format=json",
  //           function(response) {
  //             console.log(response);
  //
  //             var filmsTitle = response.title;
  //             var filmContent = document.getElementById("filmContent");
  //
  //             var nine = document.createElement("p");
  //             var content = document.getElementById("content");
  //             nine.innerHTML = filmsTitle;
  //             filmContent.appendChild(nine);
  //           }
  //         );
  //     }
  //
  //
  //     // HTML elements stored in variables
  //     var headline = document.getElementById("hTest");
  //     var content = document.getElementById("content");
  //     var one = document.createElement("p");
  //     var two = document.createElement("p");
  //     var three = document.createElement("p");
  //     var four = document.createElement("p");
  //     var five = document.createElement("p");
  //     var six = document.createElement("p");
  //     var seven = document.createElement("p");
  //
  //     // populates HTML with API data
  //     headline.innerHTML = name;
  //
  //     one.innerHTML = height;
  //     two.innerHTML = mass;
  //     three.innerHTML = hair;
  //     four.innerHTML = skin;
  //     five.innerHTML = eyes;
  //     six.innerHTML = birth_year;
  //     seven.innerHTML = gender;
  //
  //     content.appendChild(one);
  //     content.appendChild(two);
  //     content.appendChild(three);
  //     content.appendChild(four);
  //     content.appendChild(five);
  //     content.appendChild(six);
  //     content.appendChild(seven);
  //   }
  // );
  //
  //
  // // pokemon api
  // $.getJSON("https://pokeapi.co/api/v2/pokemon/" + pokePeeps + "/",
  //   function(response) {
  //     console.log(response);
  //
  //     var pokeName = response.name;
  //
  //     // HTML elements stored in variables
  //     var pokeContent = document.getElementById("pokeContent");
  //     var poke1 = document.createElement("p");
  //
  //     // populates HTML with API data
  //
  //     poke1.innerHTML = pokeName;
  //     pokeContent.appendChild(poke1);
  //   }
  // );
  //
  //
  // // chuck Norris jokes api
  // $.getJSON("https://api.icndb.com/jokes/random",
  //   function(response) {
  //     console.log(response);
  //
  //     var joke = response.value.joke;
  //
  //     // HTML elements stored in variables
  //     var randomJoke = document.getElementById("randomJoke");
  //     var joke1 = document.createElement("span");
  //
  //     // populates HTML with API data
  //
  //     joke1.innerHTML = joke;
  //     randomJoke.appendChild(joke1);
  //   }
  // );
