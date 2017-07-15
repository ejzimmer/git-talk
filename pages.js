import HashesController from './hashes.js';

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
          content: `<div class="love">cortana <span class="heart">loves</span> siri</div>`,
          controller: HashesController,
        },
        {
          hash: '#file_system',
          title: 'blobs & trees',
          content: '',
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