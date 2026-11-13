# Mixology Wiki — 經典與現代調酒酒譜庫

純前端靜態調酒酒譜與風味筆記網站，記錄經典調酒的精準配方、調製技法與調酒師風味筆記，可直接部署於 GitHub Pages。

## 功能特色

- **深色微醺酒吧風格（Dark Luxury）**：以深藍黑（`#0f172a`）搭配半透明深灰藍毛玻璃卡片與琥珀金（`#f59e0b`）重點標示。
- **即時搜尋與基酒篩選**：支援依酒名、基酒、材料或風味關鍵字即時搜尋，並可與基酒分類按鈕（全部 / 琴酒 Gin / 威士忌 Whiskey / 蘭姆酒 Rum / 伏特加 Vodka）連動篩選。
- **標準化五段式酒譜內頁**：每款調酒獨立成頁，統一收錄酒款資訊與酒感星等、風味指標（甜度／酸度／酒感／苦度）、材料清單（`ml` / `dash`）、調製步驟與調酒師筆記。
- **四大基礎調酒技法指南**：首頁附有搖盪（Shake）、攪拌（Stir）、直調（Build）與滾動（Rolling）說明。

## 目前收錄酒譜

| 酒款 | 基酒 | 技法 | 檔案 |
| --- | --- | --- | --- |
| 古典雞尾酒 Old Fashioned | 威士忌 Whiskey | Stir | `recipes/old-fashioned.html` |
| 琴通寧 Gin & Tonic | 琴酒 Gin | Build | `recipes/gin-tonic.html` |
| 內格羅尼 Negroni | 琴酒 Gin | Stir | `recipes/negroni.html` |
| 威士忌酸酒 Whiskey Sour | 威士忌 Whiskey | Shake | `recipes/whiskey-sour.html` |
| 莫希托 Mojito | 蘭姆酒 Rum | Build | `recipes/mojito.html` |
| 戴綺麗 Daiquiri | 蘭姆酒 Rum | Shake | `recipes/daiquiri.html` |
| 莫斯科騾子 Moscow Mule | 伏特加 Vodka | Build | `recipes/moscow-mule.html` |

## 專案結構

```text
.
├── AGENTS.md                 # 專案開發與擴充規範
├── README.md                 # 專案說明文件
├── index.html                # 首頁、搜尋篩選、酒譜目錄與技法指南
├── style.css                 # 全站共用深色樣式表
├── app.js                    # 首頁搜尋與基酒篩選邏輯
└── recipes/
    ├── template.html         # 新增調酒內頁標準模板
    └── *.html                # 各款調酒獨立內頁
```

## 本機預覽與部署

無需安裝套件或建置步驟，直接以瀏覽器開啟 `index.html` 即可預覽；或於 GitHub Repository 的 **Settings → Pages** 將來源設為 `main` 分支根目錄（`/ (root)`）直接上線。

## 新增調酒規範

詳細版面規格、命名原則與檢查清單請參閱 [`AGENTS.md`](./AGENTS.md)。
