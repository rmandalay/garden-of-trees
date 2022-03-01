'use strict'

class fruitTree {
    // constructor
    constructor(treeLimitAge,treeMatureAge,treeStopAge) {
        this._age = 0;
        this._height = 0;
        this._fruit = [];
        this._harvested = '';
        this._healthStatus = true;
        this._limitAge = treeLimitAge;
        this._MatureAge = treeMatureAge;
        this._stopAge = treeStopAge;
    }

    // getter

    get age() {
        return this._age; 
    }

    get height() {
        this._height;
    }

    get fruit() {
        return this._fruit;
    }

    get harvested() {
        return this._harvested;
    }

    get matureAge() {
        return this._matureAge;
    }

    get limitAge() {
        return this._limitAge;
    }

    //method
    
    grow () {
        this.age++;
        let addingHeight = 0;
        if(this.age < this.limitAge) {
            addingHeight = Math.round(Math.random() * 100)/ 100;
            this.height += addingHeight;
        }
        if(this.age > this.stopAge) {
            this.healthStatus = false;
        }

        return this;
    }
    produceFruit() {
        if ( this.age = this.matureAge) {
            let fruitsTotal = Math.round(Math.random() *100);

            for (let i = 1; i <= fruitsTotal; i++){
                this.fruits.push(i);
            }
        }
    }
    harvest () {

    }
}

//class fruit

class fruit {
    constructor(num) {
        this.quality = setQuality(num);
    }

    setQuality(num) {
        if(Math.random() > num){
            this.quality = 'segar';
        } else {
            this.quality = 'busuk';
        }
    }
}
