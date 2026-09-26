import { createSignal } from "solid-js";
import { formdata, setFormdata } from "../../stores";

function ContactPage() {
  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
  const contactFormUrl = BASE_URL + "/message";

  // Reactive state for UI handling
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [consoleStatus, setConsoleStatus] = createSignal("AWAITING_COMMAND...");

  const initiateTransmission = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (isSubmitting()) return; // Prevent double submission

    setIsSubmitting(true);
    setConsoleStatus("TRANSMITTING_PAYLOAD...");

    try {
      const response = await fetch(contactFormUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formdata.name,
          email: formdata.email,
          message: formdata.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`CONNECTION_REJECTED (CODE: ${response.status})`);
      }

      // Success state
      setConsoleStatus("PAYLOAD_DELIVERED_SUCCESSFULLY");

      // Clear the form fields upon success
      setFormdata("name", "");
      setFormdata("email", "");
      setFormdata("message", "");

      // Reset console status after 4 seconds
      // setTimeout(() => setConsoleStatus("AWAITING_COMMAND..."), 4000);
    } catch (error) {
      console.error(error);
      // Error state
      setConsoleStatus(`TRANSMISSION_FAILED: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div class="flex flex-col w-full h-full justify-between pb-8">
      <div class="flex flex-col grow max-w-container-max mx-auto w-full px-margin py-8 gap-8 mt-12">
        <div class="border-2 border-outline p-6 bg-surface-container shadow-[8px_8px_0px_#00fbfb]">
          <h1 class="font-headline-lg text-headline-lg text-primary uppercase mb-4 tracking-tight border-b-2 border-outline-variant pb-2">
            <span class="text-primary-fixed">&gt;</span> SEND A MESSAGE TO THE ADMIN
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl">
            Establish a direct socket connection to the root administrator. All
            transmissions are end-to-end encrypted and logged for system
            integrity. Awaiting input...
          </p>

          {/* Applied dynamic classes to dim and disable form during submission */}
          <form
            class={`flex flex-col gap-6 transition-opacity duration-300 ${
              isSubmitting() ? "opacity-40 pointer-events-none grayscale" : "opacity-100"
            }`}
            id="contact-form"
            onSubmit={initiateTransmission}
          >
            <div class="flex flex-col gap-2">
              <label class="font-label-mono text-label-mono text-primary-fixed uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">account_box</span> NAME:
              </label>
              <div class="flex items-center gap-2">
                <span class="font-label-mono text-on-surface-variant">&gt;</span>
                <input
                  class="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary-fixed outline-none text-primary font-body-md py-2 transition-colors placeholder:text-surface-bright disabled:opacity-50"
                  id="input-name"
                  placeholder="Enter designated alias..."
                  required
                  type="text"
                  value={formdata.name}
                  onChange={(e) => setFormdata("name", e.target.value)}
                  disabled={isSubmitting()}
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-label-mono text-label-mono text-primary-fixed uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">mail</span> EMAIL:
              </label>
              <div class="flex items-center gap-2">
                <span class="font-label-mono text-on-surface-variant">&gt;</span>
                <input
                  class="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary-fixed outline-none text-primary font-body-md py-2 transition-colors placeholder:text-surface-bright disabled:opacity-50"
                  id="input-email"
                  placeholder="Enter valid communication vector..."
                  required
                  type="email"
                  value={formdata.email}
                  onChange={(e) => setFormdata("email", e.target.value)}
                  disabled={isSubmitting()}
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-label-mono text-label-mono text-primary-fixed uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">message</span> MESSAGE:
              </label>
              <div class="flex items-start gap-2">
                <span class="font-label-mono text-on-surface-variant mt-2">&gt;</span>
                <textarea
                  class="w-full bg-transparent border-2 border-outline-variant focus:border-primary-fixed outline-none text-primary font-body-md p-2 transition-colors placeholder:text-surface-bright resize-none disabled:opacity-50"
                  id="input-message"
                  placeholder="Initiate payload sequence..."
                  required
                  rows="4"
                  value={formdata.message}
                  onChange={(e) => setFormdata("message", e.target.value)}
                  disabled={isSubmitting()}
                ></textarea>
              </div>
            </div>

            <div class="mt-4 flex justify-end">
              <button
                class="group relative px-6 py-3 border-2 border-primary-fixed bg-surface-container font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest hover:bg-[#00ff00] hover:text-[#000000] hover:border-[#00ff00] transition-all duration-75 active:translate-y-0.5 active:translate-x-0.5 disabled:pointer-events-none"
                id="submit-btn"
                type="submit"
                disabled={isSubmitting()}
              >
                {isSubmitting() ? "[ TRANSMITTING... ]" : "[ SUBMIT_PAYLOAD ]"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Dynamic bottom console text */}
      <div class="w-full px-margin max-w-container-max mx-auto mt-auto">
        <div class="flex items-center gap-3 border-t-2 border-outline-variant pt-4 pb-2">
          <span class={`text-primary-fixed ${isSubmitting() ? 'animate-ping' : 'animate-pulse'}`}>_</span>
          <span class="font-label-mono text-sm text-on-surface-variant transition-colors">
            {consoleStatus()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
