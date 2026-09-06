import type { ToolDetailContent } from './types';

export const viContent: ToolDetailContent = {
  metaTitle: 'Chuyển SRT sang TXT Miễn Phí – Trích Xuất Văn Bản Phụ Đề',
  metaDescription: 'Chuyển đổi tệp phụ đề SRT sang văn bản thuần túy TXT trực tuyến. Xóa mốc thời gian và số thứ tự phụ đề ngay trên trình duyệt, an toàn và bảo mật.',
  h1: 'Chuyển đổi SRT sang TXT',
  heroDescription: 'Chuyển đổi nhanh chóng tệp phụ đề SRT thành văn bản TXT rõ ràng, dễ đọc. Tự động xóa mốc thời gian, số thứ tự và thẻ định dạng ngay trên trình duyệt của bạn.',
  toolName: 'Chuyển đổi SRT sang TXT',
  ui: {
    pasteTitle: 'Đầu vào SRT (.srt)',
    pastePlaceholder: 'Dán nội dung SRT của bạn vào đây (vd:\n1\n00:00:01,000 --> 00:00:04,000\nXin chào, chào mừng bạn đến với video.)...',
    orDivider: 'HOẶC',
    uploadTitle: 'Tùy chọn 2 — Tải lên tệp SRT',
    convertButton: 'Chuyển đổi sang Văn bản',
    clearButton: 'Xóa',
    trySampleButton: 'Dùng thử mẫu',
    livePreviewTitle: 'Văn bản thuần túy (.txt)',
    errorNoInput: 'Vui lòng dán nội dung SRT hoặc tải lên tệp SRT để chuyển đổi.',
    pastedContentSource: 'Nội dung SRT đã dán',
    dropzoneTitle: 'Kéo và thả tệp .srt vào đây',
    dropzoneSubtitle: 'hoặc bấm để chọn tệp từ thiết bị',
    browseButton: 'Chọn Tệp SRT',
    dropActiveText: 'Thả tệp SRT vào đây...',
    fileSelected: 'Đã chọn tệp',
    fileNameLabel: 'Tên tệp',
    fileSizeLabel: 'Dung lượng',
    cueCountLabel: 'Số dòng phụ đề',
    characterCountLabel: 'Ký tự',
    downloadAction: 'Tải về .txt',
    copyAction: 'Sao chép vào bộ nhớ tạm',
    copiedSuccess: 'Đã sao chép thành công!',
    resetAction: 'Chuyển đổi tệp khác',
    previewTitle: 'Xem trước văn bản',
    previewEmpty: 'Văn bản chuyển đổi sẽ xuất hiện tại đây ngay khi bạn chọn tệp SRT.',
    optionsTitle: 'Tùy chọn chuyển đổi',
    optEmptyLine: 'Thêm dòng trống giữa các đoạn phụ đề',
    optRemoveTags: 'Xóa thẻ định dạng (ví dụ: <i>, <b>, <font>)',
    errorInvalidFile: 'Vui lòng chọn tệp phụ đề định dạng .srt hợp lệ.',
    errorEmptyFile: 'Tệp tải lên không có nội dung.',
    errorParseFailed: 'Không thể xử lý tệp. Vui lòng kiểm tra lại cấu trúc SRT.',
  },
  sections: {
    whatIsSrt: {
      title: 'Tệp SRT là gì?',
      content: [
        'Tệp SRT (SubRip Subtitle) là định dạng phụ đề văn bản phổ biến nhất hiện nay cho video kỹ thuật số. Mỗi đoạn phụ đề bao gồm số thứ tự, mốc thời gian hiển thị chính xác và phần lời thoại.',
        'Mặc dù rất tiện cho các trình phát video, các mốc thời gian dày đặc khiến việc đọc nội dung như một tài liệu thông thường trở nên khó khăn.',
      ],
    },
    whatIsConverter: {
      title: 'Công cụ chuyển đổi SRT sang TXT là gì?',
      content: [
        'Đây là công cụ giúp bạn loại bỏ hoàn toàn các mốc thời gian và số thứ tự trong tệp SRT, chỉ giữ lại nội dung lời thoại thuần túy.',
        'Quá trình xử lý diễn ra 100% trong trình duyệt của bạn, không tải tệp lên máy chủ, đảm bảo quyền riêng tư tuyệt đối.',
      ],
    },
    howToConvert: {
      title: 'Cách chuyển đổi SRT sang TXT',
      steps: [
        {
          title: '1. Chọn hoặc kéo thả tệp',
          description: 'Kéo thả tệp .srt vào khung tải lên hoặc bấm nút "Chọn Tệp SRT".',
        },
        {
          title: '2. Xử lý tức thì',
          description: 'Công cụ tự động phân tích và xóa mốc thời gian ngay lập tức.',
        },
        {
          title: '3. Tải về hoặc sao chép',
          description: 'Nhấn "Tải về .txt" hoặc sao chép nhanh vào bộ nhớ tạm.',
        },
      ],
    },
    whyConvert: {
      title: 'Tại sao nên chuyển SRT sang TXT?',
      benefits: [
        {
          title: 'Đọc tài liệu dễ dàng',
          description: 'Đọc kịch bản phỏng vấn, bài giảng, podcast liền mạch như một bài báo.',
        },
        {
          title: 'Sử dụng cho Trí tuệ nhân tạo (AI)',
          description: 'Dán trực tiếp vào ChatGPT hoặc Gemini mà không tốn token cho các mốc thời gian.',
        },
        {
          title: 'Học ngoại ngữ',
          description: 'In lời thoại phim để tra từ vựng và luyện phát âm dễ dàng hơn.',
        },
        {
          title: 'Tìm kiếm nhanh chóng',
          description: 'Tệp TXT giúp bạn tìm kiếm nội dung trong video chỉ với vài thao tác.',
        },
      ],
    },
    comparison: {
      title: 'So sánh: SRT và TXT',
      description: 'Sự khác biệt cốt lõi giữa phụ đề SRT và văn bản thuần túy TXT.',
      headers: ['Đặc điểm', 'Định dạng SRT (.srt)', 'Văn bản TXT (.txt)'],
      rows: [
        ['Mục đích chính', 'Khớp phụ đề cho video', 'Đọc và lưu trữ văn bản'],
        ['Mốc thời gian', 'Có (ví dụ: 00:01:00,000 --> 00:01:05,000)', 'Không có'],
        ['Số thứ tự', 'Có (1, 2, 3...)', 'Không có'],
        ['Thẻ định dạng', 'Có thể chứa thẻ HTML', 'Chỉ chứa chữ thuần túy'],
        ['Ứng dụng tốt nhất', 'Phần mềm xem video', 'Đọc, ghi chú, AI'],
      ],
    },
    privacy: {
      title: 'Bảo mật tuyệt đối trên trình duyệt',
      content: [
        'Tệp của bạn không bao giờ được gửi qua internet. Mọi thao tác xử lý đều diễn ra ngay trên máy tính hoặc điện thoại của bạn.',
        'Bạn thậm chí có thể ngắt kết nối mạng sau khi tải trang mà công cụ vẫn hoạt động bình thường.',
      ],
    },
  },
  faqs: [
    {
      question: 'Tệp SRT là gì?',
      answer: 'Là định dạng phụ đề tiêu chuẩn chứa lời thoại cùng các mốc thời gian khớp với video.',
    },
    {
      question: 'Thời gian và số thứ tự có bị xóa hết không?',
      answer: 'Có, công cụ sẽ tự động loại bỏ hoàn toàn các mốc thời gian và số thứ tự.',
    },
    {
      question: 'Tệp của tôi có bị tải lên mạng không?',
      answer: 'Không. Toàn bộ quá trình xử lý chạy 100% trong trình duyệt máy bạn.',
    },
    {
      question: 'Có hỗ trợ tiếng Việt có dấu không?',
      answer: 'Hỗ trợ đầy đủ tiếng Việt chuẩn Unicode UTF-8 mà không bị lỗi font.',
    },
    {
      question: 'Có dùng được trên điện thoại không?',
      answer: 'Hoạt động mượt mà trên tất cả điện thoại và máy tính bảng.',
    },
    {
      question: 'Thẻ định dạng HTML có được loại bỏ không?',
      answer: 'Các thẻ như <i>, <b> sẽ được làm sạch hoàn toàn.',
    },
    {
      question: 'Dịch vụ có mất phí không?',
      answer: 'Hoàn toàn miễn phí và không cần đăng ký tài khoản.',
    },
    {
      question: 'Có giới hạn kích thước tệp không?',
      answer: 'Không có giới hạn vì tệp được xử lý bằng chính bộ nhớ thiết bị của bạn.',
    },
  ],
};
