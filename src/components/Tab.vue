<template>
  <div id="SingleCollapseableTabLayout">
    <div
      :class="`
              w-full
              flex
              justify-between
              items-center
              transition
              duration-500
              ease-in-out
              ${
                currentId === article.id
                  ? 'bg-custom-200 text-custom-400'
                  : 'bg-custom-100 text-custom-300'
              }
              px-8
              cursor-pointer`"
      @click="toggleTab(article.id)"
    >
      <h1 class="lg:text-3xl md:text-2xl text-lg font-medium select-none py-8">
        {{ article.name }}
      </h1>
      <div>
        <img
          src="@/static/arrow.png"
          :class="`transform select-none ${
            currentId === article.id
              ? 'rotate-180 duration-300'
              : 'rotate-0 duration-300'
          }`"
          alt="collapseable-arrow"
        />
      </div>
    </div>
    <transition class="fadeHeight" mode="in-out">
      <div v-if="currentId === article.id" class="h-auto w-full bg-custom-200">
        <div class="py-10 px-10" v-html="article.description"></div></div
    ></transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "SingleCollapseableTabLayout",
  props: {
    article: {
      type: Object,
    },
    action: {
      type: Function,
    },
  },
  data() {
    return {
      currentId: 0,
    };
  },
  methods: {
    toggleTab(id) {
      this.currentId === id ? (this.currentId = 0) : (this.currentId = id);
    },
  },
};
</script>

<style></style>
