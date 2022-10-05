function MyArray() {
    this.length = 0;
    Object.defineProperty(this, 'length', {
        value: 0,
        enumerable: false,
        writable: true
    })
}

MyArray.prototype.push = function (val) {
    this.length++;
    this[this.length] = val;
    return this.length;
}

MyArray.prototype.pop = function () {
    let ele = this[this.length];
    delete this[this.length];
    this.length--;
    return ele;
}

MyArray.prototype.map = function (cb) {
    let result = new MyArray()
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            result.push(cb(this[index], index, this));
        }
    }
    return result;
}

MyArray.prototype.filter = function (cb) {
    let result = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                result.push(this[index])
            }
        }
    }
    return result;
}

MyArray.prototype.reduce = function(callback){
    var a = 0;                            
    for(let i=0; i<this.length; i++){
        callback(a = a+this[i])            
    }   
    return a;                          
}



export default MyArray;