# PIMD Link/Image Plugin

Processing instructions define the paragraph as their `element`:

``` markdown
Lorem <?pi?> ipsum
```

`pi.element` refers to the `<p>` which will contain `Lorem  ipsum`.

## Proposed change

If a processing instruction follows a link/image, it it’s `pi.element` refers to the `<a>`/`<img>`:

``` markdown
Lorem [ipsum](ipsum.html)<?pi?> dolor
```

``` markdown
Lorem ![ipsum](ipsum.jpg)<?pi?> dolor

```

## Example usage

To make it easy to access attributes like adding an ID, classes, or attributes:

``` markdown
Lorem ![ipsum](ipsum.jpg)<?: #my-image ?> dolor
```

``` markdown
Lorem ![ipsum](ipsum.jpg)<?: .big-image ?> dolor
```

``` markdown
Lorem ![ipsum](ipsum.jpg)<?: [width=100%] ?> dolor
```

---

## Copyright

- Copyright 2018++ [Nico Hagenburger](https://www.hagenburger.net).
- See [MIT-LICENSE](MIT-LICENSE) for details.

- __Get in touch__:
- [@hagenburger](https://twitter.com/hagenburger) on Twitter
- [open an issue](https://github.com/hagenburger/pimd/issues/new).
