vue Collapse Wrap Copy
<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from "vue";

const props = defineProps<{
  items: any[];
}>();

const currentIndex = ref(0);
const container = ref<HTMLElement | null>(null);
const itemsRefs = ref<HTMLElement[]>([]);

const updateContainerHeight = async () => {
  await nextTick();
  if (itemsRefs.value[currentIndex.value] && container.value) {
    const height = itemsRefs.value[currentIndex.value].offsetHeight;
    container.value.style.height = `${height}px`;
  }
};

watch(currentIndex, updateContainerHeight);

onMounted(updateContainerHeight);

const prev = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const next = () => {
  if (currentIndex.value < props.items.length - 1) currentIndex.value++;
};
</script>

<template>
  <div class="carousel-container" ref="container">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="carousel-item"
      ref="itemsRefs"
      :style="{
        left:
          index === currentIndex
            ? '0'
            : index < currentIndex
            ? '-100%'
            : '100%',
        transition: 'left 0.5s ease',
      }"
    >
      <slot :item="item"></slot>
    </div>
    <button @click="prev" :disabled="currentIndex === 0">Previous</button>
    <button @click="next" :disabled="currentIndex === items.length - 1">
      Next
    </button>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 85vw;
  margin: 0;
  overflow: hidden;
  transition: height 0.5s ease;
  z-index: 0;
}

.carousel-item {
  position: absolute;
  top: 0;
  width: 100%;
  transition: left 0.5s ease;
  z-index: 0;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0.15;
  z-index: 0;
}

button:first-of-type {
  left: 10px;
}

button:last-of-type {
  right: 10px;
}

button:hover {
  opacity: 0.75;
}

button:disabled {
  opacity: 0.05;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .carousel-container {
    width: 40vw;
  }
}
</style>
