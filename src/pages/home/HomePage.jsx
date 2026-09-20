import { A } from "@solidjs/router";
import { portfolioInfo } from "../../stores";

function HomePage() {
  
  return (
    <div class="relative z-10 w-full border-2 border-outline-variant bg-surface-container-low shadow-[8px_8px_0px_0px_rgba(0,251,251,0.15)] flex flex-col">

      <div class="flex items-center justify-between border-b-2 border-outline-variant bg-surface-container px-4 py-2.5 select-none">
        <div class="flex items-center gap-2">
          <div class="h-3 w-3 bg-error shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
          <div class="h-3 w-3 bg-tertiary-fixed shadow-[0_0_8px_rgba(252,228,66,0.5)]"></div>
          <div class="h-3 w-3 bg-primary-fixed shadow-[0_0_8px_rgba(0,251,251,0.5)]"></div>
        </div>
        <span class="font-label-mono text-xs md:text-sm text-primary-fixed tracking-wider uppercase font-bold flex items-center gap-2">
          <span class="inline-block w-2 h-2 bg-primary-fixed animate-ping rounded-full"></span>
          TTY1 - VANCE@BITSTREAM-MAINFRAME [SYS_ARCHITECT]
        </span>
        <div class="hidden sm:flex items-center gap-2 font-label-mono text-[11px] text-outline">
          <span>UTF-8</span>
          <span>|</span>
          <span>BAUD: 115200</span>
        </div>
      </div>


      <div class="p-4 md:p-8 flex flex-col gap-8">


        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-surface-container-lowest/50 p-4 md:p-6 border border-outline-variant">
          <div class="lg:col-span-4 xl:col-span-3 flex flex-col items-center gap-4">
            <div class="relative group p-1.5 border-2 border-primary-fixed bg-surface-container shadow-[0_0_16px_rgba(0,251,251,0.25)]">
              <div class="absolute -top-2 -left-2 w-2 h-2 bg-primary-fixed"></div>
              <div class="absolute -top-2 -right-2 w-2 h-2 bg-primary-fixed"></div>
              <div class="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-fixed"></div>
              <div class="absolute -bottom-2 -right-2 w-2 h-2 bg-primary-fixed"></div>
              

              <img
                alt="Alex Vance Pixel Art Developer"
                class="w-56 h-56 sm:w-64 sm:h-64 object-cover filter contrast-125 block"
                src={portfolioInfo().dp}
              />

              <div class="absolute inset-0 bg-primary-fixed/5 pointer-events-none mix-blend-screen"></div>
            </div>


          </div>


          <div class="lg:col-span-8 xl:col-span-9 flex flex-col justify-between font-label-mono text-xs md:text-sm space-y-1.5">
            <div class="pb-2 border-b border-outline-variant/60 flex flex-wrap items-baseline gap-2">
              <span class="text-primary-fixed font-bold text-base md:text-lg">
                {portfolioInfo().name}
              </span>
              <span class="text-outline">@</span>
              <span class="text-tertiary-fixed font-bold text-base md:text-lg">
                bitstream
              </span>
              <span class="text-on-surface-variant text-xs ml-auto">
                ------------------------------------
              </span>
            </div>



            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 pt-2 text-on-surface">
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  OS:
                </span>
                <span class="text-on-surface">BitstreamOS v1.0.4 x86_64</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  KERNEL:
                </span>
                <span class="text-on-surface">6.8.0-retro-pixel-hardened</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  UPTIME:
                </span>
                <span class="text-tertiary-fixed">
                  42 days, 13 hours, 37 mins
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  ROLE:
                </span>
                <span class="text-primary font-bold">
                  {portfolioInfo().role}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  SHELL:
                </span>
                <span class="text-on-surface">zsh / pixel-cli</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  TERMINAL:
                </span>
                <span class="text-on-surface">
                  Bitstream CRT Terminal Emulator
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  CPU:
                </span>
                <span class="text-on-surface">
                  Neural Quantum 16-Core @ 4.8GHz
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-fixed font-bold w-24 shrink-0">
                  MEMORY:
                </span>
                <span class="text-on-surface">
                  4.2GiB / 16.0GiB (<span class="text-primary-fixed">26%</span>)
                </span>
              </div>
            </div>





            <div class="pt-2 border-t border-outline-variant/60 flex items-center gap-3">
              <span class="text-primary-fixed font-bold text-xs uppercase tracking-wider">
                PALETTE:
              </span>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span
                  class="inline-block w-6 h-6 bg-[#000000] border border-outline"
                  title="Black"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#00fbfb] border border-outline shadow-[0_0_6px_rgba(0,251,251,0.5)]"
                  title="Cyan"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#ffffff] border border-outline"
                  title="White"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#00dd55] border border-outline"
                  title="Green"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#fce442] border border-outline"
                  title="Yellow"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#ff5555] border border-outline"
                  title="Red"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#2b7fff] border border-outline"
                  title="Blue"
                ></span>
                <span
                  class="inline-block w-6 h-6 bg-[#ff55ff] border border-outline"
                  title="Magenta"
                ></span>
              </div>
            </div>
          </div>
        </div>





        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between border-b border-outline-variant pb-2">
            <div class="flex items-center gap-2 font-headline-md text-sm md:text-base text-primary uppercase">
              <span class="text-primary-fixed">▶</span>
              COMMAND_DECK // INTERACTIVE_BUTTON_MATRIX
            </div>
            <span class="font-label-mono text-[11px] text-on-surface-variant hidden sm:inline">
              [PRESS NUMKEY 1-9 OR CLICK ENTRY]
            </span>
          </div>


          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 font-label-mono">


            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[1]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  ABOUT
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::SYS_BIO
              </span>
            </A>


            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/projects"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[2]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  PROJECTS
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::PORTFOLIO
              </span>
            </A>


            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/contact"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[3]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  CONTACT
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::DISPATCH
              </span>
            </A>



            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-tertiary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#fce442] focus:outline-none"
              href="/supportme"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-tertiary-fixed font-bold">[4]</span>
                <span class="text-primary group-hover:text-tertiary-fixed font-bold tracking-wider truncate">
                  SUPPORT ME
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-tertiary-fixed text-xs shrink-0">
                ::SPONSOR
              </span>
            </A>


            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/courses"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[5]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  COURSES
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::ACADEMY
              </span>
            </A>
            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-error hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#ff5555] focus:outline-none"
              href="/sale"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-error font-bold">[6]</span>
                <span class="text-primary group-hover:text-error font-bold tracking-wider truncate">
                  ON SALE
                </span>
              </div>
              <span class="text-error text-xs shrink-0 font-bold animate-pulse">
                [HOT]
              </span>
            </A>
            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/apointment"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[7]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  BOOK AN APPOINTMENT
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::CALENDAR
              </span>
            </A>
            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/dashboard"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[8]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  DASHBOARD
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::OPS_CENTER
              </span>
            </A>
            <A
              class="group flex items-center justify-between p-3.5 bg-surface-container border-2 border-outline-variant hover:border-primary-fixed hover:bg-surface-container-high transition-all shadow-[2px_2px_0px_#151d1d] hover:shadow-[4px_4px_0px_#00fbfb] focus:outline-none"
              href="/blogs"
            >
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="text-primary-fixed font-bold">[9]</span>
                <span class="text-primary group-hover:text-primary-fixed font-bold tracking-wider truncate">
                  BLOGS
                </span>
              </div>
              <span class="text-outline-variant group-hover:text-primary-fixed text-xs shrink-0">
                ::DEV_LOGS
              </span>
            </A>
          </div>
        </div>





        <div class="flex flex-col gap-4 pt-2">
          <div class="flex flex-wrap items-center justify-between border-b-2 border-outline-variant pb-2">
            <div class="flex items-center gap-2 font-headline-md text-sm md:text-base text-primary uppercase">
              <span class="material-symbols-outlined text-primary-fixed text-[20px]">
                cell_tower
              </span>
              I AM AVAILABLE ON SOCIAL MEDIA // TELEMETRY_UPLINK
            </div>
            <span class="font-label-mono text-xs text-primary-fixed flex items-center gap-1.5">
              <span class="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-ping"></span>
              NETWORK CHANNELS: ONLINE (8/8)
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://reddit.com/user/raxku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    forum
                  </span>
                  <span>Reddit</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">u/raxku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://x.com/raxku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    tag
                  </span>
                  <span>X / Twitter</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">@raxku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://facebook.com/raxku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    public
                  </span>
                  <span>Facebook</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">/raxku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://instagram.com/raxku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    photo_camera
                  </span>
                  <span>Instagram</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">@raxku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://linkedin.com/in/raxku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    badge
                  </span>
                  <span>LinkedIn</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">/in/raxku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://github.com/raxku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    terminal
                  </span>
                  <span>GitHub</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">github.com/raxku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://discord.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    headset_mic
                  </span>
                  <span>Discord</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">vance#1337</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>

            <a
              class="group p-3.5 bg-surface-container-low border border-outline-variant hover:border-primary-fixed transition-all hover:bg-surface-container flex flex-col justify-between gap-3 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              href="https://youtube.com/@rax_ku2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 font-label-mono font-bold text-primary group-hover:text-primary-fixed">
                  <span class="material-symbols-outlined text-[20px] text-primary-fixed">
                    smart_display
                  </span>
                  <span>YouTube</span>
                </div>
                <span class="text-[10px] font-label-mono text-[#00ff00] border border-[#00ff00]/40 px-1 bg-[#00ff00]/10">
                  [LINK ACTIVE]
                </span>
              </div>
              <div class="font-label-mono text-xs text-on-surface-variant flex items-center justify-between">
                <span class="truncate">@rax_ku2</span>
                <span class="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </a>
          </div>
        </div>

        <div class="pt-2 border-t border-outline-variant/60 flex flex-wrap items-center justify-between font-label-mono text-xs text-on-surface-variant">
          <div class="flex items-center gap-2">
            <span class="text-primary-fixed font-bold">BITSTREAM_SYS:</span>
            <span>AWAITING_INPUT...</span>
            <span class="w-2.5 h-4 bg-primary-fixed inline-block animate-pulse"></span>
          </div>
          <div class="flex items-center gap-4 text-[11px]">
            <span>ENCRYPTION: AES-256-GCM</span>
            <span>NODE: BITSTREAM-WEST-01</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
