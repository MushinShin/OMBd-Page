const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");
const display = document.getElementById("display");

searchButton.onclick = handleClick;
input.onkeyup = handleEnter;

const ul = document.createElement("ul");
const title = document.createElement("li");
const runTime = document.createElement("li");
const plot = document.createElement("li");
const director = document.createElement("li");

function handleClick() {
  // if (input.value === "") console.log("No escribiste nada maestro");
  if (!input.value) return console.log("No escribiste nada maestro");

  if (input.value === Title.innerHTML)
    return console.log("ya tas viendo la peli troesma");

  searchButton.disabled = true;

  fetch("https://www.omdbapi.com/?t=" + input.value + "&apikey=835e12a")
    .then((response) => response.json())
    .then(({ Title, Runtime, Director, Plot }) => {
      if (!Title) return console.log("No encontramo la peli pa");

      title.innerHTML = Title;
      runTime.innerHTML = Runtime;
      director.innerHTML = Director;
      plot.innerHTML = Plot;
      ul.className = "displayList";

      ul.append([title, runTime, director, plot]);
      ul.appendChild(title);
      ul.appendChild(runTime);
      ul.appendChild(director);
      ul.appendChild(plot);
      display.appendChild(ul);

      searchButton.disabled = false;
    });
}

function handleEnter(event) {
  if (event.which === 13) handleClick();
}

const ojb = { key: 1, key2: 2, etc };
// const uno = ojb.key;
// const dos = ojb.key2;

// obj desestructuracion
const { key, key2, etc } = ojb;

const a = false;

const arr = ["uno", "dos", "tres", "cuatro"];

//const uno = arr[0];
//const dos = arr[1];

const [uno, dos, ...etc] = arr;

//Spread operator

const obj1 = { nombre: "alavrez" };
const obj2 = { apellido: "alejandro" };

//Combinar objeetos en uno nuevo en una sola linea de codigo, sin usar apply, usando sintaxis nueva
//const obj3 = {nombre: obj1.nombre, apellido: obj2.apellido}

const obj3 = { ...obj1, ...obj2 };

//Early Return Statement
if (!a) return console.log("error");
console.log("Sigo");

// function handleClick() {
//   // if (input.value === "") console.log("No escribiste nada maestro");
//   if (!input.value) console.log("No escribiste nada maestro");
//   else {
//     if (input.value === Title.innerHTML)
//       console.log("ya tas viendo la peli troesma");
//     else {
//       searchButton.disabled = true;

//       fetch("https://www.omdbapi.com/?t=" + input.value + "&apikey=835e12a")
//         .then((response) => response.json())
//         .then((data) => {
//           if (Title === undefined) console.log("No encontramo la peli pa");
//           else {
//             Title.innerHTML = data.Title;
//       r     RunTime.innerHTML = data.Runtime;
//             Director.innerHTML = data.Director;
//             Plot.innerHTML = data.Plot;
//             ul.className = "displayList";

//             ul.appendChild(Title);
//             ul.appendChild(RunTime);
//             ul.appendChild(Director);
//             ul.appendChild(Plot);
//             display.appendChild(ul);
//           }
//           searchButton.disabled = false;
//         });
//     }
//   }
// }
