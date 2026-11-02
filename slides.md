---
theme: default
title: SHOPPE C++20 | Báo cáo đồ án OOP
info: |
  Bộ slide 35 trang: demo website, bài học OOP C++20, thuật toán nghiệp vụ và kiểm thử.
  Nội dung đối chiếu mã nguồn Shoppe-C- ngày 01/11/2026.
author: Đồ án Shoppe C++20
aspectRatio: 16/9
canvasWidth: 1280
transition: fade-out
colorSchema: light
drawings:
  persist: false
---

<div class="cover-layout">
  <div class="cover-content">
    <div class="brand"><span class="brand-icon">S</span> SHOPPE <span class="brand-divider"></span> C++20</div>
    <div class="eyebrow">BÁO CÁO ĐỒ ÁN · LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG</div>
    <h1 class="cover-title">Xây dựng website<br><em>Shoppe</em><br>bằng OOP C++20</h1>
    <p class="cover-sub">Từ giao diện thực tế đến lớp, đối tượng, kế thừa, đa hình và thuật toán C++</p>
    <div class="cover-tags"><span>OOP</span><span>C++20</span><span>REST API</span><span>SQLite / PostgreSQL</span></div>
    <p class="cover-foot">ĐH Giao thông Vận tải · Phân hiệu TP.HCM · Học phần OOP · 2026</p>
  </div>
  <div class="cover-visual">
    <div class="cover-window"><div class="browser-top"><i></i><i></i><i></i><span>shoppec.vercel.app</span></div><img src="/shoppe-home.png" alt="Ảnh chụp trang chủ Shoppe" /></div>
    <div class="image-stamp">GIAO DIỆN THỰC TẾ<br><b>SHOPPE WEB</b></div>
  </div>
</div>

<!--
SLIDE 01 — Từ cửa hàng online đến bài toán OOP
Đối chiếu báo cáo Word: Tóm tắt báo cáo; Chương 1

LỜI DẪN DỄ HIỂU: Hãy coi Shoppe là một trung tâm mua sắm có nhiều quầy hàng. Người mua nhìn thấy website, còn các quy tắc cộng tiền, kiểm tra hàng và xác nhận đơn được thực hiện ở phía máy chủ C++.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Người mua tìm sản phẩm và chọn món.
2. Chương trình tính lại giá, phí giao hàng và khuyến mãi.
3. Hệ thống kiểm tra còn hàng, lưu đơn và trả kết quả lên trang web.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Mua áo của Shop A và tai nghe của Shop B: người mua thao tác trong một giỏ, nhưng mỗi cửa hàng nhận phần đơn riêng.
KẾT LUẬN CỦA SLIDE: Đề tài dùng một tình huống quen thuộc để chứng minh kiến thức lớp, đối tượng, hàm dựng, toán tử, kế thừa và đa hình trong C++.

[GHI CHÚ GỐC]
Bắt đầu bằng vấn đề thực tế: mua hàng nhiều shop cần xử lý đúng giá, kho, đơn, thanh toán. Điểm nhấn của đồ án là backend viết bằng C++20, qua đó vận dụng kiến thức OOP.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">LỘ TRÌNH · 35 SLIDE</div>

# Học OOP qua các chức năng thật của Shoppe
<p class="lead">Mở đầu bằng giao diện, sau đó đi vào từng lớp C++ và thuật toán xử lý đơn hàng.</p>

<div class="route-grid">
  <div class="route-card"><div class="route-no">01</div><h3>Demo website</h3><p>Trang chủ, danh mục, sơ đồ dữ liệu từ trình duyệt đến C++.</p><span>SLIDE 03–05</span></div>
  <div class="route-card"><div class="route-no">02</div><h3>Kiến thức OOP</h3><p>Lớp & đối tượng, đóng gói, toán tử, hàm dựng/hủy, kế thừa, đa hình.</p><span>SLIDE 06–17</span></div>
  <div class="route-card"><div class="route-no">03</div><h3>Thuật toán & code</h3><p>API, checkout, tách đơn, voucher, vận chuyển, kiểm kho và transaction.</p><span>SLIDE 18–32</span></div>
  <div class="route-card"><div class="route-no">04</div><h3>Kiểm thử & hỏi đáp</h3><p>Ví dụ test C++, kết quả đồ án, giới hạn và phần trao đổi.</p><span>SLIDE 33–35</span></div>
</div>

<!--
SLIDE 02 — Đọc bài theo hành trình một đơn hàng
Đối chiếu báo cáo Word: Chương 1, 2, 3, 4, 5

LỜI DẪN DỄ HIỂU: Các phần trong bài giống hành trình đi từ quầy trưng bày đến quầy thu ngân: quan sát giao diện, tìm người xử lý phía sau, xem phép tính, rồi kiểm tra kết quả.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Xem website để biết khách đang làm gì.
2. Giới thiệu đối tượng C++ đứng sau mỗi chức năng.
3. Theo dõi từng bước tính tiền, chia đơn và kiểm kho.
4. Đối chiếu tình huống đúng, sai với các bài kiểm thử.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Bấm Đặt hàng là một thao tác trên giao diện, nhưng bên dưới là nhiều bước: đọc kho, tính voucher, tạo đơn và lưu dữ liệu.
KẾT LUẬN CỦA SLIDE: Cách kể từ ngoài vào trong giúp người chưa biết lập trình hiểu mục đích trước khi gặp cú pháp C++.

[GHI CHÚ GỐC]
Gợi ý thuyết trình: mở trực tiếp website trong 1–2 phút, sau đó dùng slide để chứng minh kiến thức OOP bằng class, method, virtual, operator overloading và các thuật toán. Khung trọng tâm là slide 6–32; mỗi ví dụ số đều gắn với chức năng thật.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">01 · GIAO DIỆN THẬT</div>

# Demo trang chủ: người mua thao tác gì?
<div class="showcase two-parts">
  <div class="screenshot-frame"><div class="browser-top"><i></i><i></i><i></i><span>shoppec.vercel.app</span></div><img src="/shoppe-home.png" alt="Trang chủ Shoppe" /></div>
  <div class="side-notes"><div class="feature-tag">Trang chủ · Dữ liệu từ API</div><h3>Trang chủ giúp khách làm gì?</h3><p><b>Chức năng:</b> giới thiệu sản phẩm và dẫn khách tới tìm kiếm, chi tiết món hàng, tài khoản hoặc giỏ hàng.</p><p><b>Lợi ích:</b> khách nhìn thấy hàng hóa ngay khi mở web; giá và thông tin được lấy từ máy chủ để các màn hình dùng chung dữ liệu.</p><p><b>Ví dụ:</b> khách thấy một chiếc áo, bấm xem chi tiết rồi thêm vào giỏ. Backend C++ cung cấp dữ liệu và xử lý các quy tắc mua hàng.</p><div class="mini-code">GET /api/home · Lấy dữ liệu trang chủ</div></div>
</div>
<div class="source-line">Ảnh chụp từ website Shoppe đang triển khai · 01/11/2026</div>

<!--
SLIDE 03 — Trang chủ là nơi khách ra yêu cầu
Đối chiếu báo cáo Word: Mục 3.1.1; 3.4.1–3.4.2

LỜI DẪN DỄ HIỂU: Trang chủ giống mặt tiền cửa hàng. HTML tạo các khu vực, CSS sắp xếp cho đẹp, JavaScript phản ứng khi người dùng bấm; dữ liệu hàng hóa được lấy từ máy chủ.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Trình duyệt mở trang và hiển thị giao diện.
2. JavaScript gửi yêu cầu lấy dữ liệu tới địa chỉ /api/home.
3. Máy chủ C++ kiểm tra yêu cầu và lấy thông tin cần hiển thị.
4. Trình duyệt nhận dữ liệu rồi tạo các thẻ sản phẩm.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khách bấm vào một sản phẩm: giao diện dẫn tới trang chi tiết; phần giá và tồn kho phải dựa vào dữ liệu máy chủ.
KẾT LUẬN CỦA SLIDE: Tách phần hiển thị và phần xử lý giúp giao diện thay đổi được mà không làm sai quy tắc tính tiền trong backend.

[GHI CHÚ GỐC]
Chỉ giới thiệu các phần nổi bật trên website. Đây là dự án Shoppe của nhóm, không phải hệ thống Shopee chính thức.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">01 · GIAO DIỆN THẬT</div>

# Demo danh mục: tìm kiếm và phân trang
<div class="showcase two-parts">
  <div class="screenshot-frame catalog-shot"><div class="browser-top"><i></i><i></i><i></i><span>shoppec.vercel.app/search</span></div><img src="/shoppe-catalog.png" alt="Danh mục Shoppe" /></div>
  <div class="side-notes"><div class="feature-tag">Tìm kiếm · Phân trang · Lọc</div><h3>Tìm đúng món, tải vừa đủ</h3><p><b>Chức năng:</b> tìm theo tên, lọc danh mục hoặc giá, sắp xếp và chia kết quả thành <b>12 sản phẩm mỗi trang</b>.</p><p><b>Lợi ích:</b> khách không phải xem cả kho hàng cùng lúc; danh sách gọn, dễ so sánh và hạn chế tải dữ liệu thừa.</p><p><b>Ví dụ:</b> tìm “tai nghe”, chọn mức giá phù hợp rồi chuyển trang 2 để xem tiếp. Backend tra dữ liệu, giao diện hiển thị kết quả.</p><div class="mini-code">GET /api/products?page=1&amp;sort=new</div></div>
</div>
<div class="source-line">Ảnh chụp danh mục thật · minh họa dữ liệu sản phẩm trên giao diện</div>

<!--
SLIDE 04 — Phân trang giống chia hàng thành từng kệ
Đối chiếu báo cáo Word: Mục 3.3.6; 4.2

LỜI DẪN DỄ HIỂU: Nếu cửa hàng có hàng trăm mặt hàng, khách không cần nhìn toàn bộ trong một lần tải. Website chia chúng thành từng trang giống mỗi kệ chỉ bày một nhóm sản phẩm.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Khách chọn từ khóa, khoảng giá hoặc trang số 3.
2. JavaScript gửi các điều kiện đó tới API.
3. C++ đếm tổng số hàng hợp lệ, sắp xếp và lấy đúng số hàng của trang yêu cầu.
4. Giao diện hiển thị kết quả, nút chuyển trang và tổng số trang.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Có 127 sản phẩm, 12 sản phẩm mỗi trang: 10 trang đủ 12 món, trang 11 còn 7 món. Trang 3 chỉ tải nhóm thuộc trang 3.
KẾT LUẬN CỦA SLIDE: Tiết kiệm dữ liệu truyền, màn hình dễ xem và giúp lọc/tìm kiếm đúng theo dữ liệu trong cơ sở dữ liệu.

[GHI CHÚ GỐC]
Nhấn mạnh khác nhau giữa số sản phẩm tổng và số sản phẩm tải một lần: việc phân trang giúp giảm lượng dữ liệu trên màn hình.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">01 · KIẾN TRÚC</div>

# C++20 nằm ở trung tâm xử lý nghiệp vụ
<div class="architecture">
  <div class="arch-box front"><span>01 / CLIENT</span><h3>HTML · CSS · JavaScript</h3><p>Hiển thị sản phẩm, giỏ hàng, checkout</p></div>
  <div class="connector">HTTP + JSON <b>⇄</b></div>
  <div class="arch-box core"><span>02 / BACKEND</span><h3>C++20 Application</h3><p>Session · OOP domain · Giá · Kho · Đơn</p></div>
  <div class="connector">Repository <b>⇄</b></div>
  <div class="arch-box database"><span>03 / DATA</span><h3>SQLite / PostgreSQL</h3><p>User · Product · Cart · Order · Payment</p></div>
</div>
<div class="arch-bottom"><span>payOS</span><span>Supabase Storage</span><span>Resend</span><span>Google Login</span><p>Dịch vụ tích hợp ngoài khi có cấu hình</p></div>

