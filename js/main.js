function validateForm() {
  console.log();
  for (var i = 0; i < myform.elements.length; i++) {
    if (
      myform.elements[i].className == "red" &&
      myform.elements[i].value.length == 0
    ) {
      alert("Please fill in all required fields");
      return false;
    }
  }
}
