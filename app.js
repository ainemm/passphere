window.onload = function() {
  document.getElementById("edit").onclick = function openEdit() {
    var element = document.getElementById("details");
    element.classList.toggle("hidden");
  };

  document.getElementById("save").onclick = function save() {
    var name = document.getElementById("editedName").value;
    var position = document.getElementById("editedPosition").value;
    var description = document.getElementById("editedDescrip").value;

    document.getElementById("name").innerHTML = name;
    document.getElementById("position").innerHTML = position;
    document.getElementById("description").innerHTML = description;
  };

  document.getElementById("cancel").onclick = function openEdit() {
    var element = document.getElementById("details");
    element.classList.toggle("hidden");
  };
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("OK");
});
