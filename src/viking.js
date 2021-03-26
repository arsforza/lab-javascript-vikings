// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

    getHealth() {
        return this.health;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if(this.health > 0)
            return `${this.name} has received ${damage} points of damage`;
        else
            return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;

        if(this.health > 0)
            return `A Saxon has received ${damage} points of damage`;
        else
            return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    attack(offendingArmy, defendingArmy) {
        const offendingSoldier = this.getRandomSoldier(offendingArmy);
        let defendingSoldier = this.getRandomSoldier(defendingArmy);

        let attackOutcome = defendingSoldier.receiveDamage(offendingSoldier.attack());

        if(defendingSoldier.getHealth() <= 0)
            defendingArmy.splice(defendingArmy.indexOf(defendingSoldier), 1);

        return attackOutcome;

    }

    getRandomSoldier(army) {
        return army[Math.floor(army.length * Math.random())];
    }

    showStatus() {
        if(this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
        if(this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...';

        return 'Vikings and Saxons are still in the thick of battle.';
    }
}
