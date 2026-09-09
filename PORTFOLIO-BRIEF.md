# Handoff — Portfolio website cho Nguyễn Thái Vinh

> **Cách dùng file này:** đặt file vào thư mục gốc của repo rồi mở Claude Code trong repo đó và nói:
> *"Đọc PORTFOLIO-BRIEF.md và build site theo đúng spec. Hỏi tôi trước khi làm khác spec."*

---

## 0. LUẬT BẮT BUỘC — đọc trước khi viết dòng code nào

1. **KHÔNG được tự bịa bất kỳ con số nào.** Mọi chỉ số, tên khách hàng, giải thưởng, lời chứng thực chỉ được lấy từ file này. Nếu một section trông trống vì thiếu số liệu, để trống hoặc bỏ section — **tuyệt đối không điền số minh hoạ**. Đây là hồ sơ nghề nghiệp thật của một người thật.
2. **Toàn bộ copy song ngữ đã có sẵn ở Mục 4.** Dùng đúng, không viết lại, không "cải thiện" câu chữ. Nếu thấy câu nào sai ngữ pháp thì báo, đừng tự sửa nội dung.
3. **Không dùng lorem ipsum, không dùng ảnh stock người mẫu, không dùng avatar giả.**
4. Nếu spec thiếu thông tin để quyết định, **hỏi** thay vì đoán.

---

## 1. Mục tiêu và người đọc

**Mục tiêu duy nhất:** giúp Vinh được gọi phỏng vấn cho vị trí **Digital Marketing Executive / Growth** full-time.

**Người đọc:** HR và hiring manager. Họ mở site từ link trong CV hoặc LinkedIn, xem trên **điện thoại** khoảng 60–90 giây, giữa lúc sàng hàng chục ứng viên.

**Site thành công nếu trong 15 giây đầu người đọc hiểu được:** *"Người này là marketer tự dựng được website và tự setup tracking — không cần agency, không cần dev."*

**Không phải mục tiêu:** bán dịch vụ freelance, viết blog, thu email newsletter. Không làm các thứ đó.

**Định vị cốt lõi — câu này là linh hồn của site:**
> Kỹ sư phần mềm chuyển sang marketing. Tự dựng website, tự làm technical SEO và tracking, rồi tự chạy quảng cáo đổ traffic vào chính website đó.

---

## 2. Tech stack

Ưu tiên đơn giản và nhanh, không dựng hạ tầng quá mức cho một trang.

- **Astro** (static output) hoặc **HTML + CSS + vanilla JS** thuần. Không React, không Next.js — một trang tĩnh không cần runtime framework.
- **CSS thuần với custom properties.** Không Tailwind, để palette và type scale ở Mục 3 nằm gọn trong một file tokens và dễ sửa tay.
- **JS < 15KB** không nén: chỉ cần language toggle, mobile nav, và scroll reveal. Không thư viện animation.
- **Deploy: Vercel** — đã chốt. Chi tiết cấu hình ở Mục 6.5.
- **Không CMS.** Nội dung nằm trong file, sửa bằng cách sửa file.

Cấu trúc đề xuất:

```
/
├── index.html
├── styles/  tokens.css, base.css, sections.css
├── scripts/ i18n.js, ui.js
├── content/ vi.json, en.json      ← copy ở Mục 4
├── assets/
│   ├── img/   portrait.jpg, og-image.jpg, work-*.webp
│   └── cv/    CV-NguyenThaiVinh-VI.pdf, CV-NguyenThaiVinh-EN.pdf
└── PORTFOLIO-BRIEF.md
```

---

## 3. Design direction

Bắt buộc phải **chuyên nghiệp và bắt mắt**, nhưng "bắt mắt" ở đây nghĩa là **chính xác và có chủ ý**, không phải nhiều hiệu ứng. Người đọc là HR ngành sản xuất và thương mại B2B, không phải creative director.

### 3.1 Ý tưởng cấu trúc — "Ba tầng tôi tự làm"

Đây là phần làm site này khác một CV dán lên web, **phải giữ**.

Toàn bộ giá trị của Vinh nằm ở chỗ anh sở hữu cả ba tầng của phễu, trong khi hầu hết marketer chỉ có tầng thứ ba:

```
Tầng 1  DỰNG      website, technical SEO, responsive
Tầng 2  ĐO        GTM, GA4, Looker Studio, CRM
Tầng 3  KÉO       Meta Ads, Google Ads, content, social
```

Section này hiển thị ba tầng xếp dọc (mobile) hoặc ba cột có đường nối dọc (desktop), mỗi tầng gồm: tên tầng, một câu mô tả, danh sách công cụ, và **tên dự án chứng minh tầng đó**. Đây là xương sống của trang, không phải đồ trang trí — đừng biến nó thành ba cái card bo góc giống nhau.

