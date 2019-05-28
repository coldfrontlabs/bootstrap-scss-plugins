import { series, parallel } from 'gulp'
import { sass } from '@coldfrontlabs/gulp-templates'

const paths = {
  source: {
    src: 'scss',
    dest: 'scss',
  },
  test: {
    src: 'test',
    dest: 'test'
  },
  selector: '**/*.scss'
}

/**
 * Lints all source Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintSource = () => sass.lint(`${paths.source.src}/${paths.selector}`)
lintSource.description = 'Lints all source Sass files.'

/**
 * Lints and fixes all source Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const fixSource = () => sass.fix(`${paths.source.src}/${paths.selector}`)
fixSource.description = 'Lints and fixes all source Sass files.'

/**
 * Lints all test Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintTests = () => sass.lint(`${paths.test.src}/${paths.selector}`)
lintTests.description = 'Lints all test Sass files.'


/**
 * Lints and fixes all test Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const fixTests = () => sass.fix(`${paths.test.src}/${paths.selector}`)
fixTests.description = 'Lints and fixes all test Sass files.'

/**
 * Compiles all class test Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const compileClass = () => sass.compile(`${paths.test.src}/classes/${paths.selector}`, `${paths.test.src}/classes/results`)
compileClass.description = 'Compiles all class test Sass files.'

/**
 * Compiles all mixin test Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const compileMixin = () => sass.compile(`${paths.test.src}/mixins/${paths.selector}`, `${paths.test.src}/mixins/results`)
compileMixin.description = 'Compiles all mixin test Sass files.'

/**
 * Compiles all other test Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const compileOther = () => sass.compile(`${paths.test.src}/other/${paths.selector}`, `${paths.test.src}/other/results`)
compileOther.description = 'Compiles all other test Sass files.'

/**
 * Lints all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lint = parallel(lintSource, lintTests)
lint.description = 'Lints all Sass files.'

/**
 * Lints and fixes all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const fix = parallel(fixSource, fixTests)
fix.description = 'Lints and fixes all Sass files.'

/**
 * Compiles all test Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const compile = parallel(compileClass, compileMixin, compileOther)
compile.description = 'Compiles all test Sass files.'

/**
 * Lints and compiles all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
export const test = series(lint, compile)
test.description = 'Lints and compiles all Sass files.'

// Create default task.
export default test
