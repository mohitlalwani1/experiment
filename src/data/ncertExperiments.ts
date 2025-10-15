import { Experiment } from '../types/experiments';

export const ncertExperiments: Experiment[] = [
  {
    id: 'photosynthesis',
    title: 'Testing for Starch in Leaves',
    category: 'Biology',
    description: 'Demonstrate photosynthesis by testing for starch in green leaves',
    difficulty: 'Medium',
    duration: '30 mins',
    materials: ['Green leaf', 'Beaker', 'Alcohol', 'Iodine solution', 'Water bath', 'Petri dish'],
    steps: [
      {
        id: 1,
        instruction: 'Pluck a healthy green leaf from a plant kept in sunlight',
        action: { type: 'observe' },
        observation: 'Fresh green leaf collected'
      },
      {
        id: 2,
        instruction: 'Boil the leaf in water for 2-3 minutes',
        action: { type: 'heat', duration: 3000 },
        observation: 'Leaf becomes soft'
      },
      {
        id: 3,
        instruction: 'Transfer leaf to alcohol in a beaker and heat in water bath',
        action: { type: 'heat', duration: 3000 },
        observation: 'Leaf loses green color, alcohol turns green'
      },
      {
        id: 4,
        instruction: 'Wash the leaf with water and place in petri dish',
        action: { type: 'observe' },
        observation: 'Leaf is now colorless'
      },
      {
        id: 5,
        instruction: 'Add iodine solution drops on the leaf',
        action: { type: 'wait', duration: 2000 },
        observation: 'Leaf turns blue-black, proving presence of starch!',
        visual: {
          before: '🍃',
          after: '🔵'
        }
      }
    ],
    funFact: 'Plants make their own food through photosynthesis using sunlight, water, and carbon dioxide. Starch is stored food!',
    safetyTips: ['Handle hot water carefully', 'Use alcohol in well-ventilated area', 'Adult supervision required', 'Wear gloves']
  },
  {
    id: 'acids-bases',
    title: 'Testing Acids and Bases with Indicators',
    category: 'Chemistry',
    description: 'Use natural and chemical indicators to identify acids and bases',
    difficulty: 'Easy',
    duration: '20 mins',
    materials: ['Red cabbage', 'Lemon juice', 'Baking soda solution', 'Soap water', 'Vinegar', 'Test tubes'],
    steps: [
      {
        id: 1,
        instruction: 'Boil red cabbage in water to extract juice',
        action: { type: 'heat', duration: 2000 },
        observation: 'Purple colored cabbage indicator ready'
      },
      {
        id: 2,
        instruction: 'Pour indicator into 5 test tubes',
        action: { type: 'measure' },
        observation: 'Purple liquid in all tubes'
      },
      {
        id: 3,
        instruction: 'Add lemon juice to tube 1',
        action: { type: 'mix', duration: 1500 },
        observation: 'Turns pink-red (Acid!)'
      },
      {
        id: 4,
        instruction: 'Add vinegar to tube 2',
        action: { type: 'mix', duration: 1500 },
        observation: 'Turns pink-red (Acid!)'
      },
      {
        id: 5,
        instruction: 'Add baking soda solution to tube 3',
        action: { type: 'mix', duration: 1500 },
        observation: 'Turns blue-green (Base!)'
      },
      {
        id: 6,
        instruction: 'Add soap water to tube 4',
        action: { type: 'mix', duration: 1500 },
        observation: 'Turns blue-green (Base!)',
        visual: {
          before: '🟣',
          after: '🔴🔵🟢'
        }
      }
    ],
    funFact: 'Acids turn red cabbage indicator pink/red, while bases turn it blue/green. This is because of pH changes!',
    safetyTips: ['Don\'t taste the chemicals', 'Wear safety goggles', 'Wash hands after experiment', 'Label all test tubes']
  },
  {
    id: 'respiration',
    title: 'CO2 Release in Respiration',
    category: 'Biology',
    description: 'Show that living organisms release carbon dioxide during respiration',
    difficulty: 'Easy',
    duration: '15 mins',
    materials: ['Limewater', 'Straw', 'Beaker', 'Germinating seeds', 'Conical flask'],
    steps: [
      {
        id: 1,
        instruction: 'Pour clear limewater into a beaker',
        action: { type: 'observe' },
        observation: 'Clear transparent solution'
      },
      {
        id: 2,
        instruction: 'Blow air through a straw into the limewater',
        action: { type: 'shake', duration: 3000 },
        observation: 'Limewater turns milky white!'
      },
      {
        id: 3,
        instruction: 'Take germinating seeds in a flask with limewater',
        action: { type: 'wait', duration: 2000 },
        observation: 'Seeds placed in flask'
      },
      {
        id: 4,
        instruction: 'Close the flask and observe after 30 minutes',
        action: { type: 'wait', duration: 3000 },
        observation: 'Limewater turns milky, proving CO2 release!',
        visual: {
          before: '💧',
          after: '☁️'
        }
      }
    ],
    funFact: 'All living things respire! They take in oxygen and release carbon dioxide. CO2 turns limewater milky!',
    safetyTips: ['Use fresh limewater', 'Don\'t inhale deeply through straw', 'Keep seeds moist', 'Seal flask properly']
  },
  {
    id: 'light-reflection',
    title: 'Laws of Reflection',
    category: 'Physics',
    description: 'Verify the laws of reflection using a plane mirror',
    difficulty: 'Easy',
    duration: '15 mins',
    materials: ['Plane mirror', 'White paper', 'Protractor', 'Laser pointer or torch', 'Pins'],
    steps: [
      {
        id: 1,
        instruction: 'Place plane mirror vertically on white paper',
        action: { type: 'observe' },
        observation: 'Mirror standing on paper'
      },
      {
        id: 2,
        instruction: 'Draw a normal line perpendicular to the mirror',
        action: { type: 'observe' },
        observation: 'Normal line drawn'
      },
      {
        id: 3,
        instruction: 'Direct light ray at 30° to the normal',
        action: { type: 'observe', duration: 2000 },
        observation: 'Light hits mirror at 30°'
      },
      {
        id: 4,
        instruction: 'Mark the reflected ray and measure angle',
        action: { type: 'measure', duration: 2000 },
        observation: 'Reflected ray also at 30°!'
      },
      {
        id: 5,
        instruction: 'Repeat with different angles (45°, 60°)',
        action: { type: 'measure', duration: 2000 },
        observation: 'Angle of incidence = Angle of reflection always!',
        visual: {
          before: '💡',
          after: '✨'
        }
      }
    ],
    funFact: 'The law of reflection states: angle of incidence equals angle of reflection. This is why you see yourself in mirrors!',
    safetyTips: ['Don\'t shine laser in eyes', 'Use laser pointer carefully', 'Avoid direct sunlight', 'Keep room slightly dark']
  },
  {
    id: 'electric-circuit',
    title: 'Making a Simple Electric Circuit',
    category: 'Physics',
    description: 'Build a basic electric circuit and understand current flow',
    difficulty: 'Easy',
    duration: '10 mins',
    materials: ['Battery (1.5V)', 'Small bulb', 'Connecting wires', 'Switch', 'Battery holder'],
    steps: [
      {
        id: 1,
        instruction: 'Connect wire from positive terminal of battery',
        action: { type: 'observe' },
        observation: 'Wire attached to positive end'
      },
      {
        id: 2,
        instruction: 'Connect this wire to one end of the bulb',
        action: { type: 'observe' },
        observation: 'Circuit partially complete'
      },
      {
        id: 3,
        instruction: 'Connect another wire from bulb to switch',
        action: { type: 'observe' },
        observation: 'Bulb connected to switch'
      },
      {
        id: 4,
        instruction: 'Connect switch to negative terminal of battery',
        action: { type: 'wait', duration: 1500 },
        observation: 'Circuit is complete but bulb is off'
      },
      {
        id: 5,
        instruction: 'Close the switch',
        action: { type: 'observe', duration: 2000 },
        observation: 'Bulb lights up! Electricity flowing!',
        visual: {
          before: '💡',
          after: '💡✨'
        }
      }
    ],
    funFact: 'Electric current flows only in a closed circuit. The switch controls whether the circuit is open or closed!',
    safetyTips: ['Use low voltage battery only', 'Check wire connections', 'Don\'t short circuit the battery', 'Adult supervision required']
  },
  {
    id: 'magnets',
    title: 'Exploring Magnetic Properties',
    category: 'Physics',
    description: 'Discover how magnets attract and repel different materials',
    difficulty: 'Easy',
    duration: '10 mins',
    materials: ['Bar magnet', 'Iron nails', 'Copper coin', 'Aluminum foil', 'Plastic scale', 'Paper clips', 'Compass'],
    steps: [
      {
        id: 1,
        instruction: 'Bring bar magnet near iron nails',
        action: { type: 'observe', duration: 1500 },
        observation: 'Nails stick to the magnet strongly!'
      },
      {
        id: 2,
        instruction: 'Try attracting copper coin',
        action: { type: 'observe', duration: 1500 },
        observation: 'No attraction, copper is not magnetic'
      },
      {
        id: 3,
        instruction: 'Test aluminum foil',
        action: { type: 'observe', duration: 1500 },
        observation: 'No attraction, aluminum is not magnetic'
      },
      {
        id: 4,
        instruction: 'Test plastic scale',
        action: { type: 'observe', duration: 1500 },
        observation: 'No attraction, plastic is not magnetic'
      },
      {
        id: 5,
        instruction: 'Bring two magnets together (like poles)',
        action: { type: 'shake', duration: 2000 },
        observation: 'They repel each other!'
      },
      {
        id: 6,
        instruction: 'Flip one magnet (opposite poles)',
        action: { type: 'observe', duration: 2000 },
        observation: 'They attract strongly!',
        visual: {
          before: '🧲',
          after: '🧲✨'
        }
      }
    ],
    funFact: 'Only iron, nickel, and cobalt are strongly magnetic. Like poles repel, unlike poles attract!',
    safetyTips: ['Keep magnets away from electronics', 'Don\'t swallow small magnets', 'Store magnets properly', 'Keep away from credit cards']
  },
  {
    id: 'water-cycle',
    title: 'Water Cycle in a Bag',
    category: 'Biology',
    description: 'Create a mini water cycle to see evaporation and condensation',
    difficulty: 'Easy',
    duration: '48 hours',
    materials: ['Ziplock bag', 'Water', 'Blue food coloring', 'Permanent marker', 'Tape', 'Sunny window'],
    steps: [
      {
        id: 1,
        instruction: 'Fill ziplock bag with water (1/4 full)',
        action: { type: 'measure' },
        observation: 'Water at bottom of bag'
      },
      {
        id: 2,
        instruction: 'Add few drops of blue food coloring',
        action: { type: 'mix' },
        observation: 'Blue water representing ocean'
      },
      {
        id: 3,
        instruction: 'Draw sun, clouds, and waves on bag with marker',
        action: { type: 'observe' },
        observation: 'Water cycle diagram on bag'
      },
      {
        id: 4,
        instruction: 'Seal bag tightly and tape to sunny window',
        action: { type: 'wait', duration: 2000 },
        observation: 'Bag is sealed and placed in sun'
      },
      {
        id: 5,
        instruction: 'Observe after a few hours',
        action: { type: 'wait', duration: 3000 },
        observation: 'Water droplets form at top and slide down like rain!',
        visual: {
          before: '💧',
          after: '☁️💧'
        }
      }
    ],
    funFact: 'The water cycle includes evaporation, condensation, and precipitation. This happens continuously in nature!',
    safetyTips: ['Seal bag properly to avoid leaks', 'Use permanent marker only', 'Place securely on window', 'Check daily for changes']
  },
  {
    id: 'separation-mixture',
    title: 'Separating Salt and Sand',
    category: 'Chemistry',
    description: 'Use filtration and evaporation to separate a mixture',
    difficulty: 'Medium',
    duration: '25 mins',
    materials: ['Salt', 'Sand', 'Water', 'Beaker', 'Filter paper', 'Funnel', 'Burner'],
    steps: [
      {
        id: 1,
        instruction: 'Mix salt and sand together in a beaker',
        action: { type: 'mix', duration: 1500 },
        observation: 'Mixture of salt and sand'
      },
      {
        id: 2,
        instruction: 'Add water to the mixture and stir well',
        action: { type: 'mix', duration: 2000 },
        observation: 'Salt dissolves, sand doesn\'t'
      },
      {
        id: 3,
        instruction: 'Pour mixture through filter paper in funnel',
        action: { type: 'wait', duration: 2500 },
        observation: 'Sand remains on filter, salty water passes through'
      },
      {
        id: 4,
        instruction: 'Collect the filtrate (salty water)',
        action: { type: 'observe' },
        observation: 'Clear salty water collected'
      },
      {
        id: 5,
        instruction: 'Heat the salty water to evaporate',
        action: { type: 'heat', duration: 3000 },
        observation: 'Water evaporates, salt crystals remain!',
        visual: {
          before: '🌊',
          after: '🧂'
        }
      }
    ],
    funFact: 'Separation methods depend on properties of substances. Salt dissolves in water but sand doesn\'t!',
    safetyTips: ['Handle hot beaker carefully', 'Use heat-resistant glassware', 'Don\'t let it boil dry completely', 'Adult supervision required']
  },
  {
    id: 'plant-transpiration',
    title: 'Observing Transpiration in Plants',
    category: 'Biology',
    description: 'See how plants lose water through their leaves',
    difficulty: 'Easy',
    duration: '24 hours',
    materials: ['Potted plant', 'Plastic bag', 'String or rubber band', 'Water'],
    steps: [
      {
        id: 1,
        instruction: 'Water the potted plant well',
        action: { type: 'observe' },
        observation: 'Plant is watered'
      },
      {
        id: 2,
        instruction: 'Cover a healthy branch with plastic bag',
        action: { type: 'observe' },
        observation: 'Branch sealed in plastic'
      },
      {
        id: 3,
        instruction: 'Tie the bag tightly around stem with string',
        action: { type: 'observe' },
        observation: 'Bag secured, no air escapes'
      },
      {
        id: 4,
        instruction: 'Place plant in sunlight',
        action: { type: 'wait', duration: 2000 },
        observation: 'Plant in bright location'
      },
      {
        id: 5,
        instruction: 'Observe after a few hours',
        action: { type: 'wait', duration: 3000 },
        observation: 'Water droplets collect inside bag!',
        visual: {
          before: '🌿',
          after: '💧🌿'
        }
      }
    ],
    funFact: 'Transpiration is loss of water vapor from plant leaves. Plants release water through tiny pores called stomata!',
    safetyTips: ['Don\'t damage the plant', 'Use transparent bag', 'Remove bag after observation', 'Water plant regularly']
  },
  {
    id: 'rusting',
    title: 'Investigating Rusting of Iron',
    category: 'Chemistry',
    description: 'Explore the conditions necessary for iron to rust',
    difficulty: 'Medium',
    duration: '48 hours',
    materials: ['Iron nails', 'Test tubes', 'Water', 'Oil', 'Anhydrous calcium chloride', 'Cotton'],
    steps: [
      {
        id: 1,
        instruction: 'Take three clean iron nails',
        action: { type: 'observe' },
        observation: 'Clean shiny nails'
      },
      {
        id: 2,
        instruction: 'Tube 1: Add nail with water and air',
        action: { type: 'observe' },
        observation: 'Nail in water exposed to air'
      },
      {
        id: 3,
        instruction: 'Tube 2: Add nail in boiled water with oil layer on top',
        action: { type: 'observe' },
        observation: 'Nail in water, no air contact'
      },
      {
        id: 4,
        instruction: 'Tube 3: Add nail with calcium chloride (no water)',
        action: { type: 'observe' },
        observation: 'Nail in dry conditions'
      },
      {
        id: 5,
        instruction: 'Observe all tubes after 2 days',
        action: { type: 'wait', duration: 3000 },
        observation: 'Only tube 1 shows rust! Both air and water needed!',
        visual: {
          before: '🔩',
          after: '🟤'
        }
      }
    ],
    funFact: 'Rusting requires both oxygen and water. That\'s why iron rusts faster in humid conditions!',
    safetyTips: ['Use clean test tubes', 'Handle calcium chloride carefully', 'Label all tubes', 'Dispose properly after experiment']
  },
  {
    id: 'convection',
    title: 'Observing Convection Currents',
    category: 'Physics',
    description: 'Visualize how heat travels through liquids by convection',
    difficulty: 'Medium',
    duration: '10 mins',
    materials: ['Beaker', 'Water', 'Potassium permanganate crystal', 'Burner', 'Tripod stand'],
    steps: [
      {
        id: 1,
        instruction: 'Fill beaker with water and place on stand',
        action: { type: 'observe' },
        observation: 'Clear water in beaker'
      },
      {
        id: 2,
        instruction: 'Drop a crystal of potassium permanganate at bottom',
        action: { type: 'wait', duration: 1500 },
        observation: 'Purple crystal at bottom'
      },
      {
        id: 3,
        instruction: 'Heat the beaker from below gently',
        action: { type: 'heat', duration: 3000 },
        observation: 'Purple streams rise from crystal'
      },
      {
        id: 4,
        instruction: 'Continue heating and observe pattern',
        action: { type: 'heat', duration: 3000 },
        observation: 'Purple color moves in circular patterns!'
      },
      {
        id: 5,
        instruction: 'Stop heating and watch',
        action: { type: 'wait', duration: 2000 },
        observation: 'Convection currents visible as purple streams!',
        visual: {
          before: '🔥',
          after: '🌊🔥'
        }
      }
    ],
    funFact: 'Convection is heat transfer in liquids and gases. Hot liquid rises, cool liquid sinks, creating circulation!',
    safetyTips: ['Handle hot beaker carefully', 'Use heat-resistant glass', 'Wear safety goggles', 'Adult supervision required']
  },
  {
    id: 'starch-digestion',
    title: 'Digestion of Starch by Saliva',
    category: 'Biology',
    description: 'Demonstrate enzyme action in digestion',
    difficulty: 'Medium',
    duration: '30 mins',
    materials: ['Starch solution', 'Saliva', 'Test tubes', 'Iodine solution', 'Water bath at 37°C'],
    steps: [
      {
        id: 1,
        instruction: 'Collect saliva in a clean container',
        action: { type: 'observe' },
        observation: 'Saliva collected'
      },
      {
        id: 2,
        instruction: 'Take starch solution in two test tubes A and B',
        action: { type: 'measure' },
        observation: 'Starch solution in both tubes'
      },
      {
        id: 3,
        instruction: 'Add saliva to tube A, water to tube B',
        action: { type: 'mix', duration: 1500 },
        observation: 'Tube A has starch + saliva, B has starch + water'
      },
      {
        id: 4,
        instruction: 'Keep both tubes in water bath at 37°C for 10 mins',
        action: { type: 'heat', duration: 3000 },
        observation: 'Both tubes at body temperature'
      },
      {
        id: 5,
        instruction: 'Add iodine solution to both tubes',
        action: { type: 'wait', duration: 2000 },
        observation: 'Tube B turns blue-black (starch present), Tube A stays yellow (no starch)!',
        visual: {
          before: '🧪',
          after: '🔵🟡'
        }
      }
    ],
    funFact: 'Saliva contains enzyme amylase that breaks down starch into sugar. Digestion starts in your mouth!',
    safetyTips: ['Use your own saliva only', 'Maintain temperature at 37°C', 'Don\'t mix samples', 'Wash hands thoroughly']
  }
];
