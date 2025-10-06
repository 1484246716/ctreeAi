export const settingsRouter = [
    {
        path: "/general",
        component: () => import("@/pages/settingsPages/general/index.vue"),
        meta: { title: "通用设置", svgIcon: "Sidebar6", roles: ["default","admin","settings"], sidebarShow:true }
    },
    {
        path: "/sidebar",
        component: () => import("@/pages/settingsPages/sidebar/index.vue"),
        meta: { title: "侧边栏", svgIcon: "Sidebar6", roles: ["default","admin","settings"], sidebarShow:true }
    }
]