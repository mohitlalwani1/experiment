import { Experiment } from '../types/experiments';

export const experiments: Experiment[] = [
  {
    id: 'volcano',
    title: 'Volcanic Eruption',
    category: 'Chemistry',
    description: 'Create a spectacular volcanic eruption using an acid-base reaction!',
    difficulty: 'Easy',
    duration: '10 mins',
    materials: ['Baking Soda', 'Vinegar', 'Red Food Coloring', 'Dish Soap', 'Container'],
    steps: [
      {
        id: 1,
        instruction: 'Add 2 tablespoons of baking soda to your volcano container',
        action: { type: 'measure' },
        observation: 'White powder at the bottom'
      },
      {
        id: 2,
        instruction: 'Add a few drops of red food coloring',
        action: { type: 'mix' },
        observation: 'Colored baking soda mixture'
      },
      {
        id: 3,
        instruction: 'Add a squirt of dish soap',
        action: { type: 'mix' },
        observation: 'Soapy mixture ready'
      },
      {
        id: 4,
        instruction: 'Pour vinegar into the volcano!',
        action: { type: 'mix', duration: 3000 },
        observation: 'ERUPTION! Red foamy lava flows out!',
        visual: {
          before: '🌋',
          after: '💥🔥'
        }
      }
    ],
    funFact: 'Real volcanoes erupt when molten rock (magma) rises through cracks in Earth\'s crust!',
    safetyTips: ['Wear safety goggles', 'Do this experiment in a sink or outside', 'Don\'t drink the mixture']
  },
  {
    id: 'rainbow-density',
    title: 'Rainbow Density Tower',
    category: 'Physics',
    description: 'Stack colorful liquids to create a beautiful rainbow based on density!',
    difficulty: 'Medium',
    duration: '15 mins',
    materials: ['Honey', 'Dish Soap', 'Water', 'Oil', 'Rubbing Alcohol', 'Food Coloring', 'Tall Glass'],
    steps: [
      {
        id: 1,
        instruction: 'Pour honey into the glass as the first layer',
        action: { type: 'measure' },
        observation: 'Golden layer at the bottom'
      },
      {
        id: 2,
        instruction: 'Slowly pour colored dish soap on top',
        action: { type: 'wait', duration: 2000 },
        observation: 'Two distinct layers forming'
      },
      {
        id: 3,
        instruction: 'Carefully add colored water',
        action: { type: 'wait', duration: 2000 },
        observation: 'Three beautiful layers!'
      },
      {
        id: 4,
        instruction: 'Add vegetable oil slowly',
        action: { type: 'wait', duration: 2000 },
        observation: 'Four layers stacked!'
      },
      {
        id: 5,
        instruction: 'Finally, add colored rubbing alcohol',
        action: { type: 'wait', duration: 2000 },
        observation: 'Perfect rainbow tower complete! 🌈',
        visual: {
          before: '🥛',
          after: '🌈'
        }
      }
    ],
    funFact: 'Density determines how materials stack. Honey is densest, so it sinks, while alcohol is least dense and floats on top!',
    safetyTips: ['Pour slowly to avoid mixing', 'Use a clear glass for best visibility', 'Keep rubbing alcohol away from heat']
  },
  {
    id: 'invisible-ink',
    title: 'Secret Invisible Ink',
    category: 'Chemistry',
    description: 'Write secret messages that can only be revealed with heat!',
    difficulty: 'Easy',
    duration: '8 mins',
    materials: ['Lemon Juice', 'Water', 'Cotton Swab', 'White Paper', 'Light Bulb or Iron'],
    steps: [
      {
        id: 1,
        instruction: 'Mix equal parts lemon juice and water',
        action: { type: 'mix' },
        observation: 'Clear liquid ready'
      },
      {
        id: 2,
        instruction: 'Dip cotton swab in the mixture',
        action: { type: 'observe' },
        observation: 'Swab is wet'
      },
      {
        id: 3,
        instruction: 'Write your secret message on paper',
        action: { type: 'wait', duration: 2000 },
        observation: 'Message is invisible when dry'
      },
      {
        id: 4,
        instruction: 'Hold paper near a heat source (light bulb)',
        action: { type: 'heat', duration: 3000 },
        observation: 'Message appears in brown letters! 📝✨',
        visual: {
          before: '📄',
          after: '📝'
        }
      }
    ],
    funFact: 'The lemon juice oxidizes and turns brown when heated, revealing your message. This technique has been used by spies throughout history!',
    safetyTips: ['Don\'t touch the heat source', 'Adult supervision required', 'Don\'t leave paper on heat too long']
  },
  {
    id: 'static-electricity',
    title: 'Static Electricity Magic',
    category: 'Physics',
    description: 'Make objects move without touching them using static electricity!',
    difficulty: 'Easy',
    duration: '5 mins',
    materials: ['Balloon', 'Wool Fabric', 'Small Paper Pieces', 'Your Hair'],
    steps: [
      {
        id: 1,
        instruction: 'Blow up the balloon and tie it',
        action: { type: 'observe' },
        observation: 'Balloon is ready'
      },
      {
        id: 2,
        instruction: 'Rub the balloon on wool fabric vigorously',
        action: { type: 'shake', duration: 2000 },
        observation: 'Building up static charge...'
      },
      {
        id: 3,
        instruction: 'Hold balloon near small paper pieces',
        action: { type: 'observe', duration: 2000 },
        observation: 'Paper pieces jump to the balloon! ⚡'
      },
      {
        id: 4,
        instruction: 'Try holding balloon near your hair',
        action: { type: 'observe', duration: 2000 },
        observation: 'Hair stands up and follows the balloon! 🎈',
        visual: {
          before: '🎈',
          after: '⚡'
        }
      }
    ],
    funFact: 'Static electricity is caused by an imbalance of electrons. Rubbing transfers electrons, creating an electric charge!',
    safetyTips: ['Works best on dry days', 'Harmless but might feel tingly', 'Don\'t do near electronics']
  },
  {
    id: 'crystal-garden',
    title: 'Instant Crystal Garden',
    category: 'Chemistry',
    description: 'Grow beautiful crystals in just hours using a supersaturated solution!',
    difficulty: 'Medium',
    duration: '24 hours',
    materials: ['Borax Powder', 'Hot Water', 'Pipe Cleaners', 'String', 'Food Coloring', 'Jar'],
    steps: [
      {
        id: 1,
        instruction: 'Shape pipe cleaners into fun shapes (stars, hearts, etc)',
        action: { type: 'observe' },
        observation: 'Shapes are ready'
      },
      {
        id: 2,
        instruction: 'Mix 3 tablespoons of borax per cup of hot water',
        action: { type: 'mix', duration: 2000 },
        observation: 'Solution is getting cloudy'
      },
      {
        id: 3,
        instruction: 'Add food coloring and stir until borax dissolves',
        action: { type: 'mix', duration: 2000 },
        observation: 'Clear colored solution formed'
      },
      {
        id: 4,
        instruction: 'Hang pipe cleaner shapes in the solution',
        action: { type: 'observe' },
        observation: 'Shapes are submerged'
      },
      {
        id: 5,
        instruction: 'Wait overnight for crystals to form',
        action: { type: 'wait', duration: 3000 },
        observation: 'Sparkling crystals cover the shapes! 💎✨',
        visual: {
          before: '🧪',
          after: '💎'
        }
      }
    ],
    funFact: 'As water cools, it can\'t hold as much borax, so crystals form on the pipe cleaners. This is how real gemstones form over millions of years!',
    safetyTips: ['Adult supervision required', 'Use hot water carefully', 'Don\'t eat borax', 'Wash hands after']
  },
  {
    id: 'slime',
    title: 'Perfect Slime Science',
    category: 'Chemistry',
    description: 'Create stretchy, satisfying slime through polymer chemistry!',
    difficulty: 'Easy',
    duration: '10 mins',
    materials: ['White Glue', 'Borax', 'Water', 'Food Coloring', 'Bowl', 'Spoon'],
    steps: [
      {
        id: 1,
        instruction: 'Pour 1/2 cup of glue into a bowl',
        action: { type: 'measure' },
        observation: 'White glue in bowl'
      },
      {
        id: 2,
        instruction: 'Add food coloring and mix',
        action: { type: 'mix', duration: 2000 },
        observation: 'Colored glue mixture'
      },
      {
        id: 3,
        instruction: 'In another cup, mix 1 teaspoon borax with water',
        action: { type: 'mix', duration: 1500 },
        observation: 'Borax solution ready'
      },
      {
        id: 4,
        instruction: 'Slowly add borax solution to glue while stirring',
        action: { type: 'mix', duration: 3000 },
        observation: 'Mixture is thickening...'
      },
      {
        id: 5,
        instruction: 'Knead the slime with your hands',
        action: { type: 'shake', duration: 2000 },
        observation: 'Perfect stretchy slime! 🟢',
        visual: {
          before: '🥛',
          after: '🟢'
        }
      }
    ],
    funFact: 'Slime is a polymer! The borax creates bonds between glue molecules, creating long chains that make it stretchy but not liquid.',
    safetyTips: ['Don\'t eat the slime', 'Wash hands after playing', 'Store in an airtight container', 'Keep away from carpets']
  }
];
