export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodlevel = 10;
    this.color = '#ffffff';
    this.stamina = 10;
    this.mood = 10;
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

  moodSwing() {
    setInterval(() => {
      if(this.mood > 0) {
        this.mood--;
      } else {

      }
    }, 180000);
  }

  nap() {
    if(this.stamina + 1 > 10) {
      this.stamina = 10;
    } else {
      this.stamina++;
    }
    this.foodlevel -= 1;
  }

  sleep() {
    if(this.stamina + 3 > 10) {
      this.stamina = 10;
    } else {
      this.stamina+= 3;
    }
    this.foodlevel -= 2;
  }

  play() {
    if(this.mood + 2 > 10) {
      this.mood = 10;
    } else {
      this.mood += 2;
    }
    this.stamina -= 2;
  }

}
////////////////////////////////////////
export class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}
