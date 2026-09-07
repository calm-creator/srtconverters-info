import type { SrtToVttDetailContent } from './types';

export const viContent: SrtToVttDetailContent = {
  "metaTitle": "Chuyển Đổi SRT sang VTT Miễn Phí Trực Tuyến – Chuẩn WebVTT Nhanh & An Toàn",
  "metaDescription": "Chuyển đổi tệp phụ đề SRT sang định dạng WebVTT (.vtt) chuẩn trực tuyến miễn phí. Tự động thêm tiêu đề WEBVTT và đổi dấu phẩy thời gian với bảo mật tuyệt đối 100%.",
  "h1": "Chuyển Đổi SRT sang VTT",
  "heroDescription": "Dễ dàng chuyển đổi tệp phụ đề SubRip (.srt) sang định dạng chuẩn WebVTT (.vtt) tương thích hoàn toàn với W3C dành cho trình phát video HTML5, nền tảng phát trực tuyến và ứng dụng web hiện đại. 100% miễn phí, tức thì và bảo mật ngay trên trình duyệt.",
  "toolName": "Chuyển Đổi SRT sang VTT",
  "ui": {
    "pasteTitle": "Nhập Nội Dung Phụ Đề SRT (.srt)",
    "pastePlaceholder": "Dán nội dung SRT của bạn vào đây (ví dụ:\n1\n00:00:01,000 --> 00:00:04,000\nChào mừng bạn đến với video hướng dẫn của chúng tôi!)...",
    "orDivider": "HOẶC",
    "uploadTitle": "Cách 2 — Tải Tệp SRT Lên",
    "convertButton": "Chuyển sang VTT",
    "clearButton": "Xóa",
    "trySampleButton": "Tải Mẫu Thử",
    "livePreviewTitle": "Kết Quả WebVTT Đã Chuyển Đổi (.vtt)",
    "errorNoInput": "Vui lòng dán nội dung văn bản SRT hoặc tải lên tệp .srt để tiến hành chuyển đổi.",
    "pastedContentSource": "Nội dung SRT đã dán",
    "dropzoneTitle": "Kéo và thả tệp .srt của bạn vào đây",
    "dropzoneSubtitle": "hoặc nhấp để chọn tệp từ thiết bị của bạn",
    "browseButton": "Chọn Tệp SRT",
    "dropActiveText": "Thả tệp SRT vào đây...",
    "fileSelected": "Đã chọn tệp",
    "fileNameLabel": "Tên Tệp",
    "fileSizeLabel": "Dung Lượng Tệp",
    "cueCountLabel": "Đoạn Phụ Đề Đã Chuyển",
    "characterCountLabel": "Số Ký Tự",
    "downloadAction": "Tải Về .vtt",
    "copyAction": "Sao Chép vào Bộ Nhớ",
    "copiedSuccess": "Đã sao chép thành công!",
    "resetAction": "Chuyển Đổi Tệp Khác",
    "previewTitle": "Xem Trước Bản WebVTT Đã Chuyển",
    "previewEmpty": "Phụ đề WebVTT (.vtt) của bạn sẽ hiển thị tại đây ngay sau khi bạn nhập nội dung hoặc tải tệp SRT lên.",
    "optionsTitle": "Tùy Chọn Chuyển Đổi",
    "optIncludeCueNumbers": "Giữ lại số thứ tự từng đoạn phụ đề (cue index)",
    "optCleanTags": "Lọc bỏ các thẻ HTML cũ không được hỗ trợ (ví dụ: <font>)",
    "errorInvalidFile": "Vui lòng tải lên tệp phụ đề .srt hợp lệ.",
    "errorEmptyFile": "Nội dung văn bản hoặc tệp được cung cấp hoàn toàn trống.",
    "errorParseFailed": "Không thể nhận diện cấu trúc phụ đề SRT hợp lệ. Vui lòng đảm bảo mốc thời gian tuân theo chuẩn 00:00:00,000 --> 00:00:00,000."
  },
  "sections": {
    "whatIsSrt": {
      "title": "Tệp SRT là gì?",
      "content": [
        "Tệp SRT (SubRip Subtitle) là định dạng tệp phụ đề văn bản thuần túy phổ biến và có lịch sử lâu đời nhất trong ngành video kỹ thuật số. Xuất phát từ phần mềm SubRip trên Windows —vốn được phát triển để trích xuất phụ đề và mốc thời gian từ các đĩa DVD vật lý— định dạng .srt nhanh chóng trở thành tiêu chuẩn toàn cầu cho các trình phát đa phương tiện trên máy tính, TV thông minh, mạng chia sẻ ngang hàng và phần mềm biên tập video chuyên nghiệp.",
        "Về mặt cấu trúc, tệp SRT được tạo nên từ các khối phụ đề tuần tự ngăn cách nhau bởi các dòng trống. Mỗi khối gồm 4 thành phần bắt buộc: số thứ tự đoạn (1, 2, 3...), mốc thời gian biểu thị thời điểm xuất hiện và kết thúc của câu phụ đề (được định dạng chính xác theo chuẩn giờ:phút:giây,mili-giây: 00:00:01,250 --> 00:00:04,500), một hoặc nhiều dòng văn bản hội thoại, và kết thúc bằng một dòng trống ngắt đoạn.",
        "Mặc dù tệp SRT rất đơn giản và tương thích với hầu hết các phần mềm độc lập như VLC Media Player, MPV, HandBrake hay Adobe Premiere Pro, chúng lại được thiết kế từ trước kỷ nguyên web hiện đại. Do đó, định dạng SRT hoàn toàn thiếu sự hỗ trợ gốc trên các trình duyệt web HTML5 và không cung cấp bất kỳ cơ chế tiêu chuẩn nào để tùy chỉnh phông chữ linh hoạt, định vị vị trí khung hình hay định kiểu bằng CSS."
      ]
    },
    "whatIsVtt": {
      "title": "Tệp WebVTT (.vtt) là gì?",
      "content": [
        "WebVTT (Web Video Text Tracks) là định dạng tiêu chuẩn mở chính thức dành cho phụ đề, chú thích âm thanh và chỉ mục phân đoạn trên môi trường web, được khởi xướng và chuẩn hóa bởi World Wide Web Consortium (W3C) và WHATWG. Được giới thiệu cùng lúc với thông số kỹ thuật HTML5, WebVTT được hỗ trợ trực tiếp và tự nhiên bởi mọi trình duyệt web hiện đại —bao gồm Google Chrome, Mozilla Firefox, Apple Safari và Microsoft Edge— mà không cần bất kỳ plugin JavaScript bổ trợ nào hay phần mềm phát video cồng kềnh.",
        "Một tệp WebVTT luôn được nhận diện bởi dòng tiêu đề bắt buộc ở phần mở đầu: dòng đầu tiên của tệp nhất thiết phải bắt đầu bằng chuỗi ký tự \"WEBVTT\". Ngay sau phần tiêu đề này, tệp có thể chứa các khối siêu dữ liệu tùy chọn (như tác giả, tiêu đề, ngôn ngữ) hoặc các khai báo định kiểu CSS trước khi bắt đầu danh sách các đoạn phụ đề.",
        "Không dừng lại ở việc hiển thị câu thoại, WebVTT được kiến trúc riêng cho các giao diện web tương tác và thích ứng (responsive). Định dạng này tích hợp sẵn các thiết lập tọa độ hiển thị theo chiều dọc, căn chỉnh lề ngang, vị trí dòng và kích thước khung chữ. Hơn thế nữa, WebVTT liên kết chặt chẽ với CSS thông qua bộ chọn giả phần tử ::cue, cho phép các lập trình viên web làm chủ màu sắc, phông chữ, bóng đổ chữ và độ mờ nền trực tiếp từ tệp stylesheet của trang web."
      ]
    },
    "whatIsConverter": {
      "title": "Công Cụ Chuyển Đổi SRT sang VTT là gì?",
      "content": [
        "Công cụ chuyển đổi SRT sang VTT là tiện ích chuyên dụng được thiết kế nhằm nối liền khoảng cách giữa các định dạng sản xuất video truyền thống và nền tảng phát video trực tuyến hiện đại. Công cụ sẽ đọc và phân tích cú pháp tệp SubRip (.srt), xử lý các quy tắc toán học và cấu trúc văn bản, rồi xuất ra tệp WebVTT (.vtt) chuẩn xác, sẵn sàng nhúng ngay vào thẻ <video> của trang web HTML5.",
        "Điểm chuyển đổi kỹ thuật cốt lõi mà công cụ đảm nhiệm là chuẩn hóa dấu ngăn cách phần mili-giây trong mốc thời gian. Trong chuẩn SRT truyền thống, phần mili-giây được ngăn cách bởi dấu phẩy (ví dụ: 00:01:23,450). Tuy nhiên, thông số chuẩn WebVTT lại quy định bắt buộc phải dùng dấu chấm thập phân ASCII (00:01:23.450). Chỉ một dấu phẩy còn sót lại cũng khiến trình duyệt web từ chối toàn bộ dải phụ đề hoặc không thể hiển thị chữ trên màn hình.",
        "Toàn bộ quá trình phân tích cú pháp, chuyển đổi mốc thời gian và tạo tệp WebVTT của chúng tôi đều được xử lý 100% cục bộ ngay trong trình duyệt máy bạn. Không một dòng dữ liệu nào bị gửi lên máy chủ bên ngoài, đảm bảo tốc độ phản hồi tức thì, bảo mật tuyệt đối và không giới hạn dung lượng tệp."
      ]
    },
    "srtVsVtt": {
      "title": "So Sánh Kỹ Thuật Chi Tiết: SRT và VTT",
      "content": [
        "Mặc dù nhìn thoáng qua cấu trúc văn bản của SRT và WebVTT có nét tương đồng, giữa chúng có những điểm khác biệt kỹ thuật mang tính quyết định:",
        "1. Tiêu Đề Đầu Tệp Bắt Buộc: Tệp SRT bắt đầu ngay bằng số thứ tự \"1\" ở dòng đầu tiên. Ngược lại, tệp WebVTT BẮT BUỘC phải mở đầu bằng chữ \"WEBVTT\" trên dòng đầu tiên, theo sau có thể là các khối chú thích. Nếu trình duyệt không thấy chữ WEBVTT, tệp sẽ bị loại bỏ vì sai cú pháp.",
        "2. Quy Tắc Dấu Ngăn Cách Mili-Giây: SRT dùng dấu phẩy (00:00:05,200), trong khi WebVTT dùng dấu chấm (00:00:05.200). WebVTT còn cho phép viết tắt mốc thời gian không có giờ (ví dụ: 05.200 --> 08.400) cho video ngắn dưới 1 tiếng, dù việc duy trì đủ định dạng HH:MM:SS.mmm vẫn là thực hành tốt nhất.",
        "3. Định Vị Khung Hình & Tọa Độ Hiển Thị: SRT không có cơ chế chuẩn hóa vị trí; chữ luôn mặc định nằm ở chính giữa góc dưới màn hình. WebVTT hỗ trợ trực tiếp các tham số tọa độ gắn kèm mốc thời gian (\"line:10%\", \"position:80%\", \"align:left\", \"size:50%\"), giúp phụ đề không đè lên logo, phụ đề tiếng gốc hay tên diễn giả.",
        "4. Khả Năng Định Kiểu & Trang Trí: SRT chỉ dựa vào một vài thẻ thô sơ như <i>, <b>, <font color=\"...\"> vốn thường bị các trình duyệt chặn vì lý do an toàn. WebVTT hỗ trợ thẻ giọng nói nhân vật (<v Tên>), chú âm ruby, gán class CSS (<c.nhanmanh>) và định dạng toàn diện qua CSS với bộ chọn ::cue.",
        "5. Tiêu Chuẩn Phát Trực Tuyến HLS & DASH: Các công nghệ truyền phát video thích ứng hiện nay như Apple HLS và MPEG-DASH luôn đóng gói dải phụ đề dưới dạng các phân đoạn WebVTT. Việc đưa tệp SRT chưa chuyển đổi vào danh sách HLS sẽ gây lỗi phát hình lập tức trên iPhone, iPad và trình duyệt Safari."
      ]
    },
    "whyConvert": {
      "title": "Tại Sao Bạn Nên Chuyển Đổi SRT sang VTT?",
      "benefits": [
        {
          "title": "Tương Thích Trực Tiếp Với Video HTML5",
          "description": "Hoạt động mượt mà trên Chrome, Safari, Firefox và Edge qua thẻ <track> mà không cần cài thêm bất kỳ thư viện JavaScript phức tạp nào."
        },
        {
          "title": "Tùy Biến Giao Diện Bằng CSS với ::cue",
          "description": "Dễ dàng thay đổi phông chữ, màu sắc chữ, độ trong suốt của nền, bóng đổ và đường viền phụ đề cho ăn khớp với bộ nhận diện của website."
        },
        {
          "title": "Kiểm Soát Vị Trí Hiển Thị Linh Hoạt",
          "description": "Chủ động đặt phụ đề ở phía trên, phía dưới hoặc hai bên để không che khuất các thông tin đồ họa hay khuôn mặt nhân vật trong video."
        },
        {
          "title": "Chuẩn Mực Cho Phát Trực Tuyến HLS & DASH",
          "description": "Định dạng bắt buộc trên các nền tảng phát video phân phối theo luồng (Apple HLS, AWS Elemental, Cloudflare Stream) khi quản lý nhiều ngôn ngữ."
        },
        {
          "title": "Nâng Cao Tiếp Cận & Tối Ưu Hóa SEO Video",
          "description": "Hỗ trợ người khiếm thính tiếp cận trọn vẹn nội dung và giúp các thuật toán của Google lập chỉ mục chuẩn xác từng câu hội thoại."
        },
        {
          "title": "Cực Kỳ Nhẹ Nhàng & Tải Tức Thì",
          "description": "Là tệp văn bản thuần định dạng UTF-8 với dung lượng chỉ vài kilobyte, tải tức thời trên mạng di động mà không gây tụt chỉ số Core Web Vitals."
        }
      ]
    },
    "howToConvert": {
      "title": "Cách Chuyển Đổi SRT sang VTT Trong 3 Bước Nhanh Chóng",
      "steps": [
        {
          "title": "1. Dán Văn Bản Hoặc Tải Tệp .srt Lên",
          "description": "Dán trực tiếp nội dung phụ đề SRT vào khung bên trái hoặc kéo thả tệp .srt vào hộp tải tệp. Bạn cũng có thể bấm \"Chọn Tệp SRT\"."
        },
        {
          "title": "2. Xử Lý Tự Động Ngay Trong Trình Duyệt",
          "description": "Hệ thống sẽ lập tức phân tích từng đoạn phụ đề, thêm tiêu đề WEBVTT, đổi dấu phẩy thành dấu chấm và hiển thị bản xem trước theo thời gian thực."
        },
        {
          "title": "3. Tải Về Hoặc Sao Chép Bản WebVTT",
          "description": "Bấm nút \"Tải Về .vtt\" để lưu tệp phụ đề mới về máy, hoặc bấm \"Sao Chép vào Bộ Nhớ\" để dán ngay mã phụ đề vào dự án trang web của bạn."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Các Lỗi Định Dạng SRT/VTT Phổ Biến & Cách Khắc Phục",
      "items": [
        {
          "title": "Lỗi: Phụ đề không hiển thị trên trình duyệt web (Dấu Phẩy Thời Gian)",
          "description": "Nguyên nhân: Tệp vẫn còn dùng dấu phẩy phân cách mili-giây kiểu SRT (ví dụ: 00:00:02,500). Trình duyệt sẽ báo lỗi cú pháp. Khắc phục: Dùng công cụ của chúng tôi để tự động đổi toàn bộ dấu phẩy thành dấu chấm (00:00:02.500)."
        },
        {
          "title": "Lỗi: Trình duyệt từ chối tệp vì sai cú pháp (Thiếu Tiêu Đề WEBVTT)",
          "description": "Nguyên nhân: Người dùng chỉ đổi đuôi tệp từ .srt thành .vtt mà không thêm tiêu đề. Khắc phục: Dòng đầu tiên của tệp bắt buộc phải có chữ \"WEBVTT\"."
        },
        {
          "title": "Lỗi: Chữ bị lỗi font hoặc mất dấu tiếng Việt (Mã Hóa & BOM)",
          "description": "Nguyên nhân: Tệp được lưu dưới dạng ANSI, UTF-16 hoặc UTF-8 có chứa ký tự BOM ẩn. Khắc phục: Công cụ của chúng tôi tự động làm sạch ký tự BOM và chuẩn hóa về mã UTF-8 tiêu chuẩn."
        },
        {
          "title": "Lỗi: Mốc thời gian bị đè lên nhau gây chớp giật chữ",
          "description": "Nguyên nhân: Đoạn 1 kết thúc lúc 00:00:05.000 trong khi đoạn 2 đã bắt đầu từ 00:00:04.500. Khắc phục: Đảm bảo thời điểm kết thúc của câu trước phải nhỏ hơn hoặc bằng thời điểm bắt đầu câu sau."
        },
        {
          "title": "Lỗi: Trình duyệt chặn phụ đề do chính sách CORS",
          "description": "Nguyên nhân: Khi tệp .vtt được đặt trên một tên miền hoặc CDN khác với trang chứa video, trình duyệt sẽ chặn tải tệp. Khắc phục: Cài đặt cấu hình máy chủ gửi kèm tiêu đề \"Access-Control-Allow-Origin: *\" và MIME type \"text/vtt\"."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "Hướng Dẫn Sử Dụng Phụ Đề VTT Với Thẻ Video HTML5",
      "description": "Để tích hợp phụ đề WebVTT vào trình phát video trên trang web, bạn chỉ cần dùng thẻ <track> lồng bên trong thẻ <video>. Dưới đây là mẫu mã nguồn chuẩn mực được áp dụng phổ biến trên toàn cầu:",
      "codeSnippet": "<video controls width=\"800\" poster=\"/hinh-anh/anh-bia.jpg\">\n  <!-- Các tệp nguồn video chính -->\n  <source src=\"/video/huong-dan.mp4\" type=\"video/mp4\">\n  <source src=\"/video/huong-dan.webm\" type=\"video/webm\">\n\n  <!-- Dải phụ đề WebVTT -->\n  <track \n    kind=\"subtitles\" \n    src=\"/phu-de/huong-dan-vi.vtt\" \n    srclang=\"vi\" \n    label=\"Tiếng Việt\" \n    default>\n  \n  <track \n    kind=\"subtitles\" \n    src=\"/phu-de/huong-dan-en.vtt\" \n    srclang=\"en\" \n    label=\"English\">\n\n  <p>Trình duyệt của bạn không hỗ trợ video HTML5. <a href=\"/video/huong-dan.mp4\">Tải video về</a> để xem.</p>\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "Xác định loại dải văn bản. Chọn \"subtitles\" cho bản dịch lời thoại thông thường, hoặc \"captions\" cho phụ đề có mô tả âm thanh phục vụ người khiếm thính."
        },
        {
          "term": "src=\"duong-dan/tep.vtt\"",
          "description": "Địa chỉ URL tương đối hoặc tuyệt đối trỏ tới tệp WebVTT. Đảm bảo máy chủ trả về tệp cùng tiêu đề Content-Type \"text/vtt; charset=utf-8\"."
        },
        {
          "term": "srclang=\"vi\"",
          "description": "Mã định danh ngôn ngữ theo chuẩn BCP 47 (ví dụ: \"vi\" cho tiếng Việt, \"en\" cho tiếng Anh), cần thiết cho bộ đọc màn hình và công cụ dịch tự động."
        },
        {
          "term": "label=\"Tiếng Việt\"",
          "description": "Tên ngôn ngữ thân thiện hiển thị trên menu lựa chọn phụ đề (nút CC) của trình phát video để người xem thuận tiện lựa chọn."
        },
        {
          "term": "default",
          "description": "Thuộc tính chỉ định dải phụ đề này sẽ tự động được bật ngay khi video bắt đầu chạy, trừ phi người dùng có thiết lập riêng khác."
        }
      ]
    },
    "comparison": {
      "title": "Bảng So Sánh Kỹ Thuật: SRT vs WebVTT",
      "description": "Đối chiếu chi tiết các tiêu chuẩn kỹ thuật, khả năng hỗ trợ và thông số giữa SubRip (.srt) và WebVTT (.vtt):",
      "headers": [
        "Tiêu Chí Kỹ Thuật",
        "SubRip (.srt)",
        "WebVTT (.vtt)"
      ],
      "rows": [
        [
          "Môi Trường Sử Dụng Chính",
          "Phần mềm xem video máy tính (VLC) & dựng phim",
          "Trình duyệt web HTML5, ứng dụng di động & streaming"
        ],
        [
          "Tiêu Đề Mở Đầu Bắt Buộc",
          "Không có (bắt đầu ngay với số 1)",
          "Bắt buộc có chữ \"WEBVTT\" trên dòng 1"
        ],
        [
          "Dấu Ngăn Mili-Giây",
          "Dấu phẩy (ví dụ: 00:01:23,450)",
          "Dấu chấm (ví dụ: 00:01:23.450)"
        ],
        [
          "Hỗ Trợ Trực Tiếp Trên Web",
          "Không (cần thư viện JavaScript bổ trợ)",
          "Có (hỗ trợ gốc qua thẻ <track> trên mọi trình duyệt)"
        ],
        [
          "Khả Năng Định Kiểu Phụ Đề",
          "Rất hạn chế với vài thẻ cũ (<i>, <b>, <font>)",
          "Định kiểu toàn diện bằng CSS qua bộ chọn ::cue"
        ],
        [
          "Định Vị Tọa Độ Trên Màn Hình",
          "Không hỗ trợ chuẩn hóa (mặc định căn giữa dưới)",
          "Tích hợp sẵn các thuộc tính: line, position, size, align"
        ],
        [
          "Phát Trực Tuyến HLS / DASH",
          "Không tương thích (bắt buộc phải chuyển đổi)",
          "Định dạng chuẩn tắc cho danh sách phụ đề streaming"
        ],
        [
          "Hỗ Trợ Ghi Chú & Siêu Dữ Liệu",
          "Không có cú pháp chú thích chính thức",
          "Hỗ trợ các khối NOTE và khai báo STYLE ở đầu tệp"
        ],
        [
          "Đuôi Tệp Thông Dụng",
          ".srt",
          ".vtt"
        ],
        [
          "Loại MIME Chuẩn",
          "application/x-subrip",
          "text/vtt; charset=utf-8"
        ]
      ]
    },
    "privacy": {
      "title": "Cam Kết Bảo Mật & Riêng Tư Tuyệt Đối 100% Trên Trình Duyệt",
      "content": [
        "Tại SRTConverters.info, chúng tôi đặt sự an toàn và quyền riêng tư của dữ liệu người dùng lên hàng đầu. Mọi thao tác chuyển đổi định dạng giữa SRT và WebVTT đều diễn ra hoàn toàn bên trong trình duyệt của bạn nhờ mã nguồn JavaScript chạy phía máy khách.",
        "Nội dung phụ đề, bản ghi chép cuộc họp, kịch bản chưa công bố và các đoạn hội thoại mang tính bảo mật của bạn tuyệt đối không bao giờ bị tải lên hay lưu giữ trên bất kỳ máy chủ bên ngoài nào. Bạn thậm chí có thể ngắt kết nối mạng sau khi tải xong trang web và công cụ vẫn hoạt động hoàn hảo bình thường.",
        "Mô hình xử lý cục bộ này triệt tiêu hoàn toàn nguy cơ rò rỉ thông tin, giúp công cụ trở thành sự lựa chọn an tâm tuyệt đối cho các buổi thuyết trình nội bộ doanh nghiệp, tài liệu ghi âm pháp lý và dữ liệu y tế cần bảo mật."
      ]
    }
  },
  "faqs": [
    {
      "question": "Tôi có thể chỉ đổi đuôi tệp từ .srt thành .vtt được không?",
      "answer": "Không được. Việc chỉ đổi tên đuôi tệp sẽ không tạo ra tệp WebVTT hợp lệ. WebVTT yêu cầu bắt buộc phải có tiêu đề \"WEBVTT\" ở đầu tệp và các mốc thời gian phải dùng dấu chấm ngăn cách mili-giây thay vì dấu phẩy (00:00:01.000 thay vì 00:00:01,000). Các trình duyệt web sẽ từ chối hiển thị tệp SRT chỉ được đổi tên."
    },
    {
      "question": "Tại sao phụ đề WebVTT của tôi không xuất hiện trên trình phát video HTML5?",
      "answer": "Thường có 3 nguyên nhân phổ biến: 1) Tệp thiếu dòng tiêu đề \"WEBVTT\" ở dòng số 1; 2) Mốc thời gian vẫn dùng dấu phẩy chưa được đổi thành dấu chấm; hoặc 3) Máy chủ web không gửi đúng MIME type (text/vtt) hay bị chặn bởi chính sách CORS. Công cụ của chúng tôi giúp bạn chuẩn hóa 100% cú pháp này."
    },
    {
      "question": "Sự khác nhau giữa phụ đề dịch (subtitles) và phụ đề cho người khiếm thính (captions) là gì?",
      "answer": "Phụ đề dịch (kind=\"subtitles\") nhắm đến người nghe được âm thanh nhưng cần dịch ngôn ngữ; loại này chỉ chép lại câu thoại. Phụ đề cho người khiếm thính (kind=\"captions\") chép lại cả câu thoại lẫn mô tả âm thanh nền, tiếng động và tên nhân vật (ví dụ: [Vỗ tay], [Tiếng nhạc rộn ràng]). WebVTT hỗ trợ hoàn hảo cả hai qua thuộc tính kind."
    },
    {
      "question": "Làm thế nào để tùy biến kiểu dáng chữ của phụ đề WebVTT bằng CSS?",
      "answer": "Bạn có thể tùy biến phụ đề WebVTT trực tiếp trong tệp CSS của trang web bằng cách sử dụng bộ chọn giả phần tử ::cue. Ví dụ: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }"
    },
    {
      "question": "WebVTT có hoạt động trên điện thoại di động như iPhone (Safari) và Android (Chrome) không?",
      "answer": "Có! WebVTT được hỗ trợ đầy đủ trên tất cả các trình duyệt di động hiện đại, bao gồm Safari trên iOS/iPadOS và Chrome trên Android. Khi xem video ở chế độ toàn màn hình trên điện thoại, hệ điều hành sẽ tự động dùng dải phụ đề WebVTT để hiển thị chữ theo đúng cài đặt trợ năng của máy."
    },
    {
      "question": "Tôi có thể tải tệp WebVTT (.vtt) lên YouTube và Vimeo không?",
      "answer": "Hoàn toàn được. Cả YouTube và Vimeo đều hỗ trợ tải lên tệp WebVTT song song với SRT. WebVTT đặc biệt có ưu thế lớn nếu phụ đề của bạn có thiết lập tọa độ tùy chỉnh để tránh bị che các thông tin đồ họa ở góc dưới màn hình."
    },
    {
      "question": "Có giới hạn dung lượng tệp khi chuyển đổi SRT sang VTT trên trang này không?",
      "answer": "Không có bất kỳ giới hạn nào. Vì toàn bộ tiến trình diễn ra trực tiếp trên máy của bạn mà không truyền tải dữ liệu qua internet, chúng tôi không áp đặt giới hạn kích thước tệp, số lượng từ hay phí dịch vụ. Bạn có thể chuyển đổi các bộ phim dài tập hay các khóa học hàng chục tiếng đồng hồ một cách thoải mái."
    },
    {
      "question": "Công cụ có bảo toàn tiếng Việt có dấu, ký tự đặc biệt và emoji không?",
      "answer": "Có. Công cụ của chúng tôi xử lý văn bản dựa trên chuẩn mã hóa UTF-8 gốc, đảm bảo bảo toàn 100% tiếng Việt có dấu (kể cả các dấu mũ, móc, thanh điệu phức tạp), các bảng chữ cái quốc tế (tiếng Ả Rập, Nhật Bản, Hàn Quốc) và biểu tượng cảm xúc Unicode mà không hề bị lỗi ký tự."
    }
  ]
};
