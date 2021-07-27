function hiddenClicked() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; 
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
    input.click();
}

function processFile(file) {
    var reader = new FileReader();
    // 한글 깨짐 방지 -> UTF-8로 설정
    reader.readAsText(file, "UTF-8");
    
    // reader.onload = function () {
    //     document.getElementById("hidden_diary_text").innerText = reader.result;
    //     document.getElementById("hidden_diary_card").style.display = "block";
    //   };
    
    reader.onload = function () {
        var output = document.getElementById("hidden_diary_text");
        var hiddendiary = document.getElementById("hidden_diary_card");
        document.getElementById("hidden_diary_img").style.display = "inline"; 

        //콘솔에 불러온 텍스트 표시
        console.log(reader.result);
        output.innerText = reader.result;
        // output.style.textAlign = 'right';
        hiddendiary.style.display = 'flex';
    };
   
}