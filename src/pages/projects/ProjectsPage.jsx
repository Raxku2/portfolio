import { For, Show } from "solid-js"
import { projects } from "../../stores"

function ProjectsPage() {
  return (
<div class="flex flex-col w-full p-gutter sm:p-margin gap-margin">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-margin">
    <For each={projects()}>
      {(project) => (
        <article
          class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group"
          classList={{
            "opacity-75 grayscale hover:grayscale-0 hover:opacity-100": project.status === "[OFFLINE]"
          }}
        >
          <header class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
            <h2 class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
              {project.title}
            </h2>
            <div class="flex gap-1">
              <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
            </div>
          </header>
          
          <div class="p-3 flex flex-col gap-4 flex-grow">
            {/* THUMBNAIL AREA */}
            <div 
              class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors"
              classList={{
                "flex items-center justify-center bg-surface-container-low": !project.thumbnal
              }}
            >
              <Show 
                when={project.thumbnal} 
                fallback={
                  <span class="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary-fixed transition-colors">
                    visibility_off
                  </span>
                }
              >
                <div
                  class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                  data-alt={project.desc}
                  style={{ "background-image": `url('${project.thumbnal}')` }}
                ></div>
              </Show>
              <div class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* DESCRIPTION AREA */}
            <p class="font-body-md text-on-surface-variant text-sm flex-grow">
              <Show when={project.about_line_1}>
                {project.about_line_1}<br />
              </Show>
              <Show when={project.about_line_2}>
                {project.about_line_2}<br />
              </Show>
              <Show when={project.about_line_3}>
                {project.about_line_3}
              </Show>
            </p>

            {/* STATUS & LINKS FOOTER */}
            <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
              <span 
                class="font-label-mono text-xs"
                classList={{
                  "text-[#00ff00]": project.status === "[ONLINE]",
                  "text-tertiary-fixed": project.status === "[MAINTENANCE]",
                  "text-error": project.status === "[OFFLINE]"
                }}
              >
                STATUS: {project.status}
              </span>
              
              <div class="flex gap-2">
                <Show when={project.status === "[OFFLINE]"}>
                  <span class="material-symbols-outlined text-[18px] text-outline">lock</span>
                </Show>

                <Show when={project.github}>
                  <a aria-label="GitHub" class="text-on-surface-variant hover:text-primary-fixed transition-colors" href={project.github} target="_blank" rel="noopener noreferrer">
                    <span class="material-symbols-outlined text-[18px]">code</span>
                  </a>
                </Show>
                
                <Show when={project.deployment}>
                  <a aria-label="Live Demo" class="text-on-surface-variant hover:text-primary-fixed transition-colors" href={project.deployment} target="_blank" rel="noopener noreferrer">
                    <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </Show>
              </div>
            </div>
            
          </div>
        </article>
      )}
    </For>
  </div>
</div>

  )
}

export default ProjectsPage
