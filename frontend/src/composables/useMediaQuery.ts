import { ref, onMounted, onUnmounted } from "vue";

export function useMediaQuery() {
  console.log("useMediaQuery: Initializing");
  const isMobile = ref(window.innerWidth < 768);
  console.log("useMediaQuery: isMobile initial value:", isMobile.value);

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
    console.log("useMediaQuery: checkMobile updated isMobile:", isMobile.value);
  };

  onMounted(() => {
    console.log("useMediaQuery: Mounted");
    checkMobile();
    window.addEventListener("resize", checkMobile);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
  });

  return { isMobile };
}
