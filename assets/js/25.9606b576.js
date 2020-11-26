(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{403:function(e,t,s){"use strict";s.r(t);var r=s(27),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("ul",[s("li",[s("Badge",{attrs:{text:"dev",vertical:"middle"}}),e._v(" 代表只和开发有关。\n")],1)])]),e._v(" "),s("p",[e._v("有问题和建议欢迎提 "),s("a",{attrs:{href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[e._v("你也可以加入 "),s("a",{attrs:{href:"https://shang.qq.com/wpa/qunwpa?idkey=3bd19a05aaccb2b60c396295c8617b3a9e667821a495e8cd7e1698ff95ab61c6",target:"_blank",rel:"noopener noreferrer"}},[e._v("QQ 群"),s("OutboundLink")],1),e._v("（389401003）进行反馈与讨论。")]),e._v(" "),s("blockquote",[s("p",[e._v("如果是通用的问题（如 BUG 反馈，新功能建议），最好在 Issue 中进行反馈，以便其他朋友参与讨论，减少重复。")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"自查通用问题解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自查通用问题解决方案"}},[e._v("#")]),e._v(" 自查通用问题解决方案")]),e._v(" "),s("p",[e._v("检查文件或仓库命名是否错误。")]),e._v(" "),s("p",[e._v("检查 "),s("code",[e._v("Hexo")]),e._v(" 工作目录下 "),s("code",[e._v("_config.yml")]),e._v(" 中 "),s("code",[e._v("url")]),e._v(" 是否设置正确。（此部分为 Hexo 初始化时自动生成）")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If your site is put in a subdirectory")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set url as 'https://yoursite.com/child' and root as '/child/'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//www.yunyoujun.cn\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /\n")])])]),s("p",[e._v("检查是否在 "),s("code",[e._v("yun.yml")]),e._v(" 文件中进行主题配置，且已经保存。\n检查是否已经执行如下几步：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("hexo clean")]),e._v("：清除本地缓存")]),e._v(" "),s("li",[s("code",[e._v("hexo g")]),e._v("：生成新的静态文件")]),e._v(" "),s("li",[s("code",[e._v("hexo s")]),e._v("：本地查看效果（如果正常，使用 "),s("code",[e._v("hexo d")]),e._v(" 重新部署）")])]),e._v(" "),s("p",[e._v("检查是否已强制刷新本地浏览器缓存（Windows: "),s("code",[e._v("Ctrl + F5")]),e._v("，Mac: "),s("code",[e._v("Shift + Cmd + R")]),e._v("）。")]),e._v(" "),s("p",[e._v("检查是否为最新版本。")]),e._v(" "),s("p",[e._v("检查是否因为 CDN 缓存造成的问题，（关闭 "),s("code",[e._v("cdn.pre")]),e._v("）。")]),e._v(" "),s("p",[e._v("如果仍然存在问题，你可以将你的项目代码作为 "),s("code",[e._v("hexo")]),e._v(" 分支推送到 GitHub 上。")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.yunyoujun.cn/share/how-to-build-your-site/#%E4%B8%8E%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%BB%BA%E7%AB%8B%E5%85%B3%E8%81%94",target:"_blank",rel:"noopener noreferrer"}},[e._v("与远程仓库建立关联"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("使用 GitHub 源文件地址到群（389401003）内提问，或发起 "),s("a",{attrs:{href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"hexo-server-文章只渲染部分内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo-server-文章只渲染部分内容"}},[e._v("#")]),e._v(" "),s("code",[e._v("hexo server")]),e._v(" 文章只渲染部分内容 "),s("Badge",{attrs:{text:"dev"}})],1),e._v(" "),s("p",[e._v("开发主题的过程中，发现长篇文章只能渲染出一部分，后半部分无法正常显示。\n一开始还以为是 "),s("code",[e._v("hexo-renderer-pug")]),e._v(" 的问题，折腾了一天，兜兜转转，最后才发现似乎是开发时 "),s("code",[e._v("hexo-browsersync")]),e._v(" 的问题。")]),e._v(" "),s("p",[e._v("相关 Issue ："),s("a",{attrs:{href:"https://github.com/hexojs/hexo-browsersync/issues/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("Problem with long pages"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"临时解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时解决方案"}},[e._v("#")]),e._v(" 临时解决方案")]),e._v(" "),s("p",[e._v("在根目录的 "),s("code",[e._v("_config.yml")]),e._v(" 中设置")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("compress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"标签与分类页面不显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签与分类页面不显示"}},[e._v("#")]),e._v(" 标签与分类页面不显示？")]),e._v(" "),s("p",[e._v("标签与分类页面需要参考 "),s("a",{attrs:{href:"https://yun.yunyoujun.cn/guide/page.html#%E6%A0%87%E7%AD%BE-tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("页面配置"),s("OutboundLink")],1),e._v(" 安装对应插件并自行生成页面。")])])}),[],!1,null,null,null);t.default=a.exports}}]);