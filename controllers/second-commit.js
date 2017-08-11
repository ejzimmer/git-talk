import Terminal from '../terminal.js';

const config = `{ "awesomeness": "high" }`;
const index = `&lt;!doctype html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;script src="config.json"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`

const tree = `100644 blob c50eddd41faba2ecc8928e459288fe612b999170	app.css
100644 blob 26b94195ea03b8d29a6e65e2d1c8704b933d5117	app.js
100644 blob f48f4c18deb2dd2ce0aa678983d33dd6335f60d2	config.json
100644 blob 4b3b4339d3bdd881d8c9fedaa0cdb6d8e4edd987	index.html`;

const commit = `tree d2310568deb2dd2ce088ac4c83d33dd6335f60d2
<span class="highlight">parent 28fb86e94befa9a40fddfb0e9ee553ffa6fd0</span>
author erinz <erin.zimmer@auspost.com.au> 1501930205 +1000
committer erinz <erin.zimmer@auspost.com.au> 1501930205 +1000

add config`;
const catFiles = {
  'f48f4c1': config,
  '4b3b433': index,
  'd231056': tree,
  'e47b459': commit,
};

export default class SecondCommitController {

  constructor() {
    this.keyEvents = {
      'ls': this.ls.bind(this),
      'git status': this.gitStatus.bind(this),
      'git commit -m': this.commit.bind(this),
      'git hash-object': this.hash.bind(this),
      'git cat-file -p': this.catFile.bind(this),
      'cat .git/refs/heads/master': this.cat.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
    this.keyEvents['git add .'] = this.terminal.showPrompt.bind(this.terminal);
  }

  ls() {
    this.terminal.echo(`app.css
app.js
<span class="highlight">config.json</span>
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
    document.querySelector('.disappeared').classList.add('bounce-in');
    this.terminal.echo(`[master <span class="highlight-pink">e47b459</span>] add config
 2 files changed, 2 insertions(+)
 create mode 100644 config.json`);
  }

  hash(fileName) {
    this.terminal.echo(hashes[fileName]);
  }

  catFile(hash) {
    this.terminal.echo(catFiles[hash]);
  }

  cat() {
    this.terminal.echo('e47b4596ba0374e87fd88c2fc46bc4c461e3e383');
  }


  static getTemplate() {
    return `<div class="columns">
              <div class="terminal"></div>
              <div class="images overflow large">
                <img class="disappeared" src="images/second-commit.png" />
              </div>
            </div>`;
  }
}
