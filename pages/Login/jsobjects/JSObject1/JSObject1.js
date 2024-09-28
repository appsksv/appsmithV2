export default {
	myFun1 () {
{{login_api.run(()=>
								 {const jwt = login_api.data.data.action.returning[0].response.sessionkey;
if (jwt==='Username or Password is Incorrect')			{ showAlert(jwt,'error'); } 
	else if (jwt === 'Your Account is Locked')
			{showAlert (jwt,'error');}
	else if (login_api.data.data.action.returning[0].response.changepwd = true) 
					 {{navigateTo('Change Password',{x:login_api.data.data.action.returning[0].response.sessionkey}, 'SAME_WINDOW')};
					{ showAlert(jwt,'success');}
					 
					 
		else			 {
		{navigateTo('HomePage',{x:1,y:2}, 'SAME_WINDOW')};
		{ showAlert(jwt,'success');
			 storeValue('jwt',jwt)}
									console.log(appsmith.store.jwt)
}})}
	}
}}