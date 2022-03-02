<script setup lang="ts">
// import { ref, toRefs } from "vue";

// interface Props {
//   modelValue?: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//   modelValue: "",
// });

// const { modelValue } = toRefs(props);

// const emit = defineEmits(["update:modelValue"]);

// const value = ref("");
</script>

<template>
  <nuxt-link
    class="hover:text-primary-500 block sm:inline-flex sm:items-end font-extralight dark:text-gray-300 dark:hover:text-orange-400 text-xl"
    exact-active-class="dark:text-orange-600 text-primary-500 font-extralight text-xl"
    v-bind="$attrs"
  >
    <slot />
  </nuxt-link>
</template>

<style scoped></style>
