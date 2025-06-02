# React + Vite + Storybook Boilerplate

這個範例展示如何建立一個以 **Design System** 為核心的 UI Library。專案採用 [React](https://reactjs.org/)、[Vite](https://vitejs.dev/) 與 [Storybook](https://storybook.js.org/)，並提供簡易的開發腳本與範例組件。

## 目錄結構

```
.
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   └── Button.tsx
│   └── stories/
│       └── Button.stories.tsx
└── .storybook/
    ├── main.ts
    └── preview.ts
```

## 快速開始
1. 安裝依賴：

   ```bash
   npm install
   ```

2. 啟動開發伺服器：

   ```bash
   npm run dev
   ```

3. 瀏覽 Storybook：

   ```bash
   npm run storybook
   ```

## 腳本

- `npm run dev` - 啟動 Vite 開發模式。
- `npm run build` - 建構產出檔案。
- `npm run storybook` - 於本地啟動 Storybook。
- `npm run build-storybook` - 建構靜態版 Storybook，可部署於靜態伺服器。

## 建議

- 透過 Storybook 撰寫每個 UI 元件的 stories，方便設計與工程協作。
- 保持組件 API 的一致性，並盡量提供良好的型別定義，以提高 DX。
- 在 `components/` 內撰寫可重複使用的基本元件，並搭配 `stories/` 展示使用情境。

