export default class ResetTypes {
  constructor() {
    document.getElementById('soft').addEventListener('click', this.soft.bind(this));
    document.getElementById('mixed').addEventListener('click', this.mixed.bind(this));
    document.getElementById('hard').addEventListener('click', this.hard.bind(this));
  }

  soft(event) {
    this.highlight(event.target);
    event.stopPropagation();
    document.getElementById('output').innerHTML = `<pre>
Staging Area:
  index.html
  stupid-mistake.xml
Working Area:
  All your committed files
  index.html
  stupid-mistake.xml

  
  <span style="font-size: 2em">😄</span>`
  }

  mixed(event) {
    this.highlight(event.target);
    event.stopPropagation();
    document.getElementById('output').innerHTML = `<pre>
Staging Area:
Working Area:
    All your committed files
    index.html
    stupid-mistake.xml


    <span style="font-size: 2em">😄</span>
</pre>`
  }

  hard(event) {
    this.highlight(event.target);
    event.stopPropagation();
    document.getElementById('output').innerHTML = `<pre>
Staging Area:
Working Area:
  All your committed files


    <span style="font-size: 2em">🙀</span>`
  }

  highlight(element) {
    document.querySelectorAll('button').forEach(button => button.classList.remove('highlighted'));
    element.classList.add('highlight-border');
  }

  static getTemplate() {
    return `<div class="columns">
              <ul>
                <li><button id="soft">git reset --soft</button></li>
                <li><button id="mixed">git reset --mixed</button></li>
                <li><button id="hard">git reset --hard</button></li>
              </ul>
            </div>
            <div id="output"></div>`
  }
}