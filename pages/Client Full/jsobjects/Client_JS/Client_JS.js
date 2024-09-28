export default {
	myVar1: [],
	myVar2: {},
		open_module (butt) {
		if(butt==='N'){
												showModal(Client_Contact_ins_modal.name)
												client_ctType_ins.setDisabled(false)
												client_ctPerson_ins.setDisabled(false)
												client_phone_ins.setDisabled(false)
												client_email_ins.setDisabled(false)
												client_active_ins.setDisabled(false)
												client_primary_ins.setDisabled(false)
												client_ctType_ins.selectedOptionValue('')
												client_ctPerson_ins.setValue('')
												client_active_ins.setValue(true)
												client_primary_ins.setValue(false)
												client_ctId_ins.setDisabled(0)
												Button28.setDisabled(false)
												Button29.setDisabled(false)
		                  }
	  else if(butt==='V'){
			                	showModal(Client_Contact_ins_modal.name)
												client_ctType_ins.setSelectedOption(contact_details.selectedRow.contact_type)
												client_ctPerson_ins.setValue(contact_details.selectedRow.ct_person)
												client_phone_ins.setValue(contact_details.selectedRow.ct_number)
												client_email_ins.setValue(contact_details.selectedRow.ct_email)
			                  client_active_ins.setValue(contact_details.selectedRow.active_flag)
												client_primary_ins.setValue(contact_details.selectedRow.primary_flag)
												client_ctType_ins.setDisabled(true)
												client_ctPerson_ins.setDisabled(true)
												client_phone_ins.setDisabled(true)
												client_email_ins.setDisabled(true)
												client_active_ins.setValue(true)
												client_primary_ins.setValue(true)	
												client_ctId_ins.setDisabled(0)
												Button28.setDisabled(true)
												Button29.setDisabled(true)
											  }
else if(butt==='E'){
	                 	   showModal(Client_Contact_ins_modal.name)
	                     client_ctType_ins.setDisabled(false)
												client_ctPerson_ins.setDisabled(false)
												client_phone_ins.setDisabled(false)
												client_email_ins.setDisabled(false)
												client_active_ins.setValue(false)
												client_primary_ins.setValue(false)
	                      Button28.setDisabled(false)
												Button29.setDisabled(false)
                      	client_ctType_ins.setSelectedOption(contact_details.selectedRow.ContactType)
												client_ctPerson_ins.setValue(contact_details.selectedRow.ct_person)
												client_phone_ins.setValue(contact_details.selectedRow.ct_number)
												client_email_ins.setValue(contact_details.selectedRow.ct_email)	
	                      client_active_ins.setValue(contact_details.selectedRow.active_flag)
												client_primary_ins.setValue(contact_details.selectedRow.primary_flag)
										
	
}
		}
}

