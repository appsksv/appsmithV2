export default {
	myVar1: [],
	myVar2: {},
	open_module (butt) {
		if(butt==='N'){
												showModal('Registration_Details_Ins')
												view_doc.setVisibility(false)
												reg_type_ins.setDisabled(false)
												reg_number_ins.setDisabled(false)
												reg_date_ins.setDisabled(false)
												reg_start_date_ins.setDisabled(false)
												reg_end_date_ins.setDisabled(false)
												reg_activeFlag_ins.setDisabled(false)
												reg_type_ins.setSelectedOption('')
												reg_number_ins.setValue('')
												reg_date_ins.setValue('')
												reg_start_date_ins.setValue('')
												reg_end_date_ins.setValue('')
												reg_activeFlag_ins.setValue(true)
												resetWidget('reg_proof')
												reg_id.setValue(0)												
												Button17.setDisabled(false)
												Button18.setDisabled(false)
												reg_proof.setDisabled(false)
												view_doc.setDisabled(true)
												
	}
		else if(butt==='V'){
												showModal('Registration_Details_Ins')
												view_doc.setVisibility(true)
												reg_type_ins.setSelectedOption(reg_typ.selectedRow.reg_type_lov_id)
												reg_number_ins.setValue(reg_typ.selectedRow.reg_no)
												reg_date_ins.setValue(reg_typ.selectedRow.reg_date)
												reg_start_date_ins.setValue(reg_typ.selectedRow.start_date)
												reg_end_date_ins.setValue(reg_typ.selectedRow.end_date)
												reg_activeFlag_ins.setValue(reg_typ.selectedRow.active_flag)
												reg_id.setValue(reg_typ.selectedRow.reg_typ_id)
												reg_type_ins.setDisabled(true)
												reg_number_ins.setDisabled(true)
												reg_date_ins.setDisabled(true)
												reg_start_date_ins.setDisabled(true)
												reg_end_date_ins.setDisabled(true)
												reg_activeFlag_ins.setDisabled(true)
												reg_id.setDisabled(true)
												Button17.setDisabled(true)
												Button18.setDisabled(true)
												reg_proof.setDisabled(true)
												view_doc.setDisabled(false)
         						}
		else if(butt==='E'){
												showModal('Registration_Details_Ins')
												view_doc.setVisibility(true)
												reg_type_ins.setDisabled(false)
												reg_number_ins.setDisabled(false)
												reg_date_ins.setDisabled(false)
												reg_start_date_ins.setDisabled(false)
												reg_end_date_ins.setDisabled(false)
												reg_activeFlag_ins.setDisabled(false)
												Button17.setDisabled(false)
												Button18.setDisabled(false)
												reg_proof.setDisabled(false)
												view_doc.setDisabled(false)
												reg_type_ins.setSelectedOption(reg_typ.selectedRow.reg_type_lov_id)
												reg_number_ins.setValue(reg_typ.selectedRow.reg_no)
												reg_date_ins.setValue(reg_typ.selectedRow.reg_date)
												reg_start_date_ins.setValue(reg_typ.selectedRow.start_date)
												reg_end_date_ins.setValue(reg_typ.selectedRow.end_date)
												reg_activeFlag_ins.setValue(reg_typ.selectedRow.active_flag)
												reg_id.setValue(reg_typ.selectedRow.reg_typ_id)
         }
			},
	async push_to_db () {

		if(reg_id.text===0)		{
														await RegDetIns.run()
														await file_upload.up_pdf1(reg_proof,'reg')
														await AttachmentIns.run({
																											object: { 
																																ref_id						: RegDetIns.data.data.insert_ksv_reg_typ_t.returning[0].reg_typ_id, 
																																ref_table					: "reg_typ_t", 
																																attach_bkt				: appsmith.store.s3_bucket_reg, 
																																attach_path				: appsmith.store.s3_path_reg, 
																																attach_url				: appsmith.store.url_, 
																																attachment_type_id: 65
																																}
																										})
    												}
		
		else if(reg_id.text>0){
														await RegDetUpt.run()
														if(reg_proof.files.length>0){
																														  await file_upload.up_pdf1(reg_proof,'reg')
																															await AttachmentUpt.run({id		:reg_id.text,
																																											object: { 
																																																attach_bkt				: appsmith.store.s3_bucket_reg, 
																																																attach_path				: appsmith.store.s3_path_reg, 
																																																attach_url				: appsmith.store.s3_url_reg
																																																	}
																																												})
                            																	}
         										}
		
		
	}
}