### 3.2 Palette

Nền tối làm chủ đạo. Nghề của Vinh là kỹ thuật + sản xuất, nền tối cho cảm giác dụng cụ chính xác, và tương phản tốt với ảnh chụp website (đa phần nền sáng).

```css
--ground:      #0B1720   /* nền chính, xanh dầu rất đậm */
--surface:     #122430   /* card, khối nổi */
--surface-2:   #1A3140
--line:        #21404F
--ink:         #EAF2F6   /* chữ chính */
--ink-muted:   #93AAB8   /* chữ phụ, xanh nhạt lệch lam */
--accent:      #3FB6C8   /* teal-cyan: link, nhấn, đường nối ba tầng */
--accent-warm: #E8A33D   /* hổ phách: chỉ dùng cho số liệu và nhãn dữ liệu */
--white:       #FFFFFF
```

Quy tắc: `--accent-warm` **chỉ** dùng cho con số và nhãn dữ liệu, không dùng cho nút hay chữ thường. Một màu dùng đúng một việc thì trang mới sạch.

Không làm dark/light toggle — trang cam kết một tông tối, nhưng phải **paint nền và mọi màu chữ tường minh** để không mượn tông của trình duyệt.

### 3.3 Typography

```
Display : Chivo        700, 900   — tên, tiêu đề section
Body    : Source Sans 3 400, 600  — nội dung
Mono    : IBM Plex Mono 500       — nhãn, số liệu, tên công cụ, ngày tháng
```

Tải từ Google Fonts, `display=swap`, preload file woff2 của Chivo 900. Luôn khai fallback stack thật.

- Tên ở hero: Chivo 900, `clamp(44px, 9vw, 104px)`, `letter-spacing: -0.03em`, in hoa.
- Tiêu đề section: Chivo 700, 28–34px, kèm nhãn mono nhỏ phía trên (eyebrow).
- Body: 17px, `line-height: 1.65`, dòng chữ rộng tối đa **68 ký tự**.
- Nhãn mono: 11–12px, in hoa, `letter-spacing: .12em`.
- Số liệu: Chivo 900 + `font-variant-numeric: tabular-nums`.

### 3.4 Layout và chuyển động

- Một trang dọc, không SPA routing. Nav dính trên cùng khi cuộn, có anchor tới từng section.
- Grid tối đa 1200px, padding hai bên 24px (mobile 20px).
- Khoảng cách giữa các section: 96px desktop, 64px mobile. Dùng `gap` của flex/grid, không dùng margin lẻ từng phần tử.
- **Chuyển động dùng đúng ba chỗ:** (1) hero xuất hiện một lần khi load, (2) fade-up nhẹ khi section vào viewport, (3) hover trên card công việc. Không parallax, không cursor tùy biến, không hạt bay, không đếm số nhảy.
- **Mọi nội dung phải đọc được ngay khi trang vừa load**, không chờ scroll mới hiện. Section có thể fade-in nhưng phải từ trạng thái đã thấy được, không parked ở `opacity: 0`.
- Tôn trọng `prefers-reduced-motion: reduce` — tắt hết transition.

### 3.5 Những thứ TUYỆT ĐỐI KHÔNG làm

Đây là các mẫu khiến trang trông như hàng loạt sinh ra bằng AI:

- Hero gradient tím-xanh, hoặc blob/aurora mờ bay lơ lửng.
- Hero cao `100vh` đẩy hết nội dung ra ngoài màn hình đầu.
- Font Inter hoặc Space Grotesk.
- Emoji làm icon section.
- Mọi khối đều là card bo góc `12px` với cùng một shadow — làm phẳng hết thứ bậc thông tin.
- Chữ nền cream `#F4F1EA` + serif + accent đất nung.
- Số đếm nhảy khi scroll, thanh skill 90%, biểu đồ radar kỹ năng.
- Chữ "Passionate", "Creative", "Think outside the box".

---

## 4. NỘI DUNG — dùng đúng nguyên văn

Lưu thành `content/vi.json` và `content/en.json`. Cấu trúc key giống nhau ở hai file.

### 4.1 Meta

| | VI | EN |
|---|---|---|
| `title` | Nguyễn Thái Vinh — Digital Marketing Executive | Nguyen Thai Vinh — Digital Marketing Executive |
| `description` | Marketer tự dựng website, tự làm technical SEO và tracking, rồi tự chạy quảng cáo. Hiện phụ trách 8 website và 11 kênh social tại TP Plastic. | A marketer who builds the websites, wires up the tracking, then runs the campaigns. Currently running 8 websites and 11 social channels at TP Plastic. |

### 4.2 Hero

