# Transparent Backgrounds

Adds background classes with transparencies.

Uses the base bootstrap background classes `.bg-primary` and adds a transparency selector onto the end which corresponds to the percentage of transparency `-50`.

Adds 9 variants for each background colour.

```scss
.bg-primary-10
.bg-primary-20
.bg-primary-30
.bg-primary-40
.bg-primary-50
.bg-primary-60
.bg-primary-70
.bg-primary-80
.bg-primary-90
```

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/transparent-backgrounds.scss';
```

### HTML

```html
<div class="bg-success-70 text-light">
  <p>This is some text.</p>
</div>
```
