'use strict';
function getElementWidth(content, padding, border) {
  const borderWidth = parseFloat(border);
  const paddingWidth = parseInt(padding);
  const contentWidth = parseInt(content);
  const elementWidth = contentWidth + 2 * (borderWidth + paddingWidth);
  return elementWidth;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
