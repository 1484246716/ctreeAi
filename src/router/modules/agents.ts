import type {RouteRecordRaw} from "vue-router";
const Layouts = () => import("@/layouts/index.vue")

export const agentsRoutes: RouteRecordRaw[] = [
    {
        path: "/agent",
        component: Layouts,
        redirect: "/agent/chat",
        meta: {
            title: "聊天",
            svgIcon: "dashboard",
            // 可以在根路由中设置角色
            roles: ["admin","agents"],
            isShowTitle:false,
            alwaysShow: true
        },
        children: [
            {
                path: "/agent/chat",
                name:"agentchat",
                component: () => import("@/pages/agentsPages/chat/index.vue"),
                meta: { title: "聊天", svgIcon: "Sidebar1", roles: ["admin","agents"] },
            },
        ]
    },
    {
        path: "/agents",
        component: Layouts,
        redirect: "/agents/deepResearch",
        meta: {
            title: "Agents",
            svgIcon: "dashboard",
            roles: ["admin","agents"],
            isShowTitle:true,
            alwaysShow: true
        },
        children: [
            {
                path: "/agents/deepResearch",
                name:"deepResearch",
                component: () => import("@/pages/agentsPages/deepResearch/index.vue"),
                meta: { title: "Deep Research", svgIcon: "Sidebar1", roles: ["admin","agents"] },
            },
            {
                path: "/agents/web-creator",
                name:"web-creator",
                component: () => import("@/pages/agentsPages/webCreator/index.vue"),
                meta: { title: "网页创建者", svgIcon: "Sidebar1", roles: ["admin","agents"] },
            },
            {
                path: "/agents/aiWriter",
                name:"aiWriter",
                component: () => import("@/pages/agentsPages/aiWriter/index.vue"),
                meta: { title: "AI写作助手", svgIcon: "Sidebar1", roles: ["admin","agents"] },
            },
            {
                path: "/agents/aiPPT",
                name:"aiPPT",
                component: () => import("@/pages/agentsPages/aiPPT/index.vue"),
                meta: { title: "AI PPT", svgIcon: "Sidebar1", roles: ["admin","agents"] },
            },
        ]
    },
]