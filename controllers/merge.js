const images = ['branches', 'common', 'merged'];

export default class MergeController {

  constructor() {
    this.imageIndex = 0;
    this.mergeElement = document.querySelector('.merge');
    this.addListener();
  }

  addListener() {
    this.mergeElement.addEventListener('click', this.nextImage.bind(this), { once: true });
  }

  nextImage(event) {
    event.stopPropagation();

    if (this.imageIndex === images.length -1) {
      this.mergeElement.innerHTML = `<pre>tree edb941a7808b2114a11e4a4bc25dba0706c530cc
<span class="highlight-pink">parent aaac3c902a4c8b2cd3178def499cc21b664c5172</span>
<span class="highlight-pink">parent 4d4d91de11a5e679e9d7db5c19135d629ca21223</span>
author erinz <erin.zimmer@auspost.com.au> 1502360584 +1000
committer erinz <erin.zimmer@auspost.com.au> 1502360584 +1000

Merge branch 'feature'</pre>`
      return;
    }

    document.getElementById(images[this.imageIndex]).classList = 'hiding';
    document.getElementById(images[++this.imageIndex]).classList.remove('hiding');

    this.addListener();
  }

  static getTemplate() {
    return `
    <div class="merge">
      <img id="branches" src="images/branches.png" />
      <img id="common" class="hiding" src="images/last-common-ancestor.png" />
      <img id="merged" class="hiding" src="images/merged.png" />
    </div>`;
  }
}