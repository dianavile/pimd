# PIMD Attribute Plugin

Either an element or a code block should be able to update an HTML attribute.

## Specifications

The following combinations should be possible:

* `[attribute=value]` → `attribute="value"`
* `[attribute="value"]` quotation marks must be stripped → `attribute="value"`
* `[attribute='value']` quotation marks must be stripped → `attribute="value"`
* `[attribute='[value]']` quotation marks must be stripped → `attribute="[value]"`
* `[attribute]` only the attribute name should be set → `attribute`

## Example usage

```` markdown
``` html [data-xyz=123]
<p>Example</p>
```
````

``` markdown
# Headline <?: [title="Headline title"] ?>
```

---

## Copyright

Copyright 2018++ [Nico Hagenburger](https://www.hagenburger.net).
See [MIT-LICENSE](MIT-LICENSE) for details.
Get in touch with [@hagenburger](https://twitter.com/hagenburger) on Twitter or
[open an issue](https://github.com/hagenburger/pimd/issues/new).
