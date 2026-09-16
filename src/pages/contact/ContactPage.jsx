function ContactPage() {

  return (
    <div class="flex flex-col w-full h-full justify-between pb-8">
      <div class="flex flex-col grow max-w-container-max mx-auto w-full px-margin py-8 gap-8 mt-12">
        <div class="border-2 border-outline p-6 bg-surface-container shadow-[8px_8px_0px_#00fbfb]">
          <h1 class="font-headline-lg text-headline-lg text-primary uppercase mb-4 tracking-tight border-b-2 border-outline-variant pb-2">
            <span class="text-primary-fixed">&gt</span> SEND A MESSAGE TO THE
            ADMIN
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl">
            Establish a direct socket connection to the root administrator. All
            transmissions are end-to-end encrypted and logged for system
            integrity. Awaiting input...
          </p>
          <form
            class="flex flex-col gap-6"
            id="contact-form"
            onsubmit="event.preventDefault(); initiateTransmission();"
          >
            <div class="flex flex-col gap-2">
              <label class="font-label-mono text-label-mono text-primary-fixed uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">
                  account_box
                </span>{" "}
                NAME:
              </label>
              <div class="flex items-center gap-2">
                <span class="font-label-mono text-on-surface-variant">&gt</span>
                <input
                  class="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary-fixed outline-none text-primary font-body-md py-2 transition-colors placeholder:text-surface-bright"
                  id="input-name"
                  placeholder="Enter designated alias..."
                  required=""
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-label-mono text-label-mono text-primary-fixed uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">mail</span>{" "}
                EMAIL:
              </label>
              <div class="flex items-center gap-2">
                <span class="font-label-mono text-on-surface-variant">&gt</span>
                <input
                  class="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary-fixed outline-none text-primary font-body-md py-2 transition-colors placeholder:text-surface-bright"
                  id="input-email"
                  placeholder="Enter valid communication vector..."
                  required=""
                  type="email"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-label-mono text-label-mono text-primary-fixed uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">
                  message
                </span>{" "}
                MESSAGE:
              </label>
              <div class="flex items-start gap-2">
                <span class="font-label-mono text-on-surface-variant mt-2">
                  &gt
                </span>
                <textarea
                  class="w-full bg-transparent border-2 border-outline-variant focus:border-primary-fixed outline-none text-primary font-body-md p-2 transition-colors placeholder:text-surface-bright resize-none"
                  id="input-message"
                  placeholder="Initiate payload sequence..."
                  required=""
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div class="mt-4 flex justify-end">
              <button
                class="group relative px-6 py-3 border-2 border-primary-fixed bg-surface-container font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest hover:bg-[#00ff00] hover:text-[#000000] hover:border-[#00ff00] transition-all duration-75 active:translate-y-0.5 active:translate-x-0.5"
                id="submit-btn"
                type="submit"
              >
                [ SUBMIT_PAYLOAD ]
              </button>
            </div>
          </form>
        </div>
      </div>



      <div class="w-full px-margin max-w-container-max mx-auto mt-auto">
        <div class="flex items-center gap-3 border-t-2 border-outline-variant pt-4 pb-2">
          <span class="text-primary-fixed animate-pulse">_</span>
          <span class="font-label-mono text-sm text-on-surface-variant">
            AWAITING_COMMAND...
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
