function MainDashboard() {
  return (
    <div class="flex flex-col w-full px-margin py-6 gap-margin max-w-container-max mx-auto relative z-10 text-on-surface">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-margin">
        <div class="xl:col-span-4 flex flex-col gap-margin">
          <section class="border-2 border-outline-variant bg-surface flex flex-col relative group">
            <div class="bg-secondary-fixed-dim border-b-2 border-outline-variant px-3 py-1 flex justify-between items-center h-8">
              <span class="font-label-mono text-on-secondary-fixed text-sm font-bold truncate">
                PROFILE_CONFIG.EXE
              </span>
              <div class="flex gap-2">
                <div class="w-3 h-3 border border-on-secondary-fixed hover:bg-on-secondary-fixed transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 border border-on-secondary-fixed hover:bg-on-secondary-fixed transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 border border-on-secondary-fixed bg-on-secondary-fixed hover:bg-transparent transition-colors cursor-pointer"></div>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-6 bg-surface-container-low/50 relative z-10">
              <div class="flex flex-col items-center gap-4 border border-outline-variant border-dashed p-6 bg-surface relative hover:border-primary-fixed transition-colors group/avatar">
                <div class="absolute top-2 left-2 font-label-mono text-[10px] text-on-surface-variant">
                  [AVATAR_MODULE]
                </div>
                <div class="relative w-24 h-24 mt-2">
                  <img
                    class="w-full h-full object-cover border-2 border-primary-fixed group-hover/avatar:shadow-[4px_4px_0px_#00fbfb] transition-shadow duration-200"
                    data-alt="A pixelated, 8-bit style portrait of a cybernetic character with glowing cyan and neon accents, set against a dark grid background, raw minimalist aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQfluLMWAp1zaHRPc_RWySWw6oYPpJfqbxqhFsYpCwJvkH3A2SYRi6ur8q76DrdgU2Usl4Am90BVNf6N-wIIsWoHlziTFC4U_fQxFSIDnYUYe9COl19Z8JtIBzUHC1_kBwnKKWZSIInziBv6_g0fhEX71eOfw8fkKm356blyIeh5kYhho_wZMqP-3eJiFDTS3J5L6MmcASsdiAu7eDB-0wsN0bE1sUvq_YUD5-TIsuGr1jA-HIO-w"
                  />
                  <div class="absolute bottom-0 right-0 w-3 h-3 bg-primary-fixed animate-pulse"></div>
                </div>
                <button class="font-label-mono text-xs px-4 py-2 border-2 border-outline-variant hover:border-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed transition-all active:translate-y-[2px] active:translate-x-[2px]">
                  &gt UPLOAD_NEW_DP
                </button>
              </div>
              <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-1 relative group/input">
                  <label class="font-label-mono text-xs text-on-surface-variant flex justify-between">
                    <span>[USR_NAME]</span>
                    <span class="text-error opacity-0 group-focus-within/input:opacity-100 transition-opacity">
                      *REQ
                    </span>
                  </label>
                  <div class="flex">
                    <span class="bg-surface-variant px-3 py-2 border-2 border-r-0 border-outline-variant font-label-mono text-on-surface-variant flex items-center">
                      &gt
                    </span>
                    <input
                      class="flex-grow bg-surface border-2 border-outline-variant px-3 py-2 font-body-md text-primary focus:outline-none focus:border-primary-fixed focus:shadow-[2px_2px_0px_#00fbfb] transition-all relative z-10 bg-transparent"
                      type="text"
                      value="ALEX_VANCE"
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-1 relative group/input">
                  <label class="font-label-mono text-xs text-on-surface-variant flex justify-between">
                    <span>[USR_ROLE]</span>
                  </label>
                  <div class="flex">
                    <span class="bg-surface-variant px-3 py-2 border-2 border-r-0 border-outline-variant font-label-mono text-on-surface-variant flex items-center">
                      &gt
                    </span>
                    <input
                      class="flex-grow bg-surface border-2 border-outline-variant px-3 py-2 font-body-md text-primary focus:outline-none focus:border-primary-fixed focus:shadow-[2px_2px_0px_#00fbfb] transition-all relative z-10 bg-transparent"
                      type="text"
                      value="SYS_ARCHITECT // LEVEL_09"
                    />
                  </div>
                </div>
              </div>
              <div class="border-t-2 border-outline-variant pt-5 flex flex-col gap-4">
                <div class="flex justify-between items-end">
                  <span class="font-label-mono text-sm text-primary-fixed">
                    [SKILL_MATRIX]
                  </span>
                  <button class="font-label-mono text-xs text-on-surface-variant hover:text-primary transition-colors border-b border-dashed border-on-surface-variant hover:border-primary">
                    + ADD_NODE
                  </button>
                </div>
                <div class="flex flex-col gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                  <div class="flex gap-2 items-center bg-surface border border-outline-variant p-2 group hover:border-primary-fixed transition-colors">
                    <div class="w-8 h-8 bg-surface-variant border border-outline flex justify-center items-center font-label-mono text-[10px] text-primary">
                      JS
                    </div>
                    <input
                      class="flex-grow bg-transparent font-body-md text-sm text-on-surface focus:outline-none focus:text-primary"
                      type="text"
                      value="JAVASCRIPT_ES6"
                    />
                    <div class="flex gap-1 text-[10px] font-label-mono text-primary-fixed-dim">
                      <span>[██████</span>
                      <span class="text-surface-variant">░░]</span>
                    </div>
                    <button class="w-6 h-6 flex justify-center items-center text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors ml-2">
                      <span class="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </div>
                  <div class="flex gap-2 items-center bg-surface border border-outline-variant p-2 group hover:border-primary-fixed transition-colors">
                    <div class="w-8 h-8 bg-surface-variant border border-outline flex justify-center items-center font-label-mono text-[10px] text-primary">
                      RS
                    </div>
                    <input
                      class="flex-grow bg-transparent font-body-md text-sm text-on-surface focus:outline-none focus:text-primary"
                      type="text"
                      value="RUST_CORE"
                    />
                    <div class="flex gap-1 text-[10px] font-label-mono text-primary-fixed-dim">
                      <span>[████████</span>
                      <span class="text-surface-variant">]</span>
                    </div>
                    <button class="w-6 h-6 flex justify-center items-center text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors ml-2">
                      <span class="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </div>
                  <div class="flex gap-2 items-center bg-surface border border-outline-variant p-2 group hover:border-primary-fixed transition-colors">
                    <div class="w-8 h-8 bg-surface-variant border border-outline flex justify-center items-center font-label-mono text-[10px] text-primary">
                      TS
                    </div>
                    <input
                      class="flex-grow bg-transparent font-body-md text-sm text-on-surface focus:outline-none focus:text-primary"
                      type="text"
                      value="TYPESCRIPT"
                    />
                    <div class="flex gap-1 text-[10px] font-label-mono text-primary-fixed-dim">
                      <span>[████</span>
                      <span class="text-surface-variant">░░░░]</span>
                    </div>
                    <button class="w-6 h-6 flex justify-center items-center text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors ml-2">
                      <span class="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <button class="w-full py-3 mt-4 border-2 border-primary-fixed bg-transparent text-primary-fixed font-headline-md text-base hover:bg-primary-fixed hover:text-on-primary-fixed transition-all relative overflow-hidden group">
                <div class="absolute inset-0 w-[10%] h-full bg-white/20 -skew-x-[45deg] -translate-x-full group-hover:animate-[shine_0.5s_ease-in-out]"></div>
                <span class="relative z-10">&gt EXECUTE_SAVE</span>
              </button>
            </div>
          </section>
        </div>

        <div class="xl:col-span-8 flex flex-col gap-margin">
          <section class="border-2 border-outline-variant bg-surface flex flex-col relative">
            <div class="bg-secondary-fixed-dim border-b-2 border-outline-variant px-3 py-1 flex justify-between items-center h-8">
              <span class="font-label-mono text-on-secondary-fixed text-sm font-bold truncate">
                DATA_REPOS.SH
              </span>
              <div class="flex gap-2">
                <div class="w-3 h-3 border border-on-secondary-fixed hover:bg-on-secondary-fixed transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 border border-on-secondary-fixed hover:bg-on-secondary-fixed transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 border border-on-secondary-fixed bg-on-secondary-fixed hover:bg-transparent transition-colors cursor-pointer"></div>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-6">
              <div class="flex justify-between items-end border-b border-outline-variant pb-2">
                <div class="flex flex-col">
                  <span class="font-label-mono text-xs text-on-surface-variant">
                    ACTIVE_PROJECTS // 03
                  </span>
                  <h2 class="font-headline-md text-xl text-primary">
                    Repository Matrix
                  </h2>
                </div>
                <button class="font-label-mono text-xs px-3 py-1 border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
                  + ADD_NEW_ENTRY
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border-2 border-outline-variant bg-surface-container hover:border-primary-fixed hover:shadow-[4px_4px_0px_#00fbfb] transition-all group p-4 flex flex-col gap-3 relative cursor-crosshair">
                  <div class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      class="text-on-surface-variant hover:text-error"
                      title="DELETE_VOID"
                    >
                      <span class="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                  <div class="flex justify-between items-start">
                    <input
                      class="font-headline-md text-lg text-primary bg-transparent focus:outline-none focus:border-b focus:border-primary w-[80%]"
                      type="text"
                      value="NEURAL_NET_V2"
                    />
                    <span class="font-label-mono text-[10px] text-[#00ff00] border border-[#00ff00] px-1 animate-pulse">
                      ONLINE
                    </span>
                  </div>
                  <textarea
                    class="font-body-md text-sm text-on-surface-variant bg-transparent resize-none h-16 focus:outline-none focus:text-on-surface border-b border-transparent focus:border-outline-variant transition-colors"
                    spellcheck="false"
                  >
                    {" "}
                    &gt Initializing recursive learning algorithms. Connection
                    stable. Latency &lt 12ms.
                  </textarea>
                  <div class="flex justify-between items-center pt-2 mt-auto">
                    <span class="font-label-mono text-xs text-primary-fixed-dim">
                      COMPILED: 24_HRS_AGO
                    </span>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      terminal
                    </span>
                  </div>
                </div>
                <div class="border-2 border-outline-variant bg-surface-container hover:border-primary-fixed hover:shadow-[4px_4px_0px_#00fbfb] transition-all group p-4 flex flex-col gap-3 relative cursor-crosshair">
                  <div class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      class="text-on-surface-variant hover:text-error"
                      title="DELETE_VOID"
                    >
                      <span class="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                  <div class="flex justify-between items-start">
                    <input
                      class="font-headline-md text-lg text-primary bg-transparent focus:outline-none focus:border-b focus:border-primary w-[80%]"
                      type="text"
                      value="GHOST_PROTOCOL"
                    />
                    <span class="font-label-mono text-[10px] text-tertiary-fixed border border-tertiary-fixed px-1">
                      MAINTENANCE
                    </span>
                  </div>
                  <textarea
                    class="font-body-md text-sm text-on-surface-variant bg-transparent resize-none h-16 focus:outline-none focus:text-on-surface border-b border-transparent focus:border-outline-variant transition-colors"
                    spellcheck="false"
                  >
                    {" "}
                    &gt Security patching in progress. Vulnerability identified
                    in sector 7G. Awaiting reboot.
                  </textarea>
                  <div class="flex justify-between items-center pt-2 mt-auto">
                    <span class="font-label-mono text-xs text-primary-fixed-dim">
                      COMPILED: 02_DAYS_AGO
                    </span>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      terminal
                    </span>
                  </div>
                </div>
                <div class="border-2 border-outline-variant bg-surface-container opacity-60 hover:opacity-100 hover:border-error hover:shadow-[4px_4px_0px_#ffb4ab] transition-all group p-4 flex flex-col gap-3 relative cursor-crosshair">
                  <div class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      class="text-on-surface-variant hover:text-error"
                      title="DELETE_VOID"
                    >
                      <span class="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                  <div class="flex justify-between items-start">
                    <input
                      class="font-headline-md text-lg text-primary bg-transparent focus:outline-none focus:border-b focus:border-primary w-[80%]"
                      type="text"
                      value="LEGACY_API_V1"
                    />
                    <span class="font-label-mono text-[10px] text-error border border-error px-1">
                      OFFLINE
                    </span>
                  </div>
                  <textarea
                    class="font-body-md text-sm text-on-surface-variant bg-transparent resize-none h-16 focus:outline-none focus:text-on-surface border-b border-transparent focus:border-outline-variant transition-colors"
                    spellcheck="false"
                  >
                    {" "}
                    &gt Process terminated. Core dumped. Systems unresponsive
                    following buffer overflow test.
                  </textarea>
                  <div class="flex justify-between items-center pt-2 mt-auto">
                    <span class="font-label-mono text-xs text-primary-fixed-dim">
                      COMPILED: ERR_DATE
                    </span>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      terminal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="border-2 border-outline-variant bg-surface flex flex-col relative flex-grow">
            <div class="bg-secondary-fixed-dim border-b-2 border-outline-variant px-3 py-1 flex justify-between items-center h-8">
              <span class="font-label-mono text-on-secondary-fixed text-sm font-bold truncate">
                SYS_LOGS.DAT
              </span>
              <div class="flex gap-2">
                <div class="w-3 h-3 border border-on-secondary-fixed hover:bg-on-secondary-fixed transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 border border-on-secondary-fixed hover:bg-on-secondary-fixed transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 border border-on-secondary-fixed bg-on-secondary-fixed hover:bg-transparent transition-colors cursor-pointer"></div>
              </div>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div class="flex flex-col gap-4 border-r-0 md:border-r border-outline-variant border-dashed pr-0 md:pr-6">
                <div class="flex justify-between items-end border-b border-outline-variant pb-2">
                  <span class="font-label-mono text-sm text-primary-fixed">
                    [EXP_TIMELINE]
                  </span>
                  <button class="font-label-mono text-xs text-on-surface-variant hover:text-primary transition-colors border-b border-dashed border-on-surface-variant hover:border-primary">
                    + APPEND_LOG
                  </button>
                </div>
                <div class="flex flex-col gap-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
                  <div class="flex flex-col gap-2 pl-8 relative group">
                    <div class="absolute left-[3px] top-1 w-3 h-3 bg-primary-fixed border border-surface rounded-none group-hover:scale-125 transition-transform z-10"></div>
                    <input
                      class="font-headline-md text-base text-primary bg-transparent focus:outline-none focus:border-b focus:border-primary w-full"
                      type="text"
                      value="LEAD_ARCHITECT @ CYBER_DYNE"
                    />
                    <input
                      class="font-label-mono text-xs text-primary-fixed-dim bg-transparent focus:outline-none focus:text-primary"
                      type="text"
                      value="2042 - PRESENT"
                    />
                    <textarea
                      class="font-body-md text-sm text-on-surface-variant bg-surface border border-outline-variant p-2 resize-y min-h-[60px] focus:outline-none focus:border-primary-fixed transition-colors mt-1"
                      spellcheck="false"
                    >
                      Orchestrating distributed mainframe networks. Reduced
                      latency by 45%.
                    </textarea>
                  </div>
                  <div class="flex flex-col gap-2 pl-8 relative group">
                    <div class="absolute left-[3px] top-1 w-3 h-3 bg-surface-variant border-2 border-outline-variant rounded-none group-hover:border-primary-fixed group-hover:scale-125 transition-transform z-10"></div>
                    <input
                      class="font-headline-md text-base text-secondary bg-transparent focus:outline-none focus:border-b focus:border-primary w-full"
                      type="text"
                      value="SR_DEV @ MECHA_CORP"
                    />
                    <input
                      class="font-label-mono text-xs text-on-surface-variant bg-transparent focus:outline-none focus:text-primary"
                      type="text"
                      value="2038 - 2042"
                    />
                    <textarea
                      class="font-body-md text-sm text-on-surface-variant bg-surface border border-outline-variant p-2 resize-y min-h-[60px] focus:outline-none focus:border-primary-fixed transition-colors mt-1"
                      spellcheck="false"
                    >
                      Developed core AI training algorithms for automated
                      defense systems.
                    </textarea>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex justify-between items-end border-b border-outline-variant pb-2">
                  <span class="font-label-mono text-sm text-primary-fixed">
                    [COMMS_CHANNELS]
                  </span>
                </div>
                <div class="flex flex-col gap-5 mt-2">
                  <div class="flex flex-col gap-1 relative group/input">
                    <label class="font-label-mono text-xs text-on-surface-variant flex items-center gap-2">
                      <span class="material-symbols-outlined text-[14px]">
                        mail
                      </span>
                      SECURE_MAIL
                    </label>
                    <div class="flex group-focus-within/input:shadow-[2px_2px_0px_#00fbfb] transition-shadow">
                      <span class="bg-surface-variant px-3 py-2 border-2 border-r-0 border-outline-variant font-label-mono text-on-surface-variant flex items-center">
                        @
                      </span>
                      <input
                        class="flex-grow bg-surface border-2 border-outline-variant px-3 py-2 font-body-md text-primary focus:outline-none focus:border-primary-fixed transition-colors w-full"
                        type="email"
                        value="alex@bitstream.io"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 relative group/input">
                    <label class="font-label-mono text-xs text-on-surface-variant flex items-center gap-2">
                      <span class="material-symbols-outlined text-[14px]">
                        code
                      </span>
                      VECTOR_CONNECTION (GITHUB)
                    </label>
                    <div class="flex group-focus-within/input:shadow-[2px_2px_0px_#00fbfb] transition-shadow">
                      <span class="bg-surface-variant px-3 py-2 border-2 border-r-0 border-outline-variant font-label-mono text-on-surface-variant flex items-center">
                        github.com/
                      </span>
                      <input
                        class="flex-grow bg-surface border-2 border-outline-variant px-3 py-2 font-body-md text-primary focus:outline-none focus:border-primary-fixed transition-colors w-full"
                        type="text"
                        value="vance_cyber"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 relative group/input">
                    <label class="font-label-mono text-xs text-on-surface-variant flex items-center gap-2">
                      <span class="material-symbols-outlined text-[14px]">
                        share
                      </span>
                      NEURAL_LINK (LINKEDIN)
                    </label>
                    <div class="flex group-focus-within/input:shadow-[2px_2px_0px_#00fbfb] transition-shadow">
                      <span class="bg-surface-variant px-3 py-2 border-2 border-r-0 border-outline-variant font-label-mono text-on-surface-variant flex items-center">
                        in/
                      </span>
                      <input
                        class="flex-grow bg-surface border-2 border-outline-variant px-3 py-2 font-body-md text-primary focus:outline-none focus:border-primary-fixed transition-colors w-full"
                        type="text"
                        value="alex-vance-arch"
                      />
                    </div>
                  </div>
                  <div class="mt-auto pt-6 flex justify-end">
                    <button class="font-label-mono text-xs px-6 py-3 border-2 border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed transition-all active:translate-y-[2px] active:translate-x-[2px]">
                      &gt SYNC_NETWORK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
