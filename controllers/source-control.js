export default class SourceControlController {
  
  constructor() {
    document.getElementById('content').addEventListener('click', this.nextItem.bind(this), { once: true });
  }

  nextItem(event) {
    event.stopPropagation();
    document.getElementById('save').style.top = '-1000px';
    document.getElementById('collaborate').style.top = 0;

    document.getElementById('content').addEventListener('click', this.nextPage.bind(this), { once: true });
  }

  nextPage(event) {
    event.stopPropagation();

    const target = event.target;
    document.getElementById('collaborate').style.top = '-1000px';

    setTimeout(() => {
      document.getElementById('content').click()
    }, 1000);
  }

  static getTemplate() {
    return `<ol class="source-control">
              <li id="save">
                save your progress
                <img src="images/saved_games.jpg" />
              </li>
              <li id="collaborate">
                collaborate with others
                <img src="images/messy-directory.png" />
              </li>
            </ol>`;
  }
}