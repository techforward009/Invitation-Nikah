document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. COUNTDOWN TIMER (کاؤنٹ ڈاؤن ٹائمر)
    // ==========================================
    
    // نکاح کی تاریخ اور وقت مرتب کریں (YYYY-MM-DDTHH:MM:SS)
    const eventDate = new Date("August 31, 2026 15:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference > 0) {
            // دن، گھنٹے، منٹ اور سیکنڈ کا حساب
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // HTML میں ویلیوز اپ ڈیٹ کریں
            if (document.getElementById("days")) document.getElementById("days").innerText = String(days).padStart(2, '0');
            if (document.getElementById("hours")) document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            if (document.getElementById("minutes")) document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            if (document.getElementById("seconds")) document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        } else {
            // وقت پورا ہونے پر پیغام
            const timerElement = document.getElementById("timer");
            if (timerElement) {
                timerElement.innerHTML = "<h3>The Blessed Day Has Arrived! ✦</h3>";
            }
        }
    }

    // ہر 1 سیکنڈ بعد ٹائمر کو اپ ڈیٹ کریں
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ==========================================
    // 2. BACKGROUND MUSIC CONTROLLER (میوزک آن/آف)
    // ==========================================
    
    const audio = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");

    if (audio && musicBtn) {
        musicBtn.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                musicBtn.innerText = "🎵 Mute Music";
            } else {
                audio.pause();
                musicBtn.innerText = "🎵 Play Music";
            }
        });
    }
});
