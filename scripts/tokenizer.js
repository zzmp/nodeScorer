module.exports = function(str, tokens) {
  return str.replace(
    /\{\{([^{}]*)\}\}/g,
    function (match) {
      return typeof tokens.[match] === 'string' || typeof tokens.[match] === 'number' ? tokens.[match] : match;
    }
}
