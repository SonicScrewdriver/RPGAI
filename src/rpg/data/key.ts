const scene = {
  boot: "boot",
  main: "main",
} as const;

const tilemap = {
  town: "town",
} as const;

const tileset = {
  techDungeonFrames: {
    name: "tech-dungeon-frames",
    image: "tech-dungeon-frames",
    extruded: false,
  },
  techDungeonFrames2: {
    name: "tech-dungeon-frames2",
    image: "tech-dungeon-frames",
    extruded: false,
  },
  techDungeonProps: {
    name: "tech-dungeon-props",
    image: "tech-dungeon-props",
    extruded: false,
  },
  vendingMachines: {
    name: "vending-machines",
    image: "vending-machines",
    extruded: false,
  },
  lab: {
    name: "lab",
    image: "lab",
    extruded: false,
  },
} as const;

export const key = {
  scene,
  tileset,
  tilemap,
} as const;
