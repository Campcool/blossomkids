"use client";

import { FormEvent, useState } from "react";

export function VisitForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h3>預約需求已暫存於本頁</h3>
        <p>目前為網站設計版，尚未串接正式送出服務。上線前會改為寄送至園方並補上明確回覆時間。</p>
        <button className="text-button" type="button" onClick={() => setSubmitted(false)}>返回表單</button>
      </div>
    );
  }

  return (
    <form className="visit-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          家長姓名 <span>*</span>
          <input name="parentName" required autoComplete="name" placeholder="請輸入姓名" />
        </label>
        <label>
          聯絡電話 <span>*</span>
          <input name="phone" required type="tel" autoComplete="tel" placeholder="09xx-xxx-xxx" />
        </label>
        <label>
          孩子出生年月 <span>*</span>
          <input name="birthMonth" required type="month" />
        </label>
        <label>
          想了解的服務 <span>*</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>請選擇</option>
            <option>幼兒園</option>
            <option>安親／課後照顧</option>
            <option>寒暑假活動</option>
            <option>還不確定，想先參觀</option>
          </select>
        </label>
        <label>
          希望聯絡時段
          <select name="contactTime" defaultValue="不限">
            <option>不限</option>
            <option>09:00–12:00</option>
            <option>13:00–17:00</option>
            <option>17:00–19:00</option>
          </select>
        </label>
        <label>
          預計入學時間
          <input name="startMonth" type="month" />
        </label>
      </div>
      <label>
        想先詢問的事情
        <textarea name="message" rows={4} placeholder="例如：接送、供餐、候補名額或孩子需要特別協助的地方（請勿填寫醫療等敏感資料）" />
      </label>
      <label className="consent-field">
        <input type="checkbox" required />
        <span>我同意園方僅為回覆本次預約而使用以上資料，並已閱讀隱私權說明。 *</span>
      </label>
      <button className="button" type="submit">送出預約需求</button>
      <p className="form-note">設計版尚未傳送或儲存任何個人資料。</p>
    </form>
  );
}

