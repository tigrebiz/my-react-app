# Node.jsの公式イメージをベースとして使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"] 