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

Once you have imported all the files you need, you can simply use the classes and mixins as you would any other Bootstrap feature.

For more detailed usage of each plugin, please see the docs.

## Classes

- [Transparent backgrounds](docs/class/bg-transparency.md)
- [Border widths](docs/classes/border-widths.md)
- [Rounded buttons](docs/classes/btn-rounded.md)
- [Squared buttons](docs/classes/btn-squared.md)
- [Card group column count](docs/classes/col-count.md)
- [Font sizes](docs/classes/font-sizes.md)
- [Opacity](docs/classes/opacity.md)
- [Screen reader breakpoints](docs/classes/sr-breakpoints.md)
- [Text outline](docs/classes/text-outline.md)

## Mixins

- [IE media queries](docs/mixins/media-ie.md)

## Other Features

- [Responsive typography](docs/other/responsive-typography.md)
