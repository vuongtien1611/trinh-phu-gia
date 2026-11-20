# WEBSITE CÔNG TY CỔ PHẦN XÂY DỰNG TRỊNH PHÚ GIA

> Dự án xây dựng lại website doanh nghiệp chuyên nghiệp dựa trên cấu trúc, bố cục, hiệu ứng và trải nghiệm từ mẫu tham khảo `quangduc.com.vn`, thay thế toàn bộ bằng 100% nhận diện, năng lực, hình ảnh và dữ liệu chính thức từ 31 trang Hồ sơ năng lực (HSNL) của **CÔNG TY CỔ PHẦN XÂY DỰNG TRỊNH PHÚ GIA**.

---

## 1. Thông Tin Doanh Nghiệp (Chuẩn Xác Theo Hồ Sơ Pháp Lý)
* **Tên công ty:** CÔNG TY CỔ PHẦN XÂY DỰNG TRỊNH PHÚ GIA
* **Tên viết tắt:** TRINH PHU GIA DTS CO., LTD
* **Mã số doanh nghiệp (MST):** 2400916665
* **Người đại diện theo pháp luật:** TRỊNH BÁ THẠCH - Giám đốc
* **Trụ sở chính:** Tầng 5, Tòa nhà 4C Minh Khai, Đường Nguyễn Thị Minh Khai, TP. Bắc Giang, Tỉnh Bắc Giang
* **Văn phòng giao dịch (VPGD):** Đường Nguyễn Thị Lưu 8, Phường Ngô Quyền, TP. Bắc Giang, Tỉnh Bắc Giang
* **Hotline hỗ trợ 24/7:** 0898 716 999 – 0898 414 898 – 0983 525 138
* **Email:** trinhphugia.xd@gmail.com
* **Website:** https://trinhphugia.com

---

## 2. Cấu Trúc Mã Nguồn & Danh Mục Các Trang

```
c:\Users\Admin\Documents\trinh-phu-gia\
├── index.html                           # Trang chủ (Hero slider, Giới thiệu, 8 dịch vụ, Thiết bị, Dự án, Quy trình, CTA)
├── gioi-thieu.html                      # Giới thiệu (Thư ngỏ, Lịch sử 2015-2025, Tầm nhìn - Sứ mệnh, Sơ đồ tổ chức, Nhân sự)
├── dich-vu.html                         # Trang tổng hợp danh mục dịch vụ thi công sàn
├── dich-vu/                             # 8 trang chuyên sâu SEO cho từng dịch vụ:
│   ├── thi-cong-son-san-epoxy.html
│   ├── mai-tang-cung-danh-bong-san-be-tong.html
│   ├── thi-cong-san-nhua-vinyl-chong-tinh-dien.html
│   ├── thi-cong-son-deo-nhiet.html
│   ├── thi-cong-san-the-thao.html
│   ├── ve-sinh-cong-nghiep.html
│   ├── cung-cap-dich-vu-tap-vu.html
│   └── cham-soc-canh-quan.html
├── du-an.html                           # Dự án tiêu biểu thực tế (Bộ lọc theo loại sàn & Lightbox xem ảnh)
├── nang-luc-thiet-bi.html               # 24+ máy móc, thiết bị xây dựng công nghệ 4.0
├── ho-so-nang-luc.html                  # Xem & Tải bản PDF chính thức (31 trang)
├── thu-vien.html                        # Thư viện hình ảnh thực tế công trình & máy móc
├── tin-tuc.html                         # Chuyên mục Tin tức & Cẩm nang kỹ thuật sàn
├── tin-tuc/                             # Các bài viết phân tích kỹ thuật:
│   ├── huong-dan-quy-trinh-thi-cong-son-epoxy-chuan-nha-xuong.html
│   ├── tai-sao-can-mai-tang-cung-san-be-tong.html
│   └── tieu-chuan-thi-cong-san-vinyl-chong-tinh-dien.html
├── lien-he.html                         # Liên hệ, Bản đồ Google Maps Bắc Giang & Form yêu cầu báo giá
├── sitemap.xml                          # Sơ đồ website chuẩn SEO
├── robots.txt                           # File chỉ dẫn bọ tìm kiếm
├── server.js                            # Web server Node.js chạy local nhanh chóng
├── css/
│   └── style.css                        # CSS hiện đại, responsive, biến màu vàng/trắng/than chì
├── js/
│   └── main.js                          # Slider hero, sticky header, drawer mobile, filter tabs, modal, toast
└── assets/
    ├── images/
    │   ├── logo.svg                     # Logo vector vàng gold sang trọng
    │   ├── logo-light.svg               # Logo nền tối
    │   ├── banners/                     # Ảnh banner chất lượng cao
    │   ├── services/                    # Ảnh thực tế 8 dịch vụ
    │   ├── projects/                    # Ảnh thực tế dự án (Luxshare, Pegatron, Thaco, Ford, Vincom...)
    │   ├── equipment/                   # Ảnh 24 loại máy móc thiết bị
    │   └── about/                       # Ảnh đội ngũ, chữ ký giám đốc, sơ đồ tổ chức
    └── docs/
        └── HSNL-TRINH-PHU-GIA.pdf       # File PDF 31 trang đầy đủ (6.07 MB)
```

