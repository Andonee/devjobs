import React, { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

type ReactPortalType = {
  wrappedId: string;
  children: React.ReactNode;
};

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const ReactPortal = (props: ReactPortalType) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  const { wrappedId, children } = props;

  useLayoutEffect(() => {
    let element = document.getElementById(wrappedId);
    let portalCreated = false;

    if (!element) {
      portalCreated = true;
      element = createWrapperAndAppendToBody(wrappedId);
    }

    setWrapperElement(element);

    return () => {
      if (portalCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrappedId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
// https://blog.logrocket.com/build-modal-with-react-portals/
// https://www.youtube.com/watch?app=desktop&v=a92IhR92aEY&ab_channel=Yugen
