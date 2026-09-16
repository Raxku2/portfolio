import { portfolioInfo } from "../../stores";
function ProfileCard() {
  return (
    <div class="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
      <div class="border-2 border-secondary bg-surface-container shadow-[8px_8px_0px_0px_#00fbfb] transition-transform ">
        <div class="bg-secondary text-surface py-2 px-4 font-label-mono font-bold flex justify-between items-center uppercase">
          <span>Profile_Render.exe</span>
          <div class="flex gap-2">
            <span class="w-3 h-3 border border-surface block"></span>
            <span class="w-3 h-3 border border-surface block"></span>
            <span class="w-3 h-3 bg-surface block"></span>
          </div>
        </div>

        <div class="p-4 border-b-2 border-secondary relative overflow-hidden bg-surface-container-lowest">
          <div class="absolute inset-0 bg-[linear-gradient(rgba(0,251,251,0.1)_1px,transparent_1px)] bg-size-[100%_4px] pointer-events-none z-10"></div>
          <img
            class="w-full aspect-square object-cover contrast-125 grayscale hover:grayscale-0 transition-all duration-500 z-0 relative"
            src={portfolioInfo().dp}
          />
        </div>

        <div class="p-4 font-label-mono text-on-surface-variant flex flex-col gap-3 uppercase">
          <div class="flex justify-between border-b-2 border-surface-variant pb-2">
            <span>USR_NAME:</span>
            <span class="text-primary-fixed">{portfolioInfo().name}</span>
          </div>
          <div class="flex justify-between border-b-2 border-surface-variant pb-2">
            <span>Role:</span>
            <span class="text-primary-fixed">{portfolioInfo().role}</span>
          </div>
          <div class="flex justify-between border-b-2 border-surface-variant pb-2">
            <span>UPTIME:</span>
            <span class="text-primary-fixed">{portfolioInfo().uptime}</span>
          </div>
          <div class="mt-2">
            <div class="flex justify-between mb-1">
              <span>ENERGY_LEVEL</span>
              <span class="text-primary-fixed">{portfolioInfo().energy_level}</span>
            </div>
            <div class="w-full h-4 border border-secondary p-0.5">
              <div class="h-full bg-primary-fixed w-[95%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
