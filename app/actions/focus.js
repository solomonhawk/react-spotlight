/**
 * Focus Actions
 */
import findNearest from '../../lib/findNearest'

function setFocusData(props) {
  return props
}

function focusIntent({ nodes, target, direction }) {
  let nodeData = findNearest(nodes, target, direction)
  nodeData.get('node') && nodeData.get('node').focus()
  return nodeData
}

export { setFocusData, focusIntent }
