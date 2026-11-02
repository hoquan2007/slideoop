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

<!-- Bắt đầu bằng vấn đề thực tế: mua hàng nhiều shop cần xử lý đúng giá, kho, đơn, thanh toán. Điểm nhấn của đồ án là backend viết bằng C++20, qua đó vận dụng kiến thức OOP. -->

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

<!-- Gợi ý thuyết trình: mở trực tiếp website trong 1–2 phút, sau đó dùng slide để chứng minh kiến thức OOP bằng class, method, virtual, operator overloading và các thuật toán. Khung trọng tâm là slide 6–32; mỗi ví dụ số đều gắn với chức năng thật. -->

---
layout: default
---
<div class="eyebrow">01 · GIAO DIỆN THẬT</div>

# Demo trang chủ: người mua thao tác gì?
<div class="showcase two-parts">
  <div class="screenshot-frame"><div class="browser-top"><i></i><i></i><i></i><span>shoppec.vercel.app</span></div><img src="/shoppe-home.png" alt="Trang chủ Shoppe" /></div>
  <div class="side-notes"><div class="feature-tag">Trang chủ · Dữ liệu từ API</div><h3>Giao diện là điểm bắt đầu</h3><p>Khách có thể tìm kiếm, khám phá sản phẩm, chuyển sang tài khoản hoặc giỏ hàng.</p><div class="soft-line"></div><p><b>Điểm chính:</b> giao diện JavaScript gửi yêu cầu; backend C++ trả dữ liệu và kiểm tra nghiệp vụ.</p><div class="mini-code">GET /api/home</div></div>
</div>
<div class="source-line">Ảnh chụp từ website Shoppe đang triển khai · 01/11/2026</div>

<!-- Chỉ giới thiệu các phần nổi bật trên website. Đây là dự án Shoppe của nhóm, không phải hệ thống Shopee chính thức. -->

---
layout: default
---
<div class="eyebrow">01 · GIAO DIỆN THẬT</div>

# Demo danh mục: tìm kiếm và phân trang
<div class="showcase two-parts">
  <div class="screenshot-frame catalog-shot"><div class="browser-top"><i></i><i></i><i></i><span>shoppec.vercel.app/search</span></div><img src="/shoppe-catalog.png" alt="Danh mục Shoppe" /></div>
  <div class="side-notes"><div class="feature-tag">Tìm kiếm · Phân trang · Lọc</div><h3>Nhẹ phía trình duyệt</h3><p>Website hiển thị <b>12 sản phẩm mỗi trang</b>. Từ khóa, danh mục, khoảng giá và thứ tự sắp xếp được gửi tới backend.</p><div class="mini-code">GET /api/products?page=1&amp;sort=new</div><p class="caption">Hệ thống có dữ liệu mẫu; kết quả và tồn kho được đọc từ cơ sở dữ liệu.</p></div>
</div>
<div class="source-line">Ảnh chụp danh mục thật · minh họa dữ liệu sản phẩm trên giao diện</div>

<!-- Nhấn mạnh khác nhau giữa số sản phẩm tổng và số sản phẩm tải một lần: việc phân trang giúp giảm lượng dữ liệu trên màn hình. -->

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

<!-- Giải thích tuyến đi dữ liệu: JS gọi API, lớp Application điều phối, lớp miền nghiệp vụ tính toán, Repository tương tác DB. Những dịch vụ ngoài chỉ bổ trợ thanh toán/ảnh/email/đăng nhập. -->

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

<!-- Mỗi đặc trưng sẽ được chứng minh bằng những đoạn mã thật ở các slide tiếp theo, không chỉ học thuộc định nghĩa. -->

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
<div class="explain-card"><span class="pill">domain.h · rút gọn</span><h3>Class tạo quy tắc, object lưu tiền cụ thể</h3><p><b>value_</b> nằm ở <code>private</code>, bên ngoài chỉ được đọc qua <code>value()</code>.</p><p>Phép cộng và phép nhân được gom vào chính lớp, giúp dùng chung quy tắc ở mọi nơi.</p><div class="example-box"><code>Money giaAo(90000);</code><br><small>giaAo là đối tượng của lớp Money</small><strong>Giá áo: 90.000đ</strong></div></div>
</div>

