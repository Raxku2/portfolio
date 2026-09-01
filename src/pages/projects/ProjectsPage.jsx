function ProjectsPage() {
  return (



      <div class="flex flex-col w-full p-gutter sm:p-margin gap-margin">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-margin">
          <article
            class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group">
            <header
              class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
              <h2
                class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
                PROJECT_ALPHA</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              </div>
            </header>
            <div class="p-3 flex flex-col gap-4 flex-grow">
              <div
                class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors">
                <div
                  class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                  data-alt="A low-res, 8-bit style pixel art landscape showing a cyberpunk city skyline at night with glowing neon cyan and magenta lights reflecting off rain-slicked streets. Blocky, high-contrast."
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0n2x_1uGh615rA61nAe7EAYpxUU4dlcifnuCNQ0KpwK9uoHQ9EhZHMkbitRV1YZsQvD3wbVQ_S81MNCMsQo_H1lwfbGlN6HmO0TBXAzzycLPAIhWjVNtL44DIbJ9oZ6YFD1WC8vHTIabjIHBSAauwLU9vcHjiaNgrFcdSZO2ynbGyt0GXFe1PFms0lZp3EdBMMkVMPOFtZ4PjvUcNWiAEdlixOQ8ZZmYBODPFI2Ej18bky4QVJXI')">
                </div>
                <div
                  class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-sm grow">
                &gt High-frequency trading bot framework.<br />
                &gt Built with Rust & WebSockets.<br />
                &gt Latency &lt 5ms. </p>
                  <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
                    <span class="font-label-mono text-[#00ff00] text-xs">STATUS: [ONLINE]</span>
                    <div class="flex gap-2">
                      <a aria-label="GitHub" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                        href="#">
                        <span class="material-symbols-outlined text-[18px]">code</span>
                      </a>
                      <a aria-label="Live Demo"
                        class="text-on-surface-variant hover:text-primary-fixed transition-colors" href="#">
                        <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
            </div>
          </article>
          <article
            class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group">
            <header
              class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
              <h2
                class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
                DATA_VIS_CORE</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              </div>
            </header>
            <div class="p-3 flex flex-col gap-4 grow">
              <div
                class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors">
                <div
                  class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                  data-alt="An abstract visualization of data nodes connecting like a neural network, rendered in jagged, low-fidelity 8-bit graphics with vibrant cyan and white lines on a stark black background. High contrast."
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS-Qncd2xEjYEr4CRnYkz_yCQL4mRZAY5n3cA7U7MmOpkF5UJoLfrECXhhktsH_5Tx3UdtGDV7USq6CHCUFJf7sDKV4toiEzfx71DSxBd8YyKcnmmrFQWhuh8Zz7VUj4OyGpoO7svRJfgl_jblTEbW1Uia6aniV_KSM0uiR5bHDCP6wTSk0hxi8kwFXLcat2wLOPAuTuTQcKsFDiCYEefLm2F3-n7Qfo2fYlReRIR51z6a25MGTZE')">
                </div>
                <div
                  class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-sm grow">
                &gt Real-time network topology visualizer.<br />
                &gt D3.js + WebGL rendering engine.<br />
                &gt Handles 10k+ nodes smoothly.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
                <span class="font-label-mono text-[#00ff00] text-xs">STATUS: [ONLINE]</span>
                <div class="flex gap-2">
                  <a aria-label="GitHub" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">code</span>
                  </a>
                  <a aria-label="Live Demo" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group">
            <header
              class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
              <h2
                class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
                NET_SEC_TOOL</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              </div>
            </header>
            <div class="p-3 flex flex-col gap-4 grow">
              <div
                class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors">
                <div
                  class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                  data-alt="A pixelated lock icon surrounded by cascading binary code raining down matrix-style. The color palette is strictly black, dark teal, and vibrant cyan. Rough, brutalist aesthetic."
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUZm6YViseGg7cXKYBBgNJZAKr3jvcHZqIWvYhhuMPsrnqnNkyp_ezCXxDHhzsIHkZHJke9GFBS_38o3gY5Zvp53cDNXi9AE9FqgUfhTel45uYdO5sjup511GC4IGU5vTzVUCSCCH0Lx6pQ5edn0ni63jWdRxQB-goI27QucZd6pMpwryZwR6AI0STdURKc9xlX8W-OA59wiHxxaWNA8YnZ5NuewE7b5TbcJJmu0jc7C_0Z2BgyaQ')">
                </div>
                <div
                  class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-sm flex-grow">
                &gt Automated penetration testing suite.<br />
                &gt Python CLI interface.<br />
                &gt CVE database integration.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
                <span class="font-label-mono text-tertiary-fixed text-xs">STATUS: [MAINTENANCE]</span>
                <div class="flex gap-2">
                  <a aria-label="GitHub" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">code</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group">
            <header
              class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
              <h2
                class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
                CRYO_ENGINE</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              </div>
            </header>
            <div class="p-3 flex flex-col gap-4 flex-grow">
              <div
                class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors">
                <div
                  class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                  data-alt="A 3D wireframe render of a geometric spacecraft rotating, displayed on an old CRT monitor with heavy scanlines and chromatic aberration. Monochromatic cyan on black."
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHVxvmefk1cBxKP45k_yqRj-UfzTMMwrFAFXopQ7ryCYMyoewVquiRou3uXLsv9pRfvKQmuG6jko9tqU4lC0H6ny-o3-yYwYXlnYhr65N7cZ1YdpN31WiDf46MJTCpv-4TmAabUuLuIVu0w2DJJLXyUwkgFmONBNxYU_O5waMKu4F4xfhKjTOe_neYm6pSgSjZOaA17x5elkqyKb4PNtAfkUo1mXz0y-CSKoPT8_USTA9pOA_6qbc')">
                </div>
                <div
                  class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-sm flex-grow">
                &gt Custom 2D game engine.<br />
                &gt ECS architecture.<br />
                &gt Cross-platform compilation (WASM).
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
                <span class="font-label-mono text-[#00ff00] text-xs">STATUS: [ONLINE]</span>
                <div class="flex gap-2">
                  <a aria-label="GitHub" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">code</span>
                  </a>
                  <a aria-label="Live Demo" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group">
            <header
              class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
              <h2
                class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
                SYS_MONITOR_V2</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              </div>
            </header>
            <div class="p-3 flex flex-col gap-4 flex-grow">
              <div
                class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors">
                <div
                  class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                  data-alt="A dense dashboard of terminal graphs, bar charts, and scrolling text, mimicking htop or system monitor interfaces. High contrast, sharp edges, cyan and green on black."
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrkdiyHYmLSE9kGiqdk5-jaIRc0_WIzcqxfJZB4GyHPOxV9FV0NfviULqNF_cAC75qexqSVB7hofjbPAGJEoq0CfDCCKnjxYk7UUYunG-FoQ9-clzjtiVVpSBAUc7A6T4xmI1w_kPPaiH6BJmshtTZEYso_3Yi6LfzEh3jwqP5MW-us1M6r7n0pvq7ftEQC6ySuoTuhRMAyEukTv7kes-JSzN-3a4RCI9D6rjQiFC8dGsiEn9Ygjw')">
                </div>
                <div
                  class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-sm flex-grow">
                 Distributed server monitoring.<br />
                 Grafana-like custom dashboards.<br />
                 Alerting via webhook integrations.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
                <span class="font-label-mono text-[#00ff00] text-xs">STATUS: [ONLINE]</span>
                <div class="flex gap-2">
                  <a aria-label="GitHub" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">code</span>
                  </a>
                  <a aria-label="Live Demo" class="text-on-surface-variant hover:text-primary-fixed transition-colors"
                    href="#">
                    <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            class="flex flex-col border-2 border-outline-variant hover:border-primary-fixed hover:shadow-[0_0_15px_rgba(0,251,251,0.3)] transition-all duration-300 bg-surface-container group opacity-75 grayscale hover:grayscale-0 hover:opacity-100">
            <header
              class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container-high px-2 py-1">
              <h2
                class="font-headline-md text-on-surface uppercase tracking-tight text-sm truncate group-hover:text-primary-fixed transition-colors">
                PROJECT_OMEGA</h2>
              <div class="flex gap-1">
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
                <div class="w-3 h-3 border border-outline-variant bg-surface group-hover:border-primary-fixed"></div>
              </div>
            </header>
            <div class="p-3 flex flex-col gap-4 flex-grow">
              <div
                class="w-full aspect-video border-2 border-outline-variant relative overflow-hidden group-hover:border-primary-fixed-dim transition-colors flex items-center justify-center bg-surface-container-low">
                <span
                  class="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary-fixed transition-colors">visibility_off</span>
                <div
                  class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,251,251,0.1)_3px,rgba(0,251,251,0.1)_4px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-sm flex-grow">
                 [REDACTED]<br />
                 Classified experimental build.<br />
                 Awaiting clearance.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-outline-variant border-dashed">
                <span class="font-label-mono text-error text-xs">STATUS: [OFFLINE]</span>
                <div class="flex gap-2">
                  <span class="material-symbols-outlined text-[18px] text-outline">lock</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

  )
}

export default ProjectsPage
