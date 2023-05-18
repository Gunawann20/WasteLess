const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'your-project-id',
  keyFilename: 'path/to/keyfile.json',
});

const bucketName = 'your-bucket-name';

// Mengupload foto profil ke Google Cloud Storage
const uploadPhoto = async (file) => {
  try {
    const bucket = storage.bucket(bucketName);

    const filename = `${Date.now()}_${file.originalname}`;
    const fileUpload = bucket.file(filename);

    await fileUpload.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    const photoURL = `https://storage.googleapis.com/${bucketName}/${filename}`;
    return photoURL;
  } catch (error) {
    throw new Error('Failed to upload photo');
  }
};

module.exports = {
  uploadPhoto,
};