<!--
SLIDE 05 — Ba bộ phận cùng hoàn thành một đơn hàng
Đối chiếu báo cáo Word: Mục 2.2; 3.1.2; 3.4

LỜI DẪN DỄ HIỂU: Tưởng tượng nhà hàng: người phục vụ nhận yêu cầu là frontend, đầu bếp thực hiện quy tắc là backend C++, kho nguyên liệu lưu sổ sách là cơ sở dữ liệu.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Frontend dùng JavaScript gửi yêu cầu bằng HTTP, dữ liệu ở dạng JSON.
2. Application trong C++ nhận yêu cầu, kiểm tra đăng nhập và điều kiện nghiệp vụ.
3. Repository gửi lệnh đọc/ghi thông qua Database.
4. Kết quả đi ngược trở lại dưới dạng JSON để giao diện cập nhật.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khách tăng số lượng áo từ 1 lên 2: trang gửi thay đổi, backend kiểm tra tồn kho rồi lưu và trả giỏ mới.
KẾT LUẬN CỦA SLIDE: Trình duyệt không được tự sửa trực tiếp bảng giá hay bảng đơn; các điều kiện quan trọng được kiểm tra ở máy chủ.

[GHI CHÚ GỐC]
Giải thích tuyến đi dữ liệu: JS gọi API, lớp Application điều phối, lớp miền nghiệp vụ tính toán, Repository tương tác DB. Những dịch vụ ngoài chỉ bổ trợ thanh toán/ảnh/email/đăng nhập.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · KIẾN THỨC OOP</div>

# Bốn đặc trưng OOP xuất hiện ở đâu?
<div class="oop-grid">
  <div class="oop-card"><span>01</span><h3>Đóng gói</h3><p><b>Money</b> giữ giá trị private và kiểm tra số tiền khi tạo đối tượng.</p><code>private: value_</code></div>
  <div class="oop-card"><span>02</span><h3>Trừu tượng</h3><p><b>IPaymentMethod</b> mô tả việc phải làm, ẩn cách triển khai cụ thể.</p><code>virtual … = 0</code></div>
  <div class="oop-card"><span>03</span><h3>Kế thừa</h3><p><b>CodPayment</b> và <b>OnlinePayment</b> cài đặt giao diện thanh toán chung.</p><code>: public IPaymentMethod</code></div>
  <div class="oop-card"><span>04</span><h3>Đa hình</h3><p>Cùng một con trỏ cơ sở, chương trình gọi đúng phương thức của từng kiểu.</p><code>payment-&gt;requiresGateway()</code></div>
</div>

<!--
SLIDE 06 — Bốn đặc trưng OOP như một bộ quy tắc chung
Đối chiếu báo cáo Word: Mục 2.1.2; 2.1.5; 2.1.6

LỜI DẪN DỄ HIỂU: OOP là cách chia chương trình thành các đối tượng có nhiệm vụ rõ ràng, giống phân vai cho thu ngân, nhân viên kho và người giao hàng.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Đóng gói: Money giữ tiền trong phần riêng, chỉ cho sử dụng qua hàm hợp lệ.
2. Trừu tượng: IPaymentMethod chỉ định hai câu hỏi mà mọi hình thức thanh toán phải trả lời.
3. Kế thừa: COD và Online cùng thuộc họ phương thức thanh toán.
4. Đa hình: cùng hỏi requiresGateway(), COD trả không, Online trả có.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khi đổi từ trả tiền khi nhận sang trả online, màn hình đặt hàng không phải viết lại toàn bộ cách quản lý đơn.
KẾT LUẬN CỦA SLIDE: Mỗi nơi biết đúng phần việc của mình; muốn thêm một quy tắc có thể thay phần thực hiện mà vẫn giữ giao tiếp chung.

[GHI CHÚ GỐC]
Mỗi đặc trưng sẽ được chứng minh bằng những đoạn mã thật ở các slide tiếp theo, không chỉ học thuộc định nghĩa.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · ĐÓNG GÓI</div>

# Lớp và đối tượng: vì sao có <code>Money</code>?
<div class="code-layout">
<div>

```cpp {1-10|2|5-8}
class Money {
    std::int64_t value_;
public:
    explicit Money(std::int64_t value = 0);
    std::int64_t value() const {
        return value_;
    }
    Money operator+(Money other) const;
    Money operator*(std::int64_t quantity) const;
};
```

</div>
<div class="explain-card"><span class="pill">domain.h · rút gọn</span><h3>Vì sao Shoppe cần lớp Money?</h3><p><b>Chức năng:</b> đại diện cho một số tiền và cung cấp cách cộng, nhân giá tiền thống nhất trong toàn bộ hệ thống.</p><p><b>Lợi ích:</b> các chức năng giỏ hàng, đơn hàng và vận chuyển đều dùng chung quy tắc; hạn chế việc mỗi nơi tự tính tiền theo một cách.</p><p><b>Trong C++:</b> <code>private</code> giữ giá trị bên trong; các hàm của lớp đảm nhiệm thao tác với tiền.</p><div class="example-box"><span>Áo 90.000đ × 2 chiếc</span><strong>Tiền hàng: 180.000đ</strong></div></div>
</div>

<!--
SLIDE 07 — Class là bản thiết kế; object là số tiền thật
Đối chiếu báo cáo Word: Mục 2.1.2; 3.2.1

LỜI DẪN DỄ HIỂU: Một bản thiết kế chai nước nói chai phải có nắp và dung tích; từng chai được sản xuất là một đồ vật cụ thể. Với C++, class Money là bản thiết kế, Money(90000) là một đối tượng tiền 90.000 đồng.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. class Money đặt tên cho loại dữ liệu chuyên biểu diễn tiền.
2. value_ là chỗ giữ con số, mặc định nằm ở vùng private nên bên ngoài không tự ý sửa.
3. public khai báo các thao tác được phép: tạo tiền, đọc tiền, cộng hoặc nhân tiền.
4. Money giaAo(90000) tạo một đối tượng cụ thể; giaAo.value() trả 90000.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Giá áo 90.000đ và giá sổ 30.000đ là hai đối tượng Money khác nhau nhưng cùng tuân theo một cách kiểm tra.
KẾT LUẬN CỦA SLIDE: Tiền được lưu dưới dạng số nguyên đồng Việt Nam và đi qua một bộ quy tắc chung, giảm lỗi khi nhiều chức năng cùng tính giá.

[GHI CHÚ GỐC]
Lớp (class) là khuôn mẫu gồm thuộc tính value_ và phương thức; đối tượng (object) giaAo là một lần tạo lớp với giá trị 90000. private là đóng gói, public là giao diện. Số nguyên int64_t lưu VNĐ để tránh sai số số thực.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · NẠP CHỒNG TOÁN TỬ</div>

# Constructor và toán tử <code>*</code> bảo vệ số tiền
<div class="code-layout">
<div>

```cpp
Money::Money(std::int64_t v) : value_(v) {
    if (v < 0 || v > 1000000000000LL)
        throw Error(422, "invalid_money",
                    "Số tiền không hợp lệ.");
}

Money Money::operator*(std::int64_t q) const {
    if (q < 0 || (q && value_ > 1000000000000LL / q))
        throw Error(422, "invalid_quantity",
                    "Số lượng hoặc tổng tiền quá lớn.");
    return Money(value_ * q);
}
```

</div>
<div class="explain-card"><span class="pill">domain.cpp · mã nguồn thật</span><h3>Giữ giá và tổng tiền hợp lệ</h3><p><b>Constructor làm gì?</b> Kiểm tra ngay khi tạo số tiền: giá âm hoặc vượt 1.000 tỷ sẽ bị từ chối.</p><p><b>Toán tử nhân làm gì?</b> Tính <b>đơn giá × số lượng</b>, đồng thời kiểm tra tổng trước khi nhân để tránh số tiền vượt giới hạn.</p><p><b>Hiệu quả:</b> không cho giá bất thường đi vào giỏ hàng, giảm nguy cơ sai tổng tiền khi khách đặt nhiều sản phẩm.</p><div class="example-box"><span>1.000.000đ × 2 → <b>2.000.000đ ✓</b></span><span>1.000 tỷ × 2 → <b class="danger">Từ chối · lỗi 422</b></span></div></div>
</div>

<!--
SLIDE 08 — Constructor như nhân viên kiểm hàng ở cửa vào
Đối chiếu báo cáo Word: Mục 2.1.3; 3.2.1

LỜI DẪN DỄ HIỂU: Hàm dựng (constructor) chạy ngay khi một đối tượng được tạo, giống bước kiểm vé trước khi khách vào rạp. Nó không chờ người dùng gọi riêng.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Money::Money(v) nhận số tiền được truyền vào.
2. : value_(v) lưu giá trị ban đầu vào trong đối tượng.
3. if kiểm tra tiền âm hoặc lớn hơn 1.000 tỷ đồng, hai trường hợp không được chấp nhận.
4. throw Error(422, ...) báo lỗi; với phép nhân, code còn kiểm tra trước khi nhân để tránh vượt giới hạn.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Money(1000000) * 2 cho 2.000.000đ. Money(-50000) bị từ chối; mua số lượng âm cũng bị chặn.
KẾT LUẬN CỦA SLIDE: Tạo lỗi ngay tại chỗ nhập sai giúp mọi phép tính về sau không phải tiếp tục dùng số tiền vô lý.

[GHI CHÚ GỐC]
Điều kiện value_ > max/q giúp kiểm tra trước khi nhân; nếu cứ nhân rồi mới kiểm tra có thể bị tràn. Số tiền dùng int64_t là số nguyên VNĐ.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · NẠP CHỒNG TOÁN TỬ · VÍ DỤ SỐ</div>

# Viết <code>a + b</code> nhưng chạy hàm C++ của lớp
<p class="lead">Hai đối tượng <code>Money</code> được cộng bằng toán tử đã định nghĩa trong <code>domain.cpp</code>.</p>

<div class="code-layout">
<div>

```cpp
// domain.cpp · mã nguồn thật
Money Money::operator+(Money o) const {
    return Money(value_ + o.value_);
}

// Ví dụ sử dụng lớp
Money giaSach(55000);
Money giaBut(15000);
Money tong = giaSach + giaBut;
// tong.value() == 70000
```

</div>
<div class="explain-card"><span class="pill">domain.cpp · toán tử +</span><h3>Cộng nhiều món hàng dễ dàng</h3><p><b>Chức năng:</b> cộng hai số tiền như cộng các số thông thường, ví dụ giá sách và giá bút trong cùng một giỏ.</p><p><b>Lợi ích:</b> mã tính tổng đơn ngắn, dễ đọc; kết quả vẫn thuộc lớp Money nên tiếp tục được kiểm tra theo quy tắc chung.</p><p><b>Trong C++:</b> dấu <code>+</code> gọi hàm <code>operator+</code> để tạo một đối tượng Money chứa tổng.</p><div class="example-box"><span>Sách 55.000đ + bút 15.000đ</span><strong>Thành tiền: 70.000đ</strong></div></div>
</div>

<!--
SLIDE 09 — Toán tử + cũng là một hàm được đặt tên
Đối chiếu báo cáo Word: Mục 2.1.4; 3.2.1

LỜI DẪN DỄ HIỂU: Với số thường, dấu + đã biết cách cộng. Khi tự tạo lớp Money, lập trình viên dạy cho lớp cách cộng bằng hàm operator+.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Money giaSach(55000) tạo số tiền thứ nhất.
2. Money giaBut(15000) tạo số tiền thứ hai.
3. Biểu thức giaSach + giaBut khiến C++ gọi giaSach.operator+(giaBut).
4. Hàm cộng hai value_, tạo Money mới và constructor kiểm tra tổng trước khi trả.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Một quyển sách 55.000đ và cây bút 15.000đ → số tiền của hai món là 70.000đ.
KẾT LUẬN CỦA SLIDE: Code tính giỏ đọc gần giống phép tính trên hóa đơn, nhưng kết quả vẫn được lớp Money kiểm tra tính hợp lệ.

