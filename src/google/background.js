// 文本选择操作组扩展初始化
console.log('Vue3文本选择操作组扩展已加载');

// 扩展安装时的初始化
chrome.runtime.onInstalled.addListener(() => {
  console.log('Vue3文本选择操作组扩展已安装');
});

// 侧边栏状态管理（每个tab单独管理状态）
const sidebarState = new Map();

// 点击插件图标时打开侧边栏
chrome.action.onClicked.addListener(async (tab) => {
  try {
    console.log('点击图标，准备打开侧边栏，tabId:', tab.id);
    await openSidebarForTab(tab.id);
    console.log('点击图标打开侧边栏成功');
  } catch (error) {
    console.error('点击图标打开侧边栏失败:', error);
  }
});

// 统一的消息监听器
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('background.js收到消息:', message, '来源:', sender);
  
  // 确保sender.tab存在
  if (!sender.tab) {
    console.error('消息发送者没有有效的tab信息');
    sendResponse({ success: false, error: '没有有效的tab信息' });
    return true;
  }
  
  const tabId = sender.tab.id;
  
  // 处理打开侧边栏请求
  if (message.action === 'openSidebar') {
    console.log('收到打开侧边栏请求:', tabId);
    
    openSidebarForTab(tabId)
      .then(() => {
        console.log('打开侧边栏成功，准备发送响应');
        sendResponse({ success: true });
      })
      .catch(error => {
        console.error('打开侧边栏失败:', error);
        sendResponse({ success: false, error: error.message });
      });
    
    return true; // 表示异步响应
  }
  
  // 处理关闭侧边栏请求
  if (message.action === 'closeSidebar') {
    console.log('收到关闭侧边栏请求，tabId:', tabId);
    
    closeSidebarForTab(tabId)
      .then(() => {
        console.log('关闭侧边栏成功，准备发送响应');
        sendResponse({ success: true });
      })
      .catch(error => {
        console.error('关闭侧边栏失败:', error);
        sendResponse({ success: false, error: error.message });
      });
    
    return true; // 表示异步响应
  }
  
  // 处理未知消息类型
  console.warn('收到未知消息类型:', message.action);
  sendResponse({ success: false, error: '未知的消息类型' });
  return true;
});

// 为指定标签页打开侧边栏的工具函数
async function openSidebarForTab(tabId) {
  try {
    console.log(`开始处理tab ${tabId} 的打开侧边栏请求`);
    
    // 确保为这个tabId初始化状态
    if (!sidebarState.has(tabId)) {
      console.log(`为tab ${tabId} 初始化侧边栏状态`);
      sidebarState.set(tabId, false);
    }
    
    // 1. 先尝试直接打开侧边栏（这是最直接的方法）
    try {
      console.log(`尝试直接打开tab ${tabId} 的侧边栏`);
      await chrome.sidePanel.open({ tabId });
      sidebarState.set(tabId, true);
      console.log(`成功打开tab ${tabId} 的侧边栏`);
      return;
    } catch (directOpenError) {
      console.warn('直接打开侧边栏失败，尝试启用后再打开:', directOpenError);
      
      // 2. 尝试先启用侧边栏
      try {
        console.log(`尝试启用tab ${tabId} 的侧边栏`);
        await chrome.sidePanel.setOptions({
          tabId: tabId,
          enabled: true,
          path: 'index.html'
        });
        console.log(`已启用tab ${tabId} 的侧边栏`);
        
        // 启用后再次尝试打开
        console.log(`启用后尝试打开tab ${tabId} 的侧边栏`);
        await chrome.sidePanel.open({ tabId });
        sidebarState.set(tabId, true);
        console.log(`启用后成功打开tab ${tabId} 的侧边栏`);
        return;
      } catch (enableError) {
        console.warn('启用并打开侧边栏失败，尝试全局设置:', enableError);
        
        // 3. 最后尝试全局设置（不指定tabId）
        try {
          console.log(`尝试全局设置侧边栏`);
          await chrome.sidePanel.setOptions({
            enabled: true,
            path: 'index.html'
          });
          
          // 再次尝试打开
          console.log(`全局设置后尝试打开tab ${tabId} 的侧边栏`);
          await chrome.sidePanel.open({ tabId });
          sidebarState.set(tabId, true);
          console.log(`全局设置后成功打开tab ${tabId} 的侧边栏`);
          return;
        } catch (globalError) {
          console.error('所有打开侧边栏的方法都失败了:', globalError);
          throw new Error(`无法打开侧边栏: ${globalError.message}`);
        }
      }
    }
  } catch (error) {
    console.error(`处理tab ${tabId} 的打开侧边栏请求时发生错误:`, error);
    throw error;
  }
}