- **Tên:** NGUYỄN THÁI VINH / NGUYEN THAI VINH
- **Chức danh (nhãn mono):** Digital Marketing Executive · Website & Growth
- **Câu định vị (chữ lớn, 2 dòng):**
  - VI: *Tôi dựng website, gắn tracking, rồi chạy quảng cáo đổ traffic vào chính website đó.*
  - EN: *I build the website, wire up the tracking, then run the campaigns that fill it.*
- **Câu phụ:**
  - VI: Kỹ sư phần mềm chuyển sang marketing. Hơn 2 năm phụ trách trọn phễu marketing số cho một nhà sản xuất nhựa B2B đang mở thị trường Mỹ — không agency, không đội dev.
  - EN: A software engineer who moved into marketing. 2+ years owning the complete digital funnel for a B2B plastics manufacturer opening the US market — no agency, no dev team.
- **CTA chính:** Xem công việc / See the work → anchor `#work`
- **CTA phụ:** Tải CV (PDF) / Download CV (PDF) → file PDF theo ngôn ngữ đang chọn
- **Dải số liệu** (mono nhãn + số hổ phách):

| Số | VI | EN |
|---|---|---|
| 8 | website đang phụ trách | websites managed |
| 11 | kênh social | social channels |
| 4 | hệ thống vận hành | business systems |
| $1.000+ | ngân sách ads/tháng | monthly ad budget |

### 4.3 Ba tầng

Eyebrow: `CÁCH TÔI LÀM VIỆC` / `HOW I WORK`

Tiêu đề: *Ba tầng tôi tự làm* / *Three layers I own myself*

Dẫn nhập:
- VI: Hầu hết marketer chỉ làm tầng thứ ba và phụ thuộc người khác cho hai tầng đầu. Tôi làm cả ba, nên không có khoảng chờ giữa các bên.
- EN: Most marketers work only on the third layer and depend on someone else for the first two. I do all three, so nothing waits on a handoff.

**Tầng 1 — DỰNG / BUILD**
- VI: Dựng website từ cấu trúc thông tin, nội dung, WordPress đến technical SEO và launch.
- EN: Build the site from information architecture and copy through WordPress, technical SEO and launch.
- Công cụ: WordPress · HTML / CSS · Technical SEO · Core Web Vitals · Responsive mobile-first
- Chứng minh: tpplasticusa.com, obbgel.com, oceantradingexpress.com

**Tầng 2 — ĐO / MEASURE**
- VI: Gắn hệ thống đo lường để biết kênh nào tạo ra đơn chốt, không chỉ đếm lượt click.
- EN: Wire up measurement that answers which channel closed the deal, not just which one got the click.
- Công cụ: Google Tag Manager · GA4 · Looker Studio · Search Console · Zoho · Odoo · MISA
- Chứng minh: hệ thống đo lường đầu tiên của TP Plastic / TP Plastic's first measurement stack

**Tầng 3 — KÉO / ACQUIRE**
- VI: Chạy quảng cáo và nội dung đổ traffic vào đúng trang mình đã dựng và đã gắn tracking.
- EN: Run the ads and content that drive traffic into the pages I built and instrumented.
- Công cụ: Meta Ads · Google Ads (Search, Display) · A/B testing · CTR / CPC / CPA / ROAS
- Chứng minh: 35% tỷ lệ chuyển đổi lead / 35% lift in lead conversion rate

### 4.4 Công việc — 4 dự án

Eyebrow: `DỰ ÁN` / `SELECTED WORK`. Giữ đúng thứ tự này.

**Ảnh chụp website là thành phần chính của mỗi card, không phải hình minh hoạ phụ.** Đây là bằng chứng duy nhất trên site rằng bốn dự án này tồn tại thật — quan trọng hơn mọi câu mô tả.

Cấu trúc mỗi card, theo đúng thứ tự đọc:

1. **Ảnh chụp** — chiếm toàn bộ chiều rộng card, tỷ lệ khoá `16 / 10`, `object-fit: cover` neo `object-position: top` để luôn thấy phần đầu trang.
2. **Khung "browser chrome"** bọc ảnh: thanh trên cao 28px màu `--surface-2`, ba chấm tròn 8px bên trái, và **tên miền thật bằng font mono** căn giữa. Chi tiết này làm ảnh đọc ra ngay là một website đang chạy thật, chứ không phải mockup — bỏ khung thì ảnh trông như ảnh stock.
3. Tên miền (Chivo 700) + link mở tab mới, kèm icon mũi tên chéo.
4. Hàng meta mono: thời lượng · quy mô nhóm · vai trò.
5. Một dòng mô tả dự án.
6. 3–4 gạch đầu dòng việc đã làm.

Yêu cầu kỹ thuật cho ảnh:

