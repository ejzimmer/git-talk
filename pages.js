import SourceControlController from './controllers/source-control.js';
import InitController from './controllers/init.js';
import AddController from './controllers/add.js';
import HashesController from './controllers/hashes.js';
import CommitController from './controllers/commit.js';
import CheckoutController from './controllers/checkout.js';

export default [
        {
          content: '<h1><em>git.</em> wtf is it doing, anyway?</h1>',
        },
        {
          hash: '#source_control',
          controller: SourceControlController,
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
          hash: '#checkout',
          controller: CheckoutController,
        }
      ]; 