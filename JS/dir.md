- www/
	- index.html
	- js/
	- app/
		- sub.js
	- lib/
		- jquery.js
		- canvas.js
	- app.js
	- require.js



in index.html write down
```html
<script data-main="js/app.js" src="js/require.js"></script>
```

in app.js
```javascript
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});
```