import { ref, onMounted, onUnmounted } from "vue";

export function useMediaQuery() {
  const isMobile = ref(window.innerWidth < 768);

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
  });

  return { isMobile };
}
