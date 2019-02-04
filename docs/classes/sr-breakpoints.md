# Screen Reader Breakpoints

Extends the vanilla Bootstrap `.sr-only` and `.sr-only-focusable` classes to function with media-breakpoint mixins.

The classes follow the pattern `sr-[breakpoint]-[query-type]` and `sr-[breakpoint]-[query-type]-focusable`.

The query types use the provided media queries aside from the "between" query:

- `only`: to target only the selected breakpoint
- `up`: to target the selected breakpoint and anything larger
- `down`: to target the select breakpoint and anything smaller

```scss
.sr-md-only
.sr-md-up
.sr-md-down

.sr-md-only-focusable
.sr-md-up-focusable
.sr-md-down-focusable
```

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/screen-reader-breakpoints';
```

### HTML

```html
<p class="sr-md-up">This is some text that can been seen on small and smaller screens.</p>
```
