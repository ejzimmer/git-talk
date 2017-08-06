import Terminal from '../terminal.js';

export default class CommitController {

  constructor() {
    this.keyEvents = {
      'git commit -m': this.commit.bind(this),
      'git cat-file -p': this.catFile.bind(this),
      'cat': this.cat.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
    this.button = document.getElementById('show-pic-button').addEventListener('click', this.showPic.bind(this));
  }

  commit() {
    this.slideImageIn('after-commit');
    this.terminal.echo(`
[master (root-commit) 28fb86e] initial commit
 3 files changed, 5 insertions(+)
 create mode 100644 app.css
 create mode 100644 app.js
 create mode 100644 index.html
`
    )
  }

  catFile(hash) {

    if (hash === 'e40ce52') {
      this.terminal.echo(`
100644 blob e8957c6d4d357b55c768f222f1743a187424e912	app.css
100644 blob 26b94195ea03b8d29a6e65e2d1c8704b933d5117	app.js
100644 blob c50eddd41faba2ecc8928e459288fe612b999170	index.html
      `);
    } else if (hash === '28fb86e') {
      this.terminal.echo(`
<span class="highlight">tree e40ce523d525e9e558ecbee370c524913214f9f9</span>
author erinz <erin.zimmer@auspost.com.au> 1501925637 +1000
committer erinz <erin.zimmer@auspost.com.au> 1501925637 +1000

initial commit`);
    }
  }

  cat() {
    this.terminal.echo('28fb86e94befa9a40fddfb0e9ee553ffa6fd0');
  }

  showPic(event) {
    event.stopPropagation();
    this.slideImageIn('refs');
  }

  slideImageIn(id) {
    const image = document.getElementById(id).classList.add('slide-in-animation');
  }

  static getTemplate() {
    return `
    <div>
      <div class="terminal"></div>
      <div id="images" class="images">
        <img id="after-commit" class="slide-in-ready" src="images/after-commit.png" />
        <img id="refs" class="slide-in-ready" src="images/refs.png" />
      </div>
    </div>  
    <button class="show-button" id="show-pic-button">+</button>`;
  }
}