export class Tamagotchi {
  constructor(name, color) {
    this.name = name;
    this.foodlevel = 10;
    this.color = color;
    this.stamina = 10;
  }
  // Eating Stuff
  digestFood() {
    setInterval(() => {
      if(this.foodlevel > 0){
        this.foodlevel--;
      } else {

      }
   }, 300000);
  }
  feedFood(some_food) {
    if(this.foodlevel + some_food.energy > 10){
      this.foodlevel = 10;
    } else {
      this.foodlevel += some_food.energy;
    }
  }
  // Stamina Stuff
  expendStaminaChilling() {
    setInterval(() => {
      if(this.stamina > 0){
        this.stamina--;
      } else {

      }
    }, 420000);
  }
}
////////////////////////////////////////
export class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}
