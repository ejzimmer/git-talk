import Terminal from '../terminal.js';
//import sha1 from '../node-modules/sha1/sha1.js';

const seed = 0;

export default class Checkout {

  constructor() {

    this.files = {
      '.git/HEAD': 'refs/heads/master',
      '.git/refs/heads/master': '12345',
    };

    this.keyEvents = {
      'git checkout -b': this.checkout.bind(this),
      'git commit': this.commit.bind(this),
      'cat': this.cat.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
  }

  get currentBranch() {
    return this.files['.git/HEAD'];
  }

  checkout(branchName) {
    const currentHash = this.files[`.git/${this.currentBranch}`];

    this.files[`.git/refs/heads/${branchName}`] = currentHash;
    this.files['.git/HEAD'] = branchName;

    this.terminal.echo(`Switched to a new branch '${branchName}'`);
  }

  cat(fileName) {
    this.terminal.echo(this.files[fileName]);
  }

  commit() {
    const nextCommit = sha1(seed++);
    this.files[`.git/`]
  }

  static getTemplate() {
    return `<div class="columns">
              <div class="terminal"></div>
              <div class="overflow">
                <img id="refs" src="images/new-branch-head.png" />
              </div>
            </div>`;
  }
}