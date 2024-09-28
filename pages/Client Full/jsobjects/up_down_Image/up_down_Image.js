export default {
	async partner__img_getUrlData () {
		await uploadPartnerImage.run();
		let urlWithEncription = uploadPartnerImage.data.signedUrl

		let unchangedUrl = String(urlWithEncription.split('?')[0])
		storeValue("partner_img_url", unchangedUrl)
		storeValue("partner_img_bucket_name", unchangedUrl.split("/")[3])
		storeValue("partner_img_path", unchangedUrl.split((appsmith.store.partner_img_bucket_name).concat('/'))[1])
		console.log(appsmith.store.partner_img_path)
		
		await readPartnerImage.run()
		storeValue("partnerimageUrl", readPartnerImage.data.fileData)
		return appsmith.store.partnerimageUrl
	},
	async reg_doc(){
		await up_attachment.run()
		let urlWithEncription = up_attachment.data.signedUrl

		let unchangedUrl = String(urlWithEncription.split('?')[0])
		storeValue("regDoc_url", unchangedUrl.replace("minio:9000", "ksvca-server-01:3502"))
		storeValue("regDoc_bucket_name", unchangedUrl.split("/")[3])
		storeValue("regDoc_path", unchangedUrl.split((appsmith.store.partner_img_bucket_name).concat('/'))[1])
		console.log(appsmith.store.regDoc_path)
		
		await read_reg_doc.run()
		storeValue("regDocumentUrl", read_reg_doc.data.fileData)
		return appsmith.store.regDocumentUrl
	}
}