- Layout: **2 cột trên desktop, 1 cột dưới 768px.** Không dùng carousel — HR không kéo slider, họ cuộn.
- Hover trên desktop: ảnh `scale(1.02)` trong 300ms và viền card sáng lên `--accent`. Chỉ vậy, không lật card, không overlay che ảnh.
- Bắt buộc khai `width` và `height` để không nhảy layout. `loading="lazy"` cho card thứ 2 trở đi.
- `alt` mô tả thật, ví dụ `alt="Trang chủ shipstar.vn — nền tảng 3PL fulfillment"`. Không để `alt="screenshot"`.
- Ảnh nền sáng đặt trên nền tối cần viền mảnh `1px solid var(--line)` để không bị "trôi" khỏi nền.

---

**1. shipstar.vn**
- Meta: 06–08/2026 · Nhóm 3 người · Product & Web
- VI: Nền tảng 3PL fulfillment xuyên biên giới Việt Nam → Mỹ: nhập kho, pick & pack, nhãn vận chuyển đa hãng, hải quan, đối soát phí và cổng seller.
- EN: A cross-border 3PL fulfilment platform, Vietnam → US: inbound receiving, pick & pack, multi-carrier labels, customs, cost reconciliation and seller portals.
- Bullets VI:
  - Thiết kế UI/UX và dựng front-end cho seller portal, luồng tạo nhãn vận chuyển và màn hình quản lý kho.
  - Ưu tiên mobile-first vì nhân viên kho thao tác trên điện thoại giữa lúc đóng hàng.
  - Thiết kế lại luồng nghiệp vụ kho vận: biến quy trình phức tạp (nhập kho, chia đơn, đóng gói, đối chiếu phí ship theo từng hãng) thành luồng thao tác tối giản.
  - Tự làm toàn bộ website giới thiệu: định vị sản phẩm, nội dung, technical SEO, GTM/GA4 và luồng thu lead đăng ký seller.
- Bullets EN:
  - Designed the UI/UX and built the front end for the seller portal, shipping-label flow and warehouse screens.
  - Mobile-first by necessity: warehouse staff work from a phone while packing boxes.
  - Redesigned the warehouse operating flows — receiving, order splitting, packing, per-carrier cost reconciliation — into something runnable one-handed.
  - Delivered the marketing site solo: positioning, copy, technical SEO, GTM/GA4 and the seller sign-up funnel.

**2. tpplasticusa.com**
- Meta: 3 tháng · 1 người · Toàn bộ dự án
- VI: Website doanh nghiệp B2B mở thị trường xuất khẩu Mỹ, làm từ con số 0.
- EN: A B2B corporate site built to open the US export market from a standing start.
- Bullets VI:
  - Technical SEO cho tìm kiếm quốc tế: cấu trúc site, metadata, internal link.
  - Chatbot sàng lọc khách 24/7, giữ lại các lượt hỏi ngoài giờ trước đây bị mất do lệch múi giờ Việt Nam – Mỹ.
  - Tracking GTM/GA4 đầy đủ, truy được từng lượt hỏi hàng về đúng kênh nguồn.
  - Landing page hướng chuyển đổi và form hỏi hàng tinh giản cho khách B2B.
- Bullets EN:
  - Technical SEO for international search: site architecture, metadata, internal linking.
  - A 24/7 chatbot that captures after-hours inquiries previously lost to the Vietnam–US timezone gap.
  - Full GTM/GA4 tracking, tying every inquiry back to the channel that produced it.
  - Conversion-focused landing pages and simplified inquiry forms for B2B buyers.

**3. obbgel.com**
- Meta: 1 tháng · 1 người · Thiết kế & Dựng
- VI: Website sản phẩm định vị cao cấp, nơi phần thiết kế phải đỡ được mức giá bán.
- EN: A premium product site where the design had to carry the price point.
- Bullets VI:
  - Tự thiết kế toàn bộ hệ thống thị giác bằng Photoshop: layout, banner, hình sản phẩm.
  - Dựng responsive chuẩn pixel, giữ trọn bố cục từ 320px đến desktop màn rộng.
  - Tổ chức điều hướng dẫn khách về trang sản phẩm và liên hệ, cắt các nhánh gây phân tán.
  - Toàn bộ ấn phẩm làm in-house, chi phí thiết kế thuê ngoài bằng 0.
- Bullets EN:
  - Designed the full visual system in Photoshop: layout, banners, product imagery.
  - Pixel-accurate responsive build holding its composition from 320px to widescreen.
  - Navigation structured toward product and contact pages, cutting branches that split attention.
  - Every asset produced in-house, with zero external design spend.

