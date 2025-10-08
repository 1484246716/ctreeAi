/** 设备类型 */
export enum DeviceEnum {
  Mobile,
  Desktop
}

/** 布局模式 */
export enum LayoutModeEnum {
  Left = "left",//默认侧边栏显示模式
  Right= "right",//侧边栏全屏显示模式
  Top = "top",//展示显示模式
  LeftTop = "left-top",//暂无
  SettingsLeft = "Settings-left",//功能设置显示模式
  AgentsLeft = "Agents-left",//Agents显示模式
  isImage = "Image-left",//绘画大师显示模式
}

/** 侧边栏打开状态常量 */
export const SIDEBAR_OPENED = "opened"

/** 侧边栏关闭状态常量 */
export const SIDEBAR_CLOSED = "closed"

export type SidebarOpened = typeof SIDEBAR_OPENED

export type SidebarClosed = typeof SIDEBAR_CLOSED