[GHI CHÚ GỐC]
Giải thích đơn giản cho người chưa học sâu C++: lớp Money cho phép dùng dấu + tự nhiên như số, nhưng C++ thực chất chạy hàm operator+. Dòng return Money(...) gọi constructor, nơi đảm bảo tổng nằm trong 0–1.000 tỷ. Nếu tổng vượt mức, constructor ném lỗi; đây là code thật trong backend/src/domain.cpp, ví dụ giaSach/giaBut là minh họa.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · COMPOSITION</div>

# <code>OrderSnapshot</code> gom nhiều dòng sản phẩm
<div class="code-layout">
<div>

```cpp
struct Line {
    std::string variantId;
    int quantity;
    Money price;
};

class OrderSnapshot {
    std::unique_ptr<std::vector<Line>> lines_;
public:
    explicit OrderSnapshot(std::vector<Line> lines);
    Money total() const;
};
```

</div>
<div class="explain-card"><span class="pill">domain.h · rút gọn</span><h3>Chốt danh sách món trong đơn</h3><p><b>Chức năng:</b> <code>OrderSnapshot</code> tập hợp các dòng hàng; mỗi dòng nhớ sản phẩm, số lượng và đơn giá để tính tổng.</p><p><b>Lợi ích:</b> các thông tin cần cho đơn được gom vào một nơi, giúp kiểm tra tổng tiền và xử lý từng đơn con khi giỏ có nhiều shop.</p><p><b>Trong C++:</b> một snapshot <b>chứa</b> nhiều Line; <code>unique_ptr</code> quản lý vùng nhớ của danh sách.</p><div class="example-box"><span>2 sản phẩm, đơn giá 12.345đ</span><strong>Tiền hàng: 24.690đ</strong></div></div>
</div>

<!--
SLIDE 10 — OrderSnapshot giống một tờ hóa đơn có nhiều dòng
Đối chiếu báo cáo Word: Mục 2.1.1; 3.2.2; 3.3.1

LỜI DẪN DỄ HIỂU: Mỗi dòng Line trên hóa đơn ghi món gì, mua mấy cái, đơn giá bao nhiêu. OrderSnapshot giữ tập các dòng rồi tính tổng tại đúng thời điểm xem hoặc chốt đơn.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. variantId xác định phiên bản sản phẩm, ví dụ áo màu xanh cỡ M.
2. quantity là số lượng; price là đơn giá dưới dạng Money.
3. lines_ là danh sách các dòng hóa đơn được OrderSnapshot quản lý.
4. total() duyệt từng dòng, tính price * quantity và cộng dồn.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Hai áo × 90.000đ + một sổ × 30.000đ = 210.000đ tiền hàng; đây chưa phải tiền cuối cùng vì còn giảm giá và giao hàng.
KẾT LUẬN CỦA SLIDE: Giỏ có 1 hay 100 dòng vẫn dùng cùng một hàm tính tổng; dễ kiểm tra công thức độc lập với giao diện.

[GHI CHÚ GỐC]
Dẫn ví dụ có thể tạo một OrderSnapshot gồm một dòng, số lượng 2, đơn giá 12.345. total() đi từng dòng, nhân giá với lượng rồi cộng tổng.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · QUẢN LÝ BỘ NHỚ C++</div>

# Rule of Five: sao chép mà không dùng chung dữ liệu
<div class="code-layout">
<div>

```cpp
OrderSnapshot::OrderSnapshot(const OrderSnapshot &o)
    : lines_(o.lines_
        ? std::make_unique<std::vector<Line>>(*o.lines_)
        : nullptr) {}

OrderSnapshot::OrderSnapshot(OrderSnapshot &&) noexcept
    = default;

OrderSnapshot &OrderSnapshot::operator=(
    OrderSnapshot &&) noexcept = default;
```

</div>
<div class="explain-card"><span class="pill">domain.cpp · trích đoạn</span><h3>Sao chép đơn mà không lẫn dữ liệu</h3><p><b>Copy để làm gì?</b> Tạo bản sao độc lập của danh sách hàng; thay đổi bản sao không vô tình sửa bản gốc.</p><p><b>Move để làm gì?</b> Chuyển danh sách sang nơi sử dụng mới mà không phải sao chép lại toàn bộ, giúp giảm thao tác bộ nhớ.</p><p><b>Trong C++:</b> lớp tự quy định cách sao chép và chuyển quyền sở hữu tài nguyên.</p><div class="example-box"><span>Chụp giỏ A thành bản B để thử tính tiền</span><strong>Sửa B, giỏ A vẫn giữ nguyên</strong></div></div>
</div>
<div class="slide-footnote">Bộ năm hàm trong mã gốc: destructor, copy constructor, copy assignment, move constructor, move assignment.</div>

<!--
SLIDE 11 — Copy và move giống sao hồ sơ và bàn giao hồ sơ
Đối chiếu báo cáo Word: Mục 2.1.3; 3.2.3

LỜI DẪN DỄ HIỂU: Copy là photocopy một hóa đơn để người khác sửa bản sao mà bản gốc không đổi. Move giống bàn giao nguyên cả tập hồ sơ cho người nhận mà không photo lại.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Copy constructor nhận đối tượng cũ qua tham chiếu const &o.
2. make_unique tạo danh sách mới chứa các dòng giống bản cũ: đây là sao chép sâu.
3. Move constructor và move assignment chuyển quyền giữ danh sách, tránh nhân đôi dữ liệu.
4. Destructor phối hợp với unique_ptr để thu hồi vùng nhớ khi đối tượng không dùng nữa.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Đơn A có 2 sách × 55.000đ = 110.000đ. Sao ra đơn B để tính thử: thay đổi dữ liệu của B không sửa hóa đơn A.
KẾT LUẬN CỦA SLIDE: Nếu hai đối tượng cùng tưởng mình sở hữu một vùng nhớ, chương trình dễ sai hoặc giải phóng trùng; quản lý quyền sở hữu tránh điều đó.

[GHI CHÚ GỐC]
Rule of Five là nội dung C++ quan trọng trong báo cáo. Vì lớp có unique_ptr, copy constructor cần tự cài đặt sao chép sâu; move có thể dùng default, chuyển quyền sở hữu.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · TRỪU TƯỢNG VÀ ĐA HÌNH</div>

# Một giao diện thanh toán, hai cách xử lý
<div class="code-layout">
<div>

```cpp
class IPaymentMethod {
public:
    virtual ~IPaymentMethod() = default;
    virtual std::string initialStatus() const = 0;
    virtual bool requiresGateway() const = 0;
};

class CodPayment final : public IPaymentMethod {
public:
    std::string initialStatus() const override {
        return "unpaid";
    }
    bool requiresGateway() const override { return false; }
};
```

</div>
<div class="explain-card"><span class="pill">domain.h · trích đoạn</span><h3>Một cách gọi, hai cách thanh toán</h3><p><b>Chức năng:</b> quy định cách mỗi phương thức báo trạng thái ban đầu và có cần cổng thanh toán trực tuyến hay không.</p><p><b>Lợi ích:</b> checkout dùng cùng một giao diện, dù khách chọn trả lúc nhận hàng hay thanh toán online.</p><div class="payment-mini"><b>COD · trả khi nhận</b><span>Trạng thái <b>unpaid</b> · Không mở cổng thanh toán</span></div><div class="payment-mini online"><b>payOS · trả trực tuyến</b><span>Trạng thái <b>pending</b> · Cần cổng thanh toán</span></div><p class="explain-tech"><b>Trong C++:</b> các lớp cài đặt chung <code>IPaymentMethod</code>.</p></div>
</div>

<!--
SLIDE 12 — Một hợp đồng thanh toán, hai hình thức khác nhau
Đối chiếu báo cáo Word: Mục 2.1.5–2.1.6; 3.2.4

LỜI DẪN DỄ HIỂU: IPaymentMethod như một bản hợp đồng: bất kỳ kiểu thanh toán nào cũng phải trả lời “trạng thái đầu là gì?” và “có cần cổng thanh toán không?”.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. virtual ... = 0 đánh dấu những hàm mà lớp con bắt buộc phải cài đặt.
2. CodPayment kế thừa IPaymentMethod, trả trạng thái unpaid và requiresGateway() = false.
3. OnlinePayment cũng kế thừa nhưng trả pending và requiresGateway() = true.
4. override nói rõ hàm của lớp con thực hiện phiên bản của hợp đồng chung.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khách A chọn trả tiền khi nhận hàng nên chưa cần mở link thanh toán; khách B chọn payOS phải qua cổng thanh toán.
KẾT LUẬN CỦA SLIDE: Giúp lớp Application có cách giao tiếp thống nhất dù cách xử lý bên trong của COD và thanh toán online khác nhau.

[GHI CHÚ GỐC]
Giải thích từ khóa virtual và =0 là phương thức thuần ảo. C++ tự chọn phiên bản đúng khi con trỏ cơ sở trỏ đến CodPayment hoặc OnlinePayment.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · POLYMORPHISM THỰC TẾ</div>

# Chọn phương thức lúc đặt hàng
<div class="code-layout">
<div>

```cpp
std::unique_ptr<IPaymentMethod> payment;
if (pay == "cod")
    payment = std::make_unique<CodPayment>();
else
    payment = std::make_unique<OnlinePayment>();

if (payment->requiresGateway() && !gatewayReady())
    throw Error(503, "payment_not_configured",
                "Chưa thiết lập kênh payOS.");
```

</div>
<div class="explain-card"><span class="pill">application.cpp · trích đoạn</span><h3>Chọn đúng luồng theo cách trả tiền</h3><p><b>Chức năng:</b> khi khách chọn COD hoặc payOS, checkout tạo phương thức phù hợp rồi hỏi có cần cổng thanh toán hay không.</p><p><b>Lợi ích:</b> COD đi tiếp mà không cần kết nối payOS; với thanh toán online, hệ thống kiểm tra cấu hình trước để tránh nhận đơn ở một luồng chưa sẵn sàng.</p><p><b>Trong C++:</b> biến <code>payment</code> gọi cùng một hàm qua giao diện chung; mỗi lớp tự trả lời theo cách của mình.</p><div class="example-box"><span>Chọn payOS nhưng chưa cấu hình cổng</span><strong class="danger">Thông báo chưa thể thanh toán</strong></div></div>
</div>

<!--
SLIDE 13 — Đa hình chọn đúng cách làm khi khách bấm thanh toán
Đối chiếu báo cáo Word: Mục 2.1.6; 3.2.4

LỜI DẪN DỄ HIỂU: Giống một chiếc remote có cùng nút bật, nhưng nút đó điều khiển TV hay quạt tùy thiết bị đang kết nối. C++ dùng cùng biến payment cho hai kiểu thanh toán.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Tạo biến payment kiểu con trỏ tới giao diện IPaymentMethod.
2. Nếu pay == "cod", chương trình tạo đối tượng CodPayment.
3. Nếu khách chọn online, chương trình tạo OnlinePayment.
4. Gọi payment->requiresGateway(): C++ tự tìm hàm phù hợp của đối tượng thật; online chưa cấu hình thì báo lỗi 503.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Hai khách cùng bấm Đặt hàng: COD đi tiếp không cần gateway, online sẽ kiểm tra payOS có sẵn sàng hay chưa.
KẾT LUẬN CỦA SLIDE: Phần đặt hàng gọi một cách thống nhất; mỗi kiểu thanh toán tự trả lời theo đặc điểm riêng của nó.

[GHI CHÚ GỐC]
Điểm cần nói: có đa hình động qua con trỏ đến lớp cơ sở và phương thức virtual, không chỉ là if/else lựa chọn.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · CHIẾN LƯỢC VẬN CHUYỂN</div>

