class Entity {

  constructor(name, height) {
    this.name = name;
    this.height =  height;
  }

  greet() {
    console.log(`Hello! I'm ${this.name} from Middle Earth!`);
  }

}

export default Entity;