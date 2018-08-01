# PIMD Issue 1: Class Plugin

- Add Class-#ID to get HTML-element/codeblock.

## Example

``` markdown
# Headline <?: #my-headline ?
 ```

``` html #my-code
<p>Example</p>
```

``` html
Lorem ipsum dolor sit amet. <?: #my-paragraph ?>
```

>
 Result in code:

``` html
<h1 id="my-headline">Headline</h1>
 <div id="my-code">
  ...
</div>
 <p id="my-paragraph">Lorem ipsum dolor sit amet.</p>
```

 ---

## Copyright

Copyright 2018++[Nico Hagenburger](https://www.hagenburger.net).
More details: See [MIT-LICENSE](MIT-LICENSE).

__Get in touch:__

- Twitter [@hagenburger](https://twitter.com/hagenburger)
  
- [open an issue](https://github.com/hagenburger/pimd/issues/new)