# Phí giao hàng là một quy tắc có thể thay đổi
<div class="code-layout">
<div>

```cpp
class IShippingFeePolicy {
public:
    virtual ~IShippingFeePolicy() = default;
    virtual Money calculate(int weightGrams,
                            bool sameRegion) const = 0;
};

class RegionalShipping final : public IShippingFeePolicy {
    int local_, remote_, step_;
public:
    Money calculate(int weightGrams,
                    bool sameRegion) const override;
};
```

</div>
<div class="explain-card"><span class="pill">domain.h · rút gọn</span><h3>Đổi quy tắc phí giao linh hoạt</h3><p><b>Chức năng:</b> tính phí giao dựa vào nơi nhận hàng và khối lượng. Checkout chỉ cần yêu cầu “tính phí” từ quy tắc đang sử dụng.</p><p><b>Lợi ích:</b> nếu sau này đổi biểu phí hoặc thêm cách tính khác, có thể thay lớp tính phí mà ít phải sửa phần đặt hàng.</p><p><b>Trong C++:</b> <code>IShippingFeePolicy</code> quy định hàm chung; <code>RegionalShipping</code> thực hiện phép tính theo vùng.</p><div class="example-box"><span>Đơn 1.501g giao khác vùng</span><strong>Phí minh họa: 45.000đ</strong></div></div>
</div>

<!--
SLIDE 14 — Chính sách giao hàng giống bảng quy định của hãng vận chuyển
Đối chiếu báo cáo Word: Mục 2.1.6; 3.2.5

LỜI DẪN DỄ HIỂU: Một hãng có thể tính phí theo quãng đường, hãng khác theo cân nặng. IShippingFeePolicy định nghĩa câu hỏi chung “đơn này giao hết bao nhiêu tiền?”.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. calculate(weightGrams, sameRegion) nhận cân nặng và thông tin cùng/khác vùng.
2. IShippingFeePolicy chỉ quy định hàm phải có; đây là phần trừu tượng.
3. RegionalShipping thực hiện công thức cụ thể dựa trên local_, remote_, step_.
4. Application gọi calculate() và nhận một Money để cộng vào tổng đơn.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Một kiện 1kg cùng vùng có phí cơ bản 20.000đ, nhưng cùng kiện đó giao khác vùng là 35.000đ theo cấu hình minh họa.
KẾT LUẬN CỦA SLIDE: Khi mô hình tính phí thay đổi, có thể thêm lớp chính sách mới mà vẫn giữ cách gọi calculate().

[GHI CHÚ GỐC]
Đây là một ứng dụng của trừu tượng và đa hình: các quy tắc vận chuyển khác nhau có thể cùng tuân theo IShippingFeePolicy.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · THUẬT TOÁN TÍNH PHÍ</div>

# Tính theo khu vực + mỗi 500g vượt 1kg
<div class="shipping-formula">
  <div class="formula-left"><h3>Quy tắc minh họa trong chương trình</h3><div class="formula-number">20.000đ <span>cùng vùng</span></div><div class="formula-number">35.000đ <span>khác vùng</span></div><div class="formula-note">Nếu trọng lượng &gt; 1kg: cộng <b>5.000đ</b> cho mỗi 500g bắt đầu vượt.</div></div>
  <div class="formula-right"><h3>Ví dụ: khác vùng, 1.501g</h3><div class="sum-row"><span>Phí cơ bản</span><b>35.000đ</b></div><div class="sum-row"><span>501g vượt → 2 mức × 5.000đ</span><b>10.000đ</b></div><div class="sum-row total"><span>Tổng phí giao</span><b>45.000đ</b></div><p class="caption">Kiểm thử xác nhận ví dụ này trong <code>domain_tests.cpp</code>.</p></div>
</div>

```cpp
return Money((same ? local_ : remote_)
    + std::max(0, (w - 1000 + 499) / 500) * step_);
```

<!--
SLIDE 15 — Phí giao: tính tiền nền rồi cộng từng nấc 500g
Đối chiếu báo cáo Word: Mục 3.2.5; 3.3.1

LỜI DẪN DỄ HIỂU: Coi 1kg đầu tiên đã có phí cố định. Phần vượt 1kg được chia thành các “bậc thang” 500g; bước lên một phần bậc vẫn tính tròn bậc.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. same ? local_ : remote_ chọn 20.000đ cùng vùng hoặc 35.000đ khác vùng.
2. w - 1000 lấy phần gram vượt 1kg.
3. +499 rồi chia nguyên cho 500 giúp làm tròn lên với khối lượng vượt dương.
4. std::max(0, ...) tránh thu phụ phí khi chưa tới ngưỡng; step_ nhân với số bậc.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khác vùng, 1.501g: phần vượt 501g tương đương 2 bậc. Phí là 35.000 + 2 × 5.000 = 45.000đ.
KẾT LUẬN CỦA SLIDE: Tính bằng số nguyên cho kết quả nhất quán. Các mức phí là cấu hình minh họa trong đồ án, không phải giá của hãng vận chuyển thật.

[GHI CHÚ GỐC]
Phân tích biểu thức: (w - 1000 + 499)/500 thực hiện làm tròn lên số bậc 500g. 1.501g vượt 501g nên cộng hai bậc. Đây là công thức phí demo, không phải bảng giá vận chuyển thực.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · STATE MACHINE</div>

# Đơn hàng chuyển trạng thái có quy tắc
<div class="state-steps"><div><span>01</span><b>new</b><small>Mới tạo</small></div><div class="state-arrow">→</div><div><span>02</span><b>confirmed</b><small>Đã xác nhận</small></div><div class="state-arrow">→</div><div><span>03</span><b>preparing</b><small>Chuẩn bị hàng</small></div><div class="state-arrow">→</div><div><span>04</span><b>shipping</b><small>Vận chuyển</small></div><div class="state-arrow">→</div><div><span>05</span><b>delivered</b><small>Đã giao</small></div><div class="state-arrow">→</div><div><span>06</span><b>completed</b><small>Hoàn tất</small></div></div>
<div class="state-support"><div class="state-good"><b>Hợp lệ ✓</b><p>new → confirmed</p></div><div class="state-bad"><b>Không hợp lệ ✕</b><p>new → delivered</p></div><div class="state-extra"><b>Nhánh đặc biệt</b><p>cancelled · delivery_failed<br>Có điều kiện cho phép riêng</p></div></div>
<div class="takeaway">Quy tắc chuyển trạng thái nằm trong <code>IOrderState / orderState()</code>, giúp chặn việc bỏ qua bước nghiệp vụ.</div>

<!--
SLIDE 16 — Đơn hàng phải đi đúng các bước như theo dõi bưu kiện
Đối chiếu báo cáo Word: Mục 3.2.6

LỜI DẪN DỄ HIỂU: Bưu kiện không thể vừa được tạo xong đã báo giao thành công. Mỗi trạng thái đơn có một danh sách các bước tiếp theo được phép.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. new nghĩa là đơn mới được tạo.
2. confirmed là người bán chấp nhận; preparing là đang chuẩn bị.
3. shipping là đang giao; delivered là đã giao; completed là kết thúc.
4. Các nhánh cancelled và delivery_failed có quy tắc riêng khi hủy hoặc giao thất bại.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: new → confirmed là hợp lệ. new → delivered bị từ chối vì bỏ qua bước xác nhận và giao hàng.
KẾT LUẬN CỦA SLIDE: Giúp dữ liệu theo dõi đơn đáng tin cậy hơn; backend tiếp tục kiểm tra quyền người thao tác và điều kiện thanh toán.

[GHI CHÚ GỐC]
Lấy tình huống người dùng cố chuyển từ mới tạo thẳng sang đã giao: backend phải từ chối. Đây là bài toán có giới hạn trạng thái, không thể tin hoàn toàn vào giao diện.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">02 · KIỂM TRA TRẠNG THÁI</div>

# Kiểm tra chuyển trạng thái bằng hàm C++
<div class="code-layout">
<div>

```cpp
void requireTransition(const std::string &from,
                       const std::string &to) {
    if (!orderState(from)->allows(to))
        throw Error(409, "invalid_transition",
                    "Không thể chuyển trạng thái đơn hàng.");
}
```

</div>
<div class="explain-card"><span class="pill">domain.cpp · mã nguồn thật</span><h3>Không cho đơn “nhảy cóc”</h3><p><b>Chức năng:</b> kiểm tra đơn có được chuyển từ trạng thái hiện tại sang trạng thái tiếp theo hay không.</p><p><b>Lợi ích:</b> ngăn đơn vừa tạo bị đánh dấu đã giao khi chưa xác nhận, chuẩn bị hoặc vận chuyển; lịch sử đơn đáng tin cậy hơn.</p><p><b>Trong C++:</b> <code>allows(to)</code> hỏi quy tắc trạng thái; nếu sai, hàm trả lỗi nghiệp vụ <b>409</b>.</p><div class="example-box"><span><b>new → confirmed:</b> Hợp lệ ✓</span><span><b>new → delivered:</b> <b class="danger">Bị từ chối</b></span></div></div>
</div>

<!--
SLIDE 17 — Code kiểm tra trạng thái như người gác cổng
Đối chiếu báo cáo Word: Mục 3.2.6

LỜI DẪN DỄ HIỂU: requireTransition() giống nhân viên kiểm vé: chỉ khi lộ trình hợp lệ thì người dùng được qua bước tiếp theo.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. from nhận trạng thái hiện tại, ví dụ new.
2. to nhận trạng thái được yêu cầu, ví dụ delivered.
3. orderState(from) chọn đối tượng quy tắc cho trạng thái hiện tại; allows(to) trả đúng hoặc sai.
4. Nếu kết quả sai, throw Error(409, ...) dừng thao tác và báo xung đột.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Gọi requireTransition("new", "delivered") nhận lỗi 409; gọi với "new", "confirmed" thì qua bước kiểm tra này.
KẾT LUẬN CỦA SLIDE: Kể cả khi ai đó cố sửa yêu cầu qua trình duyệt, máy chủ vẫn giữ đúng thứ tự xử lý đơn.

[GHI CHÚ GỐC]
Giải thích lỗi 409 Conflict diễn tả thao tác mâu thuẫn với trạng thái hiện tại của tài nguyên. Chặn ở backend dù người dùng can thiệp trực tiếp vào request.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · DEMO API LẤY DỮ LIỆU</div>

# Demo động: JavaScript gọi API C++ như thế nào?

<ApiFlowDemo scenario="products" />

<!--
SLIDE 18 — API là cách trình duyệt đặt câu hỏi cho C++
Đối chiếu báo cáo Word: Mục 2.2; 3.4.1–3.4.2

LỜI DẪN DỄ HIỂU: API giống cửa sổ gọi món. Trình duyệt gửi “cho tôi danh sách sản phẩm trang 1”, C++ trả một gói dữ liệu mà trình duyệt có thể đọc.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. GET /api/products?page=1 là câu hỏi muốn lấy dữ liệu trang đầu.
2. C++ nhận đường dẫn, gọi phần xử lý catalog và truy vấn dữ liệu.
3. JSON chứa items và thông tin phân trang để hai ngôn ngữ hiểu nhau.
4. JavaScript đọc items, tạo những thẻ sản phẩm trên trang.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Máy chủ trả { "items": [{ "name": "Áo sơ mi" }] }. Website đọc tên và hiển thị thẻ “Áo sơ mi”.
KẾT LUẬN CỦA SLIDE: Các bước tách biệt giúp C++ có thể đổi cách lấy dữ liệu mà phía giao diện vẫn nhận đúng hình thức kết quả.

[GHI CHÚ GỐC]
Giải thích request GET: trình duyệt yêu cầu /api/products?page=1, C++ gọi publicCatalog và query sản phẩm đang bán. Response JSON chứa items và thông tin phân trang. Client nhận và lặp qua items để render card sản phẩm. Ví dụ JSON rút gọn, không gọi server thực trong lúc trình chiếu.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · CODE FRONTEND ↔ BACKEND</div>

