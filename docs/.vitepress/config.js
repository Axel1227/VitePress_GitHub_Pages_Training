export default {
    themeConfig:{
        siteTitle: "Axel Blog",
        nav: [
            { text: "首頁", link: "/index.md" },
            {
              text: "Drop Menu",
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
              ]
            }
          ],
          socialLinks: [
            { icon: "github", link: "https://github.com/axel1227" },
          ],
          sidebar: [
            {
              text: "大分類",
              items: [
                { text: "小分類1", link: "/post/test1.md", },
                { text: "小分類2", link: "/post/test2.md", },
              ],
              collapsible: true, // 開啟側邊折疊功能
              collapsed: false // 預設展開側邊攔
            },
          ],
    }
}