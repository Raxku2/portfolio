function MainFooter() {
  return (

        <footer class="fixed bottom-0 left-16 right-0 h-10 bg-surface-container-lowest border-t-2 border-outline-variant z-40 flex items-center justify-between px-margin font-label-mono text-sm tracking-widest">
          <div class="flex gap-6">
            <span class="text-[#00ff00]">[ STATUS: SYSTEM READY ]</span>
            <span class="text-primary-fixed-dim">CPU: 02%</span>
            <span class="text-on-tertiary-container">MEM: 4.2GB / 16GB</span>
          </div>
          <div>
            <span class="text-on-surface-variant">LOCAL_TIME: </span>
            <span class="text-on-surface" id="terminal-clock">
              00:00:00
            </span>
          </div>
        </footer>
  )
}

export default MainFooter
