export const sidebarRouter = [
    {
        path: "/Chat",
        component: () => import("@/pages/sidebarPages/Chat/index.vue"),
        meta: { title: "聊天", svgIcon: "Sidebar6", roles: ["default","admin"], sidebarShow:true }
    },
    {
        path: "/Writing",
        component: () => import("@/pages/sidebarPages/Writing/index.vue"),
        meta: { title: "写作", svgIcon: "Sidebar6", roles: ["default","admin"], sidebarShow:true }
    }
]