<!-- Lớp (class) là khuôn mẫu gồm thuộc tính value_ và phương thức; đối tượng (object) giaAo là một lần tạo lớp với giá trị 90000. private là đóng gói, public là giao diện. Số nguyên int64_t lưu VNĐ để tránh sai số số thực. -->

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
<div class="explain-card"><span class="pill">domain.cpp · mã nguồn thật</span><h3>Hai tầng bảo vệ</h3><p><b>① Constructor:</b> không cho giá trị âm hoặc quá 1.000 tỷ.</p><p><b>② Toán tử *:</b> kiểm tra phép nhân trước khi thực hiện để tránh vượt giới hạn.</p><div class="example-box"><span>Money(1.000.000) × 2</span><strong>2.000.000 ✓</strong><span>Money(1.000 tỷ) × 2</span><strong class="danger">Báo lỗi 422</strong></div></div>
</div>

<!-- Điều kiện value_ > max/q giúp kiểm tra trước khi nhân; nếu cứ nhân rồi mới kiểm tra có thể bị tràn. Số tiền dùng int64_t là số nguyên VNĐ. -->

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
<div class="explain-card"><span class="pill">CHƯƠNG NẠP CHỒNG TOÁN TỬ</span><h3>Ba bước khi chạy</h3><p><b>①</b> Toán tử <code>+</code> gọi <code>operator+</code> của <code>giaSach</code>.</p><p><b>②</b> Lấy <code>value_</code> từ hai đối tượng để cộng.</p><p><b>③</b> Tạo một <code>Money</code> mới; constructor kiểm tra giới hạn số tiền.</p><div class="example-box"><span>55.000đ + 15.000đ</span><strong>= 70.000đ</strong></div></div>
</div>

<!-- Giải thích đơn giản cho người chưa học sâu C++: lớp Money cho phép dùng dấu + tự nhiên như số, nhưng C++ thực chất chạy hàm operator+. Dòng return Money(...) gọi constructor, nơi đảm bảo tổng nằm trong 0–1.000 tỷ. Nếu tổng vượt mức, constructor ném lỗi; đây là code thật trong backend/src/domain.cpp, ví dụ giaSach/giaBut là minh họa. -->

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
<div class="explain-card"><span class="pill">domain.h · rút gọn</span><h3>Quan hệ “có chứa”</h3><p>Một <b>OrderSnapshot</b> giữ nhiều <b>Line</b>; mỗi Line chứa số lượng và một đối tượng <b>Money</b>.</p><p><code>unique_ptr</code> thể hiện quyền sở hữu vùng nhớ do snapshot quản lý.</p><div class="example-box"><span>2 sản phẩm × 12.345 đồng</span><strong>24.690 đồng</strong></div></div>
</div>

<!-- Dẫn ví dụ có thể tạo một OrderSnapshot gồm một dòng, số lượng 2, đơn giá 12.345. total() đi từng dòng, nhân giá với lượng rồi cộng tổng. -->

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
<div class="explain-card"><span class="pill">domain.cpp · trích đoạn</span><h3>Deep copy & move</h3><p><b>Copy:</b> tạo một vector mới, dữ liệu của hai snapshot độc lập.</p><p><b>Move:</b> chuyển quyền sở hữu tài nguyên, không cần sao chép cả danh sách.</p><div class="example-box">Bản gốc A → copy B<br><b>Sửa B không làm đổi A</b></div></div>
</div>
<div class="slide-footnote">Bộ năm hàm trong mã gốc: destructor, copy constructor, copy assignment, move constructor, move assignment.</div>

<!-- Rule of Five là nội dung C++ quan trọng trong báo cáo. Vì lớp có unique_ptr, copy constructor cần tự cài đặt sao chép sâu; move có thể dùng default, chuyển quyền sở hữu. -->

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
<div class="explain-card"><span class="pill">domain.h · trích đoạn</span><h3>Cùng tên hàm, khác kết quả</h3><div class="payment-mini"><b>COD</b><span>unpaid</span><span>Không gọi cổng thanh toán</span></div><div class="payment-mini online"><b>payOS</b><span>pending</span><span>Cần gọi cổng thanh toán</span></div><p>Ứng dụng chọn đối tượng, sau đó gọi qua <code>IPaymentMethod</code>.</p></div>
</div>

