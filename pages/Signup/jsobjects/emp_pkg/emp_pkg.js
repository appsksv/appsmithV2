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
    },

    // Function to insert employee data
    async emp_int_ins() {
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
        if (!photo.files[0]?.data) missingFields.push("Photo");
        if (!ct_no.text) missingFields.push("Contact Number");
        if (!eMail.text) missingFields.push("Email");
        if (!resume.files[0]?.data) missingFields.push("Resume");

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

        // If there are invalid fields, show an error message
        if (invalidFields.length > 0) {
            showAlert(`Please correct the following fields: ${invalidFields.join(', ')}`, "error");
            return;  // Stop execution if there are invalid fields
        }

        try {
            // All fields are valid, proceed with form submission
            await emp_ins.run();
            let int_id = emp_ins.data.data.insert_hr_emp_appl_t.returning[0].int_id;
            console.log('int_id:'+int_id)
            // Upload files
            await file_upload.up_file(int_id, photo, 'emp_int_t', 'Photo');
            await file_upload.up_file(int_id, resume, 'emp_int_t', 'Resume');
            
            // Show success message after successful submission
            showAlert(`Your Application is submitted with the id: ${int_id}`, "success");
            
            // Optionally reset form after submission
            this.resetStoreValue();
        } catch (error) {
            // Handle any errors during the submission or file upload
            showAlert(`Error during submission: ${error.message}`, "error");
        }
    }
}
