import Terminal from '../terminal.js';

const hashes = {
  'app.css': 'c50eddd41faba2ecc8928e459288fe612b999170',
  'index.html': 'e8957c6d4d357b55c768f222f1743a187424e912',
  'app.js': '26b94195ea03b8d29a6e65e2d1c8704b933d5117',
};

export default class HashesController {

  constructor () {
    this.keyEvents = {
      'git add .': this.gitAdd.bind(this),
      'git hash-object': this.gitHashObject.bind(this),
      'git cat-file -p': this.gitCatFile.bind(this),
      'cat': this.catFile.bind(this),
      'git ls-files': this.gitLsFiles.bind(this),
      'git status': this.gitStatus.bind(this),
    };

    this.terminal = new Terminal(this.keyEvents);
  }

  gitAdd() {
    this.show('after-add-repo');
    this.terminal.showPrompt();
  }

  gitHashObject(fileName) {
    this.terminal.echo(hashes[fileName]);
  }

  catFile(file) {
    if (file.includes('.git/objects')) {
      this.terminal.echo('xK��OR04c�QL�O.�,HU�(�ͱ�]��%');
    } else if (file.includes('.git/index')) {
      this.terminal.echo(`DIRCY���Y���������"�|mM5{U�h�"�t:t$�app.cssY��tY��t��v���&�A���Қne���pK�=Qapp.jsY���Y����ԃ���������Ȓ�E���a+��p
H�2�в=gT��>V�%`);
    }
  }

  gitCatFile(hash) {
    if (!this.cats) {
      this.cats = true;
      this.show('cat-file');
      return;
    }

    this.show('app-css-in-repo');
    this.terminal.echo(`
body {
  background-color: papayawhip;
}`);
  }

  gitLsFiles() {
    this.terminal.echo(`
app.css
app.js
index.html`);
  }

  gitStatus() {
    this.terminal.echo(`
On branch master
Changes to be committed:
  <span class="highlight-pink">(use "git reset HEAD <file>..." to unstage)</span>
  <span class="tracked-files">modified:   app.css
  modified:   app.js
  modified:   index.html</span>`);
  }

  show(id) {
    const lastImage = document.querySelector('.fade-in, .slide-left');
    lastImage.classList.remove('fade-in');
    lastImage.classList.remove('slide-left');
    lastImage.classList.add('fade-out');
    lastImage.classList.add('hiding');

    document.getElementById(id).classList.remove('hiding');
    document.getElementById(id).classList.add('fade-in');
  }

  static getTemplate() {
    return `
      <div class="columns">
        <div class="terminal"></div>
        <div class="overflow images large">
          <img class="slide-left" src="images/clean-git-repo.png" />
          <img id="after-add-repo" class="hiding" src="images/after-add-repo.png" />
          <img id="app-css-in-repo" class="hiding" src="images/app-css-in-repo.png" />
          <img id="cat-file" class="hiding" src="images/cat-file.jpeg" />
        </div>
      </div>`;
  }
}