**4. oceantradingexpress.com**
- Meta: 1 tháng · 1 người · Landing page
- VI: Landing page chuyển đổi cho dịch vụ thương mại quốc tế.
- EN: A conversion landing page for an international trading service.
- Bullets VI:
  - Chuyển danh mục dịch vụ phức tạp thành kiến trúc thông tin bằng icon, khách quét hiểu trong dưới một phút.
  - Tối ưu vị trí và thứ bậc CTA để khách liên hệ ngay trong màn hình đầu tiên.
  - Tích hợp Zalo, email và điện thoại để rút ngắn thời gian phản hồi.
  - Thẩm mỹ hướng uy tín, hiệu chỉnh cho đối tác thương mại quốc tế.
- Bullets EN:
  - Turned a complex service list into an icon-led information architecture scannable in under a minute.
  - Optimised CTA placement and hierarchy so contact is possible from the first screen.
  - Integrated Zalo, email and phone to shorten response time.
  - A credibility-first aesthetic calibrated for international trading partners.

### 4.5 Kỹ năng

Eyebrow: `NĂNG LỰC` / `CAPABILITIES`. Bốn nhóm, nhãn mono + danh sách. Không dùng thanh phần trăm, không chấm điểm sao.

| Nhóm VI | Nhóm EN | Nội dung |
|---|---|---|
| Quảng cáo & Đo lường | Paid Media & Analytics | Meta Ads · Google Ads (Search, Display) · GA4 · Google Tag Manager · Looker Studio · Search Console · CTR / CPC / CPA / ROAS · A/B testing |
| SEO & Website | SEO & Web | Technical SEO (Core Web Vitals, metadata, cấu trúc site) · on-page SEO · SEO đa thị trường · WordPress · HTML / CSS · responsive mobile-first · chatbot & form thu lead |
| Hệ thống vận hành | Business Systems | Zoho · Odoo · MISA · Shipstar (nền tảng nội bộ công ty tự phát triển) · pipeline & phân phối lead · báo cáo phễu bán hàng |
| Thiết kế | Creative | Adobe Photoshop · banner & ấn phẩm social · Premiere Pro · CapCut · bộ nhận diện thương hiệu |

### 4.6 Kinh nghiệm

Eyebrow: `KINH NGHIỆM` / `EXPERIENCE`. Timeline dọc gọn, ngày tháng bằng mono.

| Thời gian | Vị trí | Công ty | Loại hình |
|---|---|---|---|
| 03/2024 – nay | Digital Marketing Executive | TP Plastic | Toàn thời gian / Full-time |
| 06–08/2026 | Product & Web (Shipstar) | TP Plastic | Dự án nội bộ, kiêm nhiệm / Internal project, concurrent |
| 06/2023 – 12/2023 | Software Deployment Staff | NINA | Toàn thời gian / Full-time |
| 12/2022 – 03/2023 | Front-end Developer | MYVINA | Thực tập / Internship |
| 05/2022 – 10/2022 | Website Administrator | DEEP VIETNAM | Bán thời gian / Part-time |

Shipstar lồng thụt vào dưới TP Plastic (cùng công ty, kiêm nhiệm) — **không để thành công việc riêng ngang hàng**, vì hai mốc thời gian trùng nhau sẽ trông như nhảy việc.

Học vấn: Cử nhân Kỹ thuật Phần mềm — Đại học Ngoại ngữ – Tin học TP.HCM (HUFLIT), 2019–2023 / Bachelor of Software Engineering — HUFLIT, Ho Chi Minh City, 2019–2023

### 4.7 Giới thiệu

Eyebrow: `GIỚI THIỆU` / `ABOUT`

- VI: Tôi học kỹ thuật phần mềm rồi chuyển sang marketing. Nghĩa là việc gì tự làm được thì tôi không đưa cho người khác. Phần tôi thích nhất nằm ở chỗ giáp ranh giữa marketing và sản phẩm — như khi làm Shipstar, tôi ngồi cùng những người trực tiếp đóng hàng và biến một quy trình dài dòng thành thứ họ dùng được bằng một tay trên điện thoại. Thứ tôi làm tốt là làm cho tầng kỹ thuật chạy được để tầng marketing có chỗ đứng: technical SEO sửa đúng chỗ đang hỏng thay vì sửa chỗ dễ báo cáo, tracking trả lời được kênh nào chốt đơn, landing page làm cho người mua chứ làm cho bản brief.
- EN: I trained as a software engineer and moved into marketing, which means I don't hand off work I can do myself. The part I like most sits between marketing and product — on Shipstar I sat with the people who actually pack the boxes and turned a long, messy process into something they can run one-handed. What I'm good at is making the technical layer work so the marketing layer can: technical SEO that fixes what is genuinely broken rather than what is easy to report, tracking that answers which channel closed the deal, and landing pages built for the buyer instead of for the brief.

### 4.8 Liên hệ

Eyebrow: `LIÊN HỆ` / `CONTACT`

Tiêu đề: *Đang tìm vị trí Digital Marketing / Growth* / *Open to Digital Marketing / Growth roles*

