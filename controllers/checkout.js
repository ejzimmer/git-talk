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
      'git checkout -b': this.newBranch.bind(this),
      'git commit': this.commit.bind(this),
      'cat': this.cat.bind(this),
      'touch': this.touch.bind(this),
      'git merge': this.merge.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
  }

  get currentBranch() {
    return this.files['.git/HEAD'];
  }

  getHead(branch) {
    return this.files[`.git/refs/heads/${branch}`].substring(0, 7);
  }

  newBranch(branchName) {
    const currentHash = this.files[`.git/${this.currentBranch}`];

    this.files[`.git/refs/heads/${branchName}`] = currentHash;
    this.files['.git/HEAD'] = `.git/refs/heads/${branchName}`;

    document.getElementById('master').classList.add('fade-out');
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

  touch(fileName) {
    this.createdFile = fileName;
    this.show('master');
    this.terminal.showPrompt();
  }

  checkout(branch) {
    this.show(branch);
    this.terminal.echo(`Switched to branch '${branch}'`);
  }

  merge(branch) {
    this.terminal.echo(`Updating ${this.getHead('master')}..${this.getHead(branch)}
Fast-forward
 ${this.createdFile} | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 ${this.createdFile}`)
  }

  show(image) {
    document.querySelector('not(.hiding)').classList.add('fade-out hiding');
    document.getElementById(image).classList = 'fade-in';
  }

  static getTemplate() {
    return `<div class="columns">
              <div class="terminal"></div>
              <div class="overflow images">
                <img id="master" src="images/new-branch-head.png" />
                <img id="new-branch" class="hiding" src="images/new-branch-created.png" />
                <img id="feature" class="hiding" src="images/new-file-added.png" />
              </div>
            </div>`;
  }
}