/*
テスト環境のセットアップファイル
テストに必要な設定やモック
*/

// jest-domはDOMノードに対するカスタムJestマッチャーを追加します。
// 以下のようなテストが可能になります:
// expect(element).toHaveTextContent(/react/i)
// 詳細はこちら: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
