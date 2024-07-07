import Topics from "./topics";

export type Action = {
  name: string;
  startFrame: number;
  endFrame: number;
  frameRate?: number;
};

export type Character = {
  eastworldId: string | null;
  sprite: string;
  photo: string;
  interactTopic: Topics;
  actions: Array<Action>;
  arrestable: boolean;
};

type PartialCharacter = Partial<Character>;

const defaultCharacter: Character = {
  eastworldId: null,
  sprite: "",
  photo: "",
  interactTopic: Topics.enterChat,
  actions: [],
  arrestable: true,
};

function createCharacter(partial: PartialCharacter): Character {
  return { ...defaultCharacter, ...partial };
}

const characters: Record<string, Character> = {
  "The Computer": createCharacter({
    eastworldId: "The Computer",
    sprite: "computer",
    photo: "assets/photos/computer.jpeg",
    actions: [],
  }),
  detective: createCharacter({
    eastworldId: "Troubleshooter Zed",
    sprite: "detective",
    photo: "assets/photos/zed.png",
    arrestable: false,
  }),
  "Vending Machine": createCharacter({
    eastworldId: "Vending Machine",
    sprite: "vending_machine",
    photo: "assets/photos/vending.png",
  }),
  "Troubleshooter Beta": createCharacter({
    eastworldId: "Troubleshooter Beta",
    sprite: "william_harrington",
    photo: "assets/photos/beta.png",
    actions: [
      {
        name: "Panic",
        startFrame: 1,
        endFrame: 7,
        frameRate: 12,
      },
    ],
  }),
  "Troubleshooter Zeta": createCharacter({
    eastworldId: "Troubleshooter Zeta",
    sprite: "victoria_ashford",
    photo: "assets/photos/zeta.png",
  }),
  "Troubleshooter Gamma": createCharacter({
    eastworldId: "Troubleshooter Gamma",
    sprite: "amelia_turner",
    photo: "assets/photos/gamma.png",
  }),
  "Troubleshooter Mike": createCharacter({
    eastworldId: "Troubleshooter Mike",
    sprite: "amelia_turner",
    photo: "assets/photos/mike.png",
  }),
  "Troubleshooter Delta": createCharacter({
    eastworldId: "Troubleshooter Delta",
    sprite: "amelia_turner",
    photo: "assets/photos/delta.png",
  }),
  "Police Chief Locke": createCharacter({
    sprite: "police_officer",
    photo: "assets/photos/police_chief.jpeg",
    interactTopic: Topics.enterArrestModal,
    arrestable: false,
  }),
};

export default characters;