<!-- Giải thích từ khóa virtual và =0 là phương thức thuần ảo. C++ tự chọn phiên bản đúng khi con trỏ cơ sở trỏ đến CodPayment hoặc OnlinePayment. -->

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
<div class="explain-card"><span class="pill">application.cpp · trích đoạn</span><h3>Ý nghĩa OOP</h3><p>Biến <code>payment</code> chỉ biết đến <b>giao diện chung</b>.</p><p>Khi người mua chọn COD, đối tượng báo không cần gateway. Với payOS, ứng dụng kiểm tra gateway đã cấu hình hay chưa.</p><div class="takeaway compact">Có thể bổ sung phương thức mới bằng cách tạo một lớp cài đặt giao diện.</div></div>
</div>

<!-- Điểm cần nói: có đa hình động qua con trỏ đến lớp cơ sở và phương thức virtual, không chỉ là if/else lựa chọn. -->

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
<div class="explain-card"><span class="pill">domain.h · rút gọn</span><h3>Mẫu thiết kế Strategy</h3><p><b>Interface</b> quy định cách tính phí; lớp <b>RegionalShipping</b> triển khai theo vùng và khối lượng.</p><p>Ứng dụng gọi <code>shipping.calculate(...)</code> trong quá trình tính đơn.</p><div class="takeaway compact">Muốn đổi cách tính phí: thêm chiến lược mới, giảm tác động đến luồng checkout.</div></div>
</div>

<!-- Đây là một ứng dụng của trừu tượng và đa hình: các quy tắc vận chuyển khác nhau có thể cùng tuân theo IShippingFeePolicy. -->

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

<!-- Phân tích biểu thức: (w - 1000 + 499)/500 thực hiện làm tròn lên số bậc 500g. 1.501g vượt 501g nên cộng hai bậc. Đây là công thức phí demo, không phải bảng giá vận chuyển thực. -->

---
layout: default
---
<div class="eyebrow">02 · STATE MACHINE</div>

# Đơn hàng chuyển trạng thái có quy tắc
<div class="state-steps"><div><span>01</span><b>new</b><small>Mới tạo</small></div><div class="state-arrow">→</div><div><span>02</span><b>confirmed</b><small>Đã xác nhận</small></div><div class="state-arrow">→</div><div><span>03</span><b>preparing</b><small>Chuẩn bị hàng</small></div><div class="state-arrow">→</div><div><span>04</span><b>shipping</b><small>Vận chuyển</small></div><div class="state-arrow">→</div><div><span>05</span><b>delivered</b><small>Đã giao</small></div><div class="state-arrow">→</div><div><span>06</span><b>completed</b><small>Hoàn tất</small></div></div>
<div class="state-support"><div class="state-good"><b>Hợp lệ ✓</b><p>new → confirmed</p></div><div class="state-bad"><b>Không hợp lệ ✕</b><p>new → delivered</p></div><div class="state-extra"><b>Nhánh đặc biệt</b><p>cancelled · delivery_failed<br>Có điều kiện cho phép riêng</p></div></div>
<div class="takeaway">Quy tắc chuyển trạng thái nằm trong <code>IOrderState / orderState()</code>, giúp chặn việc bỏ qua bước nghiệp vụ.</div>

<!-- Lấy tình huống người dùng cố chuyển từ mới tạo thẳng sang đã giao: backend phải từ chối. Đây là bài toán có giới hạn trạng thái, không thể tin hoàn toàn vào giao diện. -->

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
<div class="explain-card"><span class="pill">domain.cpp · mã nguồn thật</span><h3>Chương trình làm gì?</h3><p>① Tạo đối tượng trạng thái hiện tại.</p><p>② Gọi <code>allows(to)</code> kiểm tra chuyển tiếp.</p><p>③ Sai quy tắc → trả lỗi nghiệp vụ <b>HTTP 409</b>.</p><div class="example-box"><span>requireTransition("new", "delivered")</span><strong class="danger">Bị từ chối</strong></div></div>
</div>

<!-- Giải thích lỗi 409 Conflict diễn tả thao tác mâu thuẫn với trạng thái hiện tại của tài nguyên. Chặn ở backend dù người dùng can thiệp trực tiếp vào request. -->

---
layout: default
---
<div class="eyebrow">03 · DEMO API LẤY DỮ LIỆU</div>

# Demo động: JavaScript gọi API C++ như thế nào?

