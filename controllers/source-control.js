export default class SourceControlController {
  
  constructor() {
    document.getElementById('collaborate').style.display = 'none';
    document.getElementById('content').addEventListener('click', this.nextItem.bind(this), { once: true });
  }

  nextItem(event) {
    event.stopPropagation();
    document.getElementById('save').style.display = 'none';
    document.getElementById('collaborate').style.display = 'list-item';
  }

  static getTemplate() {
    return `<ol>
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