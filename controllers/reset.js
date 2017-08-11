import Terminal from '../terminal.js';

export default class ResetController {
  constructor() {
    this.keyEvents = {
      'git log --oneline': this.log.bind(this),
      'git reset': this.reset.bind(this),
      'git status': this.status.bind(this),
      'cat': this.cat.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
  }
  
   log() {
    this.terminal.echo(`88bf8ae dumb mistake
<span class="highlight">182e899 clean up</span>
9c89fd7 started new feature
aaac3c9 different stuff
b98bb54 new gif
caf6dae add config
043d9ca initial commit`);
  }

  reset() {
    this.terminal.echo(`Unstaged changes after reset:
M	index.html`)
  }

  status() {
    this.terminal.echo(`<span class="highlight">On branch master</span>
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	<span class="untracked-files">modified:   index.html</span>

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	<span class="untracked-files">stupid-mistake.xml</span>

no changes added to commit (use "git add" and/or "git commit -a")`)
  }

  cat() {
    this.terminal.echo(`182e8991b583a56a52e2aacc66070b537a152dc5`);
  }

  static getTemplate() {
    return `<div class="terminal"></div>`;
  }
}