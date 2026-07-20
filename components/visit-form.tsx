"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site-data";

function fieldValue(data: FormData, key: string): string {
  return String(data.get(key) ?? "").trim();
}

function composeMessage(data: FormData): string {
  const lines = [
    `您好，我想預約參觀${site.shortName}：`,
    `・家長姓名：${fieldValue(data, "parentName")}`,
    `・聯絡電話：${fieldValue(data, "phone")}`,
    `・孩子出生年月：${fieldValue(data, "birthMonth")}`,
    `・想了解的服務：${fieldValue(data, "service")}`,
    `・希望聯絡時段：${fieldValue(data, "contactTime") || "不限"}`,
  ];
  const startMonth = fieldValue(data, "startMonth");
  if (startMonth) lines.push(`・預計入學時間：${startMonth}`);
  const message = fieldValue(data, "message");
  if (message) lines.push(`・想先詢問：${message}`);
  lines.push("（此訊息由官網預約表單產生）");
  return lines.join("\n");
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(helper);
      return ok;
    } catch {
      return false;
    }
  }
}

export function VisitForm() {
  const [composed, setComposed] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = composeMessage(new FormData(event.currentTarget));

    // 園方 LINE 官方帳號開通後，於 lib/site-data.ts 填入 lineOaId（如 "@abc1234"），
    // 表單即自動改為開啟 LINE 聊天視窗並預填訊息。
    if (site.lineOaId) {
      const oaId = site.lineOaId.startsWith("@") ? site.lineOaId : `@${site.lineOaId}`;
      window.location.href = `https://line.me/R/oaMessage/${encodeURIComponent(oaId)}/?${encodeURIComponent(message)}`;
      return;
    }

    setCopied(await copyText(message));
    setComposed(message);
  }

  if (composed !== null) {
    const smsHref = `sms:${site.phoneHref.replace("tel:", "")}?body=${encodeURIComponent(composed)}`;
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h3>{copied ? "預約訊息已整理並複製" : "預約訊息已整理好"}</h3>
        <p>
          {copied ? "訊息已複製到剪貼簿。" : "請先複製下方訊息。"}
          加園長 LINE（ID：{site.lineId}）後直接把訊息貼上傳送，也可以來電或用簡訊聯絡。
        </p>
        <textarea className="composed-message" readOnly rows={8} value={composed} aria-label="預約訊息內容" />
        <div className="button-row">
          <a className="button" href={site.lineHref} target="_blank" rel="noreferrer">開啟 LINE 貼上訊息</a>
          <a className="button button-dark" href={site.phoneHref}>立即致電</a>
          <a className="button button-ghost" href={smsHref}>用簡訊傳送</a>
          <button
            className="button button-ghost"
            type="button"
            onClick={async () => setCopied(await copyText(composed))}
          >
            {copied ? "已複製訊息" : "複製訊息"}
          </button>
        </div>
        <button className="text-button" type="button" onClick={() => setComposed(null)}>返回表單修改</button>
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
      <button className="button" type="submit">整理預約訊息</button>
      <p className="form-note">送出後不會自動傳送資料：網站會替您整理成一則訊息並複製，加園長 LINE 貼上即可，也可用電話或簡訊聯絡。</p>
    </form>
  );
}
