function submitted() {
  localStorage.setItem(0, prefixInput.value);
  window.location.replace(
    "https://www.google.com/search?q=" +
      document.getElementById("prefixInput").value +
      " " +
      document.getElementById("searchText").value
  );
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem(0) != null) {
    document.getElementById("prefixInput").value = localStorage.getItem(0);
  }
});
