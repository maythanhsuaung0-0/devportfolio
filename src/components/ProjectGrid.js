"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import RevealWords from "./RevealWords";
import ProjectArtwork from "./ProjectArtwork";

const tones = ["rose", "blush", "petal"];

function ProjectTools({ tools = [] }) {
  if (!tools.length) return null;

  return (
    <dl className="project-tools">
      <dt>Technologies used</dt>
      <dd>{tools.join(", ")}</dd>
    </dl>
  );
}

function ProjectLinks({ links = [] }) {
  const availableLinks = links.filter(link => link.url);
  if (!availableLinks.length) return null;

  return (
    <div className="project-links" aria-label="Project links">
      {availableLinks.map((link, index) => (
        <a
          className="project-link-button"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={link.id ?? `${link.url}-${index}`}
        >
          {link.label || "Visit project"}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function ProjectGallery({ project }) {
  const photos = (project.photos ?? []).filter(photo => photo.url);
  if (!photos.length) return null;
  const columns = photos.length === 1 ? 1 : photos.length <= 4 ? 2 : 3;
  const mobileColumns = photos.length === 1 ? 1 : 2;
  const imageSizes = photos.length === 1
    ? "(max-width: 700px) 100vw, 960px"
    : columns === 2
      ? "(max-width: 700px) 50vw, 480px"
      : "(max-width: 700px) 50vw, 320px";

  return (
    <section
      className={`project-gallery${photos.length === 1 ? " project-gallery--single" : ""}`}
      aria-label={`${project.projectName} photos`}
      style={{
        "--project-gallery-columns": columns,
        "--project-gallery-rows": Math.ceil(photos.length / columns),
        "--project-gallery-mobile-columns": mobileColumns,
        "--project-gallery-mobile-rows": Math.ceil(photos.length / mobileColumns),
      }}
    >
      {photos.map((photo, index) => (
        <figure key={photo.id ?? `${photo.url}-${index}`}>
          <div className="project-gallery-media">
            <Image
              src={photo.url}
              alt={photo.alt || ""}
              fill
              sizes={imageSizes}
              className="project-gallery-image"
            />
          </div>
          {photo.caption && <figcaption>{photo.caption}</figcaption>}
        </figure>
      ))}
    </section>
  );
}

function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      {project.name && <p className="project-context">{project.name}</p>}
      {project.details && <p className="project-description">{project.details}</p>}
      <ProjectTools tools={project.tools} />
      <ProjectLinks links={project.links} />
      <ProjectGallery project={project} />
    </div>
  );
}

export default function ProjectGrid({ projects }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const dialogTitle = useRef(null);
  const origin = useRef(null);
  const transition = useRef(null);
  const titleId = useId();

  useEffect(() => () => transition.current?.skipTransition(), []);

  const clearNames = () => {
    [origin.current, origin.current?.querySelector(".project-card-name"), origin.current?.querySelector(".project-artwork"), dialog.current, dialogTitle.current, dialog.current?.querySelector(".project-artwork")]
      .forEach(element => element?.style.removeProperty("view-transition-name"));
  };

  const nameView = (surface, title) => {
    if (surface) surface.style.viewTransitionName = "project-surface";
    if (title) title.style.viewTransitionName = "project-title";
    const artwork = surface?.querySelector(".project-artwork");
    if (artwork) artwork.style.viewTransitionName = "project-artwork";
  };

  const changeView = (surface, title, update) => {
    transition.current?.skipTransition();
    clearNames();

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      update(false);
      return;
    }

    nameView(surface, title);
    const current = document.startViewTransition(() => update(true));
    transition.current = current;
    // A browser may skip the animation when the tab is hidden or another transition starts.
    current.ready.catch(() => {});
    const finish = () => {
      if (transition.current !== current) return;
      clearNames();
      transition.current = null;
    };
    current.finished.then(finish, finish);
  };

  const openProject = (event, project, index) => {
    // Native details keep every project readable before hydration and without JavaScript.
    if (typeof dialog.current?.showModal !== "function") return;
    event.preventDefault();
    if (dialog.current.open) return;
    origin.current = event.currentTarget;

    changeView(origin.current, origin.current.querySelector(".project-card-name"), animate => {
      clearNames();
      flushSync(() => setSelected({ project, index }));
      if (animate) nameView(dialog.current, dialogTitle.current);
      dialog.current.showModal();
      dialog.current.scrollTop = 0;
    });
  };

  const closeProject = () => {
    if (!dialog.current?.open) return;
    changeView(dialog.current, dialogTitle.current, animate => {
      clearNames();
      dialog.current.close();
      if (animate) nameView(origin.current, origin.current?.querySelector(".project-card-name"));
      origin.current?.focus({ preventScroll: true });
    });
  };

  const handleBackdrop = event => {
    if (event.target !== event.currentTarget) return;
    const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) closeProject();
  };

  if (!projects.length) return <p><RevealWords>Project details are coming soon.</RevealWords></p>;

  return (
    <>
      <div className="project-grid">
        {projects.map((project, index) => (
          <details
            className="project-tile"
            data-project-selected={selected?.index === index ? "" : undefined}
            style={{ "--project-color": `var(--project-${tones[index % tones.length]})` }}
            key={project.id ?? index}
          >
            <summary className="project-card" aria-haspopup="dialog" onClick={event => openProject(event, project, index)}>
              <span className="project-card-meta">
                <span><RevealWords>{project.year}</RevealWords></span>
                <ProjectArtwork index={index} className="project-card-artwork" />
              </span>
              <span className="project-card-name"><RevealWords>{project.projectName}</RevealWords></span>
            </summary>
            <div className="project-inline-details"><ProjectDetails project={project} /></div>
          </details>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="project-dialog"
        style={selected ? { "--project-color": `var(--project-${tones[selected.index % tones.length]})` } : undefined}
        aria-labelledby={titleId}
        onCancel={event => { event.preventDefault(); closeProject(); }}
        onClick={handleBackdrop}
      >
        {selected && (
          <div className="project-dialog-content">
            <div className="project-dialog-toolbar">
              <button type="button" className="project-close" onClick={closeProject} aria-label="Back to projects" autoFocus>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
                  <path d="M27 16H5m10-10L5 16l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="project-dialog-layout">
              <div className="project-dialog-overview">
                <ProjectArtwork index={selected.index} />
                <h2 ref={dialogTitle} id={titleId} className="project-dialog-title">{selected.project.projectName}</h2>
                <div className="project-dialog-meta">
                  {selected.project.name && <p className="project-context">{selected.project.name}</p>}
                  {selected.project.year && <p className="project-year">{selected.project.year}</p>}
                </div>
                <ProjectTools tools={selected.project.tools} />
                <ProjectLinks links={selected.project.links} />
              </div>
              {selected.project.details && (
                <div className="project-dialog-description">
                  {selected.project.details.split(/\n\s*\n/).filter(paragraph => paragraph.trim()).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <ProjectGallery project={selected.project} />
          </div>
        )}
      </dialog>
    </>
  );
}
