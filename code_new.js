document.getElementById("table").style.visibility = "hidden";
var d = 0;
var quesTable = "";
var startRound = new Audio ("Start.mp3");
var playerRound = new Audio ("PStart.mp3");
var showQues = new Audio ("FStart.mp3");
var mainTime = new Audio ("Starting60Seconds.mp3");
var finishRound = new Audio ("Finish.mp3");
var arr = ["Không gian mẫu của phép thử khi gieo một đồng xu và một con xúc sắc gồm bao nhiêu phần tử?",
    "Sau khi nhà vật lý Evangelista Torricelli qua đời, người ta đã đặt tên cho đơn vị đo áp suất nào theo tên ông nhằm tưởng nhớ?",
    "Hợp chất hữu cơ nào có công thức phân tử C8H7N3O2, thường được sử dụng trong điều tra pháp y để phát hiện dấu vết của máu còn sót lại ở hiện trường bằng ánh sáng xanh loé lên?",
    "Chó rừng trong đàn phối hợp với nhau nhờ đó ăn thịt được trâu rừng có kích thước lớn hơn là quan hệ gì?",
    "\"Có những phút làm nên lịch sử/ Có cái chết hoá thành bất tử\" là những câu thơ viết về người anh hùng nào?",
    "Hòn đảo nào ở Đông Nam Bộ là điểm du lịch tâm linh nổi tiếng, đồng thời là địa chỉ đỏ giáo dục truyền thống cách mạng?",
    "Trong một bài thơ của Đỗ Trung Quân, điều gì được ví với \"đường đi học\", \"con đò nhỏ\", \"con diều biếc\"?",
    "On most computer keyboards, which key is used to delete the character to the left of the cursor?",
    "Đỗ Thị Ánh Nguyệt, Lộc Thị Đào, Nguyễn Thị Phương là những vận động viên nổi tiếng ở bộ môn thể thao nào?",
    "Mở màn một tiếc mục múa rối nước, nhân vật nào thường xuyên xuất hiện đầu tiên làm nhiệm vụ dẫn chuyện?",
    "Nhắc đến tác dụng của loại gia vị thân thuộc nào, người xưa có câu: \"Mỗi ngày một lát […] già, lương y bất đáo gia\"?",
    "Loại pháo chuyên dùng để bắn các mục tiêu trên không được gọi là gì?",
    "Trang phục truyền thống nào của Nhật Bản được gọi là \"Kimono mùa hè\"?",
    "Nhạc phẩm nào của tác giả Lưu Hữu Phước là bài hát chính thức của Hội Liên hiệp Thanh niên Việt Nam?",
    "Trong truyện cổ tích Trung Quốc \"Cây bút thần\", cậu bé nào đã được ông bụt tặng cho một cây bút bằng vàng có khả năng biến mọi thứ em vẽ thành sự thật?",
    "Which word has been added to the Olympics' motto by IOC to put a strong focus on solidarity amid the Covid-19 pandemic?",
    "Từ đơn nào còn thiếu trong những câu thơ sau: \"[…] lấy từ than, […] lấy từ khí đốt/ […] lấy từ sông hồ với những dòng thác bạc/ […] lấy từ gió, […] lấy từ ánh sáng\" (Phạm Tiến Duật)?",
    "Loại chất hữu cơ nào có nguồn gốc tên của nó là \"sự sống\", không cần đi qua bất kì hoạt động tiêu hoá nào để được hấp thụ vào cơ thể con người?",
    "Các nhà khoa học đã gọi biến thể nào của virus SARS-CoV-2 là \"đại dịch trong đại dịch\" do sự lây nhiễm tràn lan một cách nhanh chóng trên toàn thế giới của nó?",
    "Toà tháp đôi Trung Tâm Thương Mại Thế Giới ở New York đã bị nhóm khủng bố Hồi giáo tấn công vào ngày 11/9 năm nào?"];
