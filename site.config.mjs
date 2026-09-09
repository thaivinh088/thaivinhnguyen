/* ─────────────────────────────────────────────────────────────
   site.config.mjs — MỘT chỗ duy nhất để sửa domain và ID tracking.
   Sửa xong chạy lại `npm run build`.
   ───────────────────────────────────────────────────────────── */

/**
 * TODO — CHƯA CÓ DOMAIN.
 * Sau lần deploy đầu, Vercel cho một URL dạng https://<project>.vercel.app.
 * Dán URL đó vào đây (không có dấu / ở cuối) rồi chạy `npm run build`
 * và push lại. Bắt buộc phải làm trước khi chạy LinkedIn Post Inspector,
 * vì og:image phải là URL tuyệt đối đúng host (Mục 6.1 của brief).
 * Khi gắn domain riêng thì đổi tiếp sang domain đó.
 */
export const SITE_URL = 'https://TODO-CHUA-CO-DOMAIN.vercel.app';

/**
 * TODO — CHƯA CÓ GTM CONTAINER ID.
 * Điền dạng 'GTM-XXXXXXX' rồi chạy lại `npm run build`.
 * Để trống thì snippet GTM không được nhúng — không nhét ID giả.
 * Các sự kiện (cv_download, work_link_click, contact_click, lang_switch)
 * vẫn được đẩy vào window.dataLayer, GTM gắn sau là nhận đủ.
 */
export const GTM_ID = '';

/**
 * TODO — CHƯA CÓ GA4 MEASUREMENT ID ('G-XXXXXXXXXX').
 * GA4 nối qua GTM (Mục 6.3), nên ID này chỉ để ghi lại cho khỏi quên;
 * cấu hình thật nằm trong container GTM.
 */
export const GA4_ID = '';
