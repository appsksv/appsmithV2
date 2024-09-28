export default {
	validation: () => {
	session_validation.run(()=>{if(session_validation.data.data.action.returning[0].response.session_key==appsmith.store.jwt){
																		storeValue('role',session_validation.data.data.action.returning[0].response.role);
																		storeValue('user_id',session_validation.data.data.action.returning[0].response.user_id);
                              }
														 else {showAlert('Session Expired, Please Login','error');
																	navigateTo('Login','SAME_WINDOW');}
														 }
	)}}