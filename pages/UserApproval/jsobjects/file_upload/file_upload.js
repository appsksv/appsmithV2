export default {
  async up_file(wid,typ) {
    try {
      // Check if a file is selected
      if (wid.files.length === 0) {
        throw new Error("No file selected. Please select a file to upload.");
      }

      // Determine which path to store based on the value of `wid`
      if (typ === 'photo') {
        storeValue('path', appsmith.store.photopath);
      } else if (typ === 'resume') {
        storeValue('path', appsmith.store.resumepath);
      } else {
        throw new Error("Invalid widget identifier. Please provide 'photo' or 'resume'.");
      }

      // Store the file
      storeValue('file', wid.files[0]);

      // Upload the attachment
      await up_attachment.run();

      // Ensure signed URL is available
      if (!up_attachment.data.signedUrl) {
        throw new Error("Failed to retrieve the signed URL.");
      }

      // Clear stored values after successful operation
      storeValue('path', '');
      storeValue('file', '');

    } catch (error) {
      // Handle any errors during the process
      showAlert('Error during file upload or attachment insertion: ' + error.message, 'error');
    }
  }
};
