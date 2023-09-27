## 環境構築手順
---
1. このリポジトリをクローンする

```bash
$ git clone git@github.com:tkm-mkzk/rails-and-next-app.git
```


2. docker イメージをビルドする

```bash
$ docker compose build
```

3. コンテナを起動する

```bash
$ docker compose up -d
```

4. ブラウザでアクセスする

```bash
http://localhost:8000
```
<br>

## 初回のみ

1. apiコンテナに入る

```bash
$ docker compose exec api bash
```

2. データベース作成

```bash
$ bin/rails db:create
```

3. マイグレーション

```bash
$ bin/rails db:migrate
```

## 使用するコマンド
---
### コンテナに入る

```bash
# フロント
$ docker compose exec front sh
# api
$ docker compose exec api bash
# railsコンテナから以下コマンドでDBに接続できる
$ rails dbconsole
```

### eslintの実行

```bash
# frontコンテナに入ってから
$ yarn lint
# https://maku.blog/p/dexgg8o/
```
### jestの実行
```bash
# frontコンテナに入ってから
$ yarn test
# https://zenn.dev/shootacean/articles/how-to-set-up-jest-in-a-nextjs-project
```
### rubocopの実行（自動整形含む）
```bash
# apiコンテナに入ってから
$ rubocop -A
```
### rspecの実行
```bash
# apiコンテナに入ってから
$ rspec
```

<br>

## commitのルール
---
### コミットメッセージのフォーマット
```
:Emoji:Title/Issue
```
- Emoji（コミットの種類） <- ひと目でどんなコミットなのか判断するため
- Title（コミットの概要） <- 簡潔にコミット内容を説明するため
- Issue（コミットに対応したIssue） <- Issueベースで開発を進めるため


### Emoji

#### :seedling: Initial
#### :fire: Update features
#### :sparkles: New features
#### :recycle: Refactoring
#### :bug: Bug
#### :art: Design
#### :books: Document
#### :wrench: Configuration
#### :zap: Improve
#### :rocket: Deploy
#### :dna: Merge
#### :test_tube: Test