<ApiFlowDemo scenario="products" />

<!-- Giải thích request GET: trình duyệt yêu cầu /api/products?page=1, C++ gọi publicCatalog và query sản phẩm đang bán. Response JSON chứa items và thông tin phân trang. Client nhận và lặp qua items để render card sản phẩm. Ví dụ JSON rút gọn, không gọi server thực trong lúc trình chiếu. -->

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

<!-- Chỉ rõ HTTP request và response là dữ liệu truyền qua mạng: code JS gửi request, endpoint trong C++ chọn route, C++ trả JSON, JS parse rồi render. Click lần lượt 4 bước trên slide. Code frontend là ví dụ rút gọn có cùng logic với api.js; backend là trích đoạn application.cpp. -->

---
layout: default
---
<div class="eyebrow">03 · LUỒNG MUA HÀNG</div>

# Checkout: xem báo giá trước khi lưu đơn
<div class="checkout-stages"><div class="checkout-stage"><span>01</span><h3>Khách gửi giỏ và địa chỉ</h3><p>Chọn số lượng, phương thức thanh toán, voucher</p></div><div class="checkout-stage accent"><span>02</span><h3>POST /checkout/quote</h3><p>Đọc giá và kho từ DB → tính tổng và tạo báo giá có chữ ký</p></div><div class="checkout-stage"><span>03</span><h3>Khách xác nhận</h3><p>Hiển thị tổng tiền, phương thức, phí giao</p></div><div class="checkout-stage dark"><span>04</span><h3>POST /checkout</h3><p>Kiểm tra lại → lưu đơn, giữ kho trong transaction</p></div></div>
<div class="takeaway"><b>Hai bước</b> giúp người mua nhìn thấy tổng tiền trước khi đặt và giúp backend kiểm tra dữ liệu lần cuối.</div>

<!-- Trọng tâm: quote để xem trước, checkout thật để ghi DB. Giá ở hai bước đều do backend đọc từ DB; trình duyệt không được gửi và quyết định giá cuối. -->

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

<!-- Trong source, sameRegion là biểu thức so sánh address[region] với shop[region]. Dòng slide được viết rút gọn để nhìn rõ thuật toán. -->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 1 · NHÓM DỮ LIỆU</div>

# Thuật toán nhóm giỏ hàng theo <code>shop_id</code>
<p class="lead">Đầu vào: các dòng được chọn trong giỏ. Đầu ra: mỗi shop có một đơn con.</p>
<table class="algo-table"><thead><tr><th>Lượt duyệt</th><th>Dòng hàng minh họa</th><th>Nhóm A sau lượt</th><th>Nhóm B sau lượt</th></tr></thead><tbody><tr><td>1</td><td>Áo · A · 2 × 100.000đ</td><td>[Áo]</td><td>—</td></tr><tr><td>2</td><td>Tai nghe · B · 1 × 300.000đ</td><td>[Áo]</td><td>[Tai nghe]</td></tr><tr><td>3</td><td>Mũ · A · 1 × 50.000đ</td><td>[Áo, Mũ]</td><td>[Tai nghe]</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Kiểm tra trước khi đưa vào nhóm</h3><p>Bỏ qua dòng chưa chọn. Chặn sản phẩm ngừng bán, shop chưa được duyệt, số lượng ngoài 1–99 hoặc không đủ kho.</p></div><div><h3>Chỉ duyệt giỏ một lần</h3><p><code>std::map</code> tra nhóm theo shop: O(n log s), với n dòng và s shop; bộ nhớ chứa các dòng được chọn là O(n).</p></div></div>
<div class="takeaway">Nhóm A: <b>250.000đ</b> · Nhóm B: <b>300.000đ</b>. Sau đó mỗi nhóm tạo <code>OrderSnapshot</code> để tính tiền hàng.</div>

<!-- Nguồn: backend/src/application.cpp, nhánh POST checkout, grouped và vòng cartLines. Dữ liệu và bảng truy vết là minh họa. map sắp theo shop_id chứ không theo vị trí shop xuất hiện trong giỏ; độ phức tạp chỉ tính thao tác nhóm trong bộ nhớ, không bao gồm truy vấn DB. -->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 2 · THỨ TỰ TÍNH TIỀN</div>

