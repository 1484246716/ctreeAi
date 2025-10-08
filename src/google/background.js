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
    console.log('点击图标打开侧边栏')

  } catch (error) {
    console.error('打开侧边栏失败:', error);
  }
});

// 监听来自content script的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 处理打开侧边栏请求
  if (message.action === 'openSidebar' && sender.tab) {
    console.log('收到打开侧边栏请求:', sender.tab.id);
    
    // 尝试打开侧边栏
    chrome.sidePanel.open({ tabId: sender.tab.id }).then(() => {
      console.log('成功打开侧边栏');
      sendResponse({ success: true });
    }).catch(error => {
      console.error('打开侧边栏失败:', error);
      sendResponse({ success: false, error: error.message });
    });
    
    return true; // 表示异步响应
  }
  
  // 处理关闭侧边栏请求
  if(message.action === 'closeSidebar'){
    console.log('收到关闭侧边栏请求，action:', message.action);
    console.log('sender.tab信息:', sender.tab);
  }
  
  if (message.action === 'closeSidebar' && sender.tab) {
    console.log('准备关闭侧边栏，tabId:', sender.tab.id);
    
    try {
      // 使用更可靠的关闭策略：直接调用chrome.sidePanel.close()方法（如果可用）
      if (chrome.sidePanel && chrome.sidePanel.close) {
        console.log('使用chrome.sidePanel.close()方法关闭侧边栏');
        chrome.sidePanel.close({ tabId: sender.tab.id }).then(() => {
          console.log('成功通过close()方法关闭侧边栏');
          sendResponse({ success: true });
        }).catch(closeError => {
          console.warn('chrome.sidePanel.close()方法失败，尝试备用方法:', closeError);
          // 备用方法：先禁用，然后重置
          fallbackCloseMethod(sender.tab.id, sendResponse);
        });
      } else {
        // 如果close()方法不可用，使用备用方法
        console.log('chrome.sidePanel.close()方法不可用，使用备用方法');
        fallbackCloseMethod(sender.tab.id, sendResponse);
      }
    } catch (outerError) {
      console.error('处理关闭侧边栏请求时发生未捕获错误:', outerError);
      sendResponse({ success: false, error: outerError.message });
    }
    
    return true; // 表示异步响应
  }
  
  // 备用关闭方法
  function fallbackCloseMethod(tabId, sendResponse) {
    try {
      // 首先禁用侧边栏以关闭它
      chrome.sidePanel.setOptions({ tabId: tabId, enabled: false }).then(() => {
        console.log('已通过禁用方法关闭侧边栏');
        
        // 然后立即重新启用，但不打开它，确保下次可以正常打开
        setTimeout(() => {
          chrome.sidePanel.setOptions({ tabId: tabId, enabled: true }).then(() => {
            console.log('已重置侧边栏状态');
            sendResponse({ success: true });
          }).catch(err => {
            console.error('重置侧边栏状态失败:', err);
            sendResponse({ success: false, error: err.message });
          });
        }, 100);
      }).catch(error => {
        console.error('禁用侧边栏失败:', error);
        sendResponse({ success: false, error: error.message });
      });
    } catch (error) {
      console.error('备用关闭方法执行失败:', error);
      sendResponse({ success: false, error: error.message });
    }
  }
});