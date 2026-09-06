import type { ToolDetailContent } from './types';

export const jaContent: ToolDetailContent = {
  metaTitle: '無料 SRT TXT 変換 – 字幕からテキストのみを抽出',
  metaDescription: 'SRT字幕ファイルをテキスト（TXT）にオンラインで高速変換。タイムコードや字幕番号をブラウザ内で完全消去し、プライバシーも万全です。',
  h1: 'SRT TXT 変換ツール',
  heroDescription: 'SRT字幕ファイルからタイムコード、字幕番号、書式タグを瞬時に削除し、読みやすいプレーンテキストに変換します。ブラウザ内で100%安全に処理されます。',
  toolName: 'SRT TXT 変換ツール',
  ui: {
    pasteTitle: 'SRT 入力 (.srt)',
    pastePlaceholder: 'ここに SRT の内容を貼り付けてください（例:\n1\n00:00:01,000 --> 00:00:04,000\nこんにちは、動画へようこそ。）...',
    orDivider: 'または',
    uploadTitle: 'オプション 2 — SRT ファイルをアップロード',
    convertButton: 'テキストに変換',
    clearButton: 'クリア',
    trySampleButton: 'サンプルを試す',
    livePreviewTitle: 'プレーンテキスト (.txt)',
    errorNoInput: 'SRT 内容を貼り付けるか、SRT ファイルをアップロードしてください。',
    pastedContentSource: '貼り付けた SRT 内容',
    dropzoneTitle: 'ここに .srt ファイルをドラッグ＆ドロップ',
    dropzoneSubtitle: 'または端末からファイルを選択',
    browseButton: 'SRTファイルを選択',
    dropActiveText: 'SRTファイルをドロップしてください...',
    fileSelected: 'ファイル選択済み',
    fileNameLabel: 'ファイル名',
    fileSizeLabel: 'サイズ',
    cueCountLabel: '抽出字幕数',
    characterCountLabel: '文字数',
    downloadAction: '.txt をダウンロード',
    copyAction: 'クリップボードにコピー',
    copiedSuccess: 'クリップボードにコピーしました！',
    resetAction: '別のファイルを変換',
    previewTitle: '変換テキストのプレビュー',
    previewEmpty: 'SRTファイルを選択すると、変換後のテキストがここに表示されます。',
    optionsTitle: '変換オプション',
    optEmptyLine: '字幕ブロック間に空行を挿入する',
    optRemoveTags: '装飾タグを削除する（例：<i>, <b>, <font>）',
    errorInvalidFile: '有効な .srt 字幕ファイルをアップロードしてください。',
    errorEmptyFile: '選択されたファイルは空です。',
    errorParseFailed: 'ファイルの解析に失敗しました。SRTの形式をご確認ください。',
  },
  sections: {
    whatIsSrt: {
      title: 'SRTファイルとは？',
      content: [
        'SRT（SubRip Subtitle）は、動画配信や再生プレイヤーで最も広く使われている字幕テキストファイル形式です。各字幕には連番、表示と非表示の開始・終了タイムコード、そしてセリフが含まれます。',
        '動画プレイヤーで表示するには最適ですが、時間の記録や番号が多く含まれるため、普通の文章やドキュメントとして読むのには不向きです。',
      ],
    },
    whatIsConverter: {
      title: 'SRT TXT 変換ツールとは？',
      content: [
        'SRTファイルから時間情報（00:01:20,000 --> 00:01:25,000）や連番（1, 2, 3...）を取り除き、会話テキストのみを抽出してプレーンテキスト（TXT）を作成するツールです。',
        '本ツールはブラウザ上で100%ローカルに処理を行うため、ファイルが外部サーバーに送信されることは一切ありません。機密動画の書き起こしにも安心です。',
      ],
    },
    howToConvert: {
      title: 'SRTをTXTに変換する手順',
      steps: [
        {
          title: '1. ファイルを選択',
          description: '.srtファイルをアップロードエリアにドロップするか、ボタンから端末内のファイルを選択します。',
        },
        {
          title: '2. 自動で瞬時に変換',
          description: 'タイムコードや装飾タグを自動で除去し、プレーンテキストを抽出します。',
        },
        {
          title: '3. ダウンロードまたはコピー',
          description: '「.txt をダウンロード」をクリックして保存するか、クリップボードに直接コピーします。',
        },
      ],
    },
    whyConvert: {
      title: 'なぜSRTをTXTに変換するのか？',
      benefits: [
        {
          title: 'インタビューや講義の読み物化',
          description: '動画の文字起こしを時間コードなしでスムーズに通読できる文章に整えられます。',
        },
        {
          title: 'AI（ChatGPT・Claude）での活用',
          description: '無駄なタイムコードを省くことで、AIツールのトークン消費を大幅に節約できます。',
        },
        {
          title: '語学学習・スクリプト印刷',
          description: '映画やドラマのセリフを一括でテキスト化し、単語学習や音読練習に活用できます。',
        },
        {
          title: '全文検索とアーカイブ',
          description: 'テキストファイル化することで、長時間の動画内の発言をキーワードで瞬時に検索可能になります。',
        },
      ],
    },
    comparison: {
      title: 'SRT形式とTXT形式の比較',
      description: '字幕用フォーマットとテキスト文書の仕様の違いです。',
      headers: ['項目', 'SRT形式 (.srt)', 'プレーンテキスト (.txt)'],
      rows: [
        ['主な用途', '動画の字幕タイミング同期', '文章の閲覧・記録・編集'],
        ['タイムスタンプ', 'あり（例：00:00:15,000 --> 00:00:19,000）', 'なし'],
        ['連番', 'あり（1, 2, 3...）', 'なし'],
        ['装飾タグ', 'HTMLスタイルタグを含む場合あり', '装飾なしの純テキスト'],
        ['最適な利用先', '各種メディアプレイヤー', '読書、要約、AI入力'],
      ],
    },
    privacy: {
      title: 'ローカル処理による完全なプライバシー保護',
      content: [
        'ファイルはお使いのパソコンやスマートフォンのブラウザ内でのみ処理され、外部への通信は発生しません。',
        'ページを読み込んだ後であれば、オフライン環境でも動作します。',
      ],
    },
  },
  faqs: [
    {
      question: 'SRTファイルとは何ですか？',
      answer: '動画に合わせて文字を表示するための時間情報とテキストが書かれた一般的な字幕ファイルです。',
    },
    {
      question: '時間や番号は消去されますか？',
      answer: 'はい、すべてのタイムコードと行番号が自動的に綺麗に消去されます。',
    },
    {
      question: 'ファイルはサーバーに送信されますか？',
      answer: 'いいえ。処理はすべてご利用の端末のブラウザ内で完結します。',
    },
    {
      question: '日本語の漢字やひらがなは文字化けしませんか？',
      answer: 'UTF-8およびUnicodeに完全対応しているため、日本語も文字化けすることなく変換可能です。',
    },
    {
      question: 'スマートフォンでも利用できますか？',
      answer: 'はい、iPhoneやAndroidのブラウザでも同様に快適にご利用いただけます。',
    },
    {
      question: '複数行の字幕はどう処理されますか？',
      answer: '自然な文章構成を保ちながら段落として綺麗にまとめられます。',
    },
    {
      question: '<i>などのタグも消えますか？',
      answer: 'はい、字幕に含まれるイタリックやフォントなどのHTMLタグは自動削除されます。',
    },
    {
      question: '利用料はかかりますか？',
      answer: '完全無料でご利用いただけます。登録も不要です。',
    },
  ],
};