# Voucher shop trước, voucher toàn sàn sau
<p class="lead">Ví dụ tiếp nối: phí giao A là 20.000đ, B là 35.000đ; voucher sàn giảm 53.000đ.</p>
<table class="algo-table"><thead><tr><th>Bước tính</th><th>Shop A</th><th>Shop B</th><th>Tổng</th></tr></thead><tbody><tr><td>1 · Tiền hàng</td><td>250.000</td><td>300.000</td><td>550.000</td></tr><tr><td>2 · Trừ voucher shop</td><td>−20.000</td><td>0</td><td>−20.000</td></tr><tr><td>3 · Cơ sở chia voucher sàn</td><td>230.000</td><td>300.000</td><td>530.000</td></tr><tr><td>4 · Phần voucher sàn được chia</td><td>−23.000</td><td>−30.000</td><td>−53.000</td></tr><tr><td>5 · Cộng phí giao</td><td>+20.000</td><td>+35.000</td><td>+55.000</td></tr><tr class="algo-total"><td>Khách thanh toán</td><td>227.000đ</td><td>305.000đ</td><td>532.000đ</td></tr></tbody></table>
<div class="takeaway">Voucher sàn được chia trên <b>tiền hàng sau giảm shop</b>, không gồm phí giao; phần giảm tiếp tục được phân bổ xuống từng dòng hàng.</div>

<!-- Nguồn: backend/src/application.cpp, bases.push_back(subtotal - discount), allocateDiscount(bases, global), và perLine. Đây là ví dụ số học minh họa với các voucher giả định hợp lệ. A nhận 230000/530000 × 53000 = 23000; B nhận 30000. Đối chiếu: 550000 - 20000 - 53000 + 55000 = 532000. -->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 3 · TRUY VẾT VOUCHER</div>

# Thuật toán voucher: truy vết từng đồng
<p class="lead">Gọi T = 100.000đ, D = 10.001đ; Cᵢ là tiền hàng tích lũy đến dòng i.</p>
<div class="algo-equation">Mục tiêu Qᵢ = ⌊Cᵢ × D / T⌋ &nbsp; → &nbsp; Giảm dòng i = Qᵢ − Qᵢ₋₁</div>
<table class="algo-table"><thead><tr><th>Dòng</th><th>Tiền hàng</th><th>Cᵢ</th><th>Qᵢ</th><th>Giảm dòng</th></tr></thead><tbody><tr><td>1</td><td>33.333</td><td>33.333</td><td>3.333</td><td>3.333đ</td></tr><tr><td>2</td><td>33.333</td><td>66.666</td><td>6.667</td><td>3.334đ</td></tr><tr><td>3</td><td>33.334</td><td>100.000</td><td>10.001</td><td>3.334đ</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Vì sao tổng luôn khớp?</h3><p>Cộng các hiệu Qᵢ − Qᵢ₋₁ sẽ triệt tiêu phần giữa, còn Q cuối − Q₀ = D − 0.</p></div><div><h3>Vì sao không làm tròn riêng?</h3><p>Lấy phần nguyên từng dòng chỉ được 3.333 + 3.333 + 3.333 = 9.999đ, thiếu 2đ so với voucher.</p></div></div>

<!-- Nguồn: backend/src/domain.cpp, allocateDiscount. Công thức trên giải thích ý nghĩa toán học; code thật không nhân C_i với D trực tiếp. Q0 = 0. Kết quả phụ thuộc thứ tự đầu vào khi phân bổ đồng lẻ; không phải thuật toán chọn dòng có phần dư lớn nhất. -->

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

<!-- Nguồn: backend/src/domain.cpp. C là cumulative, D là discount, T là total; đổi tên để giải thích. T <= 10^12 được bảo vệ bởi Money, D <= T và r < T nên x < 3T, không vượt uint64_t. Ví dụ nhỏ C=5, D=3, T=7: đọc 101, sau các bit có (q,r)=(0,3),(0,6),(2,1), nên floor(15/7)=2. Chỉ tính khi T>0 và D>0. -->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 4 · CÁC MỐC KHỐI LƯỢNG</div>

