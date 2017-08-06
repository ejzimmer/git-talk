import Terminal from '../terminal.js';

export default class SecondCommitController {

  constructor() {
    this.keyEvents = {
      'ls': this.ls.bind(this),
      'git status': this.gitStatus.bind(this),
      'git commit -m': this.commit.bind(this),
      'git cat-file -p': this.catFile.bind(this),
      'cat .git/refs/heads/master': this.cat.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
    this.keyEvents['git add .'] = this.terminal.showPrompt.bind(this.terminal);
  }

  ls() {
    this.terminal.echo(`app.css
app.js
config.json
index.html`);
  }

  gitStatus() {
    this.terminal.echo(`On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	<span class="untracked-files">modified:   index.html</span>

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	<span class="untracked-files">config.json</span>

no changes added to commit (use "git add" and/or "git commit -a")`);
  }

  commit() {
    this.terminal.echo(`[master <span class="highlight-pink">e47b459</span>] add config
 2 files changed, 2 insertions(+)
 create mode 100644 config.json`);
  }

  catFile() {
    this.terminal.echo(`tree d2310568deb2dd2ce088ac4c83d33dd6335f60d2
<span class="highlight">parent 28fb86e94befa9a40fddfb0e9ee553ffa6fd0</span>
author erinz <erin.zimmer@auspost.com.au> 1501930205 +1000
committer erinz <erin.zimmer@auspost.com.au> 1501930205 +1000

add config`);
  }

  cat() {
    this.terminal.echo('e47b4596ba0374e87fd88c2fc46bc4c461e3e383');
  }


  static getTemplate() {
    return `<div class="terminal"></div>`;
  }
}
