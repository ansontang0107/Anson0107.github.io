$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "林毓琳" && pwd == "20030807") {
        $('#h').text("親愛的Eva　歡迎回來！");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("用户名或密碼不正確！");
    }
});
