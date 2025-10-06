import { pinia } from "@/pinia"
import { resetRouter } from "@/router"
import {reactive} from "vue";
import {useUserStore} from "@/pinia/stores/user.ts";

export const headerListStore = defineStore("headerList", () => {
    const HeaderList = ref([]);
    const defaultHeaderList = [
        {
            title: "功能",
            path: "/features",
            meta: { title: "功能", svgIcon: "home",  }
        },
        {
            title: "案例",
            path: "/case",
            meta: { title: "功能", svgIcon: "home",  }
        },
        {
            title: "定价",
            path: "/pricePlan",
            meta: { title: "功能", svgIcon: "home",  }
        },
        {
            title: "关于我们",
            path: "/about",
            meta: { title: "功能", svgIcon: "home",  }
        },
        {
            title: "博客",
            path: "/features",
            meta: { title: "功能", svgIcon: "home",  }
        },
    ]
    const adminHeaderList = [
        {
            title: "主页",
            path: "/home",
            meta: { title: "主页", svgIcon: "home",  }
            
        },
        {
            title: "仪表板",
            path: "/dashboard",
            meta: { title: "仪表板", svgIcon: "dashboard2",  }
            
        },
        {
            title: "设置",
            path: "/settings",
            meta: { title: "设置", svgIcon: "setting",  }
            
        },
        {
            title: "提交",
            path: "/submit",
            meta: { title: "提交", svgIcon: "Submit",  }
            
        },
    ]
    /**
     * 将HeaderList设置为默认
     * */
    const setHeaderListToDefaultHeaderList=()=>{
        HeaderList.value =defaultHeaderList;
    }
    /**
     * 将HeaderList设置为管理路由
     * */

    const setHeaderListToAdminHeaderList=()=>{
        HeaderList.value =adminHeaderList;
    }
    return { HeaderList,defaultHeaderList, adminHeaderList, setHeaderListToDefaultHeaderList, setHeaderListToAdminHeaderList}
})

export function useheaderListStore() {
    return headerListStore(pinia)
}



