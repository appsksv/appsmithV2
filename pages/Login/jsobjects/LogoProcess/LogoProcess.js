export default {
	LogoProcess () {
{{logo_pick.run(()=> {const logo = logo_pick.data.fileData;

			 storeValue('logo',logo)}								
)}
 	console.log(appsmith.store.logo)
 return appsmith.store.logo
	}}}