export default {
	myVar1: [],
	myVar2: {},
	async myFun1 () {const sourceBucket = 'emp_docs_temp';
const targetBucket = 'emp_docs';
const sourcePath = 'emp_int_t/1/';
const targetPath = 'emp_t/12/';

const files = ['Resume.pdf', 'Photo.jpg'];

files.forEach(file => {
  // Copy the file from the source path to the target path
  copyFile(sourceBucket, targetBucket, `${sourcePath}${file}`, `${targetPath}${file}`);
});

function copyFile(sourceBucket, targetBucket, sourcePath, targetPath) {
  return appsmith.sendRequest({
    url: 'https://your-minio-url',  // Minio endpoint
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${your_auth_token}`, // Replace with your Minio token
    },
    body: {
      "SourceBucket": sourceBucket,
      "SourceObject": sourcePath,
      "TargetBucket": targetBucket,
      "TargetObject": targetPath
    }
  }).then(() => {
    // After copying, you may want to delete the original file to simulate "moving" the file
    deleteFile(sourceBucket, sourcePath);
  }).catch((err) => {
    console.error('Error copying file:', err);
  });
}

function deleteFile(bucket, path) {
  return appsmith.sendRequest({
    url: `https://your-minio-url/${bucket}/${path}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${your_auth_token}`,  // Replace with your Minio token
    }
  }).then(() => {
    console.log(`Deleted file: ${path}`);
  }).catch((err) => {
    console.error('Error deleting file:', err);
  });
}
},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}