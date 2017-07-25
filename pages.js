import BlobsController from './controllers/blobs-and-trees.js';
import RepoController from './controllers/repo-working-area.js';
import SHA1Controller from './controllers/sha1.js';

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
          hash: '#repo',
          title: 'working area & repo',
          controller: RepoController,
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
        },
        {
          hash: '#sha1',
          title: 'SHA1',
          controller: SHA1Controller,
        },
      ]; 