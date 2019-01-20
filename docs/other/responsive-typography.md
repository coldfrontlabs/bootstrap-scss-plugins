# Responsive Typography

Creates a simple toggle to make all text on your site responsive; changing size for every media breakpoint.

## Usage

### Styles

```scss
@import 'path/to/node_modules/bootstrap-scss-plugins/scss/plugin';
```

```scss
$enable-responsive-typography: true;
```

## Customization

- `$enable-responsive-typography`: A boolean that toggles the plugin on/off
- `$responsive-typography-base`: Sets the base font size for extra small and larger screens. Based off `$font-size-base`
- `$responsive-typography-sm`: Sets the font size for small and larger screens. Based off `$responsive-typography-base`
- `$responsive-typography-md`: Sets the font size for medium and larger screens. Based off `$responsive-typography-base`
- `$responsive-typography-lg`: Sets the font size for large and larger screens. Based off `$responsive-typography-base`
- `$responsive-typography-xl`: Sets the font size for extra large and larger screens. Based off `$responsive-typography-base`
