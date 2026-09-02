import { For } from "solid-js";
import { ProfileCard } from "../../components";
import { experience, portfolioInfo, skills } from "../../stores";

function AboutPage() {
  return (
    <div class="flex flex-col w-full gap-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <ProfileCard />

        <div class="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
          <div class="border-2 border-secondary bg-surface-container shadow-[8px_8px_0px_0px_#454747] relative">
            <div class="bg-secondary text-surface py-2 px-4 font-label-mono font-bold uppercase">
              {"[ BIO ] -> root/data/about.md"}
            </div>
            <div class="p-6 font-body-md text-on-surface flex flex-col gap-4">
              <p class="font-label-mono text-primary-fixed">
                {"> INITIALIZING BIO_SEQUENCE..."}
              </p>
              <p class="text-on-surface-variant leading-relaxed">
                {portfolioInfo().bio.part_1}
              </p>
              <p class="text-on-surface-variant leading-relaxed">
                {portfolioInfo().bio.part_2}
              </p>
            </div>
          </div>

          <div class="border-2 border-secondary bg-surface-container shadow-[8px_8px_0px_0px_#454747]">
            <div class="bg-secondary text-surface py-2 px-4 font-label-mono font-bold uppercase">
              {"[ SKILLS ] -> root/bin/matrix_eval"}
            </div>

            <div class="p-6 font-label-mono text-sm text-on-surface flex flex-col gap-6">
              {/* Dynamically loop through the object keys and values */}
              <For each={Object.entries(skills())}>
                {([categoryName, techList]) => (
                  <div class="flex flex-col gap-3 border-l-2 border-primary-fixed pl-4 hover:border-on-surface transition-colors">
                    <span class="text-primary font-bold">{`> ${categoryName}`}</span>

                    <div class="flex flex-wrap gap-2">
                      <For each={techList}>
                        {(skill) => (
                          <div class="relative group/tooltip flex">
                            {/* Clickable Tech Tab */}
                            <a
                              href={skill.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="bg-surface-variant border border-secondary px-2 py-1 text-primary-fixed hover:bg-primary-fixed hover:text-surface transition-colors cursor-crosshair"
                            >
                              {skill.name}
                            </a>

                            {/* Tooltip Popup (Hidden by default, shown on hover) */}
                            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none">
                              <div class="bg-secondary text-surface p-2 text-xs border border-primary-fixed text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                {skill.desc}
                              </div>
                              {/* Tooltip triangle/pointer */}
                              <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary-fixed mx-auto"></div>
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>

          <div class="border-2 border-secondary bg-surface-container shadow-[8px_8px_0px_0px_#454747]">
            <div class="bg-secondary text-surface py-2 px-4 font-label-mono font-bold uppercase">
              <h1>{"[ EXPERIENCE ] -> root/logs/sys_log.txt"}</h1>
            </div>

            <div class="p-6 font-label-mono text-sm text-on-surface flex flex-col gap-2">
              <For each={experience()}>
                {(item, index) => (
                  <div
                    class="flex flex-col sm:flex-row sm:gap-4 border-l-4 pl-4 py-2 hover:border-primary-fixed hover:bg-surface-variant transition-colors"
                    classList={{
                      "cursor-pointer": !!item.url,
                      "border-primary-fixed": index() === 0, // Highlights the latest entry like your original code
                      "border-surface-variant": index() !== 0,
                    }}
                    onClick={() => {
                      if (item.url)
                        window.open(item.url, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <span
                      class={`shrink-0 font-bold w-32 ${index() === 0 ? "text-primary-fixed" : "text-primary-fixed-dim"}`}
                    >
                      {item.date}
                    </span>

                    <span
                      class={
                        item.catagory === "[WARN]"
                          ? "text-tertiary-fixed"
                          : "text-primary"
                      }
                    >
                      {item.catagory}
                    </span>

                    <span
                      class={`text-on-surface-variant ${item.title.includes("EPOCH") ? "line-through opacity-50" : ""}`}
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