# Xem code: <code>fetch()</code> kết nối với C++

<div class="fetch-demonstration">
  <div class="fetch-code">
    <div class="fetch-code-head"><span>FRONTEND · JavaScript</span><small>Ví dụ tối giản từ frontend/api.js</small></div>

```js
const response = await fetch('/api/products?page=1');
if (!response.ok) throw new Error('API lỗi');

const data = await response.json();
renderProducts(data.items); // Hiển thị lên trang
```

  </div>
  <div class="fetch-code">
    <div class="fetch-code-head"><span>BACKEND · C++20</span><small>application.cpp · rút gọn</small></div>

```cpp
if (path == "/api/products" && method == "GET") {
    auto page = publicCatalog(r, options);
    return page;    // JSON response
}
```

  </div>
</div>
<div class="fetch-pipeline"><div v-click><span>01</span><b>fetch()</b><small>Gửi GET</small></div><i>→</i><div v-click><span>02</span><b>Backend</b><small>Truy vấn DB</small></div><i>→</i><div v-click><span>03</span><b>response.json()</b><small>Đọc dữ liệu</small></div><i>→</i><div v-click><span>04</span><b>renderProducts()</b><small>Hiển thị UI</small></div></div>
<div class="takeaway compact">Bấm <b>Space / →</b> để hiện lần lượt 4 bước. Mã ví dụ đã rút gọn; <code>api.js</code> thực tế còn có CSRF, cache và timeout.</div>

<!--
SLIDE 19 — fetch, JSON và render: ba bước của một lần tải dữ liệu
Đối chiếu báo cáo Word: Mục 3.4.1–3.4.2

LỜI DẪN DỄ HIỂU: fetch là hành động gửi yêu cầu, JSON là gói thông tin nhận về, render là việc đem thông tin đó vẽ thành sản phẩm trên màn hình.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. fetch("/api/products?page=1") gọi tới địa chỉ API từ JavaScript.
2. response.ok kiểm tra máy chủ có trả yêu cầu thành công hay không.
3. response.json() chuyển phản hồi thành dữ liệu JavaScript có thể dùng.
4. renderProducts(data.items) duyệt danh sách và cập nhật giao diện; phía C++ chọn nhánh GET phù hợp.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Nếu API trả 12 món, trang sẽ tạo 12 thẻ, có tên, ảnh và giá; nếu API lỗi thì cần hiển thị thông báo.
KẾT LUẬN CỦA SLIDE: Bản code trên slide đã tối giản; api.js trong dự án còn kiểm tra phiên đăng nhập, mã chống giả mạo và timeout.

[GHI CHÚ GỐC]
Chỉ rõ HTTP request và response là dữ liệu truyền qua mạng: code JS gửi request, endpoint trong C++ chọn route, C++ trả JSON, JS parse rồi render. Click lần lượt 4 bước trên slide. Code frontend là ví dụ rút gọn có cùng logic với api.js; backend là trích đoạn application.cpp.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · LUỒNG MUA HÀNG</div>

# Checkout: xem báo giá trước khi lưu đơn
<div class="checkout-stages"><div class="checkout-stage"><span>01</span><h3>Khách gửi giỏ và địa chỉ</h3><p>Chọn số lượng, phương thức thanh toán, voucher</p></div><div class="checkout-stage accent"><span>02</span><h3>POST /checkout/quote</h3><p>Đọc giá và kho từ DB → tính tổng và tạo báo giá có chữ ký</p></div><div class="checkout-stage"><span>03</span><h3>Khách xác nhận</h3><p>Hiển thị tổng tiền, phương thức, phí giao</p></div><div class="checkout-stage dark"><span>04</span><h3>POST /checkout</h3><p>Kiểm tra lại → lưu đơn, giữ kho trong transaction</p></div></div>
<div class="takeaway"><b>Hai bước</b> giúp người mua nhìn thấy tổng tiền trước khi đặt và giúp backend kiểm tra dữ liệu lần cuối.</div>

<!--
SLIDE 20 — Báo giá giống xem hóa đơn trước khi trả tiền
Đối chiếu báo cáo Word: Mục 3.3.5; 3.4.5

LỜI DẪN DỄ HIỂU: Trước khi chốt mua, cửa hàng in tờ hóa đơn nháp để khách xem tổng tiền. Chỉ sau khi khách đồng ý mới tiến hành ghi đơn hàng thật.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Khách chọn giỏ, địa chỉ, phương thức thanh toán và mã giảm giá.
2. POST /checkout/quote đọc lại giá và tồn kho tại máy chủ, tính tổng và tạo mã báo giá.
3. Người mua xem tiền hàng, giảm giá, phí giao và quyết định xác nhận.
4. POST /checkout tính lại, so mã báo giá và chỉ lưu đơn khi các điều kiện còn đúng.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Hóa đơn nháp hiện 150.000đ. Trước khi chốt, giá đổi thành 160.000đ: hệ thống yêu cầu xem báo giá mới.
KẾT LUẬN CỦA SLIDE: Không cho trình duyệt tự đặt tổng tiền cuối cùng; bước báo giá chưa lưu đơn và chưa giữ kho.

[GHI CHÚ GỐC]
Trọng tâm: quote để xem trước, checkout thật để ghi DB. Giá ở hai bước đều do backend đọc từ DB; trình duyệt không được gửi và quyết định giá cuối.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · TÁCH ĐƠN THEO SHOP</div>

# Một giỏ, nhiều đơn: <code>OrderSnapshot</code> được dùng ra sao?
<div class="checkout-split"><div class="cart-list"><h3>Giỏ hàng của khách</h3><div>Áo sơ mi <span>Shop A · 2 chiếc</span></div><div>Tai nghe <span>Shop B · 1 chiếc</span></div></div><div class="split-arrow">→</div><div class="orders-side"><div><small>ĐƠN CON A</small><b>Shop A</b><span>Tổng tiền + phí A</span></div><div><small>ĐƠN CON B</small><b>Shop B</b><span>Tổng tiền + phí B</span></div></div></div>
<div class="code-strip">

```cpp
for (auto &[shopId, items] : grouped) {
    OrderSnapshot snapshot(std::move(snapshotLines));
    auto subtotal = snapshot.total();
    auto ship = shipping.calculate(weight, sameRegion).value(); // minh họa
}
```

</div>
<p class="caption">Mã rút gọn từ luồng checkout: nhóm sản phẩm theo <code>shopId</code>, tạo snapshot, tính tổng và phí từng shop.</p>

<!--
SLIDE 21 — Một giỏ hàng có thể phải tách thành nhiều đơn
Đối chiếu báo cáo Word: Mục 3.3.3; 3.4.5

LỜI DẪN DỄ HIỂU: Giống mua cùng lúc ở hai gian hàng trong trung tâm thương mại: bạn đi một lần tới quầy thanh toán, nhưng mỗi gian có phiếu giao hàng của riêng mình.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Đọc từng dòng được người mua chọn trong giỏ.
2. Dùng shopId để đưa món cùng cửa hàng vào một nhóm.
3. Với mỗi nhóm, tạo OrderSnapshot và gọi total() để cộng tiền hàng.
4. Tính phí giao theo nơi gửi và cân nặng của chính shop đó.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Hai áo của Shop A và một tai nghe của Shop B: một lượt checkout tạo đơn A và đơn B, mỗi đơn có phí giao và xử lý riêng.
KẾT LUẬN CỦA SLIDE: Mỗi người bán chỉ chịu trách nhiệm chuẩn bị phần hàng của họ; tổng lượt thanh toán vẫn được hệ thống tổng hợp.

[GHI CHÚ GỐC]
Trong source, sameRegion là biểu thức so sánh address[region] với shop[region]. Dòng slide được viết rút gọn để nhìn rõ thuật toán.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 1 · NHÓM DỮ LIỆU</div>

# Thuật toán nhóm giỏ hàng theo <code>shop_id</code>
<p class="lead">Đầu vào: các dòng được chọn trong giỏ. Đầu ra: mỗi shop có một đơn con.</p>
<table class="algo-table"><thead><tr><th>Lượt duyệt</th><th>Dòng hàng minh họa</th><th>Nhóm A sau lượt</th><th>Nhóm B sau lượt</th></tr></thead><tbody><tr><td>1</td><td>Áo · A · 2 × 100.000đ</td><td>[Áo]</td><td>—</td></tr><tr><td>2</td><td>Tai nghe · B · 1 × 300.000đ</td><td>[Áo]</td><td>[Tai nghe]</td></tr><tr><td>3</td><td>Mũ · A · 1 × 50.000đ</td><td>[Áo, Mũ]</td><td>[Tai nghe]</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Kiểm tra trước khi đưa vào nhóm</h3><p>Bỏ qua dòng chưa chọn. Chặn sản phẩm ngừng bán, shop chưa được duyệt, số lượng ngoài 1–99 hoặc không đủ kho.</p></div><div><h3>Chỉ duyệt giỏ một lần</h3><p><code>std::map</code> tra nhóm theo shop: O(n log s), với n dòng và s shop; bộ nhớ chứa các dòng được chọn là O(n).</p></div></div>
<div class="takeaway">Nhóm A: <b>250.000đ</b> · Nhóm B: <b>300.000đ</b>. Sau đó mỗi nhóm tạo <code>OrderSnapshot</code> để tính tiền hàng.</div>

<!--
SLIDE 22 — Nhóm theo shop_id giống xếp hóa đơn vào ngăn riêng
Đối chiếu báo cáo Word: Mục 3.3.3

LỜI DẪN DỄ HIỂU: Tưởng tượng một bàn có các hóa đơn lẫn lộn. Ta đọc từng hóa đơn và bỏ vào ngăn mang tên cửa hàng tương ứng.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Đầu tiên bỏ qua món chưa được chọn và kiểm tra sản phẩm đang bán, shop đã được duyệt.
2. Kiểm tra số lượng từ 1 đến 99 và tồn kho có đủ.
3. std::map dùng shop_id làm nhãn ngăn; nếu ngăn chưa có thì tạo mới.
4. Gặp món cùng shop, thêm vào ngăn cũ; cuối cùng tính tổng riêng từng nhóm.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Áo của A 200.000đ, tai nghe của B 300.000đ, mũ của A 50.000đ → A có 250.000đ, B có 300.000đ.
KẾT LUẬN CỦA SLIDE: Chương trình chỉ cần duyệt các dòng giỏ một lần để nhóm; thứ tự nhóm theo mã shop, không theo chỗ món xuất hiện.

[GHI CHÚ GỐC]
Nguồn: backend/src/application.cpp, nhánh POST checkout, grouped và vòng cartLines. Dữ liệu và bảng truy vết là minh họa. map sắp theo shop_id chứ không theo vị trí shop xuất hiện trong giỏ; độ phức tạp chỉ tính thao tác nhóm trong bộ nhớ, không bao gồm truy vấn DB.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 2 · THỨ TỰ TÍNH TIỀN</div>

# Voucher shop trước, voucher toàn sàn sau
<p class="lead">Ví dụ tiếp nối: phí giao A là 20.000đ, B là 35.000đ; voucher sàn giảm 53.000đ.</p>
<table class="algo-table"><thead><tr><th>Bước tính</th><th>Shop A</th><th>Shop B</th><th>Tổng</th></tr></thead><tbody><tr><td>1 · Tiền hàng</td><td>250.000</td><td>300.000</td><td>550.000</td></tr><tr><td>2 · Trừ voucher shop</td><td>−20.000</td><td>0</td><td>−20.000</td></tr><tr><td>3 · Cơ sở chia voucher sàn</td><td>230.000</td><td>300.000</td><td>530.000</td></tr><tr><td>4 · Phần voucher sàn được chia</td><td>−23.000</td><td>−30.000</td><td>−53.000</td></tr><tr><td>5 · Cộng phí giao</td><td>+20.000</td><td>+35.000</td><td>+55.000</td></tr><tr class="algo-total"><td>Khách thanh toán</td><td>227.000đ</td><td>305.000đ</td><td>532.000đ</td></tr></tbody></table>
<div class="takeaway">Voucher sàn được chia trên <b>tiền hàng sau giảm shop</b>, không gồm phí giao; phần giảm tiếp tục được phân bổ xuống từng dòng hàng.</div>