Câu phụ:
- VI: Ưu tiên B2B, xuyên biên giới, hoặc bất cứ mảng nào bán vào thị trường Mỹ.
- EN: Ideally B2B, cross-border, or anything selling into the US market.

| | Giá trị |
|---|---|
| Email | thaivinhnguyen088@gmail.com |
| Điện thoại | 0967 761 109 · +84 967 761 109 |
| LinkedIn | linkedin.com/in/thaivinhnguyen |
| Khu vực | TP. Hồ Chí Minh · On-site, Hybrid, Remote |

Email và điện thoại dùng `mailto:` và `tel:`. **Không làm form liên hệ** — form cần backend, và HR thích bấm email trực tiếp hơn.

---

## 5. Song ngữ EN/VI

- Nút chuyển `VI | EN` ở góc phải nav, dạng hai chữ mono, chữ đang chọn sáng hơn.
- **Mặc định tiếng Anh** (nhà tuyển dụng quốc tế và khớp với LinkedIn).
- Cơ chế: nạp `content/{lang}.json` rồi render vào các phần tử có `data-i18n="key.path"`. Không dùng thư viện i18n.
- Nhớ ngôn ngữ đã chọn bằng `localStorage`, bọc trong `try/catch` vì trình duyệt có thể chặn.
- Hỗ trợ `?lang=vi` và `?lang=en` để share link đúng ngôn ngữ.
- Đổi ngôn ngữ phải cập nhật: `<html lang>`, `<title>`, `<meta name="description">`, và link file CV PDF.
- Thêm `<link rel="alternate" hreflang="vi|en|x-default">`.
- Đổi ngôn ngữ **không reload trang** và **không nhảy về đầu trang**.

---

## 6. Yêu cầu kỹ thuật

### 6.1 SEO và social preview — mục này quan trọng đặc biệt

Các website hiện tại của Vinh **đang bị LinkedIn không đọc được thẻ preview**, dù thẻ `og:` đã đúng. Đừng lặp lại lỗi đó ở đây:

- Đủ bộ `og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`, `twitter:card=summary_large_image`.
- **`og:image` phải là URL tuyệt đối, self-host ngay trên domain này, 1200×630, dưới 300KB.** Không đi qua CDN của bên thứ ba — đó là nghi phạm khiến LinkedInBot bị chặn ở các site cũ.
- Không chặn `LinkedInBot`, `facebookexternalhit`, `Twitterbot` trong `robots.txt` hay firewall/CDN.
- Sau khi deploy, **bắt buộc kiểm tra bằng linkedin.com/post-inspector** và dán kết quả cho Vinh. Nếu vẫn lỗi, báo chính xác lỗi gì.
- Thêm JSON-LD `schema.org/Person`: name, jobTitle, email, url, sameAs (LinkedIn), knowsAbout, alumniOf (HUFLIT), worksFor (TP Plastic).
- `sitemap.xml` và `robots.txt` cho phép index.

### 6.2 Hiệu năng

Chính Vinh làm technical SEO — site chậm là tự bắn vào chân. Mục tiêu trên 4G mô phỏng:

- LCP < 2.0s · CLS < 0.05 · INP < 200ms
- PageSpeed Insights mobile **≥ 90**
- Ảnh chụp website: WebP, khai `width`/`height` để không nhảy layout, `loading="lazy"` cho ảnh dưới màn đầu, ảnh trên màn đầu thì `fetchpriority="high"`.
- Font: preload woff2 của Chivo 900, `font-display: swap`, subset `latin` + `latin-ext` + `vietnamese`.
- Không JS chặn render.

### 6.3 Tracking

Gắn **GA4 qua Google Tag Manager** — bản thân việc này là bằng chứng cho tầng 2 của site. Track: `cv_download` (kèm tham số ngôn ngữ), `work_link_click` (kèm tên miền), `contact_click` (email hay điện thoại), `lang_switch`. Chưa có container ID thì để hằng số ở một chỗ, đánh dấu `TODO` rõ ràng, **không nhét ID giả**.

### 6.4 Accessibility và responsive

- Tương phản chữ trên nền tối tối thiểu 4.5:1. Kiểm tra thật, đừng ước lượng — `--ink-muted` trên `--ground` là chỗ dễ trượt nhất.
- Mọi phần tử tương tác có `:focus-visible` thấy rõ. Điều hướng bằng bàn phím chạy hết trang.
- HTML có nghĩa: `<header> <main> <section> <nav> <footer>`, một `<h1>` duy nhất, thứ bậc heading không nhảy cấp.
- `alt` mô tả thật cho ảnh chụp website, ví dụ "Trang chủ tpplasticusa.com".
- Breakpoint: 360, 768, 1024, 1280. Kiểm tra thật ở 360px — đó là nơi HR đọc.
- Bảng và khối rộng phải `overflow-x: auto` trong container riêng; thân trang **không bao giờ** cuộn ngang.

