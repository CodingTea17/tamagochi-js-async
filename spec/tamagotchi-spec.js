import { Tamagotchi, Food } from './../js/tamagotchi.js';

describe('Tamagotchi', () => {
  let g_pig = new Tamagotchi;

  beforeEach(() => {
    jasmine.clock().install();
    g_pig.foodlevel = 10;
    g_pig.stamina = 10;
    g_pig.name = "Gumdrop";
    g_pig.color = "brindle";
    g_pig.digestFood();
    g_pig.expendStaminaChilling();
    g_pig.moodSwing();
    g_pig.mood = 10;
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

  it('should drop one stamina level every 7 minutes', () => {
    jasmine.clock().tick(420001);

    expect(g_pig.stamina).toEqual(9);
  });

  it('should add one stamina level for nap', () => {
    jasmine.clock().tick(420001);
    g_pig.nap()
    expect(g_pig.stamina).toEqual(10)
  });

  it('should add three stamina level for sleep', () => {
    jasmine.clock().tick(1260001);
    g_pig.sleep()
    expect(g_pig.stamina).toEqual(10)
  });

  it('should increase the tamagotchi\'s by two', () => {
    jasmine.clock().tick(360001);
    g_pig.play()
    expect(g_pig.mood).toEqual(10)
    expect(g_pig.stamina).toEqual(8)
  });

  it('should decrease mood by 1 every three minutes', () => {
    jasmine.clock().tick(180001);
    expect(g_pig.mood).toEqual(9)
  });
});
