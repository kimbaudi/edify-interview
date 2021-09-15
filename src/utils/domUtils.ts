function ownerDocument(node: Node) {
  return (node && node.ownerDocument) || document;
}

function ownerWindow(node: Node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

// Is a vertical scrollbar displayed?
// ex: isOverflowing(document.body)
export function isOverflowing(container: Element): boolean {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

export function isWindow(element: unknown): boolean {
  return element instanceof Window && element === window;
}

export function isElement(element: unknown): boolean {
  return element instanceof Node && element.nodeType === Node.ELEMENT_NODE;
}

export function getSize(element: unknown): {
  width: number;
  height: number;
} {
  if (isWindow(element)) {
    return {
      width: (element as Window).innerWidth,
      height: (element as Window).innerHeight,
    };
  }
  if (isElement(element)) {
    return {
      width: (element as Element).clientWidth,
      height: (element as Element).clientHeight,
    };
  }
  return {
    width: -1,
    height: -1,
  };
}

export function getWidth(element: unknown): number {
  return getSize(element).width;
}

export function getHeight(element: unknown): number {
  return getSize(element).height;
}
