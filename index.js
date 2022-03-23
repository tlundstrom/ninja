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
        return this
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200);
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in a month. Two programmers can do in two months.");
        return this
    }
}

const superSensei = new Sensei("Sensei");

superSensei.speakWisdom().showStats();