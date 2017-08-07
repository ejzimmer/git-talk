import Terminal from '../terminal.js';

export default class AddController {

  constructor () {
    this.files = [
      { 
        name: 'app.css',
        status: 'untracked',
      },
      {
        name: 'app.js',
        status: 'untracked',
      },
      {
        name: 'index.html',
        status: 'untracked',
      }
    ];

    this.events = {
      ls: this.listFiles.bind(this),
      'git status': this.showStatus.bind(this),
      'git add .': this.addFiles.bind(this),
      'git commit': this.showStatus.bind(this),
    };

    this.terminal = new Terminal(this.events);
  }

  listFiles() {
    const fileList = this.files.reduce((string, file) => `${string}${file.name}\n`, '');
    this.terminal.echo(fileList);
  }

  addFiles() {
    this.files.forEach(file => file.status = 'tracked');
    this.terminal.showPrompt();
  }

  showStatus() {
    let status = `
On branch master

Initial commit`;

    const untrackedFiles = 
      this.files
        .filter(file => file.status === 'untracked')
        .reduce((string, file) => `${string}    ${file.name}\n`, '');
  
    if (untrackedFiles.length > 1) {
      status += `
Untracked files:
  (use "git add <file>..." to include what will be committed)
  <span class="untracked-files">
${untrackedFiles}
  </span>
<span class="highlight">nothing added to commit but untracked files present (use "git add" to track)</span>`;
    }

    const trackedFiles = 
      this.files
        .filter(file => file.status === 'tracked')
        .reduce((string, file) => `${string}    ${file.name}\n`, '');

    if (trackedFiles.length > 1) {
      status += `
<span class="highlight">Changes to be committed:</span>
  (use "git rm --cached <file>..." to unstage)
  <span class="tracked-files">
    new file:   app.css
    new file:   app.js
    new file:   index.html
  </span>`
    }

    this.terminal.echo(status);
  }

  static getTemplate() {
    return `<div class="terminal"></div>`;
  }
}