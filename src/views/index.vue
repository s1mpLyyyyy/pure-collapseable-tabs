<template>
  <div
    id="CollapseableTabsLayout"
    class="flex flex-col justify-center items-center"
  >
    <div class="md:w-1/2 w-11/12 md:mt-48 mt-20">
      <collapseable-tab
        id="SingleTab"
        v-for="(article, index) in articles"
        :key="`${index}--INDEX__Article`"
        :article="article"
        class="mb-0.5"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CollapseableTab from "@/components/Tab.vue";
export default {
  name: "CollapseableTabsLayout",
  components: { CollapseableTab },
  data() {
    return {
      articles: [
        {
          id: "12222222222",
          name: "Lorem ipsum",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam?`,
        },
        {
          id: "2123123123",
          name: "Lorem ipsum",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam?`,
        },
        {
          id: "325234534",
          name: "Lorem ipsum",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam?`,
        },
        {
          id: "445645645",
          name: "Lorem ipsum",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            nobis. Iste voluptas alias temporibus sequi adipisci autem! Suscipit
            sunt qui officiis accusamus natus, ullam veritatis veniam quos vel
            similique quibusdam?`,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
