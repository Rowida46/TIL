## Some Git usefull  tips 

<h2>
  <a name="1-git-aliases-%F0%9F%8F%B7" href="#1-git-aliases-%F0%9F%8F%B7">
  </a>
  1. Git aliases 🏷
</h2>


Create your own aliases for common commands to save you some time in the terminal.

<pre>
	git config --global alias.co checkout
	git config --global alias.ci commit
	git config --global alias.br branch

</pre>

instead of wrting the whole command, run the following breviations:

```plaintext width: fit-content;
[alias]
    co = checkout
    ci = commit
    br = branch
```


<h2>
  <a name="2-compare-commits-%E2%9A%96" href="#2-compare-commits-%E2%9A%96">
  </a>
  2. Compare commits ⚖
</h2>

A simple way to commpare differance between *commits* or *version* of the *same File* it to run <code>git diff</code>

<dt>If you want to compare the same file between different commits, you run the following:</dt>
<dd>
	<div class="highlight js-code-highlight">
	<pre class="highlight plaintext"><code>git diff $start_commit..$end_commit -- path/to/file
	</code></pre>
	<div class="highlight__panel js-actions-panel">
	<div class="highlight__panel-action js-fullscreen-code-action">
	    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
	    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
	</svg>
	<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
	    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
	</svg>
	</div>
	</div>
	</div>
</dd>