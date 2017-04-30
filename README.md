# 第71回 灘校文化祭 ウェブサイト

## 構築

1. 必要なパッケージを入手: `yarn`
1. Font Awesomeをダウンロード
    1. `wget http://fontawesome.io/assets/font-awesome-4.7.0.zip`
    1. `unzip font-awesome-4.7.0.zip`
    1. `mv font-awesome-4.7.0 font-awesome`
1. `yarn run install`
installスクリプトで行われること:
    1. 各企画pugファイルの生成( `yarn run projects` )
    1. gallerypugファイルの生成( `yarn run gallery` )
    1. 全pugファイル, lessファイルのコンパイル( `yarn run build` )
    1. 全画像ファイルをdist/ディレクトリにコピー( `yarn run images` )
    1. 全フォントファイルをdist/ディレクトリにコピー( `yarn run fonts` )
1. `dist/`ディレクトリをルートディレクトリに設定

## 作成者連絡先

* E-mail: contact@hideo54.com
* Twitter: @hideo54
