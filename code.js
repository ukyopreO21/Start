    document.getElementById("table").style.visibility = 'none';
    var right = new Audio('Right.mp3');
    var wrong = new Audio('Wrong.mp3');
    var d = 0;
    var s = "";
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
    var ans = ["","","","","","","","","","","","","","","","","","","",""];
    var key = ["12","Torr","Luminol","Hỗ trợ","Nguyễn Văn Trỗi","Côn Đảo","Quê hương","Backspace","Bắn cung","Chú tễu","Gừng","Pháo cao xạ","Yukata","Lên Đàng","Mã Lương","Together","Điện","Vitamin","Delta","2001"]
    function start()
    {
                document.getElementById("button").style.visibility = 'hidden';
                document.getElementById("textboxid").value = ""
                document.getElementById("question").innerHTML = "Phần thi KHỞI ĐỘNG bắt đầu";
                var time1 = 2000;
                setTimeout(function() {var audio1 = new Audio('Start.mp3'); audio1.play();}, time1);
                var time2 = 6000;
                setTimeout(function() {var audio2 = new Audio('PStart.mp3'); audio2.play();}, time2);
                var time3 = 10000;
                setTimeout(function()
                {
                    document.getElementById("question").innerHTML = "Câu hỏi sẽ xuất hiện sau 3 giây"
                    var audio3 = new Audio('FStart.mp3');
                    audio3.play();
                }, time3);
                var count = 12000;
                setTimeout(function()
                {
                    const startingMinutes = 1;
                    let time = startingMinutes * 60;

                    const countdownEl = document.getElementById('time');

                    setInterval(updatecountdown, 1000);

                    function updatecountdown()
                    {
                        const minutes = Math.floor(time / 60);
                        let seconds = time % 60;

                        seconds = seconds < 10 ? '0' + seconds : seconds;

                        countdownEl.innerHTML = `${minutes}:${seconds}`;
                        time--;
                    }
                }, count);
                var time4 = 13000;
                setTimeout(function()
                {
                    // viết hàm xử lý để get được câu hỏi, đáp án
                    var audio6 = new Audio('Starting60Seconds.mp3');
                    audio6.play();
                    var index = 0;
                    document.getElementById("question").innerHTML = arr[index];
                    document.getElementById("textboxid").addEventListener("keyup", function()
                        {
                            if(event.keyCode==13)
                            {
                                var answer = document.getElementById("textboxid").value;
                                answer = answer.toUpperCase();
                                ans[index] = answer;
                                if (answer == key[index].toUpperCase())
                                {
                                    right.play();
                                    d = d + 10;
                                }
                                else {wrong.play()}
                                document.getElementById("textboxid").value = ""
                                document.getElementById("question").innerHTML = "";
                                ++index;
                                if(index<20) document.getElementById("question").innerHTML = arr[index]
                                else {
                                    document.getElementById("textboxid").style.display = 'none'
                                    document.getElementById("question").innerHTML = "Bạn đã trải qua hết tất cả câu hỏi của phần thi Khởi động.";
                                }
                            }
                        });
                }, time4);
                var time6 = 73000;
                setTimeout(function()
                {
                    document.getElementById("textboxid").style.display = 'none';
                    document.getElementById("question").innerHTML = "Hết giờ!";
                    document.getElementById("timeQ").style.display = "none";
                }, time6);
                    
                var time5 = 74000;
                setTimeout(function()
                {
                    var audio7 = new Audio('Finish.mp3');
                    audio7.play();
                }, time5);
                var show = 76000;
                setTimeout(function()
                {
                    document.getElementById("table").style.display = 'block';
                        s +="<tr>"
                        s +="<td style=\"width:70%; font-weight: bolder\" align=\"center\">"+"Câu hỏi"+"</td>"
                        s +="<td style=\"width:15%; font-weight: bolder\" align=\"center\">"+"Câu trả lời"+"</td>"
                        s +="<td style=\"width:15%; font-weight: bolder\" align=\"center\">"+"Đáp án"+"</td>"
                        s +="</tr>"
                    for (i = 0; i < 20; i++)
                    {
                        if(ans[i] == key[i].toUpperCase())
                        {
                            s +="<tr bgcolor=\"#065709\">"
                        }
                        else {s +="<tr bgcolor=\"#b30000\">"}
                        s +="<td style=\"font-weight: 400\">"+ "<font color = \"#ffffff\">" + arr[i] + "</td>"
                        s +="<td style=\"font-weight: 400\" align=\"center\">" + "<font color = \"#ffffff\">" + ans[i] + "</td>"
                        s +="<td style=\"font-weight: 400\" align=\"center\">" + "<font color = \"#ffffff\">" + key[i] + "</td>"
                        s +="</tr>"
                    }
                    document.getElementById("table").innerHTML = s;
                    document.getElementById("question").innerHTML = "Số điểm của bạn: "+ d
                }, show);

            ;}