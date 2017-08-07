import Terminal from '../terminal.js';

export default class RepoController {
  constructor() {
    this.keyEvents = {
      'git init': this.gitInit.bind(this),
    }
    this.terminal = new Terminal(this.keyEvents);

    this.repo = document.getElementById('repo');
    this.repo.addEventListener('click', this.highlightRepo.bind(this));

    this.directory = document.getElementById('directory');
    this.directory.addEventListener('click', this.highlightDir.bind(this));
  }

  gitInit(event) {
    this.repo.classList.add('bounce-in');
    document.querySelector('.prompt').contentEditable = false;
  }

  highlightDir(event) {
    event.stopPropagation();
    this.directory.classList.add('highlighted');
  }

  highlightRepo(event) {
    event.stopPropagation();
    this.directory.classList.add('highlighted');
  }

  static getTemplate() {
    return `<div class="terminal"></div>
            <div id="directory" class="directory">
              <img class="fade-in" src="images/finder.png" />
              <div id="repo" class="repo"></div>
            </div>`;
  }
}