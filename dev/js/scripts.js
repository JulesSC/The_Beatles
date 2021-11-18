import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline();

function flash(){
    const tl = gsap.timeline();
    tl.to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none", delay: .1}, "one");
    tl.to("#logo", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", delay: .1, ease: "none"}, "one");
    tl.to("#logo", {duration: 0.05, alpha: 0, ease: "none"});
    tl.to("#preloader", {duration: 0.05, backgroundColor: "rgba(255, 255, 255, 1)", ease: "none"});
    tl.to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none"});
    return tl;
}

mainTL.add(flash());
// .add(stepTwo(), "-=0.15");

GSDevTools.create();
