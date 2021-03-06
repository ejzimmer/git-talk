import InitController from './controllers/init.js';
import AddController from './controllers/add.js';
import HashesController from './controllers/hashes.js';
import CommitController from './controllers/commit.js';
import SecondCommitController from './controllers/second-commit.js';
import CheckoutController from './controllers/checkout.js';
import FastForwardController from './controllers/fast-forward.js';
import MergeController from './controllers/merge.js';
import DetachedHeadController from './controllers/detached-head.js';
import ResetController from './controllers/reset.js';
import ResetTypesController from './controllers/reset-types.js';
import SummaryController from './controllers/summary.js';

export default [
        {
          content: '<h1><em>git.</em> wtf is it doing, anyway?</h1>',
        },
        {
          hash: '#disclaimer',
          content: '<div class="disclaimer">DISCLAIMER</div>',
        },
        {
          hash: '#repo',
          controller: InitController,
        },
        {
          hash: '#working',
          content: `
            <div class="under-construction">
              <img src="images/under-construction.gif" />
              <img src="images/under-construction-man.gif" />
              <img src="images/under-construction2.gif" />
              <img src="images/under-construction-java.gif" />
            </div>`
        },
        {
          hash: '#add',
          controller: AddController,
        },
        {
          hash: '#hashes',
          controller: HashesController,
        },
        {
          hash: '#commit',
          controller: CommitController,
        },
        {
          hash: '#initial-commit-diagram',
          content: '<img class="spin-in" src="images/initial-commit.png" />'
        },
        {
          hash: '#working-again',
          content: `
            <div class="under-construction">
              <img src="images/under-construction2.gif" />  
              <img src="images/under-construction.gif" />          
              <img src="images/under-construction-java.gif" />
              <img src="images/under-construction-man.gif" />
            </div>`
        },
        {
          hash: '#second-commit',
          controller: SecondCommitController,
        },
        {
          hash: '#second-commit-diagram',
          controller: class SecondCommitDiagram {
            constructor() {
              document.querySelector('img.spin-in').addEventListener('click', (event) => {
                event.stopPropagation();
                event.target.style.display = 'none';
                document.querySelector('.radial-out').classList.add('radiate');
              }, { once: true })
            }
            static getTemplate() {
              return `
                <img class="spin-in middle" src="images/second-commit-diagram.png" />
                <img class="radial-out" src="images/three-commits.png" />`;
            }
          },
        },
        {
          hash: '#cat-video',
          content: `<video width="100%" controls="controls" autoplay="true">
                         <source src="images/cat.mp4" type="video/mp4" />
                    </video>`,
        },
        {
          hash: '#checkout',
          controller: CheckoutController,
        },
        {
          hash: '#fast-forward',
          controller: FastForwardController,
        },
        {
          hash: '#merge',
          controller: MergeController,
        },
        {
          hash: '#sad',
          content: '<div class="emoji">😞</div>',
        },
        {
          hash: '#detached',
          controller: DetachedHeadController,
        },
        {
          hash: '#reset',
          controller: ResetController,
        },
        {
          hash: '#reset-types',
          controller: ResetTypesController,
        },
        {
          hash: '#summary',
          controller: SummaryController,
        },
        {
          hash: '#commands',
          content: `<pre class="terminal">
<span class="untracked-files">git ls-files
git cat-file
git hash-object</span>
git status
git add
git commit
git log
git reset
git checkout
</pre>`,
        },
      ]; 