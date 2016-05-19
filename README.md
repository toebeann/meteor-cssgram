CSSgram Library for Meteor
===============================

[CSSgram](https://github.com/una/CSSgram) **0.1.6** packaged for [Meteor](https://www.meteor.com)

## Install

Install using Meteor's package management system:

```bash
$ meteor add toadbomb:cssgram
```

## Usage

Simply import CSSgram at the top of your sass file:
  
```scss
@import "{toadbomb:cssgram}/cssgram";
```

Or alternatively, you can import individual CSSgram filters:

```scss
@import "{toadbomb:cssgram}/willow";
```

You can then use the CSSgram library as normal, either via CSS classes or Sass `@extend` or `@mixin` syntax.
See [the CSSgram github](https://github.com/una/CSSgram#usage) for further information.

## Notes

This package was developed and tested with Meteor version **1.3.2.4**. Versions lower than this are not supported.
