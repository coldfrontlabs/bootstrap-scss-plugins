# Screen Reader Breakpoints

Extends the vanilla Bootstrap `.sr-only` and `.sr-only-focussable` classes to function with media-breakpoint mixins.

```scss
.sr-md-only
.sr-md-up
.sr-md-down

.sr-md-only-focussable
.sr-md-up-focussable
.sr-md-down-focussable
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
