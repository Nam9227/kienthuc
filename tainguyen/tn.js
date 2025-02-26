
const videoLinks = {
    lc1: "https://www.youtube.com/embed/dB2DWSKGLj8?si=C2X8pnPXup63_vqj", 
    lc2: "https://www.youtube.com/embed/8GRA1EMUaSI?si=6bshh459xJUUF0FV", 
    lc3: "https://www.youtube.com/embed/ijPcVX8fqjA?si=5-Oi9UXN0XVJA1iV", 
    lc4: "https://www.youtube.com/embed/1D-BC82FdZM?si=Lz5W7Z1p6WehU340", 
    lc5: "https://www.youtube.com/embed/FcPcQ7bccxM?si=n74v7qDiMLY27gwm", 
    lc6: "https://www.youtube.com/embed/JAlNXyfe-p4?si=7ygXkhgyu1IQm0Z-", 
    lc7: "https://www.youtube.com/embed/rd7lhHLuRfI?si=RKAXKJ227WaFEP4c", 
    lc8: "https://www.youtube.com/embed/AwBY3AkQO3M?si=FfV0JuqhRA-wd9-G", 
};

function updateVideo() {
    var select = document.getElementById("lectures");
    var selectedValue = select.value; 
    var videoUrl = videoLinks[selectedValue]; 

    
    var iframe = document.getElementById("video-player");
    iframe.src = videoUrl; 
}
