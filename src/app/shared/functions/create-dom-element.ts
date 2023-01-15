export function createDomElement(elementTag: string, ...elementClass: string[]) {
  const element = document.createElement(elementTag);
  element.classList.add(...elementClass);
  
  return element;
}