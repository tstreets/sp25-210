console.log("Pokemon");

function showAlert() {
  alert("Annoying message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
  const userConfirmed = confirm("You are robot, right?");

  console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;

console.log(confirmBtnRef);

function showPrompt() {
  const userInput = prompt(
    "What's your favorite flavor of ice cream?",
    "vanilla"
  );

  console.log(userInput);
}

// Code for Pokemon Journey

const journeyRef = document.querySelector("#journey");

let myPokemon = null;

function startJourney() {
  journeyRef.innerHTML =
    "<p>You are so excited, today you get your first pokemon! Sitting in front of you are pokeballs for Bulbasaur, Charmander, Squirtle. Choose your pokemon:</p>";

  const starterPokemon = [
    {
      name: "Bulbasaur",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "Charmander",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "Squirtle",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    },
  ];

  for (let i = 0; i < starterPokemon.length; i++) {
    const pokemon = starterPokemon[i];
    const newSection = document.createElement("section");

    newSection.innerHTML +=
      "<img height='100' src='" +
      pokemon.img +
      "' alt='" +
      pokemon.name +
      "' />";

    // const newImg = document.createElement("img");
    // newImg.height = "100";
    // newImg.src = pokemon.img;
    // newImg.alt = pokemon.name;
    // newSection.appendChild(newImg);

    newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

    // Setting data attributes to be used in the choosePokemon function
    newSection.dataset.pokemonName = pokemon.name;
    newSection.dataset.pokemonImage = pokemon.img;
    newSection.onclick = choosePokemon;

    journeyRef.appendChild(newSection);
    console.log(pokemon);
  }
}

function choosePokemon(e) {
  console.log(e.currentTarget);
  // Getting data attributes from the option selected
  const pokemonName = e.currentTarget.dataset.pokemonName;
  const pokemonImg = e.currentTarget.dataset.pokemonImage;

  const confirmChoice = confirm("You chose " + pokemonName);

  if (confirmChoice) {
    journeyRef.innerHTML +=
      "You chose " + pokemonName + " as your starter pokemon.";

    // creating a new button choice for the players based on pokemon
    const atkBtn = document.createElement("button");
    atkBtn.onclick = attackMove;

    // if / else blocks checking what pokemon was chosen
    // dynamically setting button text and data attribute
    if (pokemonName === "Bulbasaur") {
      atkBtn.innerHTML = "Vine Whip";
      atkBtn.dataset.move = "Vine Whip";
    } else if (pokemonName === "Charmander") {
      atkBtn.innerHTML = "Ember";
      atkBtn.dataset.move = "Ember";
    } else if (pokemonName === "Squirtle") {
      atkBtn.innerHTML = "Water Gun";
      atkBtn.dataset.move = "Water Gun";
    }
    journeyRef.appendChild(atkBtn);

    const runAwayButton = document.createElement("button");
    runAwayButton.innerHTML = "Run Away";
    runAwayButton.onclick = runAway;
    journeyRef.appendChild(runAwayButton);

    // saving their pokemon for future uses without
    myPokemon = { name: pokemonName, img: pokemonImg };
  } else {
    journeyRef.innerHTML += "";
  }
}

function runAway() {
  //
  journeyRef.innerHTML = "You ran away";
}

function attackMove(e) {
  // Getting data attributes from the option selected
  const attackMove = e.currentTarget.dataset.move;

  journeyRef.innerHTML += myPokemon.name + " used " + attackMove;

  // creating a new button choice based on move
  if (attackMove === "Vine Whip") {
    // do this
  } else if (attackMove === "Ember") {
    // do that
  } else {
    // last options
  }
}
