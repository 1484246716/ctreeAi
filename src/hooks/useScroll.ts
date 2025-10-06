import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "lodash";

/**
 * 自定义 Hook，用于监听页面滚动距离。
 * @returns {object} scrollY 当前页面的垂直滚动距离
 */
export default function useScroll() {
    const scrollY = ref(0);
    // 使用 lodash 的 throttle，每 100ms 更新一次
    const updateScroll = throttle(() => {
        scrollY.value = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollY.value)
    }, 100);

    onMounted(() => {
        window.addEventListener("scroll", updateScroll,true);
        updateScroll(); // 初始化调用一次，获取初始值
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", updateScroll);
    });

    return {
        scrollY,
    };
}
