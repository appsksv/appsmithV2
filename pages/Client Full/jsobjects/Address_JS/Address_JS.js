export default {
	myVar1: [],
	myVar2: {},
open_module (butt) {
		if(butt==='N'){
												showModal(Client_Address_ins_modal.name)
												client_addressType_ins.setDisabled(false)
												client_pincode_ins.setDisabled(false)	
												client_state_ins.setDisabled(false)
												client_district_ins.setDisabled(false)
												client_taluk_ins.setDisabled(false)
												client_post_ins.setDisabled(false)
												client_locality_ins.setDisabled(false)
												client_street_ins.setDisabled(false)
												client_doorNo_ins.setDisabled(false)
												client_addressLine1_ins.setDisabled(false)
												client_addressLine2_ins.setDisabled(false)
												client_gpsCoardinates_ins.setDisabled(false)
												client_activeFlag_ins.setDisabled(false)
												client_addressType_ins.setSelectedOption('')
												client_pincode_ins.setValue('')
												client_state_ins.setSelectedOption('')
												client_district_ins.setSelectedOption('')
												client_taluk_ins.setSelectedOption('')
												client_post_ins.setSelectedOption('')
												client_locality_ins.setSelectedOption('')
												client_street_ins.setValue('')
												client_doorNo_ins.setValue('')
												client_addressLine1_ins.setValue('')
												client_addressLine2_ins.setValue('')
												client_gpsCoardinates_ins.setValue('')
												client_activeFlag_ins.setValue('')
												client_addressId_ins.setText(0)
												Button32.setDisabled(false)
			                  Button33.setDisabled(false)
		}
else if (butt==='V')
	{
		     								showModal(Client_Address_ins_modal.name)
												client_addressType_ins.setSelectedOption(address_tbl.selectedRow.address_type_id)
		                    client_pincode_ins.setValue(address_tbl.selectedRow.pincode)
												client_state_ins.setSelectedOption(address_tbl.selectedRow.state)
												client_district_ins.setSelectedOption(address_tbl.selectedRow.district)
												client_taluk_ins.setSelectedOption(address_tbl.selectedRow.taluk_city)
												client_post_ins.setSelectedOption(address_tbl.selectedRow.post)
												client_locality_ins.setSelectedOption(address_tbl.selectedRow.area_locality)
												client_street_ins.setValue(address_tbl.selectedRow.street)
												client_doorNo_ins.setValue(address_tbl.selectedRow.door_no)
												client_addressLine1_ins.setValue(address_tbl.selectedRow.address_line_1)
												client_addressLine2_ins.setValue(address_tbl.selectedRow.address_line_2)
												client_gpsCoardinates_ins.setValue(address_tbl.selectedRow.gps_coordinates)
												client_activeFlag_ins.setValue(address_tbl.selectedRow.active_flag)
												client_addressId_ins.setText(address_tbl.selectedRow.address_id)
												client_addressType_ins.setDisabled(true)
												client_pincode_ins.setDisabled(true)
												client_state_ins.setDisabled(true)
												client_district_ins.setDisabled(true)
												client_taluk_ins.setDisabled(true)	
												client_post_ins.setDisabled(true)
		                    client_locality_ins.setDisabled(true)
												client_street_ins.setDisabled(true)
												client_doorNo_ins.setDisabled(true)	
												client_addressLine1_ins.setDisabled(true)
												client_addressLine2_ins.setDisabled(true)		
												client_gpsCoardinates_ins.setDisabled(true)
												client_activeFlag_ins.setDisabled(true)
												client_addressId_ins.setDisabled(true)
												Button32.setDisabled(true)
												Button33.setDisabled(true)
                    	}
                else if  (butt==='E'){
                      	showModal(Client_Address_ins_modal.name)
												client_addressType_ins.setDisabled(false)
												client_pincode_ins.setDisabled(false)	
												client_state_ins.setDisabled(false)
												client_district_ins.setDisabled(false)
												client_taluk_ins.setDisabled(false)
												client_post_ins.setDisabled(false)
												client_locality_ins.setDisabled(false)
												client_street_ins.setDisabled(false)
												client_doorNo_ins.setDisabled(false)
												client_addressLine1_ins.setDisabled(false)
												client_addressLine2_ins.setDisabled(false)
												client_gpsCoardinates_ins.setDisabled(false)
												client_activeFlag_ins.setDisabled(false)
												Button32.setDisabled(true)
												Button33.setDisabled(true)
	                      client_addressType_ins.setSelectedOption(address_tbl.selectedRow.address_type_id)
		                    client_pincode_ins.setValue(address_tbl.selectedRow.pincode)
												client_state_ins.setSelectedOption(address_tbl.selectedRow.state)
												client_district_ins.setSelectedOption(address_tbl.selectedRow.district)
												client_taluk_ins.setSelectedOption(address_tbl.selectedRow.taluk_city)
												client_post_ins.setSelectedOption(address_tbl.selectedRow.post)
												client_locality_ins.setSelectedOption(address_tbl.selectedRow.area_locality)
												client_street_ins.setValue(address_tbl.selectedRow.street)
												client_doorNo_ins.setValue(address_tbl.selectedRow.door_no)
												client_addressLine1_ins.setValue(address_tbl.selectedRow.address_line_1)
												client_addressLine2_ins.setValue(address_tbl.selectedRow.address_line_2)
												client_gpsCoardinates_ins.setValue(address_tbl.selectedRow.gps_coordinates)
												client_activeFlag_ins.setValue(address_tbl.selectedRow.active_flag)
												client_addressId_ins.setText(address_tbl.selectedRow.address_Id)
                     }
}
}