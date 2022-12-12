

##### how to convert ordered list into unordered list?


Call & Use `style="list-style-type: disc;` inside `ol` tag.



##### Order list based on alphapetics?

```html
	<ol type="A"> </ol>
```


#### DL & DT & DL

_dl & dt_ for further descriptions within list
   - dl -> to begin
   - dt -> description title
   - dl -> description list


## How to embed youtube videos using `IFrame`

[How to Embed YouTube Videos using iframe in HTML Tutorial](https://sabe.io/blog/html-embed-youtube-videos-iframe)

- How to Auto-Play an embedded YouTube Video
```bash
https://www.youtube.com/embed/[ID HERE]= 1
```
- How to Loop an embedded YouTube Video
using loop=1

```bash
https://www.youtube.com/embed/[ID HERE]?loop=1
```

- How to Hide the YouTube Video Controls

```bash
https://www.youtube.com/embed/[ID HERE]?control=0
```


### `textarea` 

Instead of set type of input as a text, text are used for short test, however we can use `testarea` for long text and we can __Specify number of rows and cols used& oreserved for this text".
```html
<textarea id="w3review" name="w3review" rows="4" cols="50">
```


## datalist as an input type

we have & must follow :

- write input tag and spesify `list = datalist_id`, to work as a ref or inject the options spesified within this _datalist_ options.

- wrtie `datalist` tag and spesify options list.

> _Note_: users are not restericted with the provided options list, he/she can write his/her own option.

__Code SnapShot__

```html
<label>You can choose from our predefined options or write your own option</label>
		<input align="left" type="" list="enums" name="">
		<datalist id= "enums">
			<option> Daily</option>
			<option> Hourly</option>
			<option> Weekly</option>

		</datalist>
```

### `reset` as an input type

we can reset to clear written data from the form
```html
<input type="reset">
``` 
or 
```html
<button type="reset"></button>
```