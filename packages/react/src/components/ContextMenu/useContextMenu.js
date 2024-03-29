import { useEffect, useState } from 'react';

/**
 * @param {Element|Document|Window|object} [trigger=document] The element or ref which should trigger the Menu on right-click
 * @returns {object} Props object to pass onto Menu component
 */
function useContextMenu(trigger = document) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  function openContextMenu(e) {
    e.preventDefault();

    const { x, y } = e;

    setPosition([x, y]);
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  useEffect(() => {
    const el = trigger?.current ?? trigger;

    if (
      (el && el instanceof Element) ||
      el instanceof Document ||
      el instanceof Window
    ) {
      el.addEventListener('contextmenu', openContextMenu);

      return () => {
        el.removeEventListener('contextmenu', openContextMenu);
      };
    }
  }, [trigger]);

  return {
    open,
    x: position[0],
    y: position[1],
    onClose,
  };
}

export default useContextMenu;
