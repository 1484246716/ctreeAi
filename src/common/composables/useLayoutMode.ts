import { LayoutModeEnum } from "@@/constants/app-key"
import { useSettingsStore } from "@/pinia/stores/settings"

const settingsStore = useSettingsStore()

const isLeft = computed(() => settingsStore.layoutMode === LayoutModeEnum.Left)
const isRight = computed(() => settingsStore.layoutMode === LayoutModeEnum.Right)

const isTop = computed(() => settingsStore.layoutMode === LayoutModeEnum.Top)

const isLeftTop = computed(() => settingsStore.layoutMode === LayoutModeEnum.LeftTop)
const isSettings = computed(() => settingsStore.layoutMode === LayoutModeEnum.SettingsLeft)

function setLayoutMode(mode: LayoutModeEnum) {
  settingsStore.layoutMode = mode
}

/** 布局模式 Composable */
export function useLayoutMode() {
  return { isLeft,isRight, isTop, isLeftTop,isSettings, setLayoutMode }
}
