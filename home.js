function changeContent() {
    var selectedContent = document.getElementById('contentSelect').value;
    
    if (selectedContent === 'a') {
        window.location.href = 'pageA.html';  
    } else if (selectedContent === 'b') {
        window.location.href = 'pageB.html';  
    } else if (selectedContent === 'c') {
        window.location.href = 'pageC.html';  
    }
}
