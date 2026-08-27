document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. FALLING STARS EFFECT (گرتے ہوئے ستارے)
    // ==========================================
    const starsContainer = document.getElementById("stars-container");
    const starIcons = ["✦", "✨", "✻", "★"];

    if (starsContainer) {
        function createStar() {
            const star = document.createElement("div");
            star.classList.add("star");
            star.innerText = starIcons[Math.floor(Math.random() * starIcons.length)];
            star.style.left = Math.random() * 100 + "vw";
            star.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4s سے 7s گرنے کی رفتار
            star.style.fontSize = Math.random() * 10 + 10 + "px"; // 10px سے 20px سائز

            starsContainer.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 7000);
        }

        setInterval(createStar, 400); // ہر 0.4 سیکنڈ بعد نیا ستارہ
    }

    // ==========================================
    // 2. COUNTDOWN TIMER (کاؤنٹ ڈاؤن ٹائمر)
    // ==========================================
    const eventDate = new Date("August 31, 2026 15:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            if (document.getElementById("days")) document.getElementById("days").innerText = String(days).padStart(2, '0');
            if (document.getElementById("hours")) document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            if (document.getElementById("minutes")) document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            if (document.getElementById("seconds")) document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        } else {
            const timerElement = document.getElementById("timer");
            if (timerElement) {
                timerElement.innerHTML = "<h3>The Blessed Day Has Arrived! ✦</h3>";
            }
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ==========================================
    // 3. BACKGROUND TILAWAT CONTROLLER (تلاوت آن/آف)
    // ==========================================
    const audio = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");

    if (audio && musicBtn) {
        musicBtn.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                musicBtn.innerText = "📖 Pause Tilawat";
            } else {
                audio.pause();
                musicBtn.innerText = "📖 Play Tilawat";
            }
        });
    }
});
