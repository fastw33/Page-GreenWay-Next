"use client";

import { useEffect } from "react";

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(
    target.closest("input, textarea, select, [contenteditable='true']"),
  );
}

export function AssetProtection() {
  useEffect(() => {
    function blockEvent(event: Event) {
      event.preventDefault();
    }

    function blockKeyboardShortcuts(event: KeyboardEvent) {
      if (isEditableTarget(event.target)) {
        return;
      }

      const key = event.key.toLowerCase();
      const blocked =
        (event.ctrlKey || event.metaKey) &&
        (key === "s" || key === "u" || key === "p");

      if (blocked) {
        event.preventDefault();
      }
    }

    document.addEventListener("contextmenu", blockEvent);
    document.addEventListener("dragstart", blockEvent);
    document.addEventListener("keydown", blockKeyboardShortcuts);

    return () => {
      document.removeEventListener("contextmenu", blockEvent);
      document.removeEventListener("dragstart", blockEvent);
      document.removeEventListener("keydown", blockKeyboardShortcuts);
    };
  }, []);

  return null;
}
