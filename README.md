# Shoppe C++20 — Slide thuyết trình OOP

Bộ slide web **Slidev** gồm **35 trang**, tiếng Việt, thiết kế nền sáng với màu cam làm điểm nhấn. Nội dung ưu tiên các kiến thức đã học trong môn OOP C++: lớp và đối tượng, đóng gói, constructor, nạp chồng toán tử, kế thừa, đa hình, composition, Rule of Five, Strategy và quản lý trạng thái. Phần tiếp theo trình bày thuật toán bằng ví dụ số, mã nguồn và tình huống trong website Shoppe.

Phần API giữ **một mô phỏng chuyển động** về việc lấy danh sách sản phẩm, minh họa request, thao tác C++/SQL, response JSON và cập nhật UI. Dùng nút **Chạy / Tạm dừng / ← / → / ↺** để chủ động giải thích từng bước. Các dữ liệu trong mô phỏng là ví dụ, không gửi request thật đến website Shoppe.

Các đoạn mã được đọc và đối chiếu với repository [Shoppe-C-](https://github.com/hoquan2007/Shoppe-C-) tại commit `2238d79` (bản được clone vào ngày 01/11/2026). Những đoạn viết lại cho ngắn hơn đều có chú thích **rút gọn** hoặc **minh họa**. Nội dung được sắp xếp lại theo báo cáo `Bao_cao_do_an_OOP_Shoppe_hoan_chinh.docx` và mã nguồn thực tế. Ảnh giao diện trong `public/` được chụp từ [shoppec.vercel.app](https://shoppec.vercel.app/).

## Bố cục mới

- **Slide 1–5:** Bìa, lộ trình, giao diện trang chủ/danh mục và kiến trúc C++.
- **Slide 6–17:** Bốn đặc trưng OOP, `Money`, constructor, nạp chồng `+`/`*`, `OrderSnapshot`, Rule of Five, phương thức thanh toán, vận chuyển và trạng thái.
- **Slide 18–32:** Mô phỏng HTTP, code giao tiếp frontend/backend, checkout, thuật toán tách đơn và voucher, tránh tràn số, phí vận chuyển, chống trùng đơn, RAII, khóa tồn kho, Repository và payOS.
- **Slide 33–35:** Kiểm thử trong mã nguồn, đánh giá đồ án và Q&A.

## Chạy trực tiếp trên máy

Yêu cầu **Node.js 20.19+** hoặc một phiên bản đáp ứng yêu cầu của Slidev/Vite đang dùng.

```powershell
cd D:\slideoop
npm install
npm run dev
```

Truy cập **http://localhost:47658**. Bấm `F` để toàn màn hình; phím mũi tên trái/phải hoặc `Space` để chuyển trang; `O` để xem tổng quan; `P` để mở chế độ trình bày có ghi chú. Những ghi chú thuyết trình được đặt sau mỗi slide trong `slides.md`.

## Kiểm tra và tạo bản build web

```powershell
npm run check
npm run build
```

Trang web tĩnh sau khi build nằm trong `dist/`. Có thể đăng lên một hosting web tĩnh. Lệnh `npm run export` thử xuất PDF (cần trình duyệt Chromium/Playwright mà Slidev hỗ trợ).

## Triển khai trên Vercel

Import repository `hoquan2007/slideoop` vào Vercel và dùng nhánh `main` làm nhánh production. File `vercel.json` cấu hình cài thư viện bằng `npm ci`, chạy kiểm tra trước khi build và xuất website tĩnh từ `dist/`. Dùng Node.js 24.x cho bản triển khai.

Quy tắc rewrite đưa các đường dẫn trình chiếu như `/8`, `/20` hoặc `/overview` về `index.html`, để mở liên kết trực tiếp và tải lại trang vẫn hoạt động. Dự án slide không yêu cầu biến môi trường hay backend riêng.

## Sửa nội dung

- `slides.md`: nội dung các slide, code C++ và ghi chú để thuyết trình.
- `style.css`: màu sắc, typography, khung ảnh, bố cục và các khối code.
- `components/ApiFlowDemo.vue`: thành phần Vue mô phỏng HTTP request/response có thể chạy lại và điều khiển từng bước.
- `public/shoppe-home.png`: ảnh trang chủ thật.
- `public/shoppe-catalog.png`: ảnh danh mục thật.
- `.sources/shoppe/`: bản clone chỉ để tra cứu; đã được bỏ khỏi Git qua `.gitignore`.

Thông tin tên nhóm, thành viên, giảng viên và lớp chưa có trong file báo cáo nên phần bìa chỉ ghi môn học. Có thể thêm các thông tin này vào slide đầu khi chuẩn bị nộp.

## Nguồn đối chiếu chính

- `backend/include/domain.h`, `backend/src/domain.cpp`: Money, OrderSnapshot, thanh toán, vận chuyển, trạng thái và thuật toán voucher.
- `backend/src/application.cpp`: API và luồng checkout.
- `backend/include/database.h`, `backend/src/database.cpp`: Repository, SQL tham số và transaction RAII.
- `tests/domain_tests.cpp`: các tình huống kiểm thử C++.
- `docs/API_CURRENT.md`, `docs/ARCHITECTURE.md`: mô tả API, kiến trúc và giới hạn.

**Lưu ý phạm vi:** Ảnh và ví dụ minh họa tình trạng đã kiểm tra khi tạo bài; những tính năng tích hợp như payOS phụ thuộc cấu hình thực tế. Slide kiểm thử trích từ mã test hiện có, không tự nhận là đã chạy các bài test backend của ứng dụng Shoppe.

## Phần phân tích thuật toán

Slide 22–31 đi sâu truy vết tách đơn, thứ tự voucher shop/sàn, phân bổ đồng lẻ, tránh tràn số qua 64 bit, mốc phí vận chuyển, xác minh báo giá, xử lý request lặp, RAII, khóa tồn kho và Repository. Các ví dụ số học là minh họa được đối chiếu logic C++; phần Kiểm thử phân biệt test có trong nguồn với các tình huống phân tích.