# Truy vết công thức phí giao ở 4 mốc cân nặng
<div class="algo-equation">Số bậc = max(0, (w − 1.000 + 499) / 500) &nbsp; · &nbsp; chia nguyên C++</div>
<table class="algo-table"><thead><tr><th>Khối lượng w</th><th>Vượt 1kg</th><th>Số bậc</th><th>Phí khác vùng</th></tr></thead><tbody><tr><td>1.000g</td><td>0g</td><td>0</td><td>35.000đ</td></tr><tr><td>1.001g</td><td>1g</td><td>1</td><td>40.000đ</td></tr><tr><td>1.500g</td><td>500g</td><td>1</td><td>40.000đ</td></tr><tr><td>1.501g</td><td>501g</td><td>2</td><td>45.000đ</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Làm tròn lên với số nguyên</h3><p>Với x &gt; 0, ⌈x / 500⌉ = (x + 499) / 500. Vượt chỉ 1g vẫn tính một bậc.</p></div><div><h3>Miền đầu vào và chi phí</h3><p>Chặn w &lt; 0 hoặc w &gt; 100.000g. Tính phí một shop là O(1); khối lượng lấy từ tổng gram × số lượng.</p></div></div>

<!-- Nguồn: backend/src/domain.cpp RegionalShipping::calculate, application.cpp vòng tính weight. Phí mặc định minh họa: remote=35000, step=5000; cấu hình có thể thay đổi. Với w<=1000, max(0,...) chặn bậc âm. Bảng là truy vết công thức, không tuyên bố các mốc đều đã có test trong nguồn. -->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 5 · XÁC MINH BÁO GIÁ</div>

# Báo giá được ràng buộc với dữ liệu nào?
<div class="algo-columns"><div><h3>1 · Tính lại ở máy chủ</h3><p>Đọc giá, kho, địa chỉ và voucher; dựng snapshot gồm người mua, phương thức, revision giỏ, tổng tiền và đơn con.</p><h3>2 · Loại dữ liệu không ổn định</h3><p>Bỏ ID vừa sinh, thời gian và lịch sử khỏi đơn; nếu giữ chúng, hai lần tính cùng giỏ vẫn tạo chữ ký khác nhau.</p></div><div><h3>3 · Ký báo giá trong 300 giây</h3><p>Token = thời điểm hết hạn + chữ ký HMAC trên phiên bản định dạng, hạn dùng và snapshot.</p><h3>4 · Khi xác nhận checkout</h3><p>Tính lại snapshot rồi so token bằng <code>constantEqual</code>. Giá, giỏ hoặc tổng thay đổi → yêu cầu xác nhận lại.</p></div></div>
<table class="algo-table"><thead><tr><th>Điều kiện</th><th>Phản hồi</th><th>Việc người mua cần làm</th></tr></thead><tbody><tr><td>Thiếu / sai cấu trúc token</td><td>409 · quote_required</td><td>Lấy báo giá</td></tr><tr><td>Token hết hạn</td><td>409 · quote_expired</td><td>Lấy báo giá mới</td></tr><tr><td>Chữ ký không khớp</td><td>409 · quote_changed</td><td>Xem và xác nhận lại tổng</td></tr></tbody></table>

<!-- Nguồn: backend/src/application.cpp, quoteExpires, snapshot, expected, constantEqual. HMAC dùng session.at("id") làm key theo mã nguồn. Quote không lưu đơn và không giữ kho; hết hạn quote 300 giây khác thời hạn checkout pending 900 giây. Những kiểm tra khác như out_of_stock có thể xảy ra trước so chữ ký. -->

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
<div class="explain-card"><span class="pill">application.cpp · một dòng return rút gọn</span><h3>Idempotency là gì?</h3><p>Nếu người dùng bấm “Đặt hàng” hai lần hoặc mạng gửi lại request với cùng mã, backend trả checkout đã có.</p><div class="example-box">Lần 1 → tạo đơn <b>#A123</b><br>Lần 2 cùng key → trả đơn <b>#A123</b></div><p>Điều kiện truy vấn gắn <b>người mua + idempotency key</b>.</p></div>
</div>

<!-- Chỉ code return đã rút gọn cho vừa màn hình, phần điều kiện và truy vấn lấy trực tiếp từ mã nguồn. Mã chống trùng là riêng cho một người mua, không dùng chung toàn hệ thống. -->

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
<div class="explain-card"><span class="pill">database.cpp · rút gọn phần quản lý kết nối</span><h3>RAII là gì?</h3><p>Tài nguyên gắn với <b>vòng đời đối tượng</b>. Nếu một transaction bị hủy khi chưa commit, destructor gọi <code>ROLLBACK</code>.</p><div class="example-box"><b>Đặt hàng thành công</b> → COMMIT ✓<br><b>Kiểm kho thất bại</b> → ROLLBACK ↩</div></div>
</div>

