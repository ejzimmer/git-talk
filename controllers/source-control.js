export default class SourceControlController {
  
  constructor() {
    document.getElementById('content').addEventListener('click', this.nextItem.bind(this), { once: true });
  }

  nextItem(event) {
    event.stopPropagation();
    document.getElementById('save').style.top = '-1000px';
    document.getElementById('collaborate').style.top = 0;
  }

  static getTemplate() {
    return `<ol class="source-control">
              <li id="save">
                save your progress
                <img src="saved_games.jpg" />
              </li>
              <li id="collaborate">
                collaborate with others
                <img src="messy-directory.png" />
              </li>
            </ol>`;
  }
}