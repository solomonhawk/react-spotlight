export default function toArray(arrayLike) {
  return [].slice.call(arrayLike, 0)
}
