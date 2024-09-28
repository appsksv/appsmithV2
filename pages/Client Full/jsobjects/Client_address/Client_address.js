export default {
	async stateName_ins(pin) {
		await Pincode_Details.run({"pin":pin})
		storeValue("client_pincodeDetails_ins", Pincode_Details.data.data.common_postal_pin_det_t)
		let	data = appsmith.store.client_pincodeDetails_ins
  const stateNames = data.map(obj => obj.state);
  const distinctStateNames = [...new Set(stateNames)]
	storeValue("client_state_lov_ins", distinctStateNames)
		return appsmith.store.client_state_lov_ins
	},
		
	districtName_ins(state_name = client_state_ins.selectedOptionValue, jsonData = appsmith.store.client_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.state.toLowerCase() === state_name.toLowerCase());
  const DistrictName = filteredData.map(obj=>obj.district)
	const DistinctDistrictName = [...new Set(DistrictName)]
	storeValue("client_district_lov_ins", DistinctDistrictName);
  return appsmith.store.client_district_lov_ins
	},
	
	TalukName_ins(district_name = client_district_ins.selectedOptionValue, jsonData = appsmith.store.client_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.district.toLowerCase() === district_name.toLowerCase());
  const TalukName = filteredData.map(obj=>obj.taluk)
	const DistinctTalukName = [...new Set(TalukName)]
	storeValue("client_Taluk_lov_ins", DistinctTalukName);
  return appsmith.store.client_Taluk_lov_ins
	},
	PostName_ins(taluk_name = client_taluk_ins.selectedOptionValue, jsonData = appsmith.store.client_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.taluk.toLowerCase() === taluk_name.toLowerCase());
  const PostName = filteredData.map(obj=>obj.post)
	const DistinctPostName = [...new Set(PostName)]
	storeValue("client_Post_lov_ins", DistinctPostName);
  return appsmith.store.client_Post_lov_ins
	},
	villageName_ins(post_name = client_post_ins.selectedOptionValue, jsonData = appsmith.store.client_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.post.toLowerCase() === post_name.toLowerCase());
  const villageName = filteredData.map(obj=>obj.village_locality)
	const DistinctvillageName = [...new Set(villageName)]
	storeValue("client_village_lov_ins", DistinctvillageName);
  return appsmith.store.client_village_lov_ins
	},
	async address_dtls () {
	storeValue("client_address_json",[])
	storeValue("client_address_output_json",[])
	return appsmith.store.client_address_json
	},
	address_details_ins(){
		let AddressTypeValue   = client_addressType_ins.selectedOptionLabel
		let AddressTypeId        = client_addressType_ins.selectedOptionValue
		let Pincode          = client_pincode_ins.text
		let State       = client_state_ins.selectedOptionLabel
		let District          = client_district_ins.selectedOptionLabel
		let TalukCity           = client_taluk_ins.selectedOptionLabel
		let Post       = client_post_ins.selectedOptionLabel
		let AreaLocality   = client_locality_ins.selectedOptionLabel
		let Street   = client_street_ins.text
		let DoorNo     = client_doorNo_ins.text
		let AddressLine1 = client_addressLine1_ins.text
		let AddressLine2     = client_addressLine2_ins.text
		let GpsCoordinates     = client_gpsCoardinates_ins.text
		let ActiveFlag = client_active_ins.isSwitchedOn
		let AddressId = client_addressId_ins.text
		let ins_json = [{"AddressTypeValue" : AddressTypeValue,
										 "AddressTypeId"		: parseInt(AddressTypeId),
										 "Pincode"				  : parseInt(Pincode),
									   "State"					  : State,
									   "District"				  : District,
									   "TalukCity"			  : TalukCity,
									   "Post"						  : Post,
										 "AreaLocality"	    : AreaLocality,
										 "Street"           : Street,
										 "DoorNo"				    : DoorNo,
										 "AddressLine1"	    : AddressLine1,
										 "AddressLine2"	    : AddressLine2,
										 "GpsCoordinates"   : GpsCoordinates,
										 "ActiveFlag"		    : ActiveFlag,
										 "AddressId"        : parseInt(AddressId)
										}]
		console.log(appsmith.store.client_address_json)
		storeValue("client_address_json",(appsmith.store.client_address_json.concat(ins_json)))
		storeValue("client_address_output_json", appsmith.store.client_address_output_json.concat(ins_json))
		return appsmith.store.client_address_output_json
	},
	
	async clientAddress_resetWidget(){
		resetWidget("client_addressType_ins", true)
		resetWidget("client_pincode_ins", true)
		resetWidget("client_state_ins", true)
		resetWidget("client_district_ins", true)
		resetWidget("client_taluk_ins", true)
		resetWidget("client_post_ins", true)
		resetWidget("client_locality_ins", true)
		resetWidget("client_street_ins", true)
		resetWidget("client_doorNo_ins", true)
		resetWidget("client_addressLine1_ins", true)
		resetWidget("client_addressLine2_ins", true)
		resetWidget("client_gpsCoardinates_ins", true)
		resetWidget("client_activeFlag_ins", true)
	}
}