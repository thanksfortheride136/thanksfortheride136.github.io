function onSubmit() {
	/* Use this line of code to go directly to another page when the correct code is entered and the "submit" button is clicked. */
          if (document.getElementById('password').value == '1020') {
            window.location.href = 'resume.html'; 
          }else{ alert('Access Denied, Please try again');
               }
     }
