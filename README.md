# bootstrap-scss-plugins

A suite of SCSS plugins used for developing Bootstrap 4 themes and sites.

This package aims to add a few useful classes and mixins, not found in "vanilla" Bootstrap 4, to help speed up the development of websites.

**Can't you do this yourself by editing some variables?**

Of course you can! This package exists purely to make it faster to replicate some commonly used customizations.

## Usage

There are a couple ways to use the plugins, but all steps begin with importing the main Bootstrap files first.

### Include everything using the plugin file

```scss
@import 'path/to/node_modules/bootstrap/scss/bootstrap';
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/plugins';
```

### Include single plugins

```scss
@import 'path/to/node_modules/bootstrap/scss/bootstrap';
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/responsive-typography';
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/font-sizes';
```

Once you have imported all the files you need, you can simply use the classes and mixins are you would any other Bootstrap feature.

For more detailed usage of each plugin, please see the docs.

## Classes

- `.border-width-n`: Sets the width of borders. - [Full documentation](docs/classes/border-widths.md)
- `.btn-rounded`: Rounds the corners of buttons. - [Full documentation](docs/classes/btn-rounded.md)
- `.btn-squared`: Squares off the corners of buttons. - [Full documentation](docs/classes/btn-squared.md)
- `.col-count-n`: Sets the column count of groups. - [Full documentation](docs/classes/col-count.md)
- `.font-size-x`: Sets the font size of text. - [Full documentation](docs/classes/font-sizes.md)
- `.text-outline`: Outlines text. - [Full documentation](docs/classes/text-outline.md)
- `.sr-x-only`: Breakpoint selectors for the `.sr-only` class - [Full documentation](docs/classes/screen-reader-breakpoints.md)

## Mixins

- `media-ie`: Media queries to for Internet Explorer. - [Full documentation](docs/mixins/media-ie.md)

## Other Features

- Responsive typography - [Full documentation](docs/other/responsive-typography.md)
