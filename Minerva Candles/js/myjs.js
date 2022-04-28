// testimonials slider js
    var testimonials = document.getElementById('testimonials');
    var control1 = document.getElementById('control1');
    var control2 = document.getElementById('control2');
    var control3 = document.getElementById('control3');

    control1.onclick = function(){
    testimonials.style.transform = "translateX(500px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    }

    control2.onclick = function(){
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
    }

    control3.onclick = function(){
    testimonials.style.transform = "translateX(-500px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    }
// form validations
    function validate(){

        if( document.myForm.fname.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.fname.focus() ;
            return false;
        }
        if( document.myForm.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
        }
        if( document.myForm.phone.value == "" ) {
            alert( "Please provide your Phone Number!" );
            return false;
        }
        return(alert("You have successfully signed up!"));
    }

    function validate2(){

        if( document.myForm2.name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm2.name.focus() ;
            return false;
        }
        if( document.myForm2.Email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm2.Email.focus() ;
            return false;
        }
        return(alert("Your message has been sent!"));
    }
// placeorder
    function placeorder(){
        
        var ddl = document.getElementById("dropdown");
        if (ddl.selectedIndex == 0 ) {
            alert('Please select an item');
            return false;
        }
        
        if( document.myForm3.quantity.value == "") {
            alert( "Please choose quantity!" );
            document.myForm3.quantity.focus() ;
            return false;
        }
        if( document.myForm3.fname.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm3.fname.focus() ;
            return false;
        }
        if( document.myForm3.phone.value == "" ) {
            alert( "Please provide your phone number!" );
            document.myForm3.phone.focus() ;
            return false;
        }
        return(alert("Your Order has been recieved!"));
    }
    function total(){
        
            var quantity = document.myForm3.quantity.value;
        
            var total = parseInt(quantity) * 40;
        
            document.getElementById("total").innerHTML = "$Total: "+total;
        
    }