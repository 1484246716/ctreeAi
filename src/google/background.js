// 文本选择操作组扩展初始化
console.log('Vue3文本选择操作组扩展已加载');

// 扩展安装时的初始化
chrome.runtime.onInstalled.addListener(() => {
  console.log('Vue3文本选择操作组扩展已安装');
});

// 点击插件图标时打开侧边栏
chrome.action.onClicked.addListener(async (tab) => {
  try {
    // 直接尝试打开侧边栏，不需要额外的设置
    await chrome.sidePanel.open({ tabId: tab.id });
  } catch (error) {
    console.error('打开侧边栏失败:', error);
  }
});