/*
アプリケーションのエントリーポイント
グローバルな設定を行う場所
アプリ全体で共有する機能の初期化を行う場所
*/

/*
推奨される設定

グローバルプロバイダーの設定
アプリケーション全体の初期化
環境設定
エラーハンドリングの設定
パフォーマンス計測の設定
グローバルスタイルのインポート
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
