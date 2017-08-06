import SourceControlController from './controllers/source-control.js';
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
          hash: '#second-commit',
          controller: SecondCommitController,
        },
        {
          hash: '#second-commit-diagram',
          content: '<img class="spin-in" src="images/second-commit-diagram.png" />',
        },
        {
          hash: '#checkout',
          controller: CheckoutController,
        }
      ]; 