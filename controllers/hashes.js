import Terminal from '../terminal.js';

export default class HashesController {

  constructor () {
    this.imageContainer = document.querySelector('.images');
    setTimeout(() => this.imageContainer.style.marginTop = '10px', 100);

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
    this.createImage('after-add-repo.png');
    this.terminal.showPrompt();
  }

  gitHashObject() {
    this.createImage('index-html-in-repo.png');
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
    this.createImage('cat-file.jpeg');
    this.terminal.showPrompt();
  }

  gitLsFiles() {
    this.terminal.echo(`
app.css
app.js
index.html`);
  }

  gitStatus() {
    this.imageContainer.classList.add('disappear');    
    this.terminal.echo(`
On branch master
Changes to be committed:
  <span class="highlight-pink">(use "git reset HEAD <file>..." to unstage)</span>
  <span class="tracked-files">modified:   app.css
  modified:   app.js
  modified:   index.html</span>`);
  }

  createImage(fileName) {
    const newImage = document.createElement('img');
    newImage.classList.add('fade-image');
    newImage.style.opacity = 0;
    newImage.src = `images/${fileName}`;

    this.imageContainer.appendChild(newImage);

    setTimeout(() => {
      document.querySelectorAll('.images img:not(:last-child)')
        .forEach(image => {
          image.style.opacity = 0;
        });
      newImage.style.opacity = 1;
    });
  }

  static getTemplate() {
    return `
      <div class="hashes">
        <div class="images slide-in">
          <img class="fade-image" src="images/clean-git-repo.png" />
        </div>
        <div class="terminal"></div>
      </div>`;
  }
}
