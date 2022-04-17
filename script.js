const verbs = [
    'dazzle', 
    'tickle', 
    'surprise', 
    'delight', 
    'trip',
    'snoop on',
    'trap',
    'defeat',
    'poke', 
    'trip up',
    'challenge',
    'harass',
    'critique',
    'run over',
    'imprison',
    'sweet-talk',
    'mimic',
    'taunt'
]

const enemies = [
    'Joker',
    'Killer Croc',
    'Carmine Falcone',
    'Poison Ivy',
    'Deadshot',
    'Clayface',
    'the Penguin',
    'Deathstroke',
    'Mr. Freeze',
    'Scarecrow',
    'Bane',
    'the Riddler',
    'Two-Face',
    'Ra\'s Al Ghul'
]

const weapons = [
    'batarang',
    'the Batmobile',
    'a kryptonite spear',
    'his gauntlets',
    'sonar',
    'shark repellent',
    'a toaster',
    'therapy',
    'a sandwich',
    'a coffee pot',
    'an elastic band',
    'karate',
    'a kitty cat',
    'a famous landscape painting',
    'his last shred of dignity',
    'laser beams',
    'his trust fund',
    'a dragon',
    'a toilet seat',
    'a background story',
    'complex guilt',
    'his mother\'s pearls'
]

const randomMessage = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(`Why did Batman cross the road? To ${randomVerb} ${randomEnemy} with ${randomWeapon}.`);
};

randomMessage();