import Terminal from '../terminal.js';

export default class ResetController {
  constructor() {
    this.keyEvents = {
      'git log --oneline': this.log.bind(this),
      'git checkout -b': this.newBranch.bind(this),
      'git checkout': this.checkout.bind(this),
      'cat .git/HEAD': this.catHead.bind(this),
      'cat .git/refs/heads': this.catRefs.bind(this),
    };
    this.terminal = new Terminal(this.keyEvents);
  }

  log() {
    this.terminal.echo(`88bf8ae dumb mistake
182e899 clean up
<span class="highlight-pink">9c89fd7 started new feature</span>
aaac3c9 different stuff
b98bb54 new gif
caf6dae add config
043d9ca initial commit`);
  }

  checkout() {
    this.head = '9c89fd7b11e46afde55320d66bb972a83fc87e76';
    document.getElementById('detached-head').classList.add('thunder');
    this.terminal.echo(`Note: checking out '9c89fd7'.

You are in <span class="highlight">'detached HEAD'</span> state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 9c89fd7... started new feature`);
  }

  catHead() {
    this.terminal.echo(this.head);
  }
  catRefs() {
    this.terminal.echo(this.branch);
  }

  newBranch(branchName) {
    this.branch = this.head;
    this.head = `refs/heads/${branchName}`;
    document.getElementById('detached-head').classList.remove('thunder');
    this.terminal.echo(`Switched to a new branch '${branchName}'`);
  }

  static getTemplate() {
    return `<div class="terminal"></div>
            <img src="images/detached-head.jpg" class="hiding fixed" id="detached-head" />`;
  }
}