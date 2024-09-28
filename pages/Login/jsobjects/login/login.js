export default {
		auth:() => {
			login_api.run(()=> {const jwt = login_api.data.data.action.returning[0].response.sessionkey;
												if 			(jwt==="Username or Password is Incorrect") { showAlert(jwt,'error'); } 
												else if (jwt === "Your Account is Locked") {showAlert (jwt,'error');}
												else if (login_api.data.data.action.returning[0].response.changepwd===true){
													storeValue('jwt',jwt);
													//console.log('t')
													//console.log(login_api.data.data.action.returning[0].response.changepwd)
													{navigateTo('Change Password','SAME_WINDOW')}
												}	
												else {
														storeValue('jwt',jwt);
													//console.log(login_api.data.data.action.returning[0].response.changepwd);
													{navigateTo('HomePage', 'SAME_WINDOW')};
			 												}
												})	
		}
}