const nameEle = document.getElementById("name");
const dateEle = document.getElementById("date");
const amountEle = document.getElementById("amount");
const saveBtn = document.getElementById("save");
const tableBody = document.querySelector("tbody");

saveBtn.addEventListener("click", () => {
    if (nameEle.value && dateEle.value && amountEle.value) {
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("onclick", "deleteItem(this)");

        const userData = [nameEle.value, dateEle.value, `$${amountEle.value}`, deleteBtn]
        const tableRow = document.createElement("tr");
    
        for (let i = 0; i < userData.length; i++) {
            const tableData = document.createElement("td");
            if (i === userData.length - 1) {
                tableRow.append(deleteBtn);
            } else {
                tableData.innerText = userData[i];
                tableRow.append(tableData);
            }
        }
        tableBody.append(tableRow);
        nameEle.value = amountEle.value = null

    } else {
        alert("Please fill out all required feilds")
    }
})

function deleteItem(e) {
    e.parentElement.remove();
}