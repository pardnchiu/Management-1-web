import { MDEditor, MDViewer } from "https://pardnchiu.github.io/markdown-editor/js/PDMDEditor.min.js";

document.addEventListener("DOMContentLoaded", function () {

    const editor = new MDEditor({
        style: {
            showRow: 0
        }
    });

    const viewer = new MDViewer({
        delay: 50
    });

    const page = new $dom({
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
                is_article_list: false,
                is_article_add: true,
                is_folder_image: false,
                is_file_edit: false,
                is_json_edit: false
            },
            // 頂部導覽列
            top_tab: [
                {
                    title: "首頁",
                    href: "/",
                },
                {
                    title: "撰寫文章",
                    href: "",
                }
            ],
        },
        event: {
            show: function () {
                const isShow = this.$parent(0).$$class("show");
                this.__class(`fa-solid ${isShow ? "fa-eye-slash" : "fa-eye"}`);
                this.$pre(0).$child(0).type = isShow ? "password" : "text";
                this.$parent(0).$$class_(isShow, "show");
            },
            login: function () {
                page.dom.$child(0)._class("show");

                setTimeout(() => {
                    page.data.is_guest = false;

                    setTimeout(_ => {
                        page.event.init();
                    }, 100);
                }, 1000);
            },
            logout: function () {
                page.data.is_guest = true;
            },
            tab_show: function (e) {
                const parent = this.$parent(0);
                const is_show = parent.$$class("show") || parent.$sel("a[data-selected='true']");
                const is_hide = parent.$$class("hide");

                if (is_hide) {
                    parent._class("show").class_("hide");
                }
                else if (is_show) {
                    parent._class("hide").class_("show");
                }
                else {
                    parent._class("show");
                }

            },
            show_photo_library: function () {
                const dom = "section.top-photo".$;

                if (dom == null) {
                    return;
                };

                const is_show = dom.$$class("show");

                dom.$$class_(is_show, "show");
            },
            add_h2: function () {
                editor.addHeading(2)
            },
            add_h3: function () {
                editor.addHeading(3)
            },
            add_h4: function () {
                editor.addHeading(4)
            },
            add_h5: function () {
                editor.addHeading(5)
            },
            add_h6: function () {
                editor.addHeading(6)
            },
            add_bold: function () {
                editor.addBold()
            },
            add_italic: function () {
                editor.addItalic()
            },
            add_strikethrough: function () {
                editor.addStrikethrough()
            },
            add_underline: function () {
                editor.addUnderline()
            },
            add_marker: function () {
                editor.addMarker()
            },
            add_blockquote: function () {
                editor.addBlockquote()
            },
            add_ul: function () {
                editor.addUl()
            },
            add_ol: function () {
                editor.addOl()
            },
            add_code: function () {
                editor.addCode()
            },
            add_link: function () {
                editor.addLink("標題", "連結")
            },
            add_photo: function (e) {
                const src = e.target.dataset.src;

                editor.addImage(src, "替代文字", "圖片標題")
            }
        },
        next: (e) => {
            editor.viewer = viewer;
            viewer.editor = editor;

            if ("section.markdown".$) {
                "section.markdown".$.$sel("section.editor")._child([
                    editor.body
                ]);
                
                if ("section.markdown".$.$sel("section.viewer") != null) {
                    "section.markdown".$.$sel("section.viewer")._child([
                        viewer.body
                    ]);
                };
            };

            editor.init();
            viewer.init();
        }
    });
});