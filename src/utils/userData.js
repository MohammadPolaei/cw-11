import "../style.css";

const userNameInput = document.getElementById("userName");
const userPassInput = document.getElementById("userPass");
const submitButton = document.getElementById("submitButton");
const checkBox = document.getElementById("rememberMe");

submitButton.addEventListener("click", () => {
	validateUser(userNameInput.value, userPassInput.value).then((isValid) => {
		document.cookie =
			"username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		const expiredDate = new Date(Date.now() + 1 * 60 * 1000);
		if (isValid) {
			console.log("✅ User authenticated");
			document.cookie = `userName=${userNameInput.value}; expires=${expiredDate}`;
			window.location.href = "../../user.html";
		} else {
			console.log("❌ Invalid username or password");
			const theAlert = document.getElementById("alert");
			theAlert.classList.add("text-[red]", "text-left");
			theAlert.innerHTML = `The username and password is not correct !`;
		}
	});
});

// user validation

async function validateUser(username, password) {
	try {
		console.log(username, password);
		const response = await fetch(
			"https://6904988a6b8dabde49645ae6.mockapi.io/userData"
		);
		const users = await response.json();

		// Check both username and password
		console.log(users);

		const found = users.some(
			(user) => user.userName === username && user.password === password
		);

		return found; // true if valid, false otherwise
	} catch (error) {
		console.error("Error:", error);
		return false;
	}
}
