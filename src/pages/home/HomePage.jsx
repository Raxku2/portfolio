function HomePage() {
  return (

      <div class="flex flex-col w-full h-full justify-center items-center relative overflow-hidden px-8">
        <div class="absolute inset-0 bg-background z-0 pointer-events-none">
          <div class="w-full h-full opacity-10"
            style="background-image: repeating-linear-gradient(transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px);">
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80 mix-blend-multiply">
          </div>
        </div>
        <div
          class="relative z-10 w-full max-w-[800px] border-2 border-outline-variant bg-surface-container-low shadow-[8px_8px_0px_0px_rgba(0,251,251,0.1)] transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,251,251,0.2)]">
          <div
            class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container px-4 py-2">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 bg-error shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
              <div class="h-3 w-3 bg-tertiary-fixed shadow-[0_0_8px_rgba(252,228,66,0.5)]"></div>
              <div class="h-3 w-3 bg-primary-fixed shadow-[0_0_8px_rgba(0,251,251,0.5)]"></div>
            </div>
            <span class="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">tty1 -
              operator@stitch_os</span>
          </div>
          <div class="p-8 min-h-[400px] flex flex-col gap-6">
            <div class="font-body-md text-body-md text-primary-fixed-dim font-bold flex flex-col gap-2 min-h-[72px]"
              id="boot-sequence">
              <div class="h-6 overflow-hidden relative">
                <span
                  class="typing-text absolute inset-0 w-full h-full whitespace-nowrap overflow-hidden border-r-2 border-primary-fixed-dim pr-1 animate-pulse"
                  data-text="> STITCH_OS v1.0.4..."></span>
              </div>
              <div class="h-6 overflow-hidden relative hidden boot-line-2">
                <span
                  class="typing-text absolute inset-0 w-full h-full whitespace-nowrap overflow-hidden border-r-2 border-primary-fixed-dim pr-1 animate-pulse"
                  data-text="> INITIALIZING USER INTERFACE..."></span>
              </div>
              <div class="h-6 overflow-hidden relative hidden boot-line-3">
                <span
                  class="typing-text absolute inset-0 w-full h-full whitespace-nowrap overflow-hidden border-r-2 border-primary-fixed-dim pr-1 animate-pulse text-tertiary-fixed"
                  data-text="> WELCOME, OPERATOR."></span>
              </div>
            </div>
            <div class="mt-8 transition-opacity duration-1000 opacity-0" id="hero-content">
              <h1
                class="font-headline-lg text-headline-lg text-primary uppercase mb-6 drop-shadow-[2px_2px_0px_rgba(0,251,251,0.3)]">
                I Build Stuff For The Web
              </h1>
              <p
                class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 border-l-2 border-outline-variant pl-4 py-2 bg-surface-container-highest/30">
                Full-stack developer with a passion for retro aesthetics and modern code. Engineering robust solutions
                with zero compromise on visual impact.
              </p>
              <div class="flex items-center gap-4">
                <span class="font-body-md text-body-md text-primary-fixed font-bold">&gt</span>
                <a class="group relative inline-flex items-center font-label-mono text-label-mono uppercase tracking-widest text-primary-fixed border-2 border-primary-fixed px-6 py-3 transition-all hover:bg-primary-fixed hover:text-on-primary-fixed hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 focus:ring-offset-background"
                  href="#projects">
                  <span class="relative z-10">VIEW_PROJECTS</span>
                  <span
                    class="ml-3 w-3 h-5 bg-primary-fixed inline-block animate-pulse group-hover:bg-on-primary-fixed"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-8 right-8 flex flex-col items-end gap-2 z-0 opacity-40">
          <div class="font-label-mono text-[10px] text-primary-fixed tracking-widest uppercase">SYS_MEM_ALLOC: OK</div>
          <div class="font-label-mono text-[10px] text-primary-fixed tracking-widest uppercase">NET_LATENCY: 12ms</div>
          <div class="w-24 h-[2px] bg-outline-variant relative overflow-hidden mt-1">
            <div class="absolute top-0 left-0 h-full bg-primary-fixed animate-[indeterminate_2s_infinite]"></div>
          </div>
        </div>
      </div>
  )
}

export default HomePage
