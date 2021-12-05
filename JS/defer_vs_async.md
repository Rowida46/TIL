## Defer

It's a boolen attribute used as `<script src="" defer >` to indicate to a <em>Browser</em> whether the script will be executed right after it's completely parsed, but before firing [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) or executed as soon as it is available (before parsing completes) in case of using `async` as a script atrribute `<script src="demo_async.js" async></script>
`.

> If neither `async` or `defer` is present: The script is downloaded and executed immediately, *blocking parsing until the script is completed*.



## Why we come into defer Concept?

[In more details..](https://www.educba.com/javascript-defer/)

## Referance 

- [Web tech for developers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [Defer in more details](https://www.educba.com/javascript-defer/)