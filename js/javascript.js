function init() {
    var button = document.getElementById('submitButton');

    function showMeText() {
        var phone = document.forms["myForm"]["phone_field"].value;
        var email = document.forms["myForm"]["email_field"].value;
        var bday = document.forms["myForm"]["date_of_birth"].value;
        if (phone === "" || email === "" || bday === "")
        {
            alert("Please fill in the form");
            return false;
        }
        else
        {
            alert("Thank you for submitting your information!");
            document.getElementById("myForm").reset();
            return true;
        }
    }
    button.addEventListener('click', showMeText);

    var button = document.getElementById('resetButton');

    function reset() {
        alert("Are you sure you want to reset all the information?");
        document.getElementById("myForm").reset();
    }
    button.addEventListener('click', reset);
}
window.addEventListener('load', init);