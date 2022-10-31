function Person (pName, pAge) {
    this.name = pName;
    this.age = pAge;

    this.showInfo = function (){
        document.write('Car owner: ' + this.name + '. His age: ' + this.age);
    }
}