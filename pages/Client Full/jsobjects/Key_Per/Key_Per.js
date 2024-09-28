export default {
	async new () {
		await KeyPerIns.run()
		console.log('KeyPerId'+KeyPerIns.data.data.insert_ksv_key_person_t.returning[0].key_per_id)
		await Key_Per_Address_Ins.run()
		console.log('addressId'+Key_Per_Address_Ins.data.data.insert_ksv_location_t.returning[0].address_id)
	},
	async populate_record (butt) {
		partner_aadhar_number_ins.setValue(key_person.selectedRow.aadhar)
		partner_bank_auth_ins.setValue(key_person.selectedRow.bank_authorization)
		partner_capitalContribution_in.setValue(key_person.selectedRow.capital_contribution)
		partner_designation_ins.selectedOptionValue (key_person.selectedRow.desiganation)
    partner_

	}
}

