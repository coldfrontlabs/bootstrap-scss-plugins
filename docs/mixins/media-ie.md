# Internet Explorer Media Queries

Implements the existing breakpoint media queries, but adds a selector for Internet Explorer to all of them.

Also adds a simple mixin to target Internet Explorer without any breakpoints.

```scss
media-ie

media-ie-breakpoint-up()
media-ie-breakpoint-down()
media-ie-breakpoint-between()
media-ie-breakpoint-only()
```

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/plugin';
```

```scss
@include media-ie {
  ...
}

@include media-ie-breakpoint-up(md) {
  ...
}

@include media-ie-only(xl) {
  ...
}
```
