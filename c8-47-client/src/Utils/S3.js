import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';

const {
  REACT_APP_AWS_ACCESS_KEY_ID,
  REACT_APP_AWS_SECRET_ACCESS_KEY,
  REACT_APP_AWS_BUCKET_NAME,
  REACT_APP_AWS_REGION,
} = process.env;

AWS.config.update({
  accessKeyId: REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: REACT_APP_AWS_BUCKET_NAME },
  region: REACT_APP_AWS_REGION,
});

export const uploadFile = async (file) => {
  const params = {
    Body: file,
    Bucket: REACT_APP_AWS_BUCKET_NAME,
    Key: `uploads/${uuidv4()}-${file.name}`,
  };

  return await myBucket.upload(params).promise();
};
