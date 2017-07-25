export default class RepoController {
  constructor() {
    this.terminal = document.getElementById('terminal');
    this.terminal.contentEditable = true;

    this.terminal.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    this.terminal.addEventListener('keypress', this.gitInit.bind(this));
  }

  gitInit(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.terminal.contentEditable = false;
      
      this.repo = document.getElementById('repo');
      this.repo.style.display = 'block';
      
      this.folder = document.getElementById('folder');
      this.folder.addEventListener('click', this.highlightRepo.bind(this), { once: true });
    }
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
    return `<div id="terminal">&gt;&nbsp;</div>
            <div class="folder" id="folder">
              <div class="folder-label label" id="folder-label">working area</div>
              <div id="repo" class="repo"></div>
              <div class="repo-label label" id="repo-label">repository</div>
            </div>`;
  }
}