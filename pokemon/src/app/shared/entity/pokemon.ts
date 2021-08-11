export class Pokemon {
    id: number;
    name: string;
    types: string;
    imageUrl: string;
    imageUrlHiRes: string;
    attacks: Attack[];
    hp: number;
    weakness: number;
}

class Attack {
    convertedEnergyCost: number;
    cost: [];
    damage: string;
    name: string;
    text: string;
}