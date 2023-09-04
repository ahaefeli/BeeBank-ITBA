document.addEventListener("DOMContentLoaded", function () {

    const aliasList = document.querySelectorAll(".main-hr");
    const aliasSearchInput = document.querySelector(".input-search-bar")

    for (let i = 0; i < aliasList.length; i++) {
        const element = aliasList[i];

        // Copy the element
        element.addEventListener("click", () => {
            aliasValue = element.textContent
            navigator.clipboard.writeText(aliasValue)
            aliasSearchInput.value = aliasValue
        })
    }
});