// 为指定标签页关闭侧边栏的工具函数
async function closeSidebarForTab(tabId) {
  try {
    console.log(`开始处理tab ${tabId} 的关闭侧边栏请求`);
    
    // 确保为这个tabId初始化状态
    if (!sidebarState.has(tabId)) {
      console.log(`为tab ${tabId} 初始化侧边栏状态为关闭`);
      sidebarState.set(tabId, false);
      return; // 如果状态未初始化，认为侧边栏已经关闭
    }

    // 记录当前状态
    const currentState = sidebarState.get(tabId);
    console.log(`关闭侧边栏前的状态 - tab ${tabId}:`, currentState);

    // 先尝试强制更新状态为false
    sidebarState.set(tabId, false);
    console.log(`已先将tab ${tabId} 的侧边栏状态更新为关闭`);

    // 方法1: 尝试直接使用close方法（Chrome 116+支持）
    if (chrome.sidePanel && chrome.sidePanel.close) {
      try {
        console.log(`尝试直接关闭tab ${tabId} 的侧边栏`);
        await chrome.sidePanel.close({ tabId });
        console.log(`成功通过close()方法关闭tab ${tabId} 的侧边栏`);
        // 即使close成功，也执行reset以确保状态完全一致
        setTimeout(() => resetSidebarState(tabId), 200);
        return;
      } catch (closeError) {
        console.warn(`chrome.sidePanel.close()方法失败，尝试备用方法:`, closeError);
      }
    }

    // 方法2: 尝试使用setOptions禁用侧边栏
    try {
      console.log(`尝试通过禁用方法关闭tab ${tabId} 的侧边栏`);
      // 首先禁用侧边栏以关闭它
      await chrome.sidePanel.setOptions({ tabId: tabId, enabled: false });
      console.log(`已通过禁用方法关闭tab ${tabId} 的侧边栏`);

      // 方法3: 立即重新启用侧边栏，确保下次可以正常打开
      setTimeout(() => resetSidebarState(tabId), 200);
    } catch (disableError) {
      console.error(`关闭并重置tab ${tabId} 的侧边栏状态失败:`, disableError);
      // 即使失败，也更新状态，以便下次尝试可以继续
      sidebarState.set(tabId, false);
      // 尝试最后的备用方案：全局重置
      setTimeout(() => globalResetSidebar(), 300);
      throw new Error(`无法关闭侧边栏: ${disableError.message}`);
    }
  } catch (error) {
    console.error(`处理tab ${tabId} 的关闭侧边栏请求时发生错误:`, error);
    // 确保状态为关闭
    sidebarState.set(tabId, false);
    throw error;
  }
}

// 重置侧边栏状态的辅助函数
function resetSidebarState(tabId) {
  try {
    console.log(`尝试重置tab ${tabId} 的侧边栏状态`);
    chrome.sidePanel.setOptions({
      tabId: tabId,
      enabled: true,
      path: 'index.html'
    });
    console.log(`已重置tab ${tabId} 的侧边栏状态，现在可以再次打开`);
  } catch (resetError) {
    console.error(`重置tab ${tabId} 的侧边栏状态失败，但不影响功能:`, resetError);
  }
}

// 全局重置侧边栏状态的函数
function globalResetSidebar() {
  try {
    console.log(`尝试全局重置侧边栏状态`);
    chrome.sidePanel.setOptions({
      enabled: true,
      path: 'index.html'
    });
    console.log(`已全局重置侧边栏状态`);
  } catch (globalResetError) {
    console.error(`全局重置侧边栏状态失败:`, globalResetError);
  }
}