const hero = {
  elementID: "hero",
  charName: "Wizard",
  avatar: "images/wizard.png",
  health: "60",
  diceRoll: 6,
};

const monster = {
  elementID: "monster",
  charName: "Orc",
  avatar: "images/orc.png",
  health: "10",
  diceRoll: 4,
};

const { elementID, name, avatar, health, diceRoll } = data;

function renderCharacter(data) {
  document.getElementById(elementID).innerHTML = `
          <div class="character-card">
            <h4 class="name"> ${charName} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
          </div> 
`;
}

renderCharacter(hero);
renderCharacter(monster);
