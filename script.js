const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");
const display = document.getElementById("display");


searchButton.onclick = handleClick;
input.onkeyup = handleEnter;

const ul = document.createElement("ul");
const Title = document.createElement("li");
const RunTime = document.createElement("li");
const Plot = document.createElement("li");
const Director = document.createElement("li");


function handleClick() {
  if (input.value === "") console.log("No escribiste nada maestro");
  else {
    if (input.value === Title.innerHTML)
    console.log("ya tas viendo la peli troesma");
    else {
      searchButton.disabled = true;
      
      fetch("https://www.omdbapi.com/?t=" + input.value + "&apikey=835e12a")
      .then((response) => response.json())
      .then((data) => {
        if (data.Title === undefined)
        console.log("No encontramo la peli pa");
        else {
          Title.innerHTML = data.Title;
          RunTime.innerHTML = data.Runtime;
          Director.innerHTML = data.Director;
          Plot.innerHTML = data.Plot;
          ul.className = 'displayList';
          
          ul.appendChild(Title);
          ul.appendChild(RunTime);
          ul.appendChild(Director);
          ul.appendChild(Plot);
          display.appendChild(ul);
            }
            searchButton.disabled = false;
          });
      }
    }
  }
  

function handleEnter(event) {
    if (event.which === 13) handleClick();
  }