---

### 6.5 Deploy trên Vercel

Repo trên GitHub, kết nối Vercel, mỗi lần push lên `main` là tự deploy. Mỗi branch có preview URL riêng — dùng preview để kiểm tra trước khi merge.

**Cấu hình project:**
- Nếu dùng HTML thuần: Framework Preset = **Other**, Build Command = để trống, Output Directory = `.`
- Nếu dùng Astro: Framework Preset = **Astro**, Build Command = `npm run build`, Output Directory = `dist`
- Node version để mặc định.

**`vercel.json`** ở thư mục gốc:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" }
      ]
    }
  ]
}
```

Lưu ý: cache một năm cho `/assets/` chỉ an toàn nếu tên file đổi khi nội dung đổi. Nếu chụp lại ảnh website mà giữ nguyên tên file, phải thêm hash vào tên (`work-shipstar.a1b2c3.webp`) hoặc hạ `max-age` xuống vài giờ. **Đừng để cache một năm với tên file cố định** — sửa ảnh xong mà người xem cũ vẫn thấy ảnh cũ.

**Domain:**
1. Thêm domain trong Vercel → Settings → Domains.
2. Trỏ DNS theo hướng dẫn Vercel hiện ra (thường A record cho apex, CNAME cho `www`).
3. Chọn một bản chính — apex `thaivinhnguyen.com` hoặc `www` — và để Vercel redirect bản còn lại. **Không để cả hai cùng phục vụ nội dung**, vì đó là nội dung trùng lặp và làm loãng tín hiệu SEO.
4. HTTPS Vercel tự cấp, không cần làm gì.

**Việc phải làm ngay sau lần deploy đầu:**

Vercel cho sẵn URL dạng `*.vercel.app` trước khi domain kịp trỏ. **Dùng URL đó chạy linkedin.com/post-inspector ngay** — không cần chờ có domain. Đây là lần kiểm tra quan trọng nhất của cả dự án, vì các website hiện tại của Vinh đang bị LinkedIn không đọc được preview (xem Mục 6.1). Nếu trên Vercel mà preview hiện đúng, ta biết chắc lỗi ở các site cũ nằm ở host/CDN của chúng, không phải ở cách viết thẻ `og:`.

Sau khi gắn domain riêng, chạy Post Inspector lại một lần nữa với domain thật.

**Tuỳ chọn:** bật Vercel Analytics nếu muốn — nhẹ và không cần cookie banner. Nhưng GA4 qua GTM ở Mục 6.3 vẫn là hệ đo lường chính, vì chính nó là bằng chứng năng lực của Vinh.

**Một lưu ý về gói:** gói miễn phí của Vercel dành cho mục đích cá nhân, phi thương mại. Portfolio tìm việc thì đúng phạm vi. Nếu sau này Vinh dùng site để bán dịch vụ freelance thì nên xem lại điều khoản.

---

## 7. Assets

### 7.1 Ảnh chụp 4 website — Claude Code tự chụp bằng script

**Đừng yêu cầu Vinh chụp tay.** Viết một script Playwright trong repo để chụp tự động, chạy lại được mỗi khi các site kia đổi thiết kế.

```
scripts/shots.mjs        → npm run shots
```

Script cần làm đúng các bước sau:

```js
// npm i -D playwright sharp
// npx playwright install chromium
const SITES = [
  { slug: 'shipstar',      url: 'https://shipstar.vn' },
  { slug: 'tpplasticusa',  url: 'https://tpplasticusa.com' },
  { slug: 'obbgel',        url: 'https://obbgel.com' },
  { slug: 'oceantrading',  url: 'https://oceantradingexpress.com' },
];
// viewport 1440×900, deviceScaleFactor: 2   ← bắt buộc, để ảnh nét trên màn Retina
// waitUntil: 'networkidle', rồi chờ thêm 2500ms
// chụp viewport (KHÔNG fullPage), rồi sharp: resize width 1440, webp quality 82
// xuất assets/img/work-{slug}.webp
```

Bốn lưu ý tôi phát hiện khi mở thử các site này — không xử lý thì ảnh sẽ xấu:

1. **shipstar.vn render bằng JavaScript.** `networkidle` chưa đủ, phần dưới hero nạp muộn. Phải chờ thêm, và kiểm tra ảnh ra không có vùng trắng lớn.
2. **tpplasticusa.com có hero dạng carousel tự chạy.** Ảnh chụp sẽ ra slide bất kỳ. Chờ 3s cho slide đầu ổn định, hoặc chụp lại tới khi ra slide có banner chính.
3. **tpplasticusa.com có thanh action dính ở đáy màn hình** (icon vị trí, email, điện thoại, chat). Nó sẽ nằm trong ảnh. Chấp nhận được, hoặc ẩn bằng CSS injection trước khi chụp.
4. Nếu site nào có popup cookie hoặc popup khuyến mãi, đóng trước khi chụp bằng `page.click()` hoặc `addStyleTag` ẩn nó.

Sau khi chạy script, **mở 4 ảnh ra xem bằng mắt** trước khi commit. Ảnh trắng hoặc ảnh dính popup thì chụp lại — đừng commit rồi báo xong.

### 7.2 Các asset còn lại

| File | Trạng thái |
|---|---|
| `portrait.jpg` | **Đã có** — dùng `linkedin-anh-profile.jpg` (800×800, đã cắt vuông) |
| `CV-NguyenThaiVinh-VI.pdf` | **Đã có** — bản 1 trang tiếng Việt |
| `CV-NguyenThaiVinh-EN.pdf` | **Đã có** — bản 1 trang tiếng Anh |
| `og-image.jpg` | **Cần làm** — 1200×630, nền navy `#0B1720`, tên + chức danh + 4 từ khoá chuyên môn. Cùng bố cục với `linkedin-anh-bia.jpg` đã có, chỉ đổi tỷ lệ. Self-host, xem Mục 6.1 |
| `favicon.svg` + `favicon.ico` | **Cần làm** — chữ lồng "NV" trên nền `#0B1720`, chữ màu `--accent` |

