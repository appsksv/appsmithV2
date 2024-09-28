export default {
	async stateName_ins() {
		await Pincode_Details.run()
		storeValue("partner_pincodeDetails_ins", Pincode_Details.data.data.ksv_postal_pin_det_t)
		let	data = appsmith.store.partner_pincodeDetails_ins
  	const stateNames = data.map(obj => obj.state);
  	const distinctStateNames = [...new Set(stateNames)]
		storeValue("partner_state_lov_ins", distinctStateNames)
		return appsmith.store.partner_state_lov_ins
	},
		
	districtName_ins(state_name = p_state_ins.selectedOptionLabel, jsonData = appsmith.store.partner_pincodeDetails_ins) {
  	const filteredData = jsonData.filter(entry => entry.state.toLowerCase() === state_name.toLowerCase());
  	const DistrictName = filteredData.map(obj=>obj.district)
		const DistinctDistrictName = [...new Set(DistrictName)]
		storeValue("partner_district_lov_ins", DistinctDistrictName);
  	return appsmith.store.partner_district_lov_ins
	},
	
	TalukName_ins(district_name = p_district_ins.selectedOptionValue, jsonData = appsmith.store.partner_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.district.toLowerCase() === district_name.toLowerCase());
  const TalukName = filteredData.map(obj=>obj.taluk)
	const DistinctTalukName = [...new Set(TalukName)]
	storeValue("partner_Taluk_lov_ins", DistinctTalukName);
  return appsmith.store.partner_Taluk_lov_ins
	},
	PostName_ins(taluk_name = p_taluk_ins.selectedOptionValue, jsonData = appsmith.store.partner_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.taluk.toLowerCase() === taluk_name.toLowerCase());
  const PostName = filteredData.map(obj=>obj.post)
	const DistinctPostName = [...new Set(PostName)]
	storeValue("partner_Post_lov_ins", DistinctPostName);
  return appsmith.store.partner_Post_lov_ins
	},
	villageName_ins(post_name = p_post_ins.selectedOptionValue, jsonData = appsmith.store.partner_pincodeDetails_ins) {
  const filteredData = jsonData.filter(entry => entry.post.toLowerCase() === post_name.toLowerCase());
  const villageName = filteredData.map(obj=>obj.village_locality)
	const DistinctvillageName = [...new Set(villageName)]
	storeValue("partner_village_lov_ins", DistinctvillageName);
  return appsmith.store.partner_village_lov_ins
	}
}