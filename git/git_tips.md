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
	</div>
	</div>
	</div>
</dd>






## Reference 

[10 usefull *git* tips](https://dev.to/yenyih/10-useful-git-tips-to-improve-your-workflow-kf1)
