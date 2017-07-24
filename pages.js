import HashesController from './hashes.js';
import BlobsController from './blobs-and-trees.js';

export default [
        {
          content: '<h1><em>git.</em> wtf is it doing, anyway?</h1>',
        },
        {
          hash: '#source_control',
          title: 'source control',
          content: `
            <div>1. save your progress!</div>
            <img src="save_screen.png alt="zelda save screen" />`,
        },
        {
          hash: '#stupid',
          title: 'git == stupid content tracker',
          content: `<img src="./Linus_Torvalds.jpeg" />`,
        },
        {
          hash: '#hash',
          title: 'hashes',
          content: `<div class="love">
                      <div>cortana <span class="heart">loves</span> siri</div>
                      <div> 0 1 0 0 1 </div>
                      <div> 1 1 0 1 </div>
                      <div> 2 1 1 </div>
                      <div> 3 2 = <span class="highlight">32%</span></div>
                    </div>`,
          controller: HashesController,
        },
        {
          hash: '#file_system',
          title: 'blobs & trees',
          content: `<div class="blobs-and-trees">
                      <div class="directory-tree">
                        <div class="directory" id="root">my-project/</div>
                        <div class="file">|__index.html</div>
                        <div class="file">|__index.js</div>
                        <div class="directory">|__images/</div>
                        <div class="file">&nbsp;&nbsp;|__cats.gif</div>
                        <div class="file">&nbsp;&nbsp;|__more-cats.gif</div>
                      </div>
                    </div>
                    <div class="directory-listing"></div>`,
          controller: BlobsController,
        },
        {
          hash:'#working_area',
          title: 'the working area',
          content: '',
        },
        {
          hash: '#commits',
          title: 'commits',
          content: '',
        },
        {
          hash: '#staging',
          title: 'the staging area',
          content: '',
        },
        {
          hash: '#branches',
          title: 'branches & merging',
          content: '',
        },
        {
          hash: '#stash',
          title: 'the stash',
          content: '',
        },
        {
          hash: '#remotes',
          title: 'remotes',
          content: '',
        },
        {
          hash: '#undoing',
          title: 'undoing stuff',
          content: '',
        },
        {
          hash: '#rebases',
          title: 'rewriting history',
          content: '',
        },
        {
          hash: '#resources',
          title: 'resources',
          content: '',
        }
      ]; 