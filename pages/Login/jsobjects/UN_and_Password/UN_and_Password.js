export default {
	
	async Password () {			
	 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*?/';
   let password = '';
   for (let i = 0; i < 12; i++) {
   	const randomIndex = Math.floor(Math.random() * characters.length);
   	password += characters[randomIndex];
  	}
		storeValue("password", password)
		return appsmith.store.password
	},
	
}
