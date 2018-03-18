'use-strict'

// This is a custom Jest tranformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process() {
    return 'module.exports = {}'
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform'
  }
}
