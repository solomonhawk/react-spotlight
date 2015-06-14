import toArray from './toArray'

export default function traverse(node, predicate) {
  if (!node || !node.children.length) return []

  let result = []

  function recurse(rootNode) {
    if (!rootNode.children.length) return

    let nodes = toArray(rootNode.children)

    nodes.map(function(childNode) {
      if (predicate(childNode)) {
        result.push(childNode)
      }
      recurse(childNode)
    })
  }

  recurse(node)

  return result
}
