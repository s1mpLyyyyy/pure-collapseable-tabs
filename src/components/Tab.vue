<template>
  <div id="SingleCollapseableTabLayout">
    <div
      class="w-full flex justify-between items-center transition duration-500 ease-in-out px-8 cursor-pointer"
      :class="
        currentId === article.id
          ? 'bg-custom-200 text-custom-400'
          : 'bg-custom-100 text-custom-300'
      "
      @click="toggleTab(article.id)"
    >
      <h1 class="lg:text-3xl md:text-2xl text-lg font-medium select-none py-8">
        {{ article.name }}
      </h1>
      <div>
        <img
          src="@/static/arrow.png"
          class="transform select-none duration-300"
          :class="currentId === article.id ? 'rotate-180 ' : 'rotate-0'"
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
      this.currentId = this.currentId === id ? 0 : id;
    },
  },
};
</script>

<style></style>
