import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline();

function flash(){
    const tl = gsap.timeline();
    tl.to("#background", {duration: 0.05, fill: "rgba(0, 0, 0, 1)", ease: "none", delay: .1}, "one")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none", delay: .1}, "one")
    .to("#logo-1", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", delay: .1, ease: "none"}, "one")
    .to("#logo-1", {duration: 0.05, alpha: 0, ease: "none"})
    .to("#background", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", ease: "none"}, "two")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(255, 255, 255, 1)", ease: "none"}, "two")
    .to("#background", {duration: 0.05, fill: "rgba(0, 0, 0, 1)", ease: "none"}, "three")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none"}, "three")
    return tl;
}

function mask(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration:0.0001, fill: "rgba(0, 0, 0, 1)", alpha: 1})
    .to("#background", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", ease: "none"}, "one")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(255, 255, 255, 1)", ease: "none"}, "one")
    .from("#T", {duration: 0.5, y:"+=200", ease: "power3.out"}, "one")
    .from("#TH", {duration: 0.5, y:"-=200", ease: "power3.out"}, "one")
    .from("#THE_2", {duration: 0.5, y:"+=100", ease: "power3.out"}, "one")
    .from("#B", {duration: 0.5, y:"-=500", ease: "power3.out"}, "one")
    .from("#BE", {duration: 0.5, y:"+=300", ease: "power3.out"}, "one")
    .from("#BEA", {duration: 0.5, y:"+=500", ease: "power3.out"}, "one")
    .from("#BEAT", {duration: 0.5, y:"+=400", ease: "power3.out"}, "one")
    .from("#BEATL", {duration: 0.5, y:"-=400", ease: "power3.out"}, "one")
    .from("#BEATLE", {duration: 0.5, y:"-=500", ease: "power3.out"}, "one")
    .from("#BEATLES_2", {duration: 0.5, y:"+=300", ease: "power3.out"}, "one")
    return tl;
}

function split(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration:0.0001, alpha: 0}, "one")
    .to("#logo-1", {duration:0.0001, fill: "rgba(0, 0, 0, 1)", alpha: 1}, "one")
    .to("#T-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    // .to("#TH-1", {duration: 0.5, y:"+=200", ease: "power3.out"}, "one")
    // .to("#THE_2-1", {duration: 0.5, y:"-=100", ease: "power3.out"}, "one")
    .to("#B-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "one")
    .to("#BE-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    // .to("#BEA-1", {duration: 0.5, y:"-=500", ease: "power3.out"}, "one")
    // .to("#BEAT-1", {duration: 0.5, y:"-=400", ease: "power3.out"}, "one")
    // .to("#BEATL-1", {duration: 0.5, y:"+=400", ease: "power3.out"}, "one")
    .to("#BEATLE-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "one")
    .to("#BEATLES_2-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    // .from("#logo", {duration:0.0001, alpha: 0});
    return tl;
}

function middle(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration:0.0001, alpha: 0}, "one")
    .to("#logo-1", {duration:0.0001, fill: "rgba(0, 0, 0, 1)", alpha: 1}, "one")
    // .to("#T-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    .to("#TH-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "one")
    .to("#THE_2-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    // .to("#B-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "one")
    // .to("#BE-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    .to("#BEA-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    .to("#BEAT-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    .to("#BEATL-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "one")
    // .to("#BEATLE-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "one")
    // .to("#BEATLES_2-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "one")
    // .from("#logo", {duration:0.0001, alpha: 0});
    return tl;
}

mainTL.add(flash())
.add(mask())
.add(split())
.add(middle(), "-=75%");

GSDevTools.create();
