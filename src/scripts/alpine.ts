import persist from "@alpinejs/persist";
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.plugin(persist);
Alpine.start();
