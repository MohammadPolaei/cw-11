const userNameInput = document.getElementById("userName");
const userPassInput = document.getElementById("userPass");
const submitButton = document.getElementById("submitButton");
const checkBox = document.getElementById("rememberMe");

submitButton.addEventListener("click", () => {
	if (checkBox.checked) {
		localStorage.setItem("username", userNameInput.value);
		// console.log(localStorage.getItem("username"));
	} else {
		sessionStorage.setItem("username", userNameInput.value);
	}
	// const d = new Date();
	// d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	// let expires = "expires=" + d.toUTCString();
	// login
	document.cookie = "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

	const expiredDate = new Date(Date.now() + 1 * 60 * 1000);

	document.cookie = `${userNameInput.value}; expires=${expiredDate}`;
	window.location.href = "../../user.html";
});
