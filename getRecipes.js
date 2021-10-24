
//Helper functions
function logTheObj(obj) {
  var ret = "";
  for (var o in obj) {
      var data = obj[o];
      if (typeof data !== 'object') {
          ret += "<li>" + o + " : " + data + "</li>";
      } else {
          ret += "<li>" + o + " : " + logTheObj(data) + "</li>";
      }
  }
  return "<ul>" + ret + "</ul>";
}

function fetchCall(query){
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=67931e62b88649359913dbc496b0ad08&${query}&instructionsRequired=true&addRecipeInformation=true`).then((response) => {
    console.log(response);
    return response.json();
  }).then((data) => {
    console.log(data.results);
    let jsonContent = logTheObj(data.results);
    document.querySelector(".card-body").innerHTML =
      `${jsonContent}`;
  });
}

//Get all recipes for pasta
document.querySelector(".name").addEventListener("click", () => {
 fetchCall("query=pasta")
});

//Get all recipes based on diet
document.querySelector(".diet").addEventListener("click", () => {
  fetchCall("diet=vegetarian")
});

//Get all recipes based on intolerance
document.querySelector(".intolerance").addEventListener("click", () => {
  fetchCall("intolerances=gluten")
});

//Get all recipes based on max time
document.querySelector(".time").addEventListener("click", () => {
  fetchCall("maxReadyTime=20")
});

//Get all recipes based on min/max calories
document.querySelector(".calories").addEventListener("click", () => {
  fetchCall("maxCalories=800")
});

//Get all recipes based on your fridge items
document.querySelector(".fridge").addEventListener("click", () => {
  fetchCall("includeIngredients=tomato,cheese");
});

//Get all recipes based on cuisine
document.querySelector(".cuisine").addEventListener("click", () => {
  fetchCall("cuisine=italian");
});