<!--
SLIDE 23 — Tính voucher theo đúng thứ tự để không cộng trừ sai
Đối chiếu báo cáo Word: Mục 3.3.1–3.3.2

LỜI DẪN DỄ HIỂU: Giống dùng hai phiếu giảm giá: phiếu của từng cửa hàng áp trước; phiếu chung của sàn chia trên số tiền còn lại, cuối cùng mới thêm phí giao.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Tổng tiền hàng: Shop A 250.000đ và B 300.000đ.
2. Voucher shop A giảm 20.000đ, nên còn A 230.000đ và B 300.000đ.
3. Voucher sàn 53.000đ được chia theo tỷ lệ 230.000 : 300.000, tức A giảm 23.000đ, B giảm 30.000đ.
4. Cộng phí giao 20.000đ và 35.000đ cho từng shop.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khách trả 550.000 - 20.000 - 53.000 + 55.000 = 532.000đ. Đơn A 227.000đ, đơn B 305.000đ.
KẾT LUẬN CỦA SLIDE: Giảm giá chỉ chia trên tiền hàng đủ điều kiện và phải khớp từ dòng hàng tới đơn con rồi tới checkout.

[GHI CHÚ GỐC]
Nguồn: backend/src/application.cpp, bases.push_back(subtotal - discount), allocateDiscount(bases, global), và perLine. Đây là ví dụ số học minh họa với các voucher giả định hợp lệ. A nhận 230000/530000 × 53000 = 23000; B nhận 30000. Đối chiếu: 550000 - 20000 - 53000 + 55000 = 532000.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 3 · TRUY VẾT VOUCHER</div>

# Thuật toán voucher: truy vết từng đồng
<p class="lead">Gọi T = 100.000đ, D = 10.001đ; Cᵢ là tiền hàng tích lũy đến dòng i.</p>
<div class="algo-equation">Mục tiêu Qᵢ = ⌊Cᵢ × D / T⌋ &nbsp; → &nbsp; Giảm dòng i = Qᵢ − Qᵢ₋₁</div>
<table class="algo-table"><thead><tr><th>Dòng</th><th>Tiền hàng</th><th>Cᵢ</th><th>Qᵢ</th><th>Giảm dòng</th></tr></thead><tbody><tr><td>1</td><td>33.333</td><td>33.333</td><td>3.333</td><td>3.333đ</td></tr><tr><td>2</td><td>33.333</td><td>66.666</td><td>6.667</td><td>3.334đ</td></tr><tr><td>3</td><td>33.334</td><td>100.000</td><td>10.001</td><td>3.334đ</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Vì sao tổng luôn khớp?</h3><p>Cộng các hiệu Qᵢ − Qᵢ₋₁ sẽ triệt tiêu phần giữa, còn Q cuối − Q₀ = D − 0.</p></div><div><h3>Vì sao không làm tròn riêng?</h3><p>Lấy phần nguyên từng dòng chỉ được 3.333 + 3.333 + 3.333 = 9.999đ, thiếu 2đ so với voucher.</p></div></div>

<!--
SLIDE 24 — Chia voucher lẻ từng đồng mà tổng vẫn đủ
Đối chiếu báo cáo Word: Mục 3.3.2

LỜI DẪN DỄ HIỂU: Khi chia một tờ tiền cho ba người, có thể xuất hiện phần lẻ không chia đều. Nếu ai cũng tự làm tròn xuống, tiền bị thiếu; hệ thống phải theo dõi số lẻ chung.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. T là tổng tiền hàng; D là số tiền giảm; Cᵢ là tổng tiền cộng dồn đến dòng i.
2. Qᵢ là mức giảm phải phân bổ tính đến dòng i, lấy phần nguyên của Cᵢ × D / T.
3. Giảm riêng dòng i = Qᵢ - Qᵢ₋₁, tức lấy phần mới phát sinh ở dòng đó.
4. Dòng cuối có C = T nên Q cuối bằng đúng D, bảo đảm không thiếu một đồng.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Ba dòng 33.333đ, 33.333đ, 33.334đ chia voucher 10.001đ → các phần 3.333đ, 3.334đ, 3.334đ.
KẾT LUẬN CỦA SLIDE: Tránh cộng các phần làm tròn độc lập được 9.999đ, thiếu 2đ và gây sai lệch khi đối soát hoặc hoàn tiền.

[GHI CHÚ GỐC]
Nguồn: backend/src/domain.cpp, allocateDiscount. Công thức trên giải thích ý nghĩa toán học; code thật không nhân C_i với D trực tiếp. Q0 = 0. Kết quả phụ thuộc thứ tự đầu vào khi phân bổ đồng lẻ; không phải thuật toán chọn dòng có phần dư lớn nhất.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 3 · TRÁNH TRÀN SỐ</div>

# Code C++ tránh tràn số khi chia voucher
<p class="lead">C và D có thể tới 10¹²: tích C × D có thể vượt giới hạn số nguyên 64 bit có dấu.</p>
<div class="algo-columns algo-code"><div>

```cpp
// Rút gọn từ allocateDiscount()
uint64_t q = 0, r = 0;
for (int bit = 63; bit >= 0; --bit) {
    auto b = (uint64_t(C) >> bit) & 1U;
    auto x = 2 * r + b * uint64_t(D);
    q = 2 * q + x / uint64_t(T);
    r = x % uint64_t(T);
}
// q = floor(C * D / T)
```

</div><div><h3>Bất biến sau mỗi bit</h3><p>Với tiền tố nhị phân P đã đọc:<br><b>P × D = q × T + r</b>, 0 ≤ r &lt; T.</p><h3>Đọc thêm bit b</h3><p>P mới = 2P + b. Phần dư cần chia tiếp là <b>2r + bD</b>; không tạo tích C × D.</p><h3>Chi phí</h3><p>64 lượt cho mỗi dòng: O(64n), tức O(n) với số nguyên 64 bit; mảng kết quả O(n).</p></div></div>

<!--
SLIDE 25 — Chia số lớn từng chút để máy tính không bị tràn
Đối chiếu báo cáo Word: Mục 3.3.2; mã allocateDiscount trong domain.cpp

LỜI DẪN DỄ HIỂU: Giống muốn đo một số lượng hàng quá lớn mà cân nhỏ không chịu nổi: ta chia thành nhiều phần nhỏ, luôn theo dõi kết quả tạm thời và phần còn dư.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. C × D có thể quá lớn nếu tính một lần khi cả hai giá trị gần 1.000 tỷ.
2. Vòng lặp đọc lần lượt 64 bit của C; b là bit 0 hoặc 1 vừa đọc.
3. q giữ phần thương đang có; r giữ phần dư chưa chia hết.
4. Mỗi lượt cập nhật q và r từ 2*r + b*D, không tạo trực tiếp tích C*D.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Ví dụ nhỏ C=5, D=3, T=7 thì kết quả là phần nguyên của 15/7 bằng 2. Với dữ liệu lớn, cách chia từng bit vẫn đi theo ý tưởng đó.
KẾT LUẬN CỦA SLIDE: Đảm bảo tính giảm giá bằng số nguyên mà không cần chuyển sang số thực; đây là kỹ thuật nâng cao của code thật, mục tiêu vẫn là chia đúng từng đồng.

[GHI CHÚ GỐC]
Nguồn: backend/src/domain.cpp. C là cumulative, D là discount, T là total; đổi tên để giải thích. T <= 10^12 được bảo vệ bởi Money, D <= T và r < T nên x < 3T, không vượt uint64_t. Ví dụ nhỏ C=5, D=3, T=7: đọc 101, sau các bit có (q,r)=(0,3),(0,6),(2,1), nên floor(15/7)=2. Chỉ tính khi T>0 và D>0.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 4 · CÁC MỐC KHỐI LƯỢNG</div>

# Truy vết công thức phí giao ở 4 mốc cân nặng
<div class="algo-equation">Số bậc = max(0, (w − 1.000 + 499) / 500) &nbsp; · &nbsp; chia nguyên C++</div>
<table class="algo-table"><thead><tr><th>Khối lượng w</th><th>Vượt 1kg</th><th>Số bậc</th><th>Phí khác vùng</th></tr></thead><tbody><tr><td>1.000g</td><td>0g</td><td>0</td><td>35.000đ</td></tr><tr><td>1.001g</td><td>1g</td><td>1</td><td>40.000đ</td></tr><tr><td>1.500g</td><td>500g</td><td>1</td><td>40.000đ</td></tr><tr><td>1.501g</td><td>501g</td><td>2</td><td>45.000đ</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Làm tròn lên với số nguyên</h3><p>Với x &gt; 0, ⌈x / 500⌉ = (x + 499) / 500. Vượt chỉ 1g vẫn tính một bậc.</p></div><div><h3>Miền đầu vào và chi phí</h3><p>Chặn w &lt; 0 hoặc w &gt; 100.000g. Tính phí một shop là O(1); khối lượng lấy từ tổng gram × số lượng.</p></div></div>

<!--
SLIDE 26 — Nhìn bốn cân nặng để hiểu làm tròn lên
Đối chiếu báo cáo Word: Mục 3.2.5

LỜI DẪN DỄ HIỂU: Khi vượt 1kg, cứ bắt đầu thêm một khoảng 500g mới thì tính thêm một bậc phí. Điều này giống gửi bưu kiện tính theo nấc cân.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Ở 1.000g: không vượt ngưỡng, thêm 0 bậc.
2. Ở 1.001g: vừa vượt 1g, đã bắt đầu bậc thứ nhất.
3. Ở 1.500g: vẫn nằm trong bậc thứ nhất.
4. Ở 1.501g: vượt 500g thêm một chút, sang bậc thứ hai.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Khác vùng có nền 35.000đ: 1.000g → 35.000đ; 1.001g và 1.500g → 40.000đ; 1.501g → 45.000đ.
KẾT LUẬN CỦA SLIDE: Công thức (x+499)/500 với x dương được dùng để làm tròn lên bằng phép chia số nguyên; trọng lượng âm hoặc quá 100kg bị từ chối.

[GHI CHÚ GỐC]
Nguồn: backend/src/domain.cpp RegionalShipping::calculate, application.cpp vòng tính weight. Phí mặc định minh họa: remote=35000, step=5000; cấu hình có thể thay đổi. Với w<=1000, max(0,...) chặn bậc âm. Bảng là truy vết công thức, không tuyên bố các mốc đều đã có test trong nguồn.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 5 · XÁC MINH BÁO GIÁ</div>

# Báo giá được ràng buộc với dữ liệu nào?
<div class="algo-columns"><div><h3>1 · Tính lại ở máy chủ</h3><p>Đọc giá, kho, địa chỉ và voucher; dựng snapshot gồm người mua, phương thức, revision giỏ, tổng tiền và đơn con.</p><h3>2 · Loại dữ liệu không ổn định</h3><p>Bỏ ID vừa sinh, thời gian và lịch sử khỏi đơn; nếu giữ chúng, hai lần tính cùng giỏ vẫn tạo chữ ký khác nhau.</p></div><div><h3>3 · Ký báo giá trong 300 giây</h3><p>Token = thời điểm hết hạn + chữ ký HMAC trên phiên bản định dạng, hạn dùng và snapshot.</p><h3>4 · Khi xác nhận checkout</h3><p>Tính lại snapshot rồi so token bằng <code>constantEqual</code>. Giá, giỏ hoặc tổng thay đổi → yêu cầu xác nhận lại.</p></div></div>
<table class="algo-table"><thead><tr><th>Điều kiện</th><th>Phản hồi</th><th>Việc người mua cần làm</th></tr></thead><tbody><tr><td>Thiếu / sai cấu trúc token</td><td>409 · quote_required</td><td>Lấy báo giá</td></tr><tr><td>Token hết hạn</td><td>409 · quote_expired</td><td>Lấy báo giá mới</td></tr><tr><td>Chữ ký không khớp</td><td>409 · quote_changed</td><td>Xem và xác nhận lại tổng</td></tr></tbody></table>

