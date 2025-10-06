export const admin = [
    {
        path: "/admin/dashboard",
        name:"dashboard",
        component: () => import("@/pages/adminPages/dashboard/index.vue"),
        meta: { title: "账户", svgIcon: "Sidebar2", role: ["admin"] },
        redirect: "/admin/dashboard/generalSettings",
        children: [
            {
                path: "/admin/dashboard/personalInfor",
                component: () => import("@/pages/adminPages/dashboard/personalInfor/index.vue"),
                name: "personalInfor",
                meta: {
                    title: "个人信息",
                    keepAlive: true,
                    role: ["admin"],
                    svgIcon: "Sidebar6",
                },
            },
            {
                path: "/admin/dashboard/generalSettings",
                component: () => import("@/pages/adminPages/dashboard/generalSettings/index.vue"),
                name: "generalSettings",
                redirect: "/admin/dashboard/generalSettings/directoryHomepage",
                meta: {
                    title: "通用设置",
                    keepAlive: true,
                    role: ["admin"],
                    svgIcon: "Sidebar7",
                },
                children: [
                    {
                        path: "/admin/dashboard/generalSettings/directoryHomepage",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/directoryHomepage/index.vue"),
                        name: "directoryHomepage",
                        meta: {
                            title: "目录主页",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar19",
                        }
                    },{
                        path: "/admin/dashboard/generalSettings/list",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/list/index.vue"),
                        name: "list",
                        meta: {
                            title: "列表",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar20",
                        }
                    },{
                        path: "/admin/dashboard/generalSettings/categorySettings",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/categorySettings/index.vue"),
                        name: "categorySettings",
                        meta: {
                            title: "分类设置",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar21",
                        }
                    },{
                        path: "/admin/dashboard/generalSettings/labelSettings",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/labelSettings/index.vue"),
                        name: "labelSettings",
                        meta: {
                            title: "标签设置",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar22",
                        }
                    },{
                        path: "/admin/dashboard/generalSettings/blogSettings",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/blogSettings/index.vue"),
                        name: "blogSettings",
                        meta: {
                            title: "博客",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar23",
                        }
                    },{
                        path: "/admin/dashboard/generalSettings/customPageSettings",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/customPageSettings/index.vue"),
                        name: "customPageSettings",
                        meta: {
                            title: "自定义页面",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar24",
                        }
                    },{
                        path: "/admin/dashboard/generalSettings/routeSettings",
                        component: () => import("@/pages/adminPages/dashboard/generalSettings/routeSettings/index.vue"),
                        name: "routeSettings",
                        meta: {
                            title: "路由",
                            keepAlive: true,
                            role: ["admin"],
                            svgIcon: "Sidebar25",
                        }
                    },
                ]
            },
            {
                path: "/admin/dashboard/analysisStatistics",
                name: "analysisStatistics",
                component: () => import("@/pages/adminPages/dashboard/analysisStatistics/index.vue"),
                meta: {title: "分析统计", svgIcon: "Sidebar8", role: ["admin"], sidebarShow: true,  alwaysShow: true},
            },
            {
                path: "/admin/dashboard/publicSubmit",
                name: "publicSubmit",
                component: () => import("@/pages/adminPages/dashboard/publicSubmit/index.vue"),
                meta: {title: "公开提交", svgIcon: "Sidebar9", role: ["admin"], sidebarShow: true,alwaysShow: true},
            },
            {
                path: "/admin/dashboard/paidSubmit",
                name: "paidSubmit",
                component: () => import("@/pages/adminPages/dashboard/paidSubmit/index.vue"),
                meta: {title: "付费提交", svgIcon: "Sidebar10", role: ["admin"], sidebarShow: true,alwaysShow: true},
            },
            {
                path: "/admin/dashboard/customCode",
                name: "customCode",
                component: () => import("@/pages/adminPages/dashboard/customCode/index.vue"),
                meta: {title: "自定义代码", svgIcon: "Sidebar12", role: ["admin"], sidebarShow: true, alwaysShow: true},
            },
            {
                path: "/admin/dashboard/Integration",
                name: "Integration",
                component: () => import("@/pages/adminPages/dashboard/Integration/index.vue"),
                meta: {title: "集成", svgIcon: "Sidebar13", role: ["admin"], sidebarShow: true, alwaysShow: true},
            },

            {
                path: "/admin/dashboard/redirection",
                name: "redirection",
                component: () => import("@/pages/adminPages/dashboard/redirection/index.vue"),
                meta: {title: "重定向", svgIcon: "Sidebar14", role: ["admin"], sidebarShow: true,alwaysShow: true},
            },
            {
                path: "/admin/dashboard/fileVerification",
                name: "fileVerification",
                component: () => import("@/pages/adminPages/dashboard/fileVerification/index.vue"),
                meta: {title: "文件验证", svgIcon: "Sidebar15", role: ["admin"], sidebarShow: true, alwaysShow: true},
            },
            {
                path: "/admin/dashboard/SEO",
                name: "SEO",
                component: () => import("@/pages/adminPages/dashboard/SEO/index.vue"),
                meta: {title: "搜索引擎优化", svgIcon: "Sidebar16", role: ["admin"], sidebarShow: true,alwaysShow: true},
            },
            {
                path: "/admin/dashboard/webHooks",
                name: "webHooks",
                component: () => import("@/pages/adminPages/dashboard/webHooks/index.vue"),
                meta: {title: "webHooks", svgIcon: "Sidebar17", role: ["admin"], sidebarShow: true, alwaysShow: true},
            },
            {
                path: "/admin/dashboard/API",
                name: "API",
                component: () => import("@/pages/adminPages/dashboard/API/index.vue"),
                meta: {title: "API", svgIcon: "Sidebar18", role: ["admin"], sidebarShow: true, alwaysShow: true},
            },

        ]
    },
    {
        path: "/admin/bill",
        name: "bill",
        component: () => import("@/pages/adminPages/bill/index.vue"),
        meta: {title: "账单", svgIcon: "Sidebar3", role: ["admin"], sidebarShow: true, alwaysShow: true},
    },
    {
        path: "/admin/safety",
        name: "safety",
        component: () => import("@/pages/adminPages/safety/index.vue"),
        meta: {title: "安全", svgIcon: "Sidebar4", role: ["admin"], sidebarShow: true, alwaysShow: true},
    },
    {
        path: "/admin/notice",
        name: "notice",
        component: () => import("@/pages/adminPages/notice/index.vue"),
        meta: {title: "通知", svgIcon: "Sidebar5", role: ["admin"], sidebarShow: true, alwaysShow: true},
    }






]
