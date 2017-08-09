import Terminal from '../terminal.js';
import sha1 from '../node_modules/sha1/sha1.js';

const seed = 0;

export default class Checkout {

  constructor() {

    this.files = {
      '.git/HEAD': 'refs/heads/master',
      '.git/refs/heads/master': '28fb86e94befa9a40fddfb0e9ee553ffa6fd0',
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
    this.files['.git/HEAD'] = `.git/refs/heads/${branchName}`;

    document.getElementById('refs').classList.add('fade-out');
    document.getElementById('new-branch').classList = 'fade-in';

    this.terminal.echo(`Switched to a new branch '${branchName}'`);
  }

  cat(fileName) {
    this.terminal.echo(this.files[fileName]);
  }

  commit() {
    this.files[this.currentBranch] = sha1(seed++);
    this.terminal.showPrompt();
  }

  static getTemplate() {
    return `<div class="columns">
              <div class="terminal"></div>
              <div class="overflow images">
                <img id="refs" src="images/new-branch-head.png" />
                <img id="new-branch" class="hiding" src="images/new-branch-created.png" />
              </div>
            </div>`;
  }
}