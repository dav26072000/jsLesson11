// Console
class Console {
  constructor(name) {
    this._name = name;
    this._history = [];
  }

  log(...input) {
    if (input.length !== 1) {
      let output = "";
      for (const key in input) {
        if (Number(key) === 0) {
          output = JSON.stringify(input[key]);
          this._history.push(JSON.stringify(input[key]));
        } else {
          output += ` | ${JSON.stringify(input[key])}`;
          this._history.push(JSON.stringify(input[key]));
        }
      }
      console.log(output);
    } else {
      this._history.push(JSON.stringify(input[0]));
      console.log(`${this._name} | ${JSON.stringify(input[0])}`);
    }
    // console.log(`${this._name}: ${output}`);
  }

  get history() {
    return this._history;
  }
}

let myConsole = new Console("Bob");

myConsole.log({ a: 1, b: 2 });
myConsole.log({ d: 3, c: 5 }, 200);

console.log(myConsole.history);
