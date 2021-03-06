import "raf/polyfill";
import "./mutationObserver.mock";
import "./canvas.mock";

function addListenerFun() {
    return {
        matches: false,
        addListener: () => {},
        removeListener: () => {},
        media: "",
    };
}

const value = navigator.userAgent || "Chrome";
Object.defineProperty(window.navigator, "userAgent", { value, configurable: true, writable: true });

window.matchMedia = window.matchMedia || addListenerFun;
