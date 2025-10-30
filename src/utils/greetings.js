import "../style.css";

const mainDiv = document.getElementById("mainDiv");
const cookie = document.cookie;

if (document.cookie) {
	mainDiv.innerHTML = `
 hi ${document.cookie} . welcome !
 </br><button id="exitButton" class="bg-amber-900 text-white px-5 rounded-[5px] m-5 py-3">خروج</button>
 </br><button id="testButton" class="bg-blue-950 text-white px-5 rounded-[5px] m-5 py-3">تست پروژه</button>
`;
}

const button = document.getElementById("exitButton");
button.addEventListener("click", () => {
	document.cookie = "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	localStorage.clear();
	sessionStorage.clear();
	window.location.href = "../../index.html";
});

const testButton = document.getElementById("testButton");
testButton.addEventListener("click", () => {
	console.log("local storage : ");
	console.log(localStorage);
	console.log("session storage : ");
	console.log(sessionStorage);
	console.log("cookies : " + document.cookie);
});
