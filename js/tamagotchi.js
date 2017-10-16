export class Tamagotchi {
  constructor(name, color) {
    this.name = name;
    this.foodlevel = 10;
    this.color = color;
  }

  digestFood() {
    setInterval(() => {
     this.foodlevel--;
     console.log(this.foodlevel);
   }, 300000);
  }

  feedFood(some_food) {
    this.foodlevel += some_food.energy;
  }
}

export class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}
