<template>
  <transition appear>
    <div class="container mission-grid">
      <span class="mission-block">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
        consequatur beatae deserunt delectus exercitationem repudiandae,
        perferendis.
      </span>
      <span class="mission-img">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
        consequatur beatae deserunt delectus exercitationem repudiandae,
        perferendis.
      </span>
      <span class="secret-weapon-img">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
        consequatur beatae deserunt delectus exercitationem repudiandae,
        perferendis.
      </span>
      <span class="secret-weapon-block">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
        consequatur beatae deserunt delectus exercitationem repudiandae,
        perferendis.
      </span>
    </div>
  </transition>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      t1: undefined,
    };
  },
  mounted() {
    this.t1 = gsap
      .timeline()
      .from(".mission-block", {
        y: -100,
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        ".secret-weapon-block",
        { y: 100, scale: 0.9, opacity: 0, duration: 0.5 },
        "<"
      )
      .from(
        ".mission-img",
        { x: 100, scale: 0.9, opacity: 0, duration: 0.5, delay: 0.3 },
        "<"
      )
      .from(
        ".secret-weapon-img",
        {
          x: -100,
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
        },
        "<"
      );

    ScrollTrigger.create({
      id: "trigger1",
      animation: this.t1,
      trigger: ".mission-grid",
      start: ".mission-grid top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    });
  },
  unmounted() {
    ScrollTrigger.getById("trigger1").kill(true);
    this.t1.pause(0).kill(true);
  },
};
</script>

<style scoped>
.mission-grid {
  gap: 0em 3em;
}
.mission-block,
.mission-img,
.secret-weapon-block,
.secret-weapon-img {
  width: 34%;
  padding: 0 6em;
}
span {
  font-size: 1.4rem;
}
</style>
