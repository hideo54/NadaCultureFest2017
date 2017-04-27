# 第71回 灘校文化祭 ウェブサイト

## 構築

1. 必要なパッケージを入手: `yarn`
1. Font Awesomeをダウンロード
    2. `wget http://fontawesome.io/assets/font-awesome-4.7.0.zip`
    2. `unzip font-awesome-4.7.0.zip`
    2. `mv font-awesome-4.7.0 font-awesome`
1. `yarn run install`
installスクリプトで行われること:
    2. 各企画pugファイルの生成( `yarn run projects` )
    2. 全pugファイル, lessファイルのコンパイル( `yarn run build`)
    2. 全画像ファイルをdist/ディレクトリにコピー( `yarn run images`)
    2. 全フォントファイルをdist.ディレクトリにコピー( `yarn run fonts`)
1. `dist/`ディレクトリをルートディレクトリに設定

## 作成者連絡先

* E-mail: contact@hideo54.com
* Twitter: @hideo54
