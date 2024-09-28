export default {
    // Function to reset form values
    resetStoreValue() {
        // Reset the widgets to their default state
        resetWidget("FirstName", true);
        resetWidget("MiddleName", true);
        resetWidget("LastName", true);
        resetWidget("DateofBirth", true);
        resetWidget("Pan", true);
        resetWidget("MaritalStatus", true);
        resetWidget("Gender", true);
        resetWidget("BloodType", true);
        resetWidget("photo", true);
        resetWidget("ct_no", true);
        resetWidget("eMail", true);
        resetWidget("resume", true);
				storeValue('attach_id','')
				storeValue('resumeURL','');
				storeValue('photopath','');
				storeValue('resumepath','');

    },

    // Function to insert employee data
    async emp_ins() {
        // Array to collect missing fields
        let missingFields = [];

        // Check each field and add the field name to missingFields array if it's empty
        if (!FirstName.text) missingFields.push("First Name");
        //if (!MiddleName.text) missingFields.push("Middle Name");
        if (!LastName.text) missingFields.push("Last Name");
        if (!DateofBirth.formattedDate) missingFields.push("Date of Birth");
        if (!Pan.text) missingFields.push("PAN");
        if (!MaritalStatus.selectedOptionValue) missingFields.push("Marital Status");
        if (!Gender.selectedOptionValue) missingFields.push("Gender");
        if (!BloodType.selectedOptionValue) missingFields.push("Blood Group");
        //if (!photo.files[0]?.data) missingFields.push("Photo");
        if (!ct_no.text) missingFields.push("Contact Number");
        if (!eMail.text) missingFields.push("Email");
        //if (!resume.files[0]?.data) missingFields.push("Resume");
				if (!emp_cat.selectedOptionValue) missingFields.push("Employee Category");
				if (!emp_role.selectedOptionValue) missingFields.push("Employee Role");
				if (!OfficeMail.text) missingFields.push("Office Email");
        if (!StartDate.formattedDate) missingFields.push("Start Date");
        

        // If there are missing fields, show an error message
        if (missingFields.length > 0) {
            showAlert(`Please fill in the following fields: ${missingFields.join(', ')}`, "error");
            return;  // Stop execution if there are missing fields
        }

        // Array to collect invalid fields
        let invalidFields = [];

        // Validate email, contact number, and PAN
        if (!eMail.isValid) invalidFields.push("Email (Invalid)");
        if (!ct_no.isValid) invalidFields.push("Contact Number (Invalid)");
        if (!Pan.isValid) invalidFields.push("PAN (Invalid)");
				if (!OfficeMail.isValid) invalidFields.push("Office Email (Invalid)");

        // If there are invalid fields, show an error message
        if (invalidFields.length > 0) {
            showAlert(`Please correct the following fields: ${invalidFields.join(', ')}`, "error");
            return;  // Stop execution if there are invalid fields
        }

        try {
            // All fields are valid, proceed with form submission
            await emp_ins.run();
            let emp_id = emp_ins.data.data.insert_hr_employee_t.returning[0].employee_id;
						await EmpRole.run({object:{	emp_id: emp_id, 
																					role_id: emp_role.selectedOptionValue, 
																					start_date: StartDate.formattedDate}})
					
						await user_ins.run({object: {user_name: OfficeMail.text, 
																					"start_date": StartDate.formattedDate, 
																					"employee_id": emp_id}})
					
					if(user_ins.data.data.insert_sysadmin_user_t.returning[0].user_id){

          
						//set password
					
							const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*?/';
							let password = '';
							for (let i = 0; i < 12; i++) {
								const randomIndex = Math.floor(Math.random() * characters.length);
								password += characters[randomIndex];
							}
							// Store the password
							storeValue('password', password);
					
							call_fn.run({object: {obj_name: "sysadmin.upt_pwd", 
																			request: {uname:OfficeMail.text,
																								pwd:appsmith.store.password}}})
						
							upt_attach.run({attach_input: {int_id:List1.selectedItem.int_id,emp_id:emp_id}})
					
							//send welcome Mail
					
								//Welcome_Mail.run({toMail:eMail.text})
					}
					
					
            // Upload files
          if(photo?.files[0].data){
														await file_upload.up_file(photo,'photo');
                    } 
					
           else if(resume?.files[0].data){
														await file_upload.up_file(resume,'resume');
                        }

            // Show success message after successful submission
            showAlert(`Employee id is: ${emp_id}`, "success");
            
            // Optionally reset form after submission
            //this.resetStoreValue();
        } catch (error) {
            // Handle any errors during the submission or file upload
            showAlert(`Error during submission: ${error.message}`, "error");
        }
    },
		async fetch_int(intid) {
			await fetch_emp_int.run({"intid":intid})
			Form1.setVisibility(true)
			let result = fetch_emp_int.data.data.hr_emp_appl_t[0]
			let emp_attach = result.fk_emp_int_docs_v
			// Extract the attach_url where value is "Photo"
			let photoURL = emp_attach.find(item => item.fk_12_emp_int_doc_typ_v.value === "Photo")?.attach_url;
			let photopath = emp_attach.find(item => item.fk_12_emp_int_doc_typ_v.value === "Photo")?.attach_path;
			// Extract the attach_url where value is "Resume"
			let resumeURL = emp_attach.find(item => item.fk_12_emp_int_doc_typ_v.value === "Resume")?.attach_url;
			let resumepath = emp_attach.find(item => item.fk_12_emp_int_doc_typ_v.value === "Resume")?.attach_path;
			let attach_id = emp_attach.map(a=>a.attachment_id)
			storeValue('attach_id',attach_id)
			storeValue('resumeURL',resumeURL);
			storeValue('photopath',photopath);
			storeValue('resumepath',resumepath);
			FirstName.setValue(result.first_name)
			MiddleName.setValue(result.middle_name)
			LastName.setValue(result.last_name)
			DateofBirth.setValue(result.date_of_birth)
			Gender.setSelectedOption(result.sex)
			MaritalStatus.setSelectedOption(result.marital_status)
			BloodType.setSelectedOption(result.blood_type)
			Pan.setValue(result.pan)
			ct_no.setValue(result.ct_number)
			eMail.setValue(result.ct_email)
			photo_dsp.setImage(photoURL)
		}
}
