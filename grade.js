var grades=0;
function read(){
    var youClass=document.getElementsByName("yourclass");
    var youNum=document.getElementsByName("yournum");
    var youName=document.getElementsByName("yourname");
    if(youClass[0].value=="" )
    {
        alert("请输入班级")
    }
    if(youNum[0].value=="" ){
        alert("请输入学号");
    }
     if(youName[0].value=="") {
         alert("请输入名字");
     }  
    else {
        var resultTk1 = document.getElementsByName("tk1");
        if (resultTk1[0].value == "统一建模语言") {
            grades += 15;
        }
        var resultTk2 = document.getElementsByName("tk2");
        if (resultTk2[0].value == "封装性、继承性、多态性") {
            grades += 15;
        }
        var resultSelect1 = document.getElementsByName("select1");
        if (resultSelect1[1].checked == true) {
            grades += 5;
        }
        var resultSelect2 = document.getElementsByName("select2");
        if (resultSelect2[1].checked == true) {
            grades += 5;
        }
        var resultMoreSelect1 = document.getElementsByName("moreselect1");
        if (resultMoreSelect1[0].checked == true && resultMoreSelect1[1].checked == true && resultMoreSelect1[3].checked == true) {
            grades += 10;
        }
        var resultMoreSelect2 = document.getElementsByName("moreselect2");
        if (resultMoreSelect2[0].checked == true && resultMoreSelect2[1].checked == true && resultMoreSelect2[2].checked == true) {
            grades += 10;
        }
        var resultJudge1 = document.getElementsByName("judg1");
        if (resultJudge1[1].checked == true) {
            grades += 10;
        }
        var resultJudge2 = document.getElementsByName("judg2");
        if (resultJudge2[0].checked == true) {
            grades += 10;
        }
        var  lasttexts= document.getElementsByName("lasttext");
        if (lasttexts[0].value == "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形") {
            grades += 20;
        }
        var  results = document.getElementsByName("allgrade");
        results[0].value = grades;
    }
}