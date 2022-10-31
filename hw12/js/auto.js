function Auto (aModel, aYear, aVolume) {
    this.model = aModel;
    this.year = aYear;
    this.volume = aVolume;
    
    this.owners = function (owner){
            this.owner = owner;
    }
    this.showInfo = function (){
        document.write('Car model: ' + this.model + '<br>' +  'Year of issue: ' + this.year + '<br>' +  'Engine volume: ' + this.volume + '<br>' + 'Owner: ' + this.owner.name + '<br>' +  'Owner age: ' + this.owner.age);
    }
}