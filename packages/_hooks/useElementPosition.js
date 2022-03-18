
/**
 * 获取元素的位置以及大小
 * （注：取的 offsetXXX 值）
 *
 * At 2022.03.16
 * By TangJiaHui
 */
export default function useElementPosition (element) {
  const {offsetWidth, offsetHeight, clientWidth, clientHeight} = element
  const x = getWindowPos(element, "offsetLeft")
  const y = getWindowPos(element, "offsetTop")

  return {x, y, offsetWidth, offsetHeight, clientWidth, clientHeight}
}

function getWindowPos (element, offsetType) {
  let value = element[offsetType]
  let currentElement = element.offsetParent
  while (currentElement !== null) {
    value += currentElement[offsetType]
    currentElement = currentElement.offsetParent
  }
  return value
}
