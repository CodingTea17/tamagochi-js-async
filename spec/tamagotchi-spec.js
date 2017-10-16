import { Tamagotchi, Food } from './../js/tamagotchi.js';

describe('Tamagotchi', () => {
  let g_pig = new Tamagotchi;

  beforeEach(() => {
    jasmine.clock().install();
    g_pig.foodlevel = 10;
    g_pig.name = "Gumdrop";
    g_pig.color = "brindle";
    g_pig.digestFood();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should give our guinea pig a name', () => {
    expect(g_pig.name).toEqual("Gumdrop");
  });

  it('should start our guinea pig inital foodlevel to 10', () => {
    expect(g_pig.foodlevel).toEqual(10);
  });

  it('should remove one foodlevel every 5 minutes', () => {
    jasmine.clock().tick(300001);
    expect(g_pig.foodlevel).toEqual(9);
  });

  it('should feed gumdrop', () => {
    // 15 minutes pass and Gumdrop has a food level of 7
    jasmine.clock().tick(900001);
    // Make a giant carrot for Gumdrop
    let carrot = new Food("Giant Carrot", 3);
    g_pig.feedFood(carrot);
    expect(g_pig.foodlevel).toEqual(10);
  });
})
