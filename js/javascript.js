function init() {
    var button = document.getElementById('submitButton');

    function submit() {
        var fname = document.forms["myForm"]["first_name"].value;
        var lname = document.forms["myForm"]["last_name"].value;
        var phone = document.forms["myForm"]["phone_field"].value;
        var email = document.forms["myForm"]["email_field"].value;
        var bday = document.forms["myForm"]["date_of_birth"].value;
        if (fname === "" || lname === "" || phone === "" || email === "" || bday === "")
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
    button.addEventListener('click', submit);

    var resetbutton = document.getElementById('resetButton');

    function reset() {
        alert("Are you sure you want to reset all the information?");
        document.getElementById("myForm").reset();
    }
    resetbutton.addEventListener('click', reset);
}
window.addEventListener('load', init);