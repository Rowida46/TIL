### How to change the font size ?

1- _Using size inside *font* tag_

```html
<font size="24">Your Text</font>
```
it's said that _size_ value on;y range from _1:7_.


2- _Using `font-size`_
 
```css 
.txt{font-size: 18px; } 
```

### `<pre>`

used to document & render the text the same way it was written, _and will not ignore the spaces provided_.

### `<br/>`
It's just a self tag, that doesn't need colsed tag, and used to break by line.

### `<hr>`
Horizontal line or horizontal rule, and it is used to insert a horizontal rule or a thematic break in an HTML page to divide or separate document sections. The <hr> tag is an empty tag, and it does not require an end tag.



## `./` vs `../`

- `./`: Refers to _at the same level_

- `../`: Step back & go to the parent path

## Linking To Email

```html
<a href="mailto:rowidanagah462000@gmail.com">Contact us </a>
``` 

### `iframe` 

It's an inline frame to display a separate document, including scrollbars and borders. An inline frame is used to embed another document within the current HTML document. 
`style="border: none"` for removing borders

- We can give the _iframe_ a give to link to it on another html parts..
```html
<p>Click the link text</p>
 
    <iframe height="300"
            width="350"
            src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210910170539/gfg-221x300.png"
            name="iframe_a">
    </iframe>
     
<p><a href=
"https://ide.geeksforgeeks.org/tryit.php"
           target="iframe_a">
        GeeksforGeeks IDE
        </a>
    </p>
```


### To specify Icon on the title

Use `rel="icon"` at the head section.

```html 
<head>
  <link rel="icon" href="/favicon.ico">
</head
```




