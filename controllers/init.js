import Terminal from '../terminal.js';

export default class RepoController {
  constructor() {
    this.keyEvents = {
      'git init': this.gitInit.bind(this),
    }
    this.terminal = new Terminal(this.keyEvents);

    this.repo = document.getElementById('repo');
    this.folder = document.getElementById('folder');
  }

  gitInit(event) {
    this.repo.classList.add('bounce-in');
    document.getElementById('folder').addEventListener('click', this.highlightRepo.bind(this), { once: true });
    document.querySelector('.prompt').contentEditable = false;
  }


  highlightRepo(event) {
    event.stopPropagation();

    document.getElementById('repo-label').style.display = 'block';
    this.repo.classList.add('colour-in');

    this.folder.addEventListener('click', this.highlightWorkingArea.bind(this), { once: true });
  }

  highlightWorkingArea(event) {
    event.stopPropagation();

    document.getElementById('folder-label').style.display = 'inline-block';
    this.folder.classList.add('colour-in');
  }

  static getTemplate() {
    return `<div class="terminal"></div>
            <div class="folder fade-in" id="folder">
              <div class="folder-label label" id="folder-label">working area</div>
              <div id="repo" class="repo"></div>
              <div class="repo-label label" id="repo-label">repository</div>
            </div>`;
  }
}