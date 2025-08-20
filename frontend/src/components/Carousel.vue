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
    <transition name="carousel-fade" mode="out-in">
      <div
        :key="currentIndex"
        class="carousel-item"
        ref="itemsRefs"
      >
        <slot :item="items[currentIndex]"></slot>
      </div>
    </transition>
    <button @click="prev" :disabled="currentIndex === 0">Previous</button>
    <button @click="next" :disabled="currentIndex === items.length - 1">
      Next
    </button>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 95%;
  margin: 0 auto;
  overflow: visible;
  transition: height 0.5s ease;
}

.carousel-item {
  width: 100%;
}

/* Fade transition animations */
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.carousel-fade-enter-from {
  opacity: 0;
}

.carousel-fade-leave-to {
  opacity: 0;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0.7;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:first-of-type {
  left: 10px;
}

button:last-of-type {
  right: 10px;
}

button:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
}

button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
