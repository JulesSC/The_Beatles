import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline();

function flash1(){
    const tl = gsap.timeline();
    tl.to("#logo-2, #logo-3", {duration:0.0001, alpha: 0})
    .to("#background", {duration: 0.05, fill: "rgba(0, 0, 0, 1)", ease: "none", delay: .05}, "one")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none", delay: .05}, "one")
    .to("#logo-1", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", delay: .1, ease: "none"}, "one")
    .to("#logo-1", {duration: 0.0001, alpha: 0, ease: "none"})
    .to("#background", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", ease: "none", delay: .05}, "two")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(255, 255, 255, 1)", ease: "none", delay: .05}, "two")
    .to("#background", {duration: 0.05, fill: "rgba(0, 0, 0, 1)", ease: "none"}, "three")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none"}, "three")
    return tl;
}

function mask(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration:0.0001, fill: "rgba(0, 0, 0, 1)", alpha: 1})
    .to("#background", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", ease: "none"}, "four")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(255, 255, 255, 1)", ease: "none"}, "four")
    .from("#T", {duration: 0.5, y:"+=200", ease: "power3.out"}, "four")
    .from("#TH", {duration: 0.5, y:"-=200", ease: "power3.out"}, "four")
    .from("#THE_2", {duration: 0.5, y:"+=100", ease: "power3.out"}, "four")
    .from("#B", {duration: 0.5, y:"-=500", ease: "power3.out"}, "four")
    .from("#BE", {duration: 0.5, y:"+=300", ease: "power3.out"}, "four")
    .from("#BEA", {duration: 0.5, y:"+=500", ease: "power3.out"}, "four")
    .from("#BEAT", {duration: 0.5, y:"+=400", ease: "power3.out"}, "four")
    .from("#BEATL", {duration: 0.5, y:"-=400", ease: "power3.out"}, "four")
    .from("#BEATLE", {duration: 0.5, y:"-=500", ease: "power3.out"}, "four")
    .from("#BEATLES_2", {duration: 0.5, y:"+=300", ease: "power3.out"}, "four")
    return tl;
}

