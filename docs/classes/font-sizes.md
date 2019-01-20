# Font Sizes

Sets the size of font used in a specific element.

You can add a breakpoint selector before the size selector for more control.

There are font size classes for each `$font-size` variables including the two new variables added by this plguin:

```scss
.font-size-xs
.font-size-sm
.font-size-md
.font-size-lg
.font-size-xl
```

You can also add breakpoints to the classes in the format of `.font-size-[breakpoint]-[size]`.

i.e. `.font-size-sm-lg` which will apply the `.font-size-lg` class on small and larger screens.

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/font-sizes';
```

### HTML

```html
<p class="font-size-lg">This is some text</p>
```

## Customization

- `$font-size-xs`: Sets the font size for `.font-size-xs`
- `$font-size-sm`: Sets the font size for `.font-size-sm`
- `$font-size-base`: Sets the font size for `.font-size-md`
- `$font-size-lg`: Sets the font size for `.font-size-lg`
- `$font-size-xl`: Sets the font size for `.font-size-xl`