<!--
SLIDE 27 — Mã báo giá giống con dấu chống sửa hóa đơn
Đối chiếu báo cáo Word: Mục 3.3.5

LỜI DẪN DỄ HIỂU: Bản báo giá giống hóa đơn nháp có niêm phong. Khi khách bấm mua, thu ngân kiểm tra niêm phong và hạn sử dụng để biết số tiền còn đúng hay đã đổi.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Backend đọc lại giỏ, giá, địa chỉ và voucher để tạo bản tóm tắt snapshot.
2. Hệ thống đưa thời điểm hết hạn và nội dung snapshot vào hàm HMAC để tạo mã kiểm tra.
3. Bản báo giá có hiệu lực 300 giây theo luồng minh họa trong mã.
4. Khi đặt hàng, backend tính lại và dùng constantEqual để so mã; sai thì báo 409.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Ban đầu báo giá 150.000đ, sau đó shop đổi giá thành 160.000đ: snapshot khác nên mã không khớp, khách được mời xác nhận lại.
KẾT LUẬN CỦA SLIDE: Cách này phát hiện thay đổi nội dung giữa lúc xem và lúc mua; bản báo giá không tự giữ hàng hay bảo đảm tồn kho mãi mãi.

[GHI CHÚ GỐC]
Nguồn: backend/src/application.cpp, quoteExpires, snapshot, expected, constantEqual. HMAC dùng session.at("id") làm key theo mã nguồn. Quote không lưu đơn và không giữ kho; hết hạn quote 300 giây khác thời hạn checkout pending 900 giây. Những kiểm tra khác như out_of_stock có thể xảy ra trước so chữ ký.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · CODE CHECKOUT</div>

# Code chống trùng đơn khi khách bấm lại
<div class="code-layout">
<div>

```cpp
const bool quoteOnly = path == "/api/checkout/quote";
auto key = textField(b, "idempotency_key", 100);
if (key.size() < 16)
    throw Error(422, "invalid_key",
                "Thiếu mã chống đặt đơn lặp.");

auto existing = r.one("checkouts",
    "buyer_id = ? AND idem_key = ?",
    {u.at("id"), key});
if (!existing.is_null())
    return {{"checkout", existing}, /* orders */};
```

</div>
<div class="explain-card"><span class="pill">application.cpp · checkout</span><h3>Bấm hai lần vẫn chỉ có một đơn</h3><p><b>Chức năng:</b> nhận diện yêu cầu đặt hàng gửi lại bằng một mã riêng, kết hợp với tài khoản người mua.</p><p><b>Lợi ích:</b> mạng chậm hoặc khách bấm nút nhiều lần sẽ không tạo thêm đơn trùng khi gửi lại cùng mã; khách nhận lại kết quả đã tạo.</p><p><b>Trong C++:</b> backend tìm checkout theo <b>buyer_id + idempotency_key</b> trước khi xử lý lại.</p><div class="example-box"><span>Lần 1 → tạo đơn <b>#A123</b></span><strong>Lần 2 cùng mã → vẫn #A123</strong></div></div>
</div>

<!--
SLIDE 28 — Mã chống trùng giống số thứ tự giao dịch
Đối chiếu báo cáo Word: Mục 3.3.4

LỜI DẪN DỄ HIỂU: Ngân hàng thường cho một giao dịch một mã riêng. Dù ứng dụng gửi lại yêu cầu vì mạng chậm, cùng mã đó chỉ nên tương ứng với một giao dịch đã tạo.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Frontend gửi idempotency_key cùng yêu cầu đặt hàng.
2. C++ kiểm tra key có đủ độ dài tối thiểu 16 ký tự.
3. Repository tìm checkout theo đúng người mua và mã đó.
4. Nếu tìm thấy, trả lại checkout cùng các đơn đã tạo; nếu chưa có thì tiếp tục xử lý tạo mới.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Lần đầu bấm đặt hàng tạo #A123. Lần hai với cùng key trả lại #A123, giúp tránh phát sinh hai đơn vì bấm đúp.
KẾT LUẬN CỦA SLIDE: Ngoài kiểm tra trong C++, bảng checkouts cần ràng buộc duy nhất cặp buyer_id + idem_key để chống ghi trùng đồng thời.

[GHI CHÚ GỐC]
Chỉ code return đã rút gọn cho vừa màn hình, phần điều kiện và truy vấn lấy trực tiếp từ mã nguồn. Mã chống trùng là riêng cho một người mua, không dùng chung toàn hệ thống.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · TRANSACTION DATABASE</div>

# Destructor tự ROLLBACK: ứng dụng RAII trong C++
<div class="code-layout">
<div>

```cpp
Database::Transaction::~Transaction() {
    if (!done_)
        try {
            execute("ROLLBACK");
        } catch (...) {
        }
}

void Database::Transaction::commit() {
    execute("COMMIT");
    done_ = true;
}
```

</div>
<div class="explain-card"><span class="pill">database.cpp · transaction</span><h3>Thất bại giữa chừng thì hoàn tác</h3><p><b>Chức năng:</b> gom các thao tác lưu đơn, cập nhật kho thành một giao dịch; chỉ xác nhận khi mọi bước cần thiết đều thành công.</p><p><b>Lợi ích:</b> tránh tình huống kho đã trừ nhưng đơn chưa được lưu, khiến dữ liệu mua bán bị lệch.</p><p><b>Trong C++:</b> destructor tự <code>ROLLBACK</code> nếu giao dịch kết thúc mà chưa <code>COMMIT</code>.</p><div class="example-box"><span>Đặt hàng thành công → <b>COMMIT ✓</b></span><span>Kiểm kho thất bại → <b>ROLLBACK ↩</b></span></div></div>
</div>

<!--
SLIDE 29 — Transaction là nguyên tắc làm đủ hoặc hoàn lại
Đối chiếu báo cáo Word: Mục 2.1.3; 3.4.3

LỜI DẪN DỄ HIỂU: Giống chuyển tiền ngân hàng: nếu một bước bị lỗi, không thể để tiền đã trừ nhưng chưa được cộng. Tạo đơn hàng cũng cần thực hiện toàn bộ các bước cùng nhau.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Transaction mở một nhóm thao tác ghi dữ liệu.
2. Nếu lưu checkout, đơn con, dòng hàng và cập nhật kho đều thành công, commit() gửi COMMIT.
3. done_ đánh dấu giao dịch đã hoàn tất.
4. Nếu gặp lỗi trước commit và đối tượng kết thúc, destructor gọi ROLLBACK để bỏ thay đổi chưa xác nhận.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Kho báo hết khi đang đặt đơn: hệ thống phải hủy phần ghi chưa hoàn tất, tránh đơn tồn tại nhưng không giữ được hàng.
KẾT LUẬN CỦA SLIDE: RAII gắn việc dọn dẹp với vòng đời đối tượng; giúp giảm nguy cơ quên hoàn tác hoặc quên giải phóng tài nguyên.

[GHI CHÚ GỐC]
Trong mã nguồn thực, destructor còn giải phóng kết nối PostgreSQL khi cần; commit còn xử lý pool/lock. Ví dụ này giữ phần cốt lõi của RAII.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 7 · TỒN KHO ĐỒNG THỜI</div>

# Hai người cùng mua món cuối cùng: chống âm kho
<p class="lead">Kho còn 1 sản phẩm. Hai checkout A và B đều muốn mua 1.</p>
<table class="algo-table"><thead><tr><th>Lượt</th><th>Checkout A</th><th>Checkout B</th></tr></thead><tbody><tr><td>1</td><td>Lấy khóa ghi, đọc stock = 1</td><td>Chờ khóa ghi</td></tr><tr><td>2</td><td>Kiểm tra đủ → stock = 0 → lưu đơn</td><td>Tiếp tục chờ</td></tr><tr><td>3</td><td>COMMIT, nhả khóa</td><td>Lấy khóa, đọc stock = 0</td></tr><tr><td>4</td><td>Nhận đơn đã tạo</td><td>409 out_of_stock → hoàn tác</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Cơ chế thật trong Database</h3><p>SQLite: <code>BEGIN IMMEDIATE</code> cho thao tác ghi. PostgreSQL: <code>pg_advisory_xact_lock(72134001)</code> dùng chung cho các transaction ghi.</p></div><div><h3>Đánh đổi của thiết kế</h3><p>Khóa chung giúp tuần tự hóa thao tác giữ kho và voucher trong luồng này, nhưng có thể giới hạn thông lượng ghi khi tải tăng.</p></div></div>

<!--
SLIDE 30 — Hai người tranh món cuối: phải có lượt kiểm kho
Đối chiếu báo cáo Word: Mục 3.3.3; 3.4.3; 4.2

LỜI DẪN DỄ HIỂU: Một quầy chỉ còn một chiếc áo. Nếu hai nhân viên đều nhìn thấy “còn 1” rồi cùng bán, sổ kho có thể âm. Cần để người bán thứ hai chờ người thứ nhất chốt.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Checkout A vào vùng ghi dữ liệu được khóa và đọc stock = 1.
2. Checkout B chờ lượt ghi.
3. A kiểm tra đủ, giảm kho còn 0, lưu đơn rồi COMMIT.
4. B đọc lại kho = 0 và nhận lỗi out_of_stock thay vì tạo thêm đơn.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Kho còn đúng 1 tai nghe, hai khách cùng mua: chỉ một lượt có thể hoàn tất theo tình huống mô phỏng.
KẾT LUẬN CỦA SLIDE: SQLite dùng BEGIN IMMEDIATE; PostgreSQL có advisory lock trong luồng ghi. Cơ chế cần các phần ghi cùng tuân thủ và còn phải kiểm thử tải thực tế.

[GHI CHÚ GỐC]
Nguồn: backend/src/database.cpp Database::Transaction constructor; application.cpp begin(readOnly), kiểm kho và saveMany variants trong cùng transaction. Mô phỏng giả định các thao tác ghi đều đi qua cơ chế khóa này. PostgreSQL advisory lock yêu cầu các writer tuân thủ; không phải chỉ bọc BEGIN/COMMIT là tự ngăn mọi race. Quote chỉ đọc và không giữ kho.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · DATA ACCESS</div>

# Repository làm việc với SQL qua tham số
<div class="code-layout">
<div>

```cpp
auto existing = r.one(
    "checkouts",
    "buyer_id = ? AND idem_key = ?",
    {u.at("id"), key}
);
```

</div>
<div class="explain-card"><span class="pill">application.cpp · mã nguồn thật</span><h3>Tìm đơn an toàn bằng tham số</h3><p><b>Chức năng:</b> tìm đơn đã tạo theo tài khoản và mã yêu cầu, phục vụ việc chống đặt hàng trùng.</p><p><b>Lợi ích:</b> tách dữ liệu khách nhập khỏi câu lệnh SQL để giảm nguy cơ chèn lệnh ngoài ý muốn; cùng cách truy vấn có thể dùng cho các loại cơ sở dữ liệu hỗ trợ.</p><p><b>Trong C++:</b> dấu <code>?</code> đánh dấu vị trí tham số; tầng Database gắn giá trị bằng cơ chế của SQLite hoặc PostgreSQL.</p><div class="example-box"><span>Khách gửi lại mã đặt hàng cũ</span><strong>Tìm và trả về đơn đã có</strong></div></div>
</div>

