export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodlevel = 10;
  }

  digestFood() {
    setInterval(() => {
     this.foodlevel--;
   }, 300000);
  }
}
