function formValidation(){

    let letter = document.letter.residentialaddress;
    let text = document.text.name;
    let emailaddress = document.emailaddress.emailaddress;
    let gifts = document.gifts.gifts;
    
    



        var check = /^[A-Za-z+\s]+$/;
        if(letter.value.match(check))
        {
     
        }else{
            alert('Wrong Input! Please insert correct characters according to the field provided!');
            name.focus();
            return false;
        }
           

           var check = /^[A-Z]+$/;
            if(text.value.match(alphabets)) {
                

            } else {

            alert('Wrong Input! Please insert correct characters according to the fields provided!')
              var alphabet = /^[A-Z]+$/;
            if(emailaddress.value.match(alphabets)) {
                

            } else {

            alert('Wrong Input! Please insert correct characters according to the fields provided!');
            date.focus();
                return false;
        
}else{
          
	alert("Santa has received your wishes. Do check your doorsteps soon!")
	return true;

}