import BlobsController from './controllers/blobs-and-trees.js';
import RepoController from './controllers/repo-working-area.js';
import SHA1Controller from './controllers/sha1.js';
import SourceControlController from './controllers/source-control.js';
import CheckoutController from './controllers/checkout.js';
import BranchesController from './controllers/branches.js';

export default [
        {
          content: '<h1><em>git.</em> wtf is it doing, anyway?</h1>',
        },
        {
          hash: '#source_control',
          title: 'source control',
          controller: SourceControlController,
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
        {
          hash: '#objects',
          title: 'git objects',
          content: `<div class="objects-grid">
                      <div class="blob"></div>
                      <div>blob</div>
                      <div class="tree"></div>
                      <div>tree</div>
                      <div class="commit"></div>
                      <div>commit</div>
                      <div class="tag"></div>
                      <div>tag</div>
                    </div>`,
        },
        {
          hash: '#initial-commit',
          title: 'initial commit',
          content: '<img src="initial-commit.png" />',
        },
        {
          hash: '#second-commit',
          title: 'second commit',
          content: '<img src="second-commit.png" />',
        },
        {
          hash: '#checkout',
          title: 'checkout',
          controller: CheckoutController,
        },
        {
          hash: '#branches',
          title: 'branches',
          controller: BranchesController,
        }
      ]; 