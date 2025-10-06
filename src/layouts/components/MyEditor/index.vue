<template>
  <div >
    <Toolbar
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="'default'"
    />
    <Editor
        style=" overflow-y: hidden"
        :style="{height:editorHeight+'px'}"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="'default'"
        @onChange="handleChange"
        @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

defineOptions({ name: "MyEditor" });

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const props=defineProps({
  editorHeight:{
    type:String,
    default:''
  }
})
// 内容 HTML
const valueHtml = ref("<p>hello</p>");

const emits = defineEmits(["change"]);



// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
});

const toolbarConfig: Partial<IToolbarConfig> = {
  toolbarKeys: [
    'bold',          // 加粗
    'italic',        // 斜体
    'underline',        // 下划线
    '|',             // 分隔线
    'headerSelect', //标题选择
    'codeBlock',//代码块
    'blockquote',//'引用块'
    'bulletedList',//无序列表
    'numberedList',//有序列表
    'uploadImage',   // 上传图片
    'insertLink',    // 插入链接
    'undo',          // 撤销
    'redo',          // 重做
  ]
}
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

// 编辑器创建完毕时的回调函数
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
  const allMenuKeys = editor.getAllMenuKeys() // 获取所有菜单项 Key
  console.log('当前版本所有菜单项:', allMenuKeys)
};

// 编辑器 Change 时的回调函数
const handleChange = (editor: any) => {
  const data = {
    html: editor.getHtml() == "<p><br></p>" ? "" : editor.getHtml(),
    text: editor.getText(),
  };
  console.log(data);

  emits("change", data);
};
</script>
<style scoped lang="scss">

:deep(.w-e-bar){
  background:var(--wangEditor-bg-color) !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden !important;
  border: 0.5px solid var(--app-border-color);
}
:deep(.w-e-menu-tooltip-v5){
  color:var(--wangEditor-ben-text-color) !important;
  svg{
    color:var(--wangEditor-ben-text-color) !important;
  }

}
:deep(.w-e-text-container){
  background: transparent !important;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: 0.5px solid var(--app-border-color);
  border-left: 0.5px solid var(--app-border-color);
  border-bottom: 0.5px solid var(--app-border-color);
}
:deep(.w-e-bar-divider){
  display: none !important;
}

</style>
