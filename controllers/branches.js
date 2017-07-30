export default class BranchesController {

  constructor() {
    document.getElementById('content').addEventListener('click', this.showBranches, { once: true });
  }

  showBranches(event) {
    event.stopPropagation();

    const newPic = `<div class="separate-branches">
                      <div><img src="trex.jpeg" /></div>
                      <div><img src="branches.png" class="not-so-big" /></div>
                      <div><img src="utahraptor.jpg" /></div>
                    </div>`;
    this.innerHTML = newPic;
  }

  static getTemplate() {
    return `
      <div class="dino-branches">
        <div class="co-workers"><img src="qwantz.jpg" /></div>
        <div class="branches commits">
          <div class="me">start swipe left feature</div>
          <div class="sue">start swipe right feature</div>
          <div class="sue">work on swipe right feature</div>
          <div class="me">work on swipe left feature</div>
          <div class="sue">finish swipe right feature</div>
          <div class="me">finish swipe left feature</div>
        </div>
      </div>`;
  }
}