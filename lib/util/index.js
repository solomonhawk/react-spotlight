export default {
  objectHasValue(obj, value) {
    return Object.keys(obj).reduce((result, key) => {
      return obj[key] === value ? obj[key] : result
    }, false)
  },

  isFocusableNode(node) {
    return ((node.nodeName === "A" && node.href) ||
            (node.nodeName === "BUTTON" && !node.disabled) ||
            (node.tabIndex > -1))
  }
}
