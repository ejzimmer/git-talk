import InitController from './controllers/init.js';
import AddController from './controllers/add.js';
import HashesController from './controllers/hashes.js';
import CommitController from './controllers/commit.js';
import SecondCommitController from './controllers/second-commit.js';
import CheckoutController from './controllers/checkout.js';

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
          hash: '#merge',
          content: `<pre>tree edb941a7808b2114a11e4a4bc25dba0706c530cc
parent aaac3c902a4c8b2cd3178def499cc21b664c5172
parent 4d4d91de11a5e679e9d7db5c19135d629ca21223
author erinz <erin.zimmer@auspost.com.au> 1502360584 +1000
committer erinz <erin.zimmer@auspost.com.au> 1502360584 +1000

Merge branch 'feature'</pre>`
        },
      ]; 