---

## 3. Bảng Đối Chiếu Nội Dung (Website Mẫu vs Trịnh Phú Gia)

| Thành phần giao diện mẫu (Quang Đức) | Tái tạo trên Website Trịnh Phú Gia | Nguồn đối chiếu trong PDF (31 trang) |
| :--- | :--- | :--- |
| **Header & Topbar** | Topbar hotline, email, trụ sở Bắc Giang, MST; Menu dropdown đầy đủ 8 dịch vụ | Trang 4, 31 (Thông tin liên hệ & MST 2400916665) |
| **Hero Banner** | Slider 3 slide lớn: Sàn Epoxy, Sàn Vinyl ESD, Mài bóng bê tông; CTA Báo giá & Dự án | Trang 1, 2, 8, 10, 11, 30 |
| **Giới thiệu ngắn** | Giới thiệu Công ty CP Xây dựng Trịnh Phú Gia, Triết lý "Uy tín tạo dựng thành công" | Trang 3 (Thư ngỏ), Trang 7 (Tầm nhìn sứ mệnh) |
| **Dịch vụ nổi bật** | Grid 8 card có ảnh thực tế, icon, mô tả kỹ thuật, ưu điểm và link SEO riêng | Trang 8 đến 16 (Toàn bộ 8 dịch vụ cốt lõi) |
| **Năng lực thiết bị** | Grid 24+ máy móc chuyên dụng (Xingyi, súng phun chân không, máy hàn vinyl tự động...) | Trang 21, 22 (Trang 40-43 trong PDF) |
| **Dự án tiêu biểu** | Filter tabs theo chuyên mục: TACU, Italisa, Luxshare-ICT, Pegatron, Vincom, Ford, Thaco... | Trang 23 đến 29 (Toàn bộ các dự án tiêu biểu) |
| **Quy trình thi công** | Quy trình 6 bước chuẩn kỹ thuật: Khảo sát -> Báo giá -> Xử lý nền -> Thi công -> Nghiệm thu -> Bảo hành | Trang 10, 13, 19 (Quy trình tiêu chuẩn) |
| **Lý do lựa chọn** | 6 thế mạnh vượt trội: Con người là nòng cốt, Thiết bị 4.0, Vật liệu chính hãng, Tiến độ, Bảo hành | Trang 17, 19, 20 (Phương châm hoạt động) |
| **Đối tác & Khách hàng** | Logo/Tên thương hiệu đối tác lớn trong PDF (FDI, Doanh nghiệp lớn, Cơ quan nhà nước) | Trang 23-29 (Khách hàng thực tế) |
| **Tin tức & Kiến thức** | 3 bài viết chuyên môn sâu về kỹ thuật sàn Epoxy, tăng cứng bê tông và chuẩn ESD | Trang 8, 10, 11 (Tài liệu chuyên môn) |
| **Footer & Floating CTA** | Thông tin pháp lý đầy đủ, Form báo giá, Nút gọi điện, Zalo chat, Back to top | Trang 4, 31 (Trụ sở, VPGD, Hotline, Email) |

---

## 4. Hướng Dẫn Chạy Website Trên Môi Trường Local

### Cách 1: Sử dụng máy chủ Node.js có sẵn (Khuyên dùng)
Trong thư mục dự án, chạy lệnh:
```powershell
node server.js
```
Mở trình duyệt truy cập:
👉 **http://localhost:3030**

### Cách 2: Mở trực tiếp file HTML
Có thể click đúp chuột vào file `index.html` để mở trực tiếp trong bất kỳ trình duyệt nào (Chrome, Edge, Firefox).

---

## 5. Điểm Nổi Bật Về Kỹ Thuật & SEO
1. **100% Dữ Liệu Thực Tế:** Không sử dụng bất kỳ số liệu hay đánh giá giả nào; mọi hình ảnh và dữ liệu đều trích xuất trực tiếp từ 31 trang PDF của Trịnh Phú Gia.
2. **Không Còn Dấu Vết Thương Hiệu Mẫu:** Không chứa bất kỳ logo, hotline, địa chỉ hay tên thương hiệu Quang Đức.
3. **Chuẩn SEO Cao:** Có đầy đủ thẻ `meta description`, `keywords`, Open Graph cho mạng xã hội, thẻ Heading H1-H3 phân cấp rõ ràng, `sitemap.xml`, `robots.txt` và Schema.org cấu trúc `GeneralContractor`.
4. **Responsive Toàn Diện:** Tối ưu mượt mà cho Desktop, Laptop, Máy tính bảng (Tablet) và Điện thoại di động (Mobile).
5. **Tương Tác Thời Gian Thực:** Nút gọi điện thoại một chạm, nút chat Zalo trực tiếp, Lightbox phóng to ảnh sắc nét và form gửi yêu cầu báo giá có thông báo Toast chuyên nghiệp.

