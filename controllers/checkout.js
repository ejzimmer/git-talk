import Terminal from '../terminal.js';
import sha1 from '../node_modules/sha1/sha1.js';

let seed = 0;

export default class Checkout {

  constructor() {

    this.files = {
      '.git/HEAD': 'refs/heads/master',
      '.git/refs/heads/master': '28fb86e94befa9a40fddfb0e9ee553ffa6fd0',
    };

    this.keyEvents = {
      'touch': this.touch.bind(this),
      'git checkout -b': this.newBranch.bind(this),
      'git checkout': this.checkout.bind(this),
      'git commit': this.commit.bind(this),
      'cat': this.cat.bind(this),
      'git merge': this.merge.bind(this),
      'git add': this.doNothing.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
  }

  doNothing() {
    this.terminal.showPrompt();
  }

  get currentBranch() {
    return this.files['.git/HEAD'];
  }

  getHead(branch) {
   return this.getLongHead(branch).substring(0, 7);
  }
  getLongHead(branch) {
    return this.files[`.git/refs/heads/${branch}`];
  }

  newBranch(branchName) {
    const currentHash = this.files[`.git/${this.currentBranch}`];

    this.files[`.git/refs/heads/${branchName}`] = currentHash;
    this.files['.git/HEAD'] = `refs/heads/${branchName}`;

    document.getElementById('master').classList.add('fade-out');
    document.getElementById('new-branch').classList = 'fade-in';

    this.terminal.echo(`Switched to a new branch '${branchName}'`);
  }

  cat(fileName) {
    this.terminal.echo(`<span class="highlight-pink">${this.files[fileName]}</span>`);
  }

  commit() {
    this.files[`.git/${this.currentBranch}`] = sha1(seed++);
    this.terminal.echo(`[feature <span class="highlight">${this.files[`.git/${this.currentBranch}`].substring(0, 7)}</span>] new gif
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 cat.gif`)
  }

  touch(fileName) {
    this.createdFile = fileName;
    this.show('feature');
    this.terminal.showPrompt();
  }

  checkout(branch) {
    this.show(branch);
    this.files['.git/HEAD'] = `refs/heads/${branch}`;
    this.terminal.echo(`Switched to branch '${branch}'`);
  }

  merge(branch) {
    this.show(branch);
    this.terminal.echo(`Updating ${this.getHead('master')}..${this.getHead(branch)}
<span class="highlight-pink">Fast-forward</span>
 ${this.createdFile} | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 ${this.createdFile}`)
    this.files['.git/refs/heads/master'] = this.getLongHead(branch);
  }

  show(image) {
    document.querySelectorAll('img:not(.hiding)').forEach(img => {
      img.classList.add('fade-out');
      img.classList.add('hiding');
    });

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