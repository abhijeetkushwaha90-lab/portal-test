/* ====================================================================
   OPERATION BAAZ — MASTER JAVASCRIPT (v12.0 Modular)
   ==================================================================== */

// 🚀 TUMHARA NAYA BACKEND URL YAHAN HAI
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6X6hX2Mnz-d_-Cao6B7bOkRop3RPnCve5-z_R1iV5kdf3PIL9aG6y8dSca84dpIAc/exec";

// Admin Credentials
const ADMIN_EMAIL = "kajalkushwaha208@gmail.com";
const ADMIN_PASSWORD = "Kajal@123";

// Global State
let currentUserData = JSON.parse(localStorage.getItem('baaz_userdata') || 'null');
let currentLang = localStorage.getItem('baaz_lang') || 'hi';

/* --- 1. APP INITIALIZATION --- */
window.addEventListener('DOMContentLoaded', () => {
    // Apply Theme
    const savedTheme = localStorage.getItem('baaz_theme') || 'military';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Security Check (Redirect if not logged in and not on index.html)
    const currentPage = window.location.pathname.split('/').pop();
    if (!currentUserData && currentPage !== 'index.html' && currentPage !== '') {
        window.location.href = 'index.html';
    }

    // Admin Security Check
    if (currentPage === 'admin.html' && currentUserData?.role !== 'admin') {
        alert("⛔ HIGH COMMAND SECURITY: You do not have Root Access.");
        window.location.href = 'index.html';
    }

    updateNavbarProfile();
});

/* --- 2. AUTHENTICATION & LOGOUT --- */
function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

function updateNavbarProfile() {
    // Agar kisi page par student ka naam dikhana ho
    const nameEl = document.getElementById('student-name');
    const coinEl = document.getElementById('wallet-balance-disp');
    if (nameEl && currentUserData) nameEl.innerText = currentUserData.name;
    if (coinEl && currentUserData) coinEl.innerText = currentUserData.walletBalance || 0;
}

/* --- 3. UTILITIES --- */
function escapeHtml(s) {
    return String(s || "").replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function showInfo(title, body) {
    if (!title || !body) return;
    alert(`${title}\n\n${body}`);
}