function split(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration:0.0001, alpha: 0}, "five")
    .to("#logo-1", {duration:0.0001, fill: "rgba(0, 0, 0, 1)", alpha: 1}, "five")
    .to("#T-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "five")
    .to("#B-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "five")
    .to("#BE-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "five")
    .to("#BEATLE-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "five")
    .to("#BEATLES_2-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "five")
    // two start times
    .to("#TH-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "six")
    .to("#THE_2-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "six")
    .to("#BEA-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "six")
    .to("#BEAT-1", {duration: 0.5, y:"+=450", ease: "power3.out"}, "six")
    .to("#BEATL-1", {duration: 0.5, y:"-=450", ease: "power3.out"}, "six")
    return tl;
}

function middle1(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration:0.0001, alpha: 1}, "nine")
    .to("#TH, #THE_2, #BEA, #BEAT, #BEATL", {duration:0.0001, alpha: 0}, "nine")
    // .to("#T, #B, #BE, #BEATLE, #BEATLES_2", {duration:0.0001, y:"-=550"}, "nine")

    // trying to bring letters into the clip path from above and below
    .from("#T", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "eight")
    .from("#B", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "eight")
    .from("#BE", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "eight")
    .from("#BEATLE", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "eight")
    .from("#BEATLES_2", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "eight")
    return tl;
}

function others(){
    const tl = gsap.timeline();
    tl.to("#logo-2, #logo-3", {duration:0.0001, alpha: 1, y:"-=450", x:"-=350"})
    // lower
    .from("#T-2", {duration: 0.5, y:"+=200", ease: "power3.out"}, "seven")
    .from("#TH-2", {duration: 0.5, y:"-=200", ease: "power3.out"}, "seven")
    .from("#THE-2", {duration: 0.5, y:"+=100", ease: "power3.out"}, "seven")
    .from("#BE-2", {duration: 0.5, y:"+=300", ease: "power3.out"}, "seven")
    .from("#BEATL-2", {duration: 0.5, y:"-=400", ease: "power3.out"}, "seven")
    .from("#BEATLE-2", {duration: 0.5, y:"-=500", ease: "power3.out"}, "seven")
    .from("#BEATLES-2", {duration: 0.5, y:"+=300", ease: "power3.out"}, "seven")
    // upper
    .from("#B-3", {duration: 0.5, y:"+=200", ease: "power3.out"}, "seven")
    .from("#BEA-3", {duration: 0.5, y:"-=200", ease: "power3.out"}, "seven")
    .from("#BEAT-3", {duration: 0.5, y:"+=100", ease: "power3.out"}, "seven")
    return tl;
}

function middle2(){
    const tl = gsap.timeline();
    tl.to("#TH, #THE_2, #BEA, #BEAT, #BEATL", {duration:0.0001, alpha: 1})

    // trying to bring letters into the clip path from above and below
    .from("#TH", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "ten")
    .from("#THE_2", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "ten")
    .from("#BEA", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "ten")
    .from("#BEAT", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "ten")
    .from("#BEATL", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "ten")
    return tl;
}

function flash2(){
    const tl = gsap.timeline();
    tl.to("#background", {duration: 0.05, fill: "rgba(0, 0, 0, 1)", ease: "none", delay: .1}, "eleven")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(0, 0, 0, 1)", ease: "none", delay: .1}, "eleven")
    .to("#logo-1, #LowerT-Inside, #UpperB-Inside, #logo", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", delay: .1, ease: "none"}, "eleven")
    .to("#background", {duration: 0.05, fill: "rgba(255, 255, 255, 1)", ease: "none"}, "twelve")
    .to("#preloader", {duration: 0.05, backgroundColor: "rgba(255, 255, 255, 1)", ease: "none"}, "twelve")
    .to("#logo-1, #LowerT-Inside, #UpperB-Inside, #logo", {duration: 0.05, fill: "rgba(0, 0, 0, 1)", delay: .1, ease: "none"}, "twelve")
    .to("#logo-1, #LowerT-Inside, #UpperB-Inside", {duration: 0.0001, alpha: 0, ease: "none"})
    return tl;
}

// need to switch logo to logo-1
function morph(){
    const tl = gsap.timeline();
    tl.to("#T-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#TH-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#THE_2-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#B-1", {duration: 0.0001, y:"-=450", ease: "power3.out"}, "thirteen")
    .to("#BE-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#BEA-1", {duration: 0.0001, y:"-=450", ease: "power3.out"}, "thirteen")
    .to("#BEAT-1", {duration: 0.0001, y:"-=450", ease: "power3.out"}, "thirteen")
    .to("#BEATL-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#BEATLE-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#BEATLES_2-1", {duration: 0.0001, y:"+=450", ease: "power3.out"}, "thirteen")
    .to("#logo", {duration:0.0001, alpha: 0}, "fourteen")
    .to("#logo-1", {duration:0.0001, alpha: 1}, "fourteen")
    .to("#logo-1", {duration:1, scaleX: 5, scaleY: 5, transformOrigin: "center bottom", ease: "power4.in", rotate: -75}, "fifteen")
    .to("#T-1", {duration: 1, ease: "power2.out", morphSVG:"#t-4", y:"-=250"}, "fifteen")
    .to("#TH-1", {duration: 1, ease: "power2.out", morphSVG:"#th-4", y:"-=250"}, "fifteen")
    .to("#THE_2-1", {duration: 1, ease: "power2.out", morphSVG:"#the-4", y:"-=250"}, "fifteen")
    .to("#B-1", {duration: 1, ease: "power2.out", morphSVG:"#b-4", y:"-=250"}, "fifteen")
    .to("#BE-1", {duration: 1, ease: "power2.out", morphSVG:"#be-4", y:"-=250"}, "fifteen")
    .to("#BEA-1", {duration: 1, ease: "power2.out", morphSVG:"#bea-4", y:"-=250"}, "fifteen")
    .to("#BEAT-1", {duration: 1, ease: "power2.out", morphSVG:"#beat-4", y:"-=250"}, "fifteen")
    .to("#BEATL-1", {duration: 1, ease: "power2.out", morphSVG:"#beatl-4", y:"-=250"}, "fifteen")
    .to("#BEATLE-1", {duration: 1, ease: "power2.out", morphSVG:"#beatle-4", y:"-=250"}, "fifteen")
    .to("#BEATLES_2-1", {duration: 1, ease: "power2.out", morphSVG:"#beatles-4", y:"-=250"}, "fifteen")
    .to("#background, #preloader", {duration: 0.5, fill: "rgba(0, 0, 0, 1)", backgroundColor: "rgba(0, 0, 0, 1)", ease: "power2.in"}, "-=0.5")
    return tl;
}

function final(){
    const tl = gsap.timeline();
    tl.to("#logo-1", {duration:0.0001, alpha: 0, delay: 0.5})
    .to("#logo", {duration:0.0001, fill: "rgba(255, 255, 255, 1)", alpha: 1})
    .from("#T", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#TH", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#THE_2", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#B", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#BE", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#BEA", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#BEAT", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#BEATL", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#BEATLE", {duration: 0.5, y:"-=500", ease: "power3.out", immediateRender: false}, "sixteen")
    .from("#BEATLES_2", {duration: 0.5, y:"+=300", ease: "power3.out", immediateRender: false}, "sixteen")
    return tl;
}

mainTL.add(flash1())
.add(mask())
.add(split())
.add(middle1(), "-=50%")
.add(others())
.add(middle2(), "-=50%")
.add(flash2())
.add(morph())
.add(final());

GSDevTools.create();
