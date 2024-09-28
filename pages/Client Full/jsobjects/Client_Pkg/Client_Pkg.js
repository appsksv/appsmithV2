export default {
	SetHeader () {
		OrganisationType.setSelectedOption(Search_Rslt.selectedRow.org_type_id)
		Group.setSelectedOption(Search_Rslt.selectedRow.group_id)
		LegalName.setValue(Search_Rslt.selectedRow.legal_name)
		TradeName.setValue(Search_Rslt.selectedRow.trade_name)
		DateofBirth.setValue(Search_Rslt.selectedRow.date_of_birth)
		MobileNo.setValue(Search_Rslt.selectedRow.contact_no)
		ClientId.setValue(Search_Rslt.selectedRow.client_id)	
		showAlert('Client Details are ready to Edit','success')
		Search_Rslt.setData('')
		Search_Rslt.setVisibility(false)
		get_client_List.clear()
	},
	CallGetClint () {
		if(ClientId.text==0&&(TradeName.text!==''||LegalName.text!==''||MobileNo.text!==null)){
										get_client_List.run()
										Search_Rslt.setVisibility(true)
    }
		else if(TradeName!==''||LegalName.text!==''||MobileNo.text!==''){
							Search_Rslt.setVisibility(false)
         }
	},
	SubModule(click){
		if			(click==='P'){
													Partner_Dtls.setVisibility(true)
													Reg_Dtls.setVisibility(false)
													Services_Dtls.setVisibility(false)
													Contact_Dtls.setVisibility(false)
													Address_Dtls.setVisibility(false)
   								 				}
		else if	(click==='R'){
													Reg_Dtls.setVisibility(true)
													Partner_Dtls.setVisibility(false)
													Services_Dtls.setVisibility(false)
													Contact_Dtls.setVisibility(false)
													Address_Dtls.setVisibility(false)

   								 				}
		else if	(click==='S'){
													Services_Dtls.setVisibility(true)
													Partner_Dtls.setVisibility(false)
													Reg_Dtls.setVisibility(false)
													Contact_Dtls.setVisibility(false)
													Address_Dtls.setVisibility(false)

   								 				}
		else if	(click==='C'){
													Contact_Dtls.setVisibility(true)
													Partner_Dtls.setVisibility(false)
													Reg_Dtls.setVisibility(false)
													Services_Dtls.setVisibility(false)
													Address_Dtls.setVisibility(false)
   								 				}
		else if	(click==='A'){
													Address_Dtls.setVisibility(true)
													Partner_Dtls.setVisibility(false)
													Reg_Dtls.setVisibility(false)
													Services_Dtls.setVisibility(false)
													Contact_Dtls.setVisibility(false)
   								 				}
	},
	async CallClientIns () {
		if(ClientId.text==0){
													await client_ins.run()
													ClientId.setValue(client_ins.data.data.insert_ksv_client_t.returning[0].client_id)
    											}
		else {
			client_upt.run()
					}
										},
	RestClient1 () {
									OrganisationType.setSelectedOption('')
									TradeName.setValue('')
									LegalName.setValue('')
									Group.setSelectedOption('')	
									DateofBirth.setValue('')
									MobileNo.setValue('')
									ClientId.setValue(0)
									get_key_per_info.clear()
									Search_Rslt.setData([])
									key_person.setData([])
									reg_typ.setData([])
									contact_details.setData([])
									address_tbl.setData([])
									service_tbl.setData([])
									Address_Dtls.setVisibility(false)
									Partner_Dtls.setVisibility(false)
									Reg_Dtls.setVisibility(false)
									Services_Dtls.setVisibility(false)
									Contact_Dtls.setVisibility(false)
									service_tbl.setVisibility(false)
									Search_Rslt.setVisibility(false)
									}
}