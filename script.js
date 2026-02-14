onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });
document.getElementById('openBtn').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play().then(() => {
        console.log("الصوت اشتغل بنجاح!");
    }).catch(function(error) {
        console.log("المتصفح منع الصوت: ", error);
    });
});