<!--
SLIDE 31 — Repository giống thủ thư biết tìm hồ sơ
Đối chiếu báo cáo Word: Mục 3.2.7; 3.4.3; 4.2

LỜI DẪN DỄ HIỂU: Application biết mình cần tìm đơn của ai, còn Repository biết cách hỏi cơ sở dữ liệu. SQL là câu hỏi; dấu ? là chỗ trống được điền đúng giá trị sau.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. r.one("checkouts", ...) yêu cầu lấy một checkout thỏa điều kiện.
2. buyer_id = ? AND idem_key = ? mô tả hai điều kiện cần khớp.
3. {u.at("id"), key} là danh sách giá trị điền vào hai dấu ?.
4. Tầng Database liên kết tham số thay vì nối chuỗi tự do rồi gửi SQL đi.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Muốn tìm lần đặt hàng của khách A có mã XYZ, hệ thống tìm đúng cặp A + XYZ, không nhầm với khách B cùng mã.
KẾT LUẬN CỦA SLIDE: Dễ dùng chung phần truy cập dữ liệu và hạn chế rủi ro câu lệnh SQL bị thay đổi do nội dung người dùng nhập.

[GHI CHÚ GỐC]
Giải thích thêm: Repository che bớt chi tiết SQL khỏi Application. Điều này tạo một lớp truy cập dữ liệu chung cho các nghiệp vụ.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">03 · THANH TOÁN</div>

# PayOS và webhook: chỉ tin kết quả đã xác minh
<div class="payment-journey"><div><span>01</span><h3>Checkout</h3><p>Backend tạo đơn có trạng thái pending</p></div><div class="arrow-between">→</div><div><span>02</span><h3>payOS</h3><p>Tạo link thanh toán khi được cấu hình</p></div><div class="arrow-between">→</div><div><span>03</span><h3>Webhook</h3><p>Gửi dữ liệu giao dịch và chữ ký HMAC</p></div><div class="arrow-between">→</div><div><span>04</span><h3>Đối soát</h3><p>Backend kiểm chứng và cập nhật trạng thái</p></div></div>
<div class="payment-safety"><div><b>Không dựa vào trang “thanh toán thành công”</b><p>Người dùng có thể đóng tab hoặc sửa URL; hệ thống đối chiếu thông tin thanh toán ở backend.</p></div><div><b>COD là phương án riêng</b><p>Không cần gọi gateway; đơn tiếp tục qua quy trình giao hàng và thu tiền khi nhận.</p></div></div>

<!--
SLIDE 32 — Thanh toán chỉ được xác nhận khi đã đối soát
Đối chiếu báo cáo Word: Mục 3.3.7

LỜI DẪN DỄ HIỂU: Trang “Thanh toán thành công” giống một tờ giấy báo; kế toán vẫn cần đối chiếu thông báo thật từ ngân hàng trước khi ghi đã thu tiền.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Backend tạo checkout trạng thái phù hợp với phương thức thanh toán.
2. Nếu là online và cổng đã được cấu hình, hệ thống yêu cầu tạo link thanh toán.
3. Khi có thông báo webhook, backend kiểm tra chữ ký và các thông tin giao dịch.
4. recordReceipt kiểm tra mã tham chiếu đã ghi chưa, số tiền có khớp không, rồi mới cập nhật tiền đã nhận.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Nếu webhook được gửi hai lần cùng mã giao dịch và cùng số tiền, khoản thu chỉ được ghi một lần; cùng mã nhưng khác tiền phải báo xung đột.
KẾT LUẬN CỦA SLIDE: Người dùng có thể đóng tab hoặc sửa URL; chỉ kết quả đã xác minh ở backend mới là căn cứ thay đổi trạng thái thanh toán.

[GHI CHÚ GỐC]
Nói rõ: payOS cần thông tin cấu hình để dùng thực tế. Webhook phải kiểm tra chữ ký, mã giao dịch, trạng thái và xử lý thông báo lặp; redirect của trình duyệt không tự xác nhận đã thu tiền.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">04 · KIỂM THỬ</div>

# Đã kiểm tra những tình huống C++ nào?
<div class="test-grid"><div><span class="test-check">✓</span><h3>Money</h3><p>15.000 + 20.000 = <b>35.000đ</b><br>Nhân vượt giới hạn → lỗi</p></div><div><span class="test-check">✓</span><h3>Shipping</h3><p>Cùng vùng 1kg → <b>20.000đ</b><br>Khác vùng 1.501g → <b>45.000đ</b></p></div><div><span class="test-check">✓</span><h3>OrderSnapshot</h3><p>Copy/move rồi tính đúng tổng <b>24.690đ</b></p></div><div><span class="test-check">✓</span><h3>State machine</h3><p><code>new → confirmed</code> hợp lệ<br><code>new → delivered</code> bị chặn</p></div><div><span class="test-check">✓</span><h3>Discount</h3><p>Phân bổ voucher, cộng lại đúng <b>10.001đ</b></p></div><div><span class="test-check">✓</span><h3>Security</h3><p>HMAC tham chiếu và kiểm tra mật khẩu</p></div></div>
<p class="caption">Các trường hợp trên được đọc từ <code>tests/domain_tests.cpp</code>. Đây là nội dung bài kiểm thử trong nguồn, không phải tuyên bố vừa chạy toàn bộ test backend.</p>

<!--
SLIDE 33 — Kiểm thử là thử trước những tình huống dễ sai
Đối chiếu báo cáo Word: Mục 4.1

LỜI DẪN DỄ HIỂU: Trước khi mở cửa hàng, ta thử máy tính tiền với số bình thường và cả số bất thường. Trong code, một bài test đưa đầu vào rồi so kết quả thực với kết quả mong đợi.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Money: cộng 15.000 và 20.000 phải ra 35.000đ, nhân quá giới hạn phải báo lỗi.
2. Shipping: khác vùng, 1.501g phải tính 45.000đ.
3. OrderSnapshot: sao chép hoặc chuyển đối tượng vẫn phải tính tổng đúng.
4. State và voucher: không cho bỏ bước, tổng giảm giá sau chia phải đúng 10.001đ.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Một bài test thất bại khi code cho phép “new → delivered”, vì đó là chuyển trạng thái không hợp lệ theo quy tắc.
KẾT LUẬN CỦA SLIDE: Đây là các trường hợp có trong mã kiểm thử theo báo cáo; phải thực sự chạy lệnh test để kết luận phiên bản hiện tại đạt hay không.

[GHI CHÚ GỐC]
Nếu có thời gian, mở tests/domain_tests.cpp để chỉ dòng check của Money, phí vận chuyển, OrderSnapshot và HMAC. Nêu cách các test chứng minh hàm miền nghiệp vụ hoạt động đúng ở các trường hợp đặc biệt.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="eyebrow">04 · ĐÁNH GIÁ</div>

# Những gì dự án đã làm được và còn hạn chế
<div class="compare-grid"><div class="compare-panel success"><h3>Đã có trong mã nguồn</h3><p>✓ Backend C++20 xử lý nghiệp vụ web</p><p>✓ Tổ chức các lớp OOP có vai trò rõ ràng</p><p>✓ Checkout, kiểm kho, chia đơn theo shop</p><p>✓ SQLite phát triển / PostgreSQL triển khai</p><p>✓ Kiểm thử miền nghiệp vụ và tài liệu API</p></div><div class="compare-panel limits"><h3>Cần tiếp tục hoàn thiện</h3><p>↗ Dữ liệu sản phẩm phần lớn phục vụ thử nghiệm</p><p>↗ Phí giao hàng hiện là công thức minh họa</p><p>↗ Kiểm thử tích hợp các dịch vụ thật sâu hơn</p><p>↗ Đo tải, giám sát và kiểm thử đồng thời</p><p>↗ Chuẩn bị dữ liệu / cấu hình riêng cho sản xuất</p></div></div>

<!--
SLIDE 34 — Hiểu kết quả đồ án và giới hạn sử dụng
Đối chiếu báo cáo Word: Mục 4.2–4.3; 5.1–5.3

LỜI DẪN DỄ HIỂU: Một mô hình cửa hàng cho môn học có thể chứng minh thuật toán đúng trong các ví dụ; để kinh doanh ở quy mô lớn vẫn cần kiểm tra nhiều tình huống thực tế hơn.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Dự án tổ chức các chức năng bán hàng thành giao diện, backend C++ và các lớp dữ liệu.
2. Những phần quan trọng như tính tiền, voucher, kho và đổi trạng thái có quy tắc kiểm tra.
3. Để đánh giá tốc độ phải đo thực tế trên thiết bị, đường truyền và dữ liệu cụ thể.
4. Kết nối thanh toán, email, xử lý nhiều người mua cùng lúc cần thử nghiệm và nghiệm thu riêng.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Công thức phí giao của bài tập giúp kiểm tra phép tính, nhưng chưa đủ thay bảng giá thực của nhiều đối tác vận chuyển.
KẾT LUẬN CỦA SLIDE: Nêu đúng phạm vi học phần, đồng thời chỉ ra hướng cải tiến: tách Application thành module nhỏ hơn và bổ sung test tích hợp.

[GHI CHÚ GỐC]
Đánh giá đúng phạm vi bài tập lớn, không nhận là hệ thống thương mại điện tử đã sẵn sàng phục vụ mọi người. Nêu giá trị học được từ thiết kế, kiểm thử C++ và vận hành website.
[HẾT GHI CHÚ GỐC]
-->

---
layout: default
---
<div class="thankyou"><div class="brand"><span class="brand-icon">S</span> SHOPPE <span class="brand-divider"></span> C++20</div><p class="eyebrow">LỚP · TOÁN TỬ · KẾ THỪA · ĐA HÌNH · THUẬT TOÁN</p><h1>Q&A<span>.</span></h1><p>Cảm ơn thầy/cô và các bạn đã lắng nghe.<br>Rất mong nhận được câu hỏi và góp ý.</p><div class="thanks-links"><span>github.com/hoquan2007/Shoppe-C-</span><span>shoppec.vercel.app</span></div></div>

<!--
SLIDE 35 — Chuẩn bị câu hỏi thường gặp
Đối chiếu báo cáo Word: Tổng kết Chương 2–5

LỜI DẪN DỄ HIỂU: Phần hỏi đáp là cơ hội nối khái niệm với ví dụ thật. Khi bị hỏi một thuật ngữ C++, hãy trả lời bằng chức năng mua hàng trước, rồi chỉ ra dòng code minh họa.

ĐI TỪNG BƯỚC TRÊN GIAO DIỆN / CODE:
1. Hỏi lớp và đối tượng: nói Money là khuôn mẫu, Money(90000) là đối tượng.
2. Hỏi đa hình: cho thấy cùng requiresGateway() nhưng COD và online trả khác nhau.
3. Hỏi thuật toán: trình bày tổng tiền, cách chia voucher và vì sao tránh sai lệch đồng lẻ.
4. Hỏi an toàn: giải thích transaction rollback và kiểm tra thanh toán ở máy chủ.

VÍ DỤ ĐỂ KỂ CHO NGƯỜI NGHE: Câu hỏi “Vì sao không lấy tổng tiền từ trình duyệt?” → Vì thông tin hiển thị có thể cũ hoặc bị sửa; C++ phải tính lại từ dữ liệu đang lưu.
KẾT LUẬN CỦA SLIDE: Trả lời theo thứ tự tình huống → đoạn code → kết quả giúp người nghe hiểu được cả ý nghĩa lẫn cách thực hiện.

[GHI CHÚ GỐC]
Chuẩn bị trả lời câu hỏi về bốn đặc trưng OOP, tại sao dùng Money với số nguyên, vì sao cần RAII và tại sao thanh toán phải xác minh tại backend.
[HẾT GHI CHÚ GỐC]
-->
