import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EasePack } from "gsap/EasePack"



gsap.registerPlugin(Draggable, ScrollToPlugin, TextPlugin, ScrollTrigger, gsap, EasePack);

export { gsap, Draggable, ScrollToPlugin, ScrollTrigger, EasePack, TextPlugin };
