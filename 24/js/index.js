$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//密碼驗證
    if(userName=="Sophie" &&  pwd=="20000810"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
		}
	else{
		alert("密碼錯誤！");
	}
});
