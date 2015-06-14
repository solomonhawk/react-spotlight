import constants from '../app/constants'
import { Map } from 'immutable'

export default function findNearestNode(nodes, target, direction) {
  let { UP, DOWN, LEFT, RIGHT } = constants.keys

  switch (direction) {
    case UP:
      return filterNodes(nodes, target, isAbove)
      break
    case DOWN:
      return filterNodes(nodes, target, isBelow)
      break
    case LEFT:
      return filterNodes(nodes, target, isLeft)
      break
    case RIGHT:
      return filterNodes(nodes, target, isRight)
      break
  }
}

function centroid(rect) {
  return {
    x: rect.right - rect.width / 2,
    y: rect.bottom - rect.height / 2
  }
}

function distance(from, to) {
  let { x: fromX, y: fromY } = from
  let { x: toX,   y: toY }   = to

  return {
    x: Math.abs(toX - fromX),
    y: Math.abs(toY - fromY)
  }
}

function filterNodes(nodes, target, comparator) {
  let targetRect = target.getBoundingClientRect()

  return nodes.reduce((result, nodeData) => {
    let nodeCentroid = centroid(nodeData.get('rect'))
    let pass = comparator(nodeCentroid, centroid(targetRect))
    let dist = distance(nodeCentroid, centroid(targetRect))
    let data = nodeData.merge({ distance: dist, totalDistance: dist.y + dist.x })
    return pass ? result.concat([data]) : result
  }, []).reduce((result, nodeData) => {
    if (nodeData.get('node') == target) return result
    return nodeData.get('totalDistance') < result.get('totalDistance') ? nodeData : result
  }, new Map({ totalDistance: Infinity }))
}

function isAbove(nodeCentroid, targetCentroid) {
  return nodeCentroid.y < targetCentroid.y
}

function isBelow(nodeCentroid, targetCentroid) {
  return nodeCentroid.y > targetCentroid.y
}

function isLeft(nodeCentroid, targetCentroid) {
  return nodeCentroid.x < targetCentroid.x
}

function isRight(nodeCentroid, targetCentroid) {
  return nodeCentroid.x > targetCentroid.x
}
