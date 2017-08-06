import Terminal from '../terminal.js';

export default class Checkout {

  constructor() {
    this.keyEvents = {
      'git checkout -b': this.checkout.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
  }

  checkout(branchName) {
    this.terminal.echo(`Switched to a new branch '${branchName}'`);
    document.getElementById('image').classList.add('slide-up-animation');
  }

  static getTemplate() {
    return `<div class="terminal"></div>
            <img id="image" class="slide-up-ready" src="images/new-branch.png" />`;
  }
}