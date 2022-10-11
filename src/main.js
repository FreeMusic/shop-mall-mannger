import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import * as Sentry from "@sentry/browser"
// import { Integrations } from "@sentry/browser";
import router from "./router";

const orderStatus = {
    0: '待支付',
    1: '已支付',
    2: '配货完成',
    3: '出库成功',
    4: '交易成功',
    '-1': '手动关闭',
    '-2': '超时关闭',
    '-3': '商家关闭'
}

const app = createApp(App)

// 全局过滤器
app.config.globalProperties.$filters = {
    orderMap(status) {
        return orderStatus[status] || '未知状态'
    },
    prefix(url) {
        if (url && url.startsWith('http')) {
            return url
        } else {
            url = `http://backend-api-02.newbee.ltd${url}`
            return url
        }
    },
    resetImgUrl(imgObj, imgSrc, maxErrorNum) {
        if (maxErrorNum > 0) {
            imgObj.onerror = function() {
                // eslint-disable-next-line no-undef
                resetImgUrl(imgObj, imgSrc, maxErrorNum - 1)
            }
            setTimeout(function() {
                imgObj.src = imgSrc
            }, 500)
        } else {
            imgObj.onerror = null
            imgObj.src = imgSrc
        }
    }
}

app.use(ElementPlus)
    .use(router)

// Sentry.init({
//     dsn: "https://f866b695d21d467ba523f1adf14e0a24@o584908.ingest.sentry.io/5737358",
//     integrations: [new Integrations.BrowserTracing()],
//
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
// });

app.mount('#app')
