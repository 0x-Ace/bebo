window.onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const myAudio = document.getElementById("myAudio");

// وقت البداية والنهاية بالثواني
const startTime = 122; // 2:02
const endTime = 157;   // 2:37

openBtn.addEventListener("click", () => {
    // 1. حركة فتح الجواب
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // 2. تشغيل الصوت من نقطة البداية
    myAudio.currentTime = startTime;
    myAudio.play().then(() => {
        console.log("الصوت اشتغل تمام");
    }).catch(error => {
        console.log("المتصفح منع التشغيل التلقائي المسموع:", error);
    });
});

closeBtn.addEventListener("click", () => {
    // 1. حركة إغلاق الجواب
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";

    // 2. إيقاف الصوت عند الإغلاق (اختياري)
    myAudio.pause();
});

// 3. مراقبة الوقت لإعادة المقطع (Loop)
myAudio.addEventListener('timeupdate', function() {
    if (this.currentTime >= endTime) {
        this.currentTime = startTime;
        this.play();
    }
});
