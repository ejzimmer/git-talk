export default class CommitController {
  static getTemplate() {
    return `
  <div class="terminal">
    <div class="prompt">git commit -m "initial commit"</div>
    <pre class="status">
[master (root-commit) 69e5c69] initial commit
 3 files changed, 5 insertions(+)
 create mode 100644 app.css
 create mode 100644 app.js
 create mode 100644 index.html
    </pre>
    <div class="prompt">git status</div>
    <pre class="status">
On branch master
nothing to commit, working tree clean
    </pre>
    <img src="images/after-commit.png" />
    <div class="prompt">git cat-file -p e40ce523d525e9e558ecbee370c524913214f9f9</div>
    <pre class="status">
100644 blob e8957c6d4d357b55c768f222f1743a187424e912	app.css
100644 blob 26b94195ea03b8d29a6e65e2d1c8704b933d5117	app.js
100644 blob c50eddd41faba2ecc8928e459288fe612b999170	index.html
    </pre>
    <div class="prompt">git cat-file -p 28fb86e94befa9a4f0d08edfb0e9ee553ffa6fd0</div>
    <pre class="status">
<span class="highlight">tree e40ce523d525e9e558ecbee370c524913214f9f9</span>
author erinz <erin.zimmer@auspost.com.au> 1501925637 +1000
committer erinz <erin.zimmer@auspost.com.au> 1501925637 +1000

initial commit
    </pre>
<img src="images/refs.png" />
<div class="prompt">cat .git/refs/heads/master</div>
<div class="status">97a5fcbeba0cac1db25a05ab488b0b81f057126d</div>
<img src="images/initial-commit.png" />
        <div class="prompt">ls -a</div>
        <div class="ls status">
          <span class="dir">.git</span>  
           <span>app.css</span>  
          <span>app.js</span>
          <span>config.json</span>
          <span>index.html</span>      
        </div>
<div class="prompt">git status</div>
<pre class="status">
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	<span class="untracked-files">modified:   index.html</span>

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	<span class="untracked-files">config.json</span>

no changes added to commit (use "git add" and/or "git commit -a")
</pre>
<div class="prompt">git add .</div>
<div class="prompt">git commit -m "add config"</div>
<pre class="status">
[master e47b459] add config
 2 files changed, 2 insertions(+)
 create mode 100644 config.json
 </pre>
 <div class="prompt">git cat-file -p e47b4596ba0374e87fd88c2fc46bc4c461e3e383</div>
 <pre class="status">
tree d2310568deb2dd2ce088ac4c83d33dd6335f60d2
<span class="highlight">parent 97a5fcbeba0cac1db25a05ab488b0b81f057126d</span>
author erinz <erin.zimmer@auspost.com.au> 1501930205 +1000
committer erinz <erin.zimmer@auspost.com.au> 1501930205 +1000

add config
</pre>
<div class="prompt">cat .git/refs/heads/master</div>
<div class="status">e47b4596ba0374e87fd88c2fc46bc4c461e3e383</div>
<img src="images/second-commit-diagram.png" />
  </div>`
  }
}