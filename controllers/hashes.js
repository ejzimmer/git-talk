import Terminal from '../terminal.js';

export default class HashesController {

  constructor () {
    this.keyEvents = {
      'git add .': this.gitAdd.bind(this),
      'git hash-object': this.gitHashObject.bind(this),
      'git cat-file': this.gitCatFile.bind(this),
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

  gitHashObject() {
    this.show('index-html-in-repo');
    this.terminal.echo('c50eddd41faba2ecc8928e459288fe612b999170');
  }

  catFile(file) {
    if (file.includes('.git/objects')) {
      this.terminal.echo('xK��OR04c�QL�O.�,HU�(�ͱ�]��%');
    } else if (file.includes('.git/index')) {
      this.terminal.echo(`DIRCY���Y���������"�|mM5{U�h�"�t:t$�app.cssY��tY��t��v���&�A���Қne���pK�=Qapp.jsY���Y����ԃ���������Ȓ�E���a+��p
H�2�в=gT��>V�%`);
    }
  }

  gitCatFile() {
    this.show('cat-file');
    this.terminal.showPrompt();
  }

  gitLsFiles() {
    this.terminal.echo(`
app.css
app.js
index.html`);
  }

  gitStatus() {
    document.querySelector('.images').classList.add('disappear');    
    this.terminal.echo(`
On branch master
Changes to be committed:
  <span class="highlight-pink">(use "git reset HEAD <file>..." to unstage)</span>
  <span class="tracked-files">modified:   app.css
  modified:   app.js
  modified:   index.html</span>`);
  }

  show(id) {
    const lastImage = document.querySelector('.fade-in, .slide-down');
    lastImage.classList.remove('fade-in');
    lastImage.classList.remove('slide-down');
    lastImage.classList.add('fade-out');

    document.getElementById(id).classList.remove('hiding');
    document.getElementById(id).classList.add('fade-in');
  }

  static getTemplate() {
    return `
      <div class="hashes">
        <div class="images">
          <img class="slide-down" src="images/clean-git-repo.png" />
          <img id="after-add-repo" class="hiding" src="images/after-add-repo.png" />
          <img id="index-html-in-repo" class="hiding" src="images/index-html-in-repo.png" />
          <img id="cat-file" class="hiding" src="images/cat-file.jpeg" />
        </div>
        <div class="terminal"></div>
      </div>`;
  }
}
