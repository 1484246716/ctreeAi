import { onMounted, onUnmounted, ref } from "vue";
function useWindowResize() {
    const width = ref(0);
    const windowSize=ref('');
    function onResize() {
        // width.value = window.innerWidth;
        if (window.innerWidth > 1200) {
            windowSize.value='pc';
        } else if (window.innerWidth > 750) {
            windowSize.value= 'pad';
        } else {
            windowSize.value= 'mobile';
        }
    }
    onMounted(() => {
        window.addEventListener("resize", onResize);
        onResize();
    });
    onUnmounted(() => {
        window.removeEventListener("resize", onResize);
    });
    return {
        windowSize
    };
}
export default useWindowResize;