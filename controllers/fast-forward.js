import Terminal from '../terminal.js';

export default class FastForwardController {

  constructor() {
    this.keyEvents = {
      'git checkout -b feature': this.createFeatureBranch.bind(this),
      'git checkout master': this.checkoutMaster.bind(this),
      'git commit': this.moveFeatureBranch.bind(this),
      'git merge feature': this.merge.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);

    this.featureCommit = 0;

    document.querySelector('.terminal').style.marginTop = '100px';
  }

  createFeatureBranch() {
    document.getElementById('master').classList.remove('head');

    const feature = document.getElementById('feature');
    feature.innerHTML = '&lt; feature';
    feature.classList.add('head');
    this.terminal.clear();
  }

  moveFeatureBranch() {
    const feature = document.getElementById('feature');
    const ref = feature.parentElement;
    let nextRef = ref.previousElementSibling.previousElementSibling.previousElementSibling;

    feature.remove();
    nextRef.classList.add('right');
    nextRef.classList.add('ref');

    nextRef.appendChild(this.createElement('feature', '&lt; feature'));

    this.terminal.clear();
  }

  checkoutMaster() {
    document.getElementById('feature').classList.remove('head');
    document.getElementById('master').classList.add('head');

    this.terminal.clear();
  }

  merge() {
    document.getElementById('master').remove();

    const feature = document.getElementById('feature').parentElement;
    const master = feature.previousElementSibling.previousElementSibling;
    master.classList.add('left');
    master.classList.add('ref');

    master.appendChild(this.createElement('master', 'master &gt;'));

    this.terminal.clear();
  }

  createElement(branch, label) {
    const element = document.createElement('div');
    element.id = branch;
    element.classList.add('head');
    element.innerHTML = label;

    return element;
  }

  static getTemplate() {
    return `
      <div class="fast-forward">
        <div></div><div class="commit"></div><div></div>
        <div></div><div class="commit"></div><div></div>
        <div></div><div class="commit"></div><div></div>
        <div></div><div class="commit"></div><div></div>
        <div class="ref left">
          <div class="head" id="master">master &gt;</div>
        </div>
        <div class="commit"></div>
        <div class="right ref">
          <div id="feature"></div>
        </div>
      </div>
      <div class="terminal"></div>`;
  }
}