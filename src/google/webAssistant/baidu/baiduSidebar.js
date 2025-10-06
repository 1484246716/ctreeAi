// 百度搜索页面侧边栏功能初始化
import { createApp } from 'vue'
import BaiduSidebar from './BaiduSidebar.vue'

// 初始化百度侧边栏功能
export function initBaiduSidebar() {
  // 首先检查当前是否为百度搜索页面
  if (!isBaiduSearchPage()) {
    console.log('当前不是百度搜索页面，不初始化侧边栏')
    return
  }

  console.log('检测到百度搜索页面，开始初始化侧边栏')
  console.log('当前URL:', window.location.href)
  
  // 创建Vue应用实例
  const app = createApp(BaiduSidebar)
  
  // 创建一个容器元素用于挂载侧边栏
  let sidebarContainer = null
  let vueAppInstance = null
  
  // 为了调试方便，将实例暴露到window对象
  window.ctreeAiBaiduSidebar = {
    app,
    createSidebar,
    updateSearchQuery,
    getSearchQuery,
    isBaiduSearchPage
  }
  
  // 创建并挂载侧边栏组件
  function createSidebar() {
    console.log('开始创建侧边栏组件')
    
    // 先移除已存在的侧边栏容器
    if (sidebarContainer) {
      try {
        const parent = sidebarContainer.parentNode
        if (parent) {
          console.log('移除已存在的侧边栏容器')
          parent.removeChild(sidebarContainer)
        }
      } catch (error) {
        console.warn('移除侧边栏容器时出错:', error)
      }
    }
    
    // 创建侧边栏容器
    sidebarContainer = document.createElement('div')
    sidebarContainer.id = 'ctree-ai-baidu-sidebar'
    
    // 设置样式，但不使用固定定位
    sidebarContainer.style.width = '100%'
    sidebarContainer.style.height = 'auto'
    sidebarContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
    sidebarContainer.style.border = '1px solid #ddd'
    sidebarContainer.style.borderRadius = '8px'
    sidebarContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
    sidebarContainer.style.display = 'block'
    sidebarContainer.style.marginBottom = '10px'
    
    // 尝试找到百度页面右侧的content_right div
    const contentRightDiv = document.getElementById('content_right')
    
    if (contentRightDiv) {
      console.log('找到content_right div，将侧边栏插入其中')
      contentRightDiv.insertBefore(sidebarContainer, contentRightDiv.firstChild)
    } else {
      console.log('未找到content_right div，使用默认方式添加到body')
      // 如果没找到，回退到原来的方式并添加固定定位
      sidebarContainer.style.position = 'fixed'
      sidebarContainer.style.right = '20px'
      sidebarContainer.style.top = '80px'
      sidebarContainer.style.width = '300px'
      sidebarContainer.style.zIndex = '9999'
      document.body.appendChild(sidebarContainer)
    }
    
    // 挂载Vue组件
    try {
      vueAppInstance = app.mount(sidebarContainer)
      console.log('百度侧边栏组件挂载成功', { vueAppInstance })
      
      // 强制显示侧边栏
      if (vueAppInstance) {
        vueAppInstance.visible = true
      }
      
      // 立即获取搜索框内容，不等待
      setTimeout(() => {
        updateSearchQuery()
        setupSearchBoxMonitor()
      }, 100)
    } catch (error) {
      console.error('百度侧边栏组件挂载失败:', error)
    }
  }
  
  // 获取百度搜索框内容
  function getSearchQuery() {
    // 百度搜索框的选择器
    const searchInput = document.getElementById('kw')
    if (searchInput) {
      return searchInput.value.trim()
    }
    return ''
  }
  
  // 更新侧边栏中的搜索查询
  function updateSearchQuery() {
    const query = getSearchQuery()
    console.log('获取到的搜索查询:', query || '无搜索内容')
    
    // 确保容器元素存在
    if (!sidebarContainer) {
      console.log('侧边栏容器不存在')
      return
    }
    
    // 尝试多种方式访问Vue实例
    let vm = null
    
    // 方法1: 直接使用保存的vueAppInstance
    if (vueAppInstance) {
      vm = vueAppInstance
      console.log('通过直接引用访问Vue实例')
    }
    // 方法2: 尝试通过容器元素访问
    else if (sidebarContainer.__vue_app__) {
      vm = sidebarContainer.__vue_app__._instance.proxy
      console.log('通过__vue_app__访问Vue实例')
    }
    // 方法3: 尝试通过容器的firstChild访问
    else if (sidebarContainer.firstChild && sidebarContainer.firstChild.__vueParentComponent__) {
      vm = sidebarContainer.firstChild.__vueParentComponent__.proxy
      console.log('通过firstChild访问Vue实例')
    }
    
    if (vm) {
      // 直接更新属性
      if (vm.updateSearchQuery) {
        vm.updateSearchQuery(query || '无搜索内容')
        console.log('通过updateSearchQuery方法更新搜索查询')
      } else if (vm.$refs && vm.$refs.sidebar) {
        vm.$refs.sidebar.searchQuery = query || '无搜索内容'
        vm.$refs.sidebar.visible = true
        console.log('通过$refs更新搜索查询')
      } else {
        // 作为最后的尝试，直接操作DOM显示容器
        sidebarContainer.style.display = 'block'
        console.log('直接设置DOM显示容器')
      }
    } else {
      console.warn('无法访问Vue实例，无法更新搜索查询')
      // 强制显示容器元素
      sidebarContainer.style.display = 'block'
    }
  }
  
  // 监听搜索框变化
  function setupSearchBoxMonitor() {
    const searchInput = document.getElementById('kw')
    if (searchInput) {
      // 监听输入变化
      searchInput.addEventListener('input', debounce(updateSearchQuery, 300))
      
      // 监听搜索按钮点击
      const searchButton = document.getElementById('su')
      if (searchButton) {
        searchButton.addEventListener('click', updateSearchQuery)
      }
      
      // 监听URL变化（百度搜索结果页会更新URL但不刷新页面）
      let currentUrl = window.location.href
      setInterval(() => {
        if (window.location.href !== currentUrl) {
          currentUrl = window.location.href
          updateSearchQuery()
        }
      }, 1000)
    }
  }
  
  // 检查是否为百度搜索页面
  function isBaiduSearchPage() {
    const isBaiduDomain = window.location.hostname.includes('baidu.com')
    const hasSearchForm = document.getElementById('form') !== null
    const hasSearchInput = document.getElementById('kw') !== null
    
    // 增强判断逻辑：
    // 1. 检查URL是否包含搜索参数wd=
    // 2. 或者检查路径是否为搜索结果页路径
    const urlHasSearchParam = window.location.href.includes('wd=')
    const isSearchResultPath = window.location.pathname.includes('s') || window.location.pathname.includes('search')
    
    console.log('百度页面检测结果:', {
      isBaiduDomain,
      hasSearchForm,
      hasSearchInput,
      urlHasSearchParam,
      isSearchResultPath,
      currentUrl: window.location.href
    })
    
    // 只有在百度域名下，有搜索表单和输入框，并且URL包含搜索参数或位于搜索结果路径时，才认为是百度搜索页面
    return isBaiduDomain && hasSearchForm && hasSearchInput && (urlHasSearchParam || isSearchResultPath)
  }
  
  // 防抖函数
  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  // 当页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSidebar)
  } else {
    createSidebar()
  }
}

// 导出初始化函数以便在其他地方调用
export default initBaiduSidebar