var subject = ["Toán học","Vật lý","Hoá học","Sinh học","Lịch sử","Địa lý","Văn học","Tiếng Anh","Thể thao","Nghệ thuật","Hiểu biết chung","Lĩnh vực khác","Câu hỏi thêm 1","Câu hỏi thêm 2","Câu hỏi thêm 3","Câu hỏi thêm 4","Câu hỏi thêm 5","Câu hỏi thêm 6","Câu hỏi thêm 7","Câu hỏi thêm 8"]
var ans = ["","","","","","","","","","","","","","","","","","","",""];
var key = ["12","Torr","Luminol","Hỗ trợ","Nguyễn Văn Trỗi","Côn Đảo","Quê hương","Backspace","Bắn cung","Chú tễu","Gừng","Pháo cao xạ","Yukata","Lên Đàng","Mã Lương","Together","Điện","Vitamin","Delta","2001"]
var index = 0;
function start(){
    document.getElementById("button").style.visibility = "hidden";
    document.getElementById("question").innerHTML = "Phần thi KHỞI ĐỘNG bắt đầu";
    startRound.play();
    setTimeout(function(){
        playerRound.play();
        setTimeout(function(){
            showQues.play();
            document.getElementById("question").innerHTML = "Câu hỏi đầu tiên sẽ xuất hiện sau 2 giây"
            setTimeout(function(){
                mainTime.play();
                timing()
                document.getElementById("question").innerHTML = arr[index];
                document.getElementById("status").innerHTML = "Câu hỏi số "+(index+1)
                document.getElementById("linhvuc").innerHTML = subject[index];
                document.getElementById("textboxid").addEventListener("keyup", getAnswer);
                setTimeout(function(){
                    document.getElementById("textboxid").removeEventListener("keyup", getAnswer);
                    document.getElementById("question").innerHTML = "end time babe";
                    setTimeout(function(){
                        finishRound.play();
                        document.getElementById("textboxid").style.visibility = "hidden";
                        document.getElementById("question").innerHTML = "Xong rồi đó hihi";
                        document.getElementById("All").style.visibility = "hidden";
                        showAll();
                    },2000);
                }, 60000);
            }, 2000);
        }, 4000);
    }, 4000);
}
function getAnswer(){
    if(event.keyCode==13){
        var answer = document.getElementById("textboxid").value;
        answer = answer.toUpperCase().replace(/\s+/g,' ').trim();
        answer = answer.replace(/\s+/g,' ').trim();
        ans[index] = answer;
        if (answer == key[index].toUpperCase()){
            var right = new Audio ("Right.mp3");
            right.play();
        } else {
            var wrong = new Audio ("Wrong.mp3");
            wrong.play();
        }
        document.getElementById("textboxid").value = ""
        document.getElementById("question").innerHTML = "";
        ++index;
        if(index<20){
            document.getElementById("question").innerHTML = arr[index];
            document.getElementById("status").innerHTML = "Câu hỏi số "+(index+1);
            document.getElementById("linhvuc").innerHTML = subject[index];
        }
        else{
            document.getElementById("textboxid").removeEventListener("keyup", getAnswer);
            document.getElementById("question").innerHTML = "Bạn đã trải qua hết tất cả câu hỏi của phần thi Khởi động.";
            document.getElementById("status").innerHTML = "";
            document.getElementById("linhvuc").innerHTML = "";
        }
    }
}
function timing(){
    document.getElementById("timeQ").innerHTML = 60;
    var timeleft = 59;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("timeQ").innerHTML = "Hết giờ";
        } else{
            document.getElementById("timeQ").innerHTML = timeleft;
        }
    timeleft -= 1;
    }, 1000);
}

function showAll(){
    document.getElementById("table").style.visibility = 'visible';
    quesTable +="<tr>"
    quesTable +="<td style=\"width:70%; font-weight: bolder\" align=\"center\">"+"Câu hỏi"+"</td>"
    quesTable +="<td style=\"width:15%; font-weight: bolder\" align=\"center\">"+"Câu trả lời"+"</td>"
    quesTable +="<td style=\"width:15%; font-weight: bolder\" align=\"center\">"+"Đáp án"+"</td>"
    quesTable +="</tr>"
    for (i = 0; i < 20; i++){
        if(ans[i] == key[i].toUpperCase()) quesTable +="<tr bgcolor=\"#065709\">";
        else quesTable +="<tr bgcolor=\"#b30000\">";
        quesTable +="<td>" + "<font color = \"#ffffff\">" + arr[i] + "</td>";
        quesTable +="<td align=\"center\">" + "<font color = \"#ffffff\">" + ans[i] + "</td>";
        quesTable +="<td align=\"center\">" + "<font color = \"#ffffff\">" + key[i] + "</td>";
        quesTable +="</tr>"
    }
    document.getElementById("table").innerHTML = quesTable;
    document.getElementById("question").innerHTML = "Số điểm của bạn: "+ d;
}