<!-- Trong mã nguồn thực, destructor còn giải phóng kết nối PostgreSQL khi cần; commit còn xử lý pool/lock. Ví dụ này giữ phần cốt lõi của RAII. -->

---
layout: default
---
<div class="eyebrow">03 · THUẬT TOÁN 7 · TỒN KHO ĐỒNG THỜI</div>

# Hai người cùng mua món cuối cùng: chống âm kho
<p class="lead">Kho còn 1 sản phẩm. Hai checkout A và B đều muốn mua 1.</p>
<table class="algo-table"><thead><tr><th>Lượt</th><th>Checkout A</th><th>Checkout B</th></tr></thead><tbody><tr><td>1</td><td>Lấy khóa ghi, đọc stock = 1</td><td>Chờ khóa ghi</td></tr><tr><td>2</td><td>Kiểm tra đủ → stock = 0 → lưu đơn</td><td>Tiếp tục chờ</td></tr><tr><td>3</td><td>COMMIT, nhả khóa</td><td>Lấy khóa, đọc stock = 0</td></tr><tr><td>4</td><td>Nhận đơn đã tạo</td><td>409 out_of_stock → hoàn tác</td></tr></tbody></table>
<div class="algo-columns"><div><h3>Cơ chế thật trong Database</h3><p>SQLite: <code>BEGIN IMMEDIATE</code> cho thao tác ghi. PostgreSQL: <code>pg_advisory_xact_lock(72134001)</code> dùng chung cho các transaction ghi.</p></div><div><h3>Đánh đổi của thiết kế</h3><p>Khóa chung giúp tuần tự hóa thao tác giữ kho và voucher trong luồng này, nhưng có thể giới hạn thông lượng ghi khi tải tăng.</p></div></div>

<!-- Nguồn: backend/src/database.cpp Database::Transaction constructor; application.cpp begin(readOnly), kiểm kho và saveMany variants trong cùng transaction. Mô phỏng giả định các thao tác ghi đều đi qua cơ chế khóa này. PostgreSQL advisory lock yêu cầu các writer tuân thủ; không phải chỉ bọc BEGIN/COMMIT là tự ngăn mọi race. Quote chỉ đọc và không giữ kho. -->

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
<div class="explain-card"><span class="pill">application.cpp · mã nguồn thật</span><h3>Vì sao truyền tham số riêng?</h3><p>Điều kiện SQL dùng ký hiệu <code>?</code>; giá trị người dùng nằm trong danh sách <b>params</b>.</p><p>Ở tầng Database, SQLite dùng binding, PostgreSQL dùng <code>PQexecParams</code>.</p><div class="takeaway compact">Tránh ghép dữ liệu người dùng thẳng vào chuỗi SQL và tái sử dụng thao tác truy cập dữ liệu.</div></div>
</div>

<!-- Giải thích thêm: Repository che bớt chi tiết SQL khỏi Application. Điều này tạo một lớp truy cập dữ liệu chung cho các nghiệp vụ. -->

---
layout: default
---
<div class="eyebrow">03 · THANH TOÁN</div>

# PayOS và webhook: chỉ tin kết quả đã xác minh
<div class="payment-journey"><div><span>01</span><h3>Checkout</h3><p>Backend tạo đơn có trạng thái pending</p></div><div class="arrow-between">→</div><div><span>02</span><h3>payOS</h3><p>Tạo link thanh toán khi được cấu hình</p></div><div class="arrow-between">→</div><div><span>03</span><h3>Webhook</h3><p>Gửi dữ liệu giao dịch và chữ ký HMAC</p></div><div class="arrow-between">→</div><div><span>04</span><h3>Đối soát</h3><p>Backend kiểm chứng và cập nhật trạng thái</p></div></div>
<div class="payment-safety"><div><b>Không dựa vào trang “thanh toán thành công”</b><p>Người dùng có thể đóng tab hoặc sửa URL; hệ thống đối chiếu thông tin thanh toán ở backend.</p></div><div><b>COD là phương án riêng</b><p>Không cần gọi gateway; đơn tiếp tục qua quy trình giao hàng và thu tiền khi nhận.</p></div></div>

