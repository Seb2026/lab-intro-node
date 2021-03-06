class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a , b) => {
      a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (typeof this.items[pos] === `undefined` ){
      throw new Error(`OutOfBounds`);
  } else {
    return this.items[pos];
  }
}

  max() {
    if(this.items.length === 0){
      throw new Error(`EmptySortedList`);
    }else{
      return this.items[this.items.length -1];
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error(`EmptySortedList`);
    }else {
      return this.items[0];
    }
  }

  sum() {
    const total = 0;
    for(let item of this.items){
      total += item;
    }
    return total;
  }

  avg() {}
}

module.exports = SortedList;
