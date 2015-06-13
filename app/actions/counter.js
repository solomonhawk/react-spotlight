/**
 * Counter Actions
 *
 * Actions prepare properties before they are forwarded to stores
 * via the dispatcher.
 */

function increaseCount(amount=1) {
  return amount
}

export { increaseCount }
