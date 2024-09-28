export default {
	PassChange: () => {
		if(NewPass.text==ConfNewPass.text){
			pass_ch.run(()=>{if(pass_ch.data.data.action.returning[0].response.msg=='Password Changed Successfully'){showAlert('Password Changed Successfully','success');
																	navigateTo('Login','SAME_WINDOW');
                       }
											else if(pass_ch.data.data.action.returning[0].response.msg=='Your Account Locked, Please contact Admin'){showAlert('Your Account Locked, Please contact Admin','error');
																	navigateTo('Login','SAME_WINDOW');
                       
                           }
											else if(pass_ch.data.data.action.returning[0].response.msg=='Username or Password is Incorrect'){showAlert('Username or Password is Incorrect','error');

                           }
											 else {showAlert('Technical error, Please contact Admin','error');}
											})}
			else {showAlert('New Password and Confirm New Password is not Same','error');}

    }
		
	}