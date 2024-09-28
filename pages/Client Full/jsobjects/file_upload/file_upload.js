export default {
	async up_pdf1(id, in_file, table, typ_id) {
		try {
			// Check if a file is selected
			if (!Address_Doc || !Address_Doc.files || Address_Doc.files.length === 0) {
				throw new Error("No file selected. Please select a file to upload.");
			}

			// Clean the file name
			let fn = Address_Doc.files[0].name.replace(/\s+/g, '');
			let path = `${table}/${id}/${fn}`;

			// Store the path and file
			storeValue('path', path);
			storeValue('file', Address_Doc.files[0]);

			// Upload the attachment
			await up_attachment.run();

			// Extract and store the URL and other details
			let url_e = up_attachment.data.signedUrl.split('?')[0];
			storeValue('s3_url', url_e);
			storeValue('s3_bucket', url_e.split("/")[3]);
			storeValue('s3_path', url_e.split(`${appsmith.store.s3_bucket}/`)[1]);

			// Insert the attachment details into the database
			console.log(id)
			console.log(table)
			console.log(appsmith.store.s3_bucket)
			console.log(appsmith.store.s3_path)
			console.log(appsmith.store.s3_url)
			console.log(typ_id)
			
			if (!id || !table || !typ_id || !appsmith.store.s3_bucket || !appsmith.store.s3_path || !appsmith.store.s3_url) {
				throw new Error("x")}
			
			await AttachmentIns.run({
				"ref_id": id,
				"ref_table": table,
				"attach_bkt": appsmith.store.s3_bucket,
				"attach_path": appsmith.store.s3_path,
				"attach_url": appsmith.store.s3_url,
				"attachment_type_id": typ_id
			});

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
