// DELETE ROW FUNCTION
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.closest("tr").remove();
  }
});

// EDIT FUNCTION - Send row data to edit page
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-edit")) {
    const row = e.target.closest("tr");
    const data = [...row.children].map(td => td.innerText);

    // Save values to localStorage
    localStorage.setItem("editData", JSON.stringify({
      fullname: data[0],
      address: data[1],
      city: data[2],
      state: data[3],
      zip: data[4],
      phone: data[5]
    }));

    // Redirect to Edit Page
    window.location.href = "edit-person.html";
  }
});
