export default class SummaryController {
  constructor() {
    this.clickHandler = this.handleClick.bind(this);
    this.index = 0;
    this.elements = document.querySelector('.terminal').children;
    document.querySelector('body').addEventListener('click', this.clickHandler);
  }

  handleClick(event) {
    event.stopPropagation();
    this.elements[this.index].classList.remove('tracked-files');
    this.elements[++this.index].classList.remove('hiding');
    if (this.index < this.elements.length - 1) {
      this.elements[this.index].classList.add('tracked-files');
    } else {
      this.elements[this.index].classList.add('untracked-files');
      document.querySelector('body').removeEventListener('click', this.clickHandler);
    }
  }

  static getTemplate() {
    return `<div class="terminal">
<div class="tracked-files">Add -> copy files to object database (compress & hash)</div>
<div class="hiding">Commit -> create snapshot & commit, update ref</div>
<div class="hiding">Branches -> just a reference to a commit</div>
<div class="hiding">Merge -> fucking magic</div>
<div class="hiding">Checkout a commit without a reference -> detached head</div>
<div class="hiding">Reset -> change the commit the current branch points to</div>
<div class="hiding">BE CAREFUL USING RESET --HARD</div>
</div>`;
  }
}