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
          hash: '#disclaimer',
          content: '<div class="disclaimer">DISCLAIMER</div>'
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
          hash: '#commit',
          title: 'git commit',
          content: `<div id="terminal" contenteditable="true" 
                    onclick="(function (event) { event.stopPropagation() })(event)">&gt;&nbsp;</div>
                    <img src="some-work.png" />`,
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