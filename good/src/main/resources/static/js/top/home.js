const viewportList = document.querySelector(".viewport");
const viewportImg = viewportList.querySelectorAll(".bg-imgs");
const pnBtnsText = document.querySelector(".pn-btns");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let num = 1;
let number1 = 0;

load(num);

function load(num){
	console.log("로드 : " + num);
	let number = 0;
	for(let i = 0; i < viewportImg.length; i++){
		viewportImg[i].style.display = "none";
	}
	if(num == 1){
		viewportImg[0].style.display = "";
		pnBtnsText.textContent = 1;
	}else{
		number = Number(num) -1;
		for(let i = 0; i < viewportImg.length; i++){
			viewportImg[i].style.display = "none";
		}
		viewportImg[number].style.display = "";
		pnBtnsText.textContent = num;
	}
	
}

prevBtn.onclick = () => {
	
	if(pnBtnsText.textContent != 1){
		pnBtnsText.textContent = Number(pnBtnsText.textContent) - 1;
		number1 = pnBtnsText.textContent;
		load(number1);
	}
}
nextBtn.onclick = () => {
	
	if(pnBtnsText.textContent != 6){
		pnBtnsText.textContent = Number(pnBtnsText.textContent) + 1;
		number1 = pnBtnsText.textContent;
		load(number1);
	}
}
