<!-- Nói rõ: payOS cần thông tin cấu hình để dùng thực tế. Webhook phải kiểm tra chữ ký, mã giao dịch, trạng thái và xử lý thông báo lặp; redirect của trình duyệt không tự xác nhận đã thu tiền. -->

---
layout: default
---
<div class="eyebrow">04 · KIỂM THỬ</div>

# Đã kiểm tra những tình huống C++ nào?
<div class="test-grid"><div><span class="test-check">✓</span><h3>Money</h3><p>15.000 + 20.000 = <b>35.000đ</b><br>Nhân vượt giới hạn → lỗi</p></div><div><span class="test-check">✓</span><h3>Shipping</h3><p>Cùng vùng 1kg → <b>20.000đ</b><br>Khác vùng 1.501g → <b>45.000đ</b></p></div><div><span class="test-check">✓</span><h3>OrderSnapshot</h3><p>Copy/move rồi tính đúng tổng <b>24.690đ</b></p></div><div><span class="test-check">✓</span><h3>State machine</h3><p><code>new → confirmed</code> hợp lệ<br><code>new → delivered</code> bị chặn</p></div><div><span class="test-check">✓</span><h3>Discount</h3><p>Phân bổ voucher, cộng lại đúng <b>10.001đ</b></p></div><div><span class="test-check">✓</span><h3>Security</h3><p>HMAC tham chiếu và kiểm tra mật khẩu</p></div></div>
<p class="caption">Các trường hợp trên được đọc từ <code>tests/domain_tests.cpp</code>. Đây là nội dung bài kiểm thử trong nguồn, không phải tuyên bố vừa chạy toàn bộ test backend.</p>

<!-- Nếu có thời gian, mở tests/domain_tests.cpp để chỉ dòng check của Money, phí vận chuyển, OrderSnapshot và HMAC. Nêu cách các test chứng minh hàm miền nghiệp vụ hoạt động đúng ở các trường hợp đặc biệt. -->

---
layout: default
---
<div class="eyebrow">04 · ĐÁNH GIÁ</div>

# Những gì dự án đã làm được và còn hạn chế
<div class="compare-grid"><div class="compare-panel success"><h3>Đã có trong mã nguồn</h3><p>✓ Backend C++20 xử lý nghiệp vụ web</p><p>✓ Tổ chức các lớp OOP có vai trò rõ ràng</p><p>✓ Checkout, kiểm kho, chia đơn theo shop</p><p>✓ SQLite phát triển / PostgreSQL triển khai</p><p>✓ Kiểm thử miền nghiệp vụ và tài liệu API</p></div><div class="compare-panel limits"><h3>Cần tiếp tục hoàn thiện</h3><p>↗ Dữ liệu sản phẩm phần lớn phục vụ thử nghiệm</p><p>↗ Phí giao hàng hiện là công thức minh họa</p><p>↗ Kiểm thử tích hợp các dịch vụ thật sâu hơn</p><p>↗ Đo tải, giám sát và kiểm thử đồng thời</p><p>↗ Chuẩn bị dữ liệu / cấu hình riêng cho sản xuất</p></div></div>

<!-- Đánh giá đúng phạm vi bài tập lớn, không nhận là hệ thống thương mại điện tử đã sẵn sàng phục vụ mọi người. Nêu giá trị học được từ thiết kế, kiểm thử C++ và vận hành website. -->

---
layout: default
---
<div class="thankyou"><div class="brand"><span class="brand-icon">S</span> SHOPPE <span class="brand-divider"></span> C++20</div><p class="eyebrow">LỚP · TOÁN TỬ · KẾ THỪA · ĐA HÌNH · THUẬT TOÁN</p><h1>Q&A<span>.</span></h1><p>Cảm ơn thầy/cô và các bạn đã lắng nghe.<br>Rất mong nhận được câu hỏi và góp ý.</p><div class="thanks-links"><span>github.com/hoquan2007/Shoppe-C-</span><span>shoppec.vercel.app</span></div></div>

<!-- Chuẩn bị trả lời câu hỏi về bốn đặc trưng OOP, tại sao dùng Money với số nguyên, vì sao cần RAII và tại sao thanh toán phải xác minh tại backend. -->
