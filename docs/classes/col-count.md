# Column Count

Sets the number of columns a card column group has.

## Default Classes

There is a class for each column in `$grid-columns`:

`.col-count-1` through `.col-count-12`

You can also add breakpoints to the `.col-count` classes:

- `.col-count-md-1`
- `.col-count-xl-3`

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/plugin';
```

### HTML

```html
<div class="card-columns col-count-4 col-count-sm-2">
  <div class="card">
    ...
  </div>
  <div class="card">
    ...
  </div>
  <div class="card">
    ...
  </div>
  <div class="card">
    ...
  </div>
</div>
```

## Customization

Changing the `$grid-columns` variable will change the number of `.col-count` classes available.
