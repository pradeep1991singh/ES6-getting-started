import Entity from './Entity';

class Hobbit extends Entity {

  constructor(name, height) {
    super(name, height);
  }

  greet() {
    console.log(`Hello! I'm ${this.name} from Shrine!. I'm ${this.height} tall.`);    
  }

}

export default Hobbit;