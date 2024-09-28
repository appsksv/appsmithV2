export default {
    async up_file(id, wid, table, type) {
        try {
            // Check if a file is selected
            if (wid.files.length === 0) {
                throw new Error("No file selected. Please select a file to upload.");
            }

            // Clean the file name
						let extn = wid.files[0].name.split('.').pop();
					console.log(wid)
            let fn = `${type}.${extn}`
						console.log(fn)
            let path = `${table}/${id}/${fn}`;

            // Store the path and file
            storeValue('path', path);
            storeValue('file', wid.files[0]);
						
            // Upload the attachment
            await up_attachment.run();

            // Ensure signed URL is available
            if (!up_attachment.data.signedUrl) {
                throw new Error("Failed to retrieve the signed URL.");
            }

            // Extract and store the URL and other details
            let url_e = up_attachment.data.signedUrl.split('?')[0];
						storeValue('s3_url', url_e);
            storeValue('s3_bucket', url_e.split("/")[3]);
            storeValue('s3_path', url_e.split(`${appsmith.store.s3_bucket}/`)[1]);
            
					// Retrieve attachment type ID
					
            await attach_lov.run({value:type});
            if (attach_lov.data.data.common_lov_t.length === 0) {
                throw new Error("Invalid attachment type. Please ensure the type exists.");
            }
            let typ_id = attach_lov.data.data.common_lov_t[0].lov_id;

            // Validate before inserting into the database
            if (!id || !table || !typ_id || !appsmith.store.s3_bucket || !appsmith.store.s3_path || !appsmith.store.s3_url) {
                throw new Error("Missing required data for attachment insertion.");
            }
            // Insert the attachment details into the database
            await AttachmentIns.run({object:{"ref_id": id,
																		"ref_table": table,
																		"attach_bkt": appsmith.store.s3_bucket,
																		"attach_path": appsmith.store.s3_path,
																		"attach_url": appsmith.store.s3_url,
																		"attachment_type_id": typ_id,
																		"added_by":1}});

            // Clear stored values after successful insertion
            storeValue('s3_url', '');
            storeValue('s3_bucket', '');
            storeValue('s3_path', '');
            storeValue('path', '');
            storeValue('file', '');

        } catch (error) {
			// Handle any errors during the process
			showAlert('Error during file upload or attachment insertion: ' + error.message, 'error');
    }
}
}