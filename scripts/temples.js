const year = new Date().getFullYear();

document.getElementById("lastModified").innerHTML =`Last Modification: ${document.lastModified}`;
document.getElementById("currentyear").innerHTML=`&#169; ${year} &#10022; udeozor wisdom &#10022; Nigeria ` ;
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
