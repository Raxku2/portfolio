import { Panel } from "../../pages/dashboard/ui";

function UnderDev() {

    return (
        <Panel title="[ Feature in Development ]" meta="build in progress" >
            <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs flex items-center ">
                <span class="material-symbols-outlined text-yellow-500 text-6xl!">
                    warning
                </span>
                <h1 class="pl-4 text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
                    We are putting the final touches on this page. Hang tight, this feature will be live before GTA 6 !
                </h1>
            </div>
        </Panel>
    );
}
export default UnderDev;