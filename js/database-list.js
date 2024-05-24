document.addEventListener("DOMContentLoaded", function () {
    page = new $dom({
        id: "body",
        data: {
            is_guest: false,
            login: {
                title: "Pardn Chiu",
                // 用於綁定 ':model'
                password: "",
            },
            title: "管理後台",
            left: {
                is_body_left_min: $cookie("is_body_left_min"),
                is_database_list: 1,
                is_database_add: 0,
                is_article_add: 0,
                is_folder_image: 0,
                is_file_edit: 0,
                is_json_edit: 0
            },
            // 頂部導覽列
            top_tab: [
                {
                    title: "首頁",
                    href: "/management-1-web",
                },
                {
                    title: "列表範例",
                    href: "",
                }
            ],
            // 篩選
            form: {
                title: "篩選文章",
                data: {
                    sn: {
                        is_select: false,
                        type: "text",
                        size: "_33",
                        placeholder: "SN",
                        value: ""
                    },
                    uri: {
                        is_select: false,
                        type: "text",
                        size: "_33",
                        placeholder: "自訂ID",
                        value: ""
                    },
                    title: {
                        is_select: false,
                        type: "text",
                        size: "_33",
                        placeholder: "標題",
                        value: ""
                    },
                    subtitle: {
                        is_select: false,
                        type: "text",
                        size: "_33",
                        placeholder: "副標題",
                        value: ""
                    },
                    description: {
                        is_select: false,
                        type: "text",
                        size: "_33",
                        placeholder: "內容",
                        value: ""
                    },
                    tag: {
                        is_select: false,
                        type: "text",
                        size: "_33",
                        placeholder: "標籤",
                        value: ""
                    },
                    upload_start: {
                        is_select: false,
                        type: "date",
                        size: "_25",
                        value: ""
                    },
                    upload_end: {
                        is_select: false,
                        type: "date",
                        size: "_25",
                        value: ""
                    },
                    update_start: {
                        is_select: false,
                        type: "date",
                        size: "_25",
                        value: ""
                    },
                    update_end: {
                        is_select: false,
                        type: "date",
                        size: "_25",
                        value: ""
                    }
                }
            },
            // 資料列表
            database: {
                head: ["SN", "自訂ID", "標題", "副標題", "內容", "上傳", "更新", "觀看", "留言"],
                list: [
                    {
                        class: "",
                        is_deleted: false,
                        body: ["1", "<a href='https://pardn.io/blog/nodejs-install' target='_blank'>nodejs-install</a>", "Node.js: JavaScript 的後端魔法", "Node.js: JavaScript 的後端魔法 (1)", "> 歡迎來到 Node.js，一個開發者的熱門後端語言選擇，這是建構高效伺服器端應用程式的理想平台。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["2", "<a href='https://pardn.io/blog/nodejs-promise-async' target='_blank'>nodejs-promise-async</a>", "Promise 與 Async/Await 的非同步設計", "Node.js: JavaScript 的後端魔法 (2)", "> 非同步程式設計、事件驅動、Promises 以 及Async/Await 是Node.js強大的支柱。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["3", "<a href='https://pardn.io/blog/nodejs-hello-world' target='_blank'>nodejs-hello-world</a>", "建立第一個 Node.js 應用程式有多難？", "Node.js: JavaScript 的後端魔法 (3)", "> 我們將帶你踏上 Node.js 的奇妙旅程。透過簡單易懂的步驟，你將學會如何創建一個基本的 HTTP 伺服器，處理請求與回應，以及實作基本的路由設定。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["4", "<a href='https://pardn.io/blog/nodejs-express' target='_blank'>nodejs-express</a>", "什麼？Express 竟然如此的好用", "Node.js: JavaScript 的後端魔法 (4)", "> Express 是一個快速、靈活且簡潔的 Node.js 框架，專為構建 Web 應用程式和 API 而設計，如路由、模板引擎、中介軟體等。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["5", "<a href='https://pardn.io/blog/nodejs-mongodb-mysql' target='_blank'>nodejs-mongodb-mysql</a>", "前進資料庫! MongoDB 與 MySQL", "Node.js: JavaScript 的後端魔法 (5)", "> 本篇文章我們將討論兩個主要的資料庫選擇:NoSQL 的 MongoDB 和關聯式資料庫的 MySQL。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["6", "<a href='https://pardn.io/blog/nodejs-middleware' target='_blank'>nodejs-middleware</a>", "中介軟體 (Middleware) 與定制流程", "Node.js: JavaScript 的後端魔法 (6)", "> 在 Express 中，中介軟體 (Middleware) 是一個強大的功能，它允許我們在請求和回應之間執行功能。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["7", "<a href='https://pardn.io/blog/nodejs-pug-ejs' target='_blank'>nodejs-pug-ejs</a>", "服務端渲染 (SSR) 的救星！Pug 與 EJS", "Node.js: JavaScript 的後端魔法 (7)", "> 模板引擎是一種強大的工具，允許我們直接從後端動態生成 HTML並傳遞至前端顯示。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["8", "<a href='https://pardn.io/blog/nodejs-jwt-xss-csp' target='_blank'>nodejs-jwt-xss-csp</a>", "實作 JWT 會員登入以及防範SQL注入與XSS攻擊", "Node.js: JavaScript 的後端魔法 (8)", "> 在現代 Web 開發中，保障使用者身分的安全性是一個至關重要的課題。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["9", "<a href='https://pardn.io/blog/nodejs-restful-api' target='_blank'>nodejs-restful-api</a>", "RESTful API 該怎麼設計？", "Node.js: JavaScript 的後端魔法 (9)", "> RESTful API 是一種設計風格，旨在促進資源的有效管理和互動。", "1天前", "", "30", "1"]
                    },
                    {
                        class: "",
                        is_deleted: false,
                        body: ["10", "<a href='https://pardn.io/blog/nodejs-mocha-supertest' target='_blank'>nodejs-mocha-supertest</a>", "Mocha？Supertest？單元與整合測試？", "Node.js: JavaScript 的後端魔法 (10)", "> 在軟體開發生命週期中，測試佔據了至關重要的地位，有助於確保代碼的正確性、可靠性和穩定性。", "1天前", "", "30", "1"]
                    },
                    // {
                    //     class: "info",
                    //     is_deleted: false,
                    //     body: ["2", "陳曉華", "B123456789", "0912345678", "mail@pardnltd (尚未驗證)"]
                    // },
                    // {
                    //     class: "hide",
                    //     is_deleted: true,
                    //     body: ["3", "吳忠志", "C123456789", "0912345678", "<a href='mailto:mail@pardnltd'>mail@pardnltd</a>"]
                    // },
                ]
            }
        },
        event: {
            ...default_events,
        },
        next: () => {
        }
    });
});
