export const admin = [
    {
        path: "/admin/bill",
        name: "bill",
        component: () => import("@/pages/adminPages/bill/index.vue"),
        meta: {title: "账单", svgIcon: "Sidebar3", role: ["admin"], sidebarShow: true, alwaysShow: true},
    }
]
