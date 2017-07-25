export default class BlobsController {
  constructor() {
    this.element = document.querySelector('.blobs-and-trees');
    this.element.addEventListener('click', this.showDirectory.bind(this), { once: true });
  }

  showDirectory(event) {
    event.stopPropagation();
    
    this.currentDirectory = document.querySelector('#root');
    this.currentDirectory.style.border = '2px solid #f2d';

    const directoryListing = `<div class="files">
                                  <div>FILE</div> <div>index.html</div> <div>0x003243ff</div>
                                  <div>FILE</div> <div>index.js</div> <div>0x0005532a</div>
                                  <div>DIR</div> <div>images</div> <div>0x33a889ee</div>
                              </div>`;
    document.querySelector('.directory-listing').innerHTML = directoryListing;
  }
}