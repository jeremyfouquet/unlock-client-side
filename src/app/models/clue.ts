export class Clue {
    id: number = 0;
    name: string = "";
    description: string = "";
    img: string = "";
    numsClues: number[] = [];
    defausse: number[] = [];
    type: Type = Type.simple;
    machine?: Machine;
    combinable?: Combinable;
}

export class Machine {
    reponse: string = "";
    replaceClue: number = 0;
    // nouvelleimg: string = "";
    // nouvelledescription: string = "";
    choix: string[] = [];
    active: boolean = true;
}

export class Combinable {
    numClue: number = 0;
    numCombine: number = 0;
    couleur: Couleur = Couleur.blue;
}

export enum Couleur {
    red = "red",
    blue = "blue"
}

export enum Type {
    lieu = "lieu",
    simple = "simple",
    combinable = "combinable",
    machine = "machine",
    code = "code"
}