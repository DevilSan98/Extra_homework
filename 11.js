document.getElementById('check').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    
    if(login == 'Anton' && password == '21082108')
        alert('Welcome')
    else if(login == 'Petr' && password == '333222')
        alert('Welcome')
    else if(login == 'Mona' && password == '12345')
         alert('Welcome')
    else alert('Inccorect login or passowrd,try again')

}