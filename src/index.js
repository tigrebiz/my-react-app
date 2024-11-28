/*
アプリケーションのエントリーポイント
Reactアプリをroot要素にマウント
StrictModeの設定
グローバルなプロバイダーの設定場所
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// アプリのパフォーマンス計測を開始したい場合は、結果をログ出力する関数を渡してください
// (例: reportWebVitals(console.log))
// または分析エンドポイントに送信します。詳細: https://bit.ly/CRA-vitals
reportWebVitals();
