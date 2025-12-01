document.addEventListener("DOMContentLoaded", () => {

  // DELETE FUNCTION
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this employee?")) {
        this.closest("tr").remove();
      }
    });
  });

  // EDIT FUNCTION
  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      alert("Edit button clicked!\nYou can redirect to edit-user.html here.");
    });
  });

});
