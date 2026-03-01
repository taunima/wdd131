const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,
  image: "images/snortleblat.png",

  attacked: function () {
    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      alert(this.name + " has died.");
    }

    renderCharacter();
  },

  levelUp: function () {
    this.level += 1;
    renderCharacter();
  }
};

function renderCharacter() {
  document.getElementById("characterName").textContent = character.name;
  document.getElementById("characterClass").textContent = character.class;
  document.getElementById("characterLevel").textContent = character.level;
  document.getElementById("characterHealth").textContent = character.health;
  document.getElementById("characterImage").src = character.image;
}

document.getElementById("attackBtn").addEventListener("click", function () {
  character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", function () {
  character.levelUp();
});

renderCharacter();