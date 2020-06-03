class CoffeeMachine {
    // Public static field
    static type = 'automatic';

    // Private static field
    static #brand = 'DeCoffee';

    // Instance Public Field
    price = 350;

    // Private instance field
    #coffeeLimit = 20;

    // Protected field
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error('Negative amount of water');
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    // Private instance methods
    // #checkCoffee(value) {
    //     if (value < 0) throw new Error('No coffee');
    //     if (value > this.#coffeeLimit) throw new Error('A lot of coffee');
    // }

    get coffeeLimit() {
        return this.#coffeeLimit;
    }

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }
}

// Create a coffee maker
let coffeeMachine = new CoffeeMachine(100);

console.log(`Power: ${coffeeMachine.power}W`); // Power: 100W

console.log(`Max coffee limit: ${coffeeMachine.coffeeLimit}`);

// Add water
coffeeMachine.waterAmount = 200;

// Error: Negative amount of water
//coffeeMachine.waterAmount = -10;

//----------------------------------------------------------------

// Outside there is no access to private class methods
//coffeeMachine.#checkWater(); // Error
//coffeeMachine.#waterLimit = 1000; // Error