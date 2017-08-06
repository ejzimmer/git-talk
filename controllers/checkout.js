import Terminal from '../terminal.js';

export default class Checkout {

  constructor() {
    this.keyEvents = {
      'git checkout -b': this.checkout.bind(this),
    };

    document.getElementById('content').addEventListener('click', this.showRefs, { once: true });
  }

  showRefs(event) {
    event.stopPropagation();
    const refs = document.getElementById('refs');
    refs.classList.add('fade-in');

    document.getElementById('content').addEventListener('click', this.showHead, { once: true });
  }

  showHead(event) {
    event.stopPropagation();
    document.getElementById('head').classList.add('fade-in');

    this.terminal = new Terminal(this.keyEvents);
  }

  checkout(branchName) {
    this.terminal.echo(`Switched to a new branch '${branchName}'`);
    document.getElementById('image').classList.add('slide-up-animation');
  }

  static getTemplate() {
    return `<div class="images">
              <img id="refs" class="hiding" src="images/new-branch.png" />
              <img id="head" class="hiding" src="images/new-branch-head.png" />
            </div>
            <div class="terminal"></div>`;
  }
}