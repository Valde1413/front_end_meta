class Person{
    constructor(name, age , energy){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(){
        this.energy = this.energy + 10;
    }
    doSomethingFun(){
        this.energy = this.energy -10;
    }

}

class Worker extends Person{
    constructor(name, age, energy , xp , hourlyWage){
        super(name,age,energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork(){
        this.xp = this.xp +10;
    }
}
function manager() {
    const managerObj = new Worker("Alice", 30, 120, 100, 30);
    managerObj.doSomethingFun();
    return managerObj;
  }
  function intern(name, age, energy, xp, hourlyWage) {
    const internObj = new Worker(name, age, energy, xp, hourlyWage);
    internObj.xp = 10;
    internObj.hourlyWage = 10;
    internObj.name = "Bob";
    internObj.age = 21;
    internObj.energy = 110;
    return internObj;
  }