Nếu một asset chưa có, dùng khối màu `--surface-2` kèm nhãn mono ghi rõ tên file đang thiếu. **Không dùng ảnh stock, không dùng avatar giả, không dùng ảnh mockup laptop.**

---

## 8. Checklist nghiệm thu

Chạy hết trước khi báo xong:

**Nội dung**
- [ ] Không có con số nào không nằm trong file này
- [ ] Không còn lorem ipsum, không placeholder text nào sót lại
- [ ] Cả hai ngôn ngữ đầy đủ, không thiếu key
- [ ] Tên viết đúng: **Vinh**, không phải Vĩnh
- [ ] Shipstar lồng dưới TP Plastic, không đứng riêng

**Kỹ thuật**
- [ ] PageSpeed Insights mobile ≥ 90
- [ ] Preview LinkedIn hiện đúng thẻ — đã kiểm tra bằng Post Inspector
- [ ] Đổi ngôn ngữ không reload, không nhảy đầu trang, giữ được sau khi refresh
- [ ] `?lang=vi` mở ra đúng tiếng Việt
- [ ] Nút tải CV tải đúng file theo ngôn ngữ
- [ ] Điều hướng bàn phím chạy hết, focus thấy rõ
- [ ] 360px không cuộn ngang
- [ ] `prefers-reduced-motion` tắt hết animation
- [ ] Console không lỗi, không cảnh báo

**Thiết kế**
- [ ] Mọi nội dung đọc được ngay khi load, không cần scroll mới hiện
- [ ] Section "Ba tầng" đọc như một cấu trúc thật, không phải ba card giống nhau
- [ ] `--accent-warm` chỉ xuất hiện ở số liệu và nhãn dữ liệu
- [ ] Không phạm bất kỳ điều nào ở Mục 3.5

**Deploy**
- [ ] Push `main` là tự deploy, không lỗi build
- [ ] Đã chạy Post Inspector trên URL `*.vercel.app` và dán kết quả cho Vinh
- [ ] `vercel.json` có headers, và cache của `/assets/` khớp với cách đặt tên file
- [ ] Chỉ một bản chính phục vụ nội dung (apex hoặc www), bản kia redirect
- [ ] Chạy PageSpeed Insights trên URL production thật, không phải localhost

**Ảnh dự án**
- [ ] Đủ 4 ảnh, đã mở ra xem bằng mắt, không ảnh nào trắng hoặc dính popup
- [ ] Có khung browser chrome kèm tên miền thật bằng font mono
- [ ] `alt` mô tả thật, không phải "screenshot"
- [ ] Khai `width`/`height`, không nhảy layout khi tải
- [ ] Trên 360px ảnh vẫn đọc được, không bị bóp méo

---

## 9. Việc cần hỏi Vinh trước khi build

1. Đã mua domain chưa, tên là gì? Chưa có thì đề xuất `vinhnguyen.dev` hoặc `thaivinhnguyen.com`. Chưa có cũng **cứ deploy trước** lên URL `*.vercel.app`, gắn domain sau.
2. GA4 measurement ID và GTM container ID. Chưa có thì để hằng số `TODO` rõ ràng và build tiếp, đừng chờ.

Ảnh chụp website và nền tảng deploy thì **không cần hỏi** — script ở Mục 7.1, Vercel ở Mục 6.5.
