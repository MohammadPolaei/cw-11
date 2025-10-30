const form = document.createElement("div");

// first child

export function Form() {
	// return El({
	// 	element: "div",
	//   children : [
	//     El({
	//       element:"label"

	//     })
	//   ]

	// })

	const form = document.createElement("div");
	form.classList.add("flex", "flex-col", "m-60", "w-150", "gap-5");

	// form.classList.add("flex-col");

	form.innerHTML = `
  <label>نام کاربری :</label>
  <input class="border-2 rounded-[5px]" type="text" id="userName">
  
  <label>پسورد :</label>
  <input class="border-2 rounded-[5px]" type="password" id="userPass">
  <div>
  <input type="checkbox" id="rememberMe" />
  <label for="rememberMe">مرا به خاطر بسپار</label>
  </div> 
  <button class=" bg-amber-300 px-5 rounded-[5px] py-3">ارسال</button>

  `;
	return form;
}
