// Mảng lưu URL video YouTube cho mỗi bài giảng
const videoLinks = {
    lesson1: "https://www.youtube.com/embed/ILr_rU-lISk", // Video chuẩn cho bài giảng 1
    lesson2: "https://www.youtube.com/embed/Fs54vl76E84", // Video chuẩn cho bài giảng 2
    lesson3: "https://www.youtube.com/embed/O0Q5K0m6mvY", // Video chuẩn cho bài giảng 3
    lesson4: "https://www.youtube.com/embed/tSBR3R-6egg", // Video mẫu cho bài giảng 4
    lesson5: "https://www.youtube.com/embed/L-BabT96Zmk"  // Video mẫu cho bài giảng 5
};

// Hàm để hiển thị bài giảng đã chọn
function showSelectedLesson() {
    var select = document.getElementById("lectures");
    var selectedLesson = select.options[select.selectedIndex].text;
    document.getElementById("lesson-detail").innerHTML = "Bạn đã chọn: " + selectedLesson;
}

// Cập nhật video khi người dùng chọn bài giảng
function updateVideo() {
    var select = document.getElementById("lectures");
    var selectedValue = select.value; 
    var videoUrl = videoLinks[selectedValue]; 

    // Cập nhật src của iframe để nhúng video mới
    var iframe = document.getElementById("video-player");
    iframe.src = videoUrl;
}
