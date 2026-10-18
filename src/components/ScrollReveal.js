"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.getElementById("top");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || preference.matches) return;

    const parts = new Set();
    const shown = new Set();
    let lines = [];
    let cursor = 0;
    let frontier = 0;
    let rootTop = 0;
    let frame = null;
    let needsMeasure = false;
    let disposed = false;
    let disabled = false;

    const isCollapsed = element => {
      for (let details = element.closest("details"); details; details = details.parentElement?.closest("details")) {
        if (!details.open && !details.querySelector(":scope > summary")?.contains(element)) return true;
      }
      return false;
    };

    const show = (element, animate) => {
      if (shown.has(element)) return;
      shown.add(element);
      if (animate) element.dataset.lineState = "revealing";
      else delete element.dataset.lineState;
    };

    const revealTo = (bottom, animate = true) => {
      frontier = Math.max(frontier, bottom);
      while (cursor < lines.length && lines[cursor].bottom <= frontier) {
        lines[cursor].parts.forEach(element => show(element, animate));
        cursor++;
      }
      root.dataset.lineReveal = "";
      root.style.setProperty("--reveal-height", `${frontier - rootTop}px`);
    };

    const measure = (initial = false) => {
      rootTop = root.getBoundingClientRect().top + window.scrollY;
      const units = [];
      root.querySelectorAll(".reveal-word, .footer-links a, .footer-note, .disclosure-icon").forEach(element => {
        parts.add(element);
        element.dataset.linePart = "";
        if (isCollapsed(element)) {
          delete element.dataset.lineState;
          return;
        }
        if (!shown.has(element)) element.dataset.lineState = "pending";
        [...element.getClientRects()].forEach(rect => {
          if (rect.width && rect.height) units.push({ element, top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY });
        });
      });
      units.sort((a, b) => a.top - b.top);
      lines = [];
      units.forEach(unit => {
        let line = lines.at(-1);
        // Keep dates and labels on the same baseline in a single visual line.
        if (!line || unit.top - line.top > 5) {
          line = { top: unit.top, bottom: unit.bottom, parts: new Set() };
          lines.push(line);
        }
        line.bottom = Math.max(line.bottom, unit.bottom);
        line.parts.add(unit.element);
        // Reflow and expanding details must not hide already-read content.
        if (shown.has(unit.element)) frontier = Math.max(frontier, unit.bottom);
      });
      cursor = 0;
      revealTo(window.scrollY + window.innerHeight, !initial);
    };

    const schedule = (remeasure = false) => {
      if (disposed || disabled) return;
      needsMeasure ||= remeasure;
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        if (needsMeasure) {
          needsMeasure = false;
          measure();
        } else {
          revealTo(window.scrollY + window.innerHeight);
        }
      });
    };

    const handleScroll = () => schedule();
    const scheduleMeasure = () => schedule(true);
    const handleFocus = event => {
      if (disabled || event.target === root) return;
      // Keyboard navigation can reach content beyond the current reveal.
      revealTo(Math.max(window.scrollY + window.innerHeight, event.target.getBoundingClientRect().bottom + window.scrollY));
    };
    const showAll = () => {
      disabled = true;
      cancelAnimationFrame(frame);
      parts.forEach(element => delete element.dataset.lineState);
      delete root.dataset.lineReveal;
      root.style.removeProperty("--reveal-height");
    };
    const handlePreference = () => {
      if (preference.matches) showAll();
    };
    const contentObserver = new MutationObserver(scheduleMeasure);

    measure(true);
    contentObserver.observe(root, { childList: true, subtree: true });
    root.addEventListener("toggle", scheduleMeasure, true);
    root.addEventListener("focusin", handleFocus);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });
    window.addEventListener("beforeprint", showAll);
    preference.addEventListener("change", handlePreference);
    if (document.fonts.status !== "loaded") document.fonts.ready.then(scheduleMeasure);

    return () => {
      disposed = true;
      contentObserver.disconnect();
      showAll();
      parts.forEach(element => delete element.dataset.linePart);
      root.removeEventListener("toggle", scheduleMeasure, true);
      root.removeEventListener("focusin", handleFocus);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("beforeprint", showAll);
      preference.removeEventListener("change", handlePreference);
    };
  }, []);

  return null;
}
