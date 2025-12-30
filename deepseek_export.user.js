// ==UserScript==
// @name         DeepSeek Exporter
// @name:zh-CN   DeepSeek 对话导出
// @namespace    https://ds.aikeyu.cn
// @version      1.0.0
// @description  Export DeepSeek AI conversations to PDF, Image, Word, Markdown, JSON, TXT, HTML formats. Supports exporting "Deep Thinking" content.
// @description:zh-CN  导出 DeepSeek AI 对话为 PDF、图片、Word、Markdown、JSON、TXT、HTML 格式，支持导出"深度思考"内容。
// @author       bu3bao
// @license      MIT
// @match        https://chat.deepseek.com/*
// @icon         https://edgeoneimg.cdn.sn/i/69292a16a83ad_1764305430.webp
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js
// @require      https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js
// @require      https://cdn.jsdelivr.net/gh/bu3bao/deepeek_export@ds/deepseek_export.user.js
// @homepage     https://ds.aikeyu.cn
// @supportURL   https://ds.aikeyu.cn
// ==/UserScript==

(function () {
    'use strict';
    // Main script is loaded via @require
    // This loader ensures Greasyfork compatibility
    console.log('[DeepSeek Exporter] Loaded successfully');
})();
