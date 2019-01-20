# Border Widths

Adds a way to specify the width of bordered elements through classes.

By default there are 3 classes for border widths:

```scss
.border-width-1
.border-width-2
.border-width-3
```

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/border-widths';
```

### HTML

```html
<img src="#" class="img-fluid border border-width-3" />
```

## Customization

- `$border-width-unit`: Sets the unit of the width (e.g. px, em, rem).
- `$border-width-min`: Sets the minimum width class (default is 1).
- `$border-width-max`: Sets the maximum width class (default is 3).

**Note:** The number of units used in each class is directly proportional to the number in the class. `.border-width-1` has a width of `1px` while `.border-width-3` has a width of `3px`.
