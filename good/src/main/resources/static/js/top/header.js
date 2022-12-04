const topMenu = document.querySelectorAll(".top-menu");
const signinEvent = document.querySelector(".layer-popup-off");
const closeBtn = document.querySelector(".close");

topMenu[0].onclick = () => { // 장바구니
	location.href = "";
}
topMenu[1].onclick = () => { // 로그인
	console.log("로그인 클릭");
	signinEvent.className = "layer-popup-on";
}
topMenu[2].onclick = () => { // 회원가입
	location.href = "";
}
topMenu[3].onclick = () => { // 고객센터
	location.href = "";
}

closeBtn.onclick = () => {
	signinEvent.className = "layer-popup-off";
}










