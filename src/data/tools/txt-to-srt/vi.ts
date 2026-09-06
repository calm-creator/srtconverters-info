import type { TxtToSrtDetailContent } from "./types";

export const viContent: TxtToSrtDetailContent = {
  "metaTitle": "Chuyển Đổi TXT Sang SRT Miễn Phí – Tạo Phụ Đề Từ Văn Bản",
  "metaDescription": "Chuyển đổi tệp TXT và văn bản thô sang định dạng phụ đề SRT chuẩn trực tuyến. Tự động tạo mốc thời gian, xử lý 100% trong trình duyệt hoàn toàn riêng tư.",
  "h1": "Chuyển Đổi TXT Sang SRT",
  "heroDescription": "Chuyển đổi kịch bản, bản ghi âm và tài liệu văn bản thành tệp phụ đề SubRip (.srt) với mã thời gian tuần tự tự động và linh hoạt. Nhanh chóng, bảo mật và miễn phí.",
  "toolName": "Chuyển Đổi TXT Sang SRT",
  "timingNotice": "Lưu ý về Thời gian: Tệp văn bản thuần không chứa mã thời gian. Công cụ sẽ tự động tạo các khối phụ đề có số thứ tự và mốc thời gian theo cài đặt của bạn, cho phép bạn tinh chỉnh dễ dàng trong phần mềm dựng video.",
  "ui": {
    "pasteTitle": "Nhập Văn Bản Thuần Túy (.txt)",
    "pastePlaceholder": "Dán văn bản hoặc bản ghi thoại của bạn vào đây (mỗi dòng hoặc đoạn văn sẽ thành một câu phụ đề)...\n\nVí dụ:\nXin chào và chào mừng bạn đến với video hướng dẫn.\nTrong video này, chúng ta tìm hiểu về chuyển đổi phụ đề.\nHãy cùng bắt đầu ngay bây giờ.",
    "orDivider": "HOẶC",
    "uploadTitle": "Lựa chọn 2 — Tải lên tệp TXT",
    "convertButton": "Chuyển Đổi Sang SRT",
    "clearButton": "Xóa",
    "trySampleButton": "Dùng Bản Mẫu",
    "livePreviewTitle": "Phụ Đề Đã Tạo (.srt)",
    "errorNoInput": "Vui lòng dán văn bản hoặc tải lên tệp .txt để chuyển đổi.",
    "pastedContentSource": "Nội Dung Đã Dán",
    "dropzoneTitle": "Kéo thả tệp .txt của bạn vào đây",
    "dropzoneSubtitle": "hoặc nhấp để chọn tệp từ thiết bị",
    "browseButton": "Chọn Tệp TXT",
    "dropActiveText": "Thả tệp TXT vào đây...",
    "fileSelected": "Tệp đã chọn",
    "fileNameLabel": "Tên Tệp",
    "fileSizeLabel": "Kích Thước Tệp",
    "cueCountLabel": "Số Phụ Đề Tạo Được",
    "characterCountLabel": "Ký Tự",
    "downloadAction": "Tải về .srt",
    "copyAction": "Sao Chép Vào Bộ Nhớ Tạm",
    "copiedSuccess": "Đã sao chép vào bộ nhớ tạm!",
    "resetAction": "Chuyển Đổi Tệp Khác",
    "previewTitle": "Xem Trước SRT Đã Tạo",
    "previewEmpty": "Phụ đề SRT sẽ hiển thị ở đây ngay sau khi bạn nhập nội dung.",
    "timingOptionsTitle": "Cài Đặt Thời Gian & Ngắt Dòng",
    "optStartTime": "Thời Gian Bắt Đầu (giây)",
    "optDuration": "Thời Lượng Mỗi Câu (giây)",
    "optGap": "Khoảng Cách Giữa Các Câu (giây)",
    "optSplitMethod": "Ngắt Dòng Theo",
    "optSplitParagraphs": "Đoạn Văn (Dòng Đôi)",
    "optSplitLines": "Từng Dòng (Dòng Đơn)",
    "optSplitSentences": "Câu Văn (. ? !)",
    "timingNoticeBadge": "Đã Tạo Thời Gian Tự Động",
    "errorInvalidFile": "Vui lòng tải lên tệp văn bản (.txt) hợp lệ.",
    "errorEmptyFile": "Tệp tải lên bị trống.",
    "errorParseFailed": "Không thể trích xuất các dòng văn bản hợp lệ."
  },
  "sections": {
    "whatIsTxt": {
      "title": "Tệp văn bản thuần (TXT) là gì?",
      "content": [
        "Tệp TXT (.txt) là định dạng văn bản số cơ bản nhất trong tin học. Định dạng này chỉ lưu trữ các ký tự chữ, số, từ ngữ và dấu ngắt dòng không có định dạng phức tạp, thường được mã hóa bằng chuẩn UTF-8 hoặc ASCII.",
        "Vì không chứa mã định dạng riêng hay phần đầu dữ liệu nặng nề, tệp TXT có thể mở và đọc được trên mọi hệ điều hành, điện thoại và trình soạn thảo. Người sáng tạo nội dung thường dùng tệp TXT để soạn kịch bản lồng tiếng, ghi chép phỏng vấn và dịch phụ đề.",
        "Tuy nhiên, tệp văn bản thuần hoàn toàn không có tọa độ thời gian và số thứ tự cần thiết để trình phát video hiển thị phụ đề khớp với tiếng nói. Mở tệp TXT trên YouTube hay phần mềm phát video sẽ không thể hiển thị phụ đề đúng thời điểm."
      ]
    },
    "whatIsSrt": {
      "title": "Tệp phụ đề SRT (SubRip) là gì?",
      "content": [
        "Tệp SRT (SubRip Text) là tiêu chuẩn toàn cầu cho phụ đề video kỹ thuật số. Được hỗ trợ bởi YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve và các trình phát như VLC, tệp SRT sắp xếp lời thoại thành các khối thời gian rõ ràng.",
        "Mỗi khối phụ đề trong tệp SRT hợp lệ phải tuân thủ nghiêm ngặt cấu trúc 4 phần:",
        "1. Số thứ tự tuần tự tăng dần (1, 2, 3, 4...)",
        "2. Mốc thời gian bắt đầu và kết thúc chính xác theo định dạng HH:MM:SS,mmm --> HH:MM:SS,mmm (Giờ:Phút:Giây,Mili-giây)",
        "3. Một hoặc nhiều dòng văn bản phụ đề hiển thị",
        "4. Một dòng trống bắt buộc để phân cách với khối phụ đề kế tiếp",
        "Nếu thiếu cú pháp này, trình phát video và phần mềm chỉnh sửa không thể biết khi nào phụ đề xuất hiện, hiển thị trong bao lâu và khi nào cần chuyển sang câu tiếp theo."
      ]
    },
    "whatIsConverter": {
      "title": "Công cụ chuyển đổi TXT sang SRT là gì?",
      "content": [
        "Công cụ chuyển đổi TXT sang SRT là giải pháp định dạng thông minh giúp nối liền văn bản thuần chưa có mốc thời gian với tệp phụ đề video được đồng bộ chuẩn xác.",
        "Công cụ tiếp nhận bản ghi chép, kịch bản hoặc lời dịch và chuyển đổi chúng thành tệp SubRip (.srt) tiêu chuẩn với đầy đủ số thứ tự, mũi tên thời gian (-->), độ chính xác mili-giây và khoảng cách dòng chuẩn.",
        "Toàn bộ quy trình diễn ra 100% trong bộ nhớ trình duyệt của bạn thông qua các API Web hiện đại. Bản ghi chép bảo mật và tài liệu của bạn không bao giờ rời khỏi thiết bị hay bị tải lên máy chủ bên ngoài."
      ]
    },
    "howToConvert": {
      "title": "Hướng dẫn từng bước chuyển đổi TXT sang SRT",
      "steps": [
        {
          "title": "1. Dán văn bản hoặc tải tệp lên",
          "description": "Dán trực tiếp văn bản vào khung soạn thảo hoặc chọn tệp .txt từ máy tính hoặc điện thoại của bạn."
        },
        {
          "title": "2. Cấu hình thời gian và phương thức tách dòng",
          "description": "Chọn tách phụ đề theo dòng, đoạn văn hoặc câu, và điều chỉnh thời lượng hiển thị (ví dụ 3.0s) cùng khoảng nghỉ giữa các câu (ví dụ 0.5s)."
        },
        {
          "title": "3. Xem trước trực tiếp tức thì",
          "description": "Khung xem trước bên cạnh sẽ lập tức tạo mã thời gian phụ đề SRT hợp lệ với độ chính xác đến từng mili-giây."
        },
        {
          "title": "4. Tải xuống hoặc sao chép SRT",
          "description": "Nhấp vào \"Tải xuống .srt\" để lưu tệp về máy, hoặc sao chép văn bản để dán vào phần mềm chỉnh sửa video của bạn."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Tại sao chỉ đổi đuôi tệp từ .txt thành .srt lại không hiệu quả?",
      "content": [
        "Nhiều người dùng nhầm tưởng rằng chỉ cần đổi tên tệp từ 'ban_dich.txt' thành 'ban_dich.srt' là trình phát video sẽ tự động nhận diện phụ đề.",
        "Đổi đuôi mở rộng chỉ giúp hệ điều hành biết nên dùng ứng dụng nào để mở tệp, chứ không thay đổi cấu trúc bên trong. Các trình phát như VLC đòi hỏi đúng cú pháp SubRip. Nếu gặp các đoạn văn bản thiếu số thứ tự và mốc thời gian '00:00:00,000 --> 00:00:00,000', chúng sẽ bỏ qua tệp hoặc báo lỗi định dạng.",
        "Đổi đuôi tệp chỉ có tác dụng nếu tệp văn bản đó vốn dĩ đã chứa nội dung SRT chuẩn nhưng bị lưu nhầm đuôi .txt. Đối với văn bản thông thường, việc chuyển đổi qua công cụ của chúng tôi là bắt buộc."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Cách thức tự động tạo mốc thời gian và đồng bộ hóa",
      "content": [
        "Vì tệp văn bản thông thường không có dữ liệu thời gian, công cụ áp dụng thuật toán phân bổ thời lượng tuần tự hợp lý.",
        "Bắt đầu từ thời điểm bạn chỉ định (mặc định 00:00:01,000), mỗi câu phụ đề sẽ được gán thời lượng hiển thị mong muốn (ví dụ 3.0 giây). Sau mỗi câu, công cụ tự động thêm khoảng dừng (ví dụ 0.5 giây) trước khi bắt đầu câu tiếp theo.",
        "Nếu văn bản của bạn đã có sẵn dấu mốc thời gian (như [01:23] hoặc 00:02:15), bộ phân tích thông minh sẽ nhận diện và tính toán thời gian bắt đầu và kết thúc tương ứng.",
        "Lời khuyên đồng bộ thực tế: Thời gian tự động mang lại khung phụ đề chuẩn cú pháp. Vì người nói thường thay đổi tốc độ và ngắt nghỉ tự nhiên, bạn có thể tinh chỉnh nhẹ nhàng trên Premiere Pro, DaVinci Resolve hoặc YouTube Studio để khớp hoàn hảo với giọng đọc."
      ]
    },
    "realWorldUseCases": {
      "title": "Các trường hợp sử dụng phổ biến của chuyển đổi TXT sang SRT",
      "cases": [
        {
          "title": "Phụ đề video YouTube và tối ưu hóa SEO",
          "description": "Tải phụ đề chuẩn lên YouTube giúp cải thiện thứ hạng tìm kiếm, tiếp cận người xem quốc tế và tăng thời lượng giữ chân khán giả."
        },
        {
          "title": "Bản ghi âm Podcast và Hội thảo trực tuyến",
          "description": "Chuyển đổi bản ghi âm phỏng vấn thành phụ đề cho video ngắn, audiogram mạng xã hội và đoạn trích giới thiệu."
        },
        {
          "title": "Dịch phụ đề phim và nội dung nước ngoài",
          "description": "Dịch kịch bản video sang văn bản thuần, chuyển đổi sang SRT với nhịp độ tương thích và đưa vào phần mềm dựng phim."
        },
        {
          "title": "Hậu kỳ văn bản nhận dạng giọng nói AI",
          "description": "Xử lý dữ liệu thô từ Whisper AI hoặc các ứng dụng chuyển giọng nói thành phụ đề sẵn sàng sử dụng."
        },
        {
          "title": "Bài giảng trực tuyến và Giáo dục E-learning",
          "description": "Cung cấp phụ đề hỗ trợ tiếp cận cho các khóa học đại học, video đào tạo và bài giảng hướng dẫn."
        },
        {
          "title": "Video ngắn dọc trên mạng xã hội (Reels, TikTok)",
          "description": "Đưa tệp SRT vào CapCut hoặc Premiere để tạo hiệu ứng phụ đề động bắt mắt cho các video ngắn."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Các lỗi thường gặp và cách khắc phục",
      "items": [
        {
          "title": "Phụ đề biến mất quá nhanh hoặc hiển thị quá lâu",
          "description": "Điều chỉnh cài đặt Thời lượng Phụ đề trong bảng tùy chọn. Lời thoại nhanh thường cần 2 đến 3 giây, trong khi câu dài cần 4 đến 5 giây."
        },
        {
          "title": "Các câu phụ đề bị chồng chéo thời gian lên nhau",
          "description": "Công cụ của chúng tôi tính toán khoảng cách toán học để chống chồng chéo. Hãy đảm bảo Khoảng nghỉ được đặt từ 0.2 đến 0.5 giây."
        },
        {
          "title": "Lỗi phông chữ tiếng Việt (ký tự có dấu bị lỗi)",
          "description": "Hiện tượng này xảy ra khi tệp được lưu ở bảng mã ANSI cũ. Công cụ xử lý hoàn toàn bằng chuẩn UTF-8 để giữ nguyên vẹn dấu tiếng Việt."
        },
        {
          "title": "Dòng phụ đề quá dài khi xem trên điện thoại",
          "description": "Chọn phương thức tách dòng theo 'Câu' hoặc 'Từng dòng' thay vì tách theo đoạn văn để giữ mỗi dòng dưới 42 ký tự."
        }
      ]
    },
    "comparison": {
      "title": "So sánh kỹ thuật giữa tệp TXT và tệp SRT",
      "description": "Điểm qua những khác biệt kỹ thuật cơ bản giữa văn bản thô và tệp phụ đề SubRip đồng bộ.",
      "headers": [
        "Khía cạnh kỹ thuật",
        "Văn bản thuần (.txt)",
        "Phụ đề SubRip (.srt)"
      ],
      "rows": [
        [
          "Tọa độ thời gian",
          "Không có (chưa định thời)",
          "Chính xác đến mili-giây (HH:MM:SS,mmm)"
        ],
        [
          "Đánh số thứ tự",
          "Không có",
          "Bắt buộc có số nguyên tăng dần (1, 2, 3...)"
        ],
        [
          "Ký hiệu mũi tên thời gian",
          "Không có",
          "Dấu mũi tên bắt buộc (-->)"
        ],
        [
          "Hỗ trợ trên trình phát",
          "Không thể tải làm phụ đề",
          "Hỗ trợ gốc trên VLC, YouTube, v.v."
        ],
        [
          "Đưa vào phần mềm dựng",
          "Phải căn chỉnh thủ công",
          "Tự động khớp vào rãnh phụ đề dòng thời gian"
        ],
        [
          "Thẻ định dạng",
          "Chỉ có văn bản thuần",
          "Hỗ trợ các thẻ cơ bản (<i>, <b>, <font>)"
        ],
        [
          "Ưu điểm chính",
          "Dễ đọc, lưu trữ tài liệu",
          "Đồng bộ âm thanh và hình ảnh chính xác"
        ]
      ]
    },
    "privacy": {
      "title": "Cam kết bảo mật 100% trực tiếp trong trình duyệt",
      "content": [
        "Bảo mật và quyền riêng tư của bạn luôn được đặt lên hàng đầu. Khác với các công cụ trực tuyến tải dữ liệu lên máy chủ từ xa, công cụ của chúng tôi xử lý hoàn toàn trong bộ nhớ trình duyệt trên thiết bị của bạn.",
        "Kịch bản video, bản ghi chép cuộc họp và tài liệu riêng tư không bao giờ truyền qua mạng Internet. Bạn thậm chí có thể ngắt kết nối mạng sau khi tải trang và công cụ vẫn hoạt động bình thường."
      ]
    }
  },
  "faqs": [
    {
      "question": "Làm thế nào để chuyển đổi tệp TXT sang SRT?",
      "answer": "Dán văn bản vào khung soạn thảo hoặc tải tệp .txt lên. Chọn cách phân tách (theo dòng, đoạn hoặc câu) và thời lượng hiển thị. Công cụ sẽ tự động tính toán mã thời gian và xuất tệp .srt chuẩn để bạn tải về ngay."
    },
    {
      "question": "Tôi có thể chuyển TXT sang SRT mà không cần cài đặt phần mềm không?",
      "answer": "Có. Công cụ hoạt động mượt mà trên mọi trình duyệt web hiện đại trên máy tính, máy tính bảng và điện thoại mà không cần cài đặt thêm bất kỳ phần mềm hay tiện ích nào."
    },
    {
      "question": "Tệp TXT thông thường có chứa mốc thời gian phụ đề không?",
      "answer": "Không. Tệp TXT chỉ chứa chữ và dấu ngắt dòng. Vì vậy công cụ của chúng tôi sẽ tự động thêm mốc thời gian và số thứ tự dựa trên cài đặt của bạn."
    },
    {
      "question": "Công cụ tạo mốc thời gian như thế nào?",
      "answer": "Công cụ áp dụng thuật toán tăng tiến theo thời gian. Bắt đầu từ mốc bạn chọn (ví dụ 1.0s), mỗi câu phụ đề nhận thời lượng hiển thị (ví dụ 3.0s), sau đó thêm khoảng nghỉ (ví dụ 0.5s) trước khi câu tiếp theo xuất hiện."
    },
    {
      "question": "Tôi có thể chuyển đổi toàn bộ kịch bản phim dài sang phụ đề SRT không?",
      "answer": "Có. Bạn chỉ cần sao chép toàn bộ kịch bản và dán vào công cụ. Tùy chọn tách theo dòng hoặc theo câu sẽ giúp biến từng lời thoại thành một câu phụ đề riêng biệt."
    },
    {
      "question": "Tệp SRT sau khi chuyển đổi có dùng được trên YouTube không?",
      "answer": "Có. Tệp .srt được tạo hoàn toàn tuân thủ tiêu chuẩn SubRip chính thức và có thể tải trực tiếp lên YouTube Studio trong mục Phụ đề của video."
    },
    {
      "question": "Tại sao chỉ đổi đuôi từ .txt thành .srt lại không hoạt động?",
      "answer": "Vì việc đổi tên không làm thay đổi cấu trúc tệp. Trình phát video cần có số thứ tự và mũi tên thời gian chuẩn (00:00:01,000 --> 00:00:04,000) mới có thể đọc được phụ đề."
    },
    {
      "question": "Tôi có thể chỉnh sửa thời gian của tệp SRT sau khi tải về không?",
      "answer": "Có. Tệp .srt là định dạng văn bản mở, bạn có thể mở bằng Notepad hoặc đưa vào phần mềm dựng phim (Premiere Pro, DaVinci Resolve) và phần mềm chỉnh phụ đề (Subtitle Edit) để tinh chỉnh."
    },
    {
      "question": "Công cụ có hỗ trợ tiếng Việt có dấu và các ngôn ngữ khác không?",
      "answer": "Có. Công cụ hỗ trợ bảng mã Unicode UTF-8 toàn diện cho tiếng Việt đầy đủ dấu, cũng như tiếng Ả Rập, tiếng Nhật, tiếng Hàn và các ngôn ngữ quốc tế khác mà không bị lỗi phông chữ."
    },
    {
      "question": "Tệp của tôi có bị tải lên máy chủ nào không?",
      "answer": "Không. Quá trình xử lý diễn ra 100% nội bộ trên máy của bạn bằng JavaScript trong trình duyệt. Không có văn bản nào bị gửi qua mạng."
    },
    {
      "question": "Cần làm gì nếu phụ đề bị lệch một chút so với tiếng nói trong video?",
      "answer": "Do thời gian tự động dựa trên mức ước tính trung bình, bạn có thể tinh chỉnh lại thời lượng trong công cụ hoặc kéo trượt rãnh phụ đề trong phần mềm dựng phim để khớp với các khoảng ngắt nghỉ thực tế."
    },
    {
      "question": "Thời lượng hiển thị lý tưởng cho một câu phụ đề là bao lâu?",
      "answer": "Tiêu chuẩn phụ đề quốc tế khuyến nghị tốc độ đọc từ 21 đến 24 ký tự mỗi giây, tương đương khoảng 2.5 đến 4 giây cho một dòng phụ đề tiêu chuẩn từ 30 đến 40 ký tự."
    }
  ]
};
