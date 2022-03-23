class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }
    sayName(){
        console.log(this.name);
        return this
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Strength: " + this.strength + ", Speed: " + this.speed)
        return this
    }
    drinkSake(){
        this.health += 10;
    }
}