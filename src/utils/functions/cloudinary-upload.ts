import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import { cloudinary } from "../cloudinary.config";

export const uploadToCloudinary = async (
  fileUri: string, publicId: string): Promise<UploadApiResponse | UploadApiErrorResponse> => {
  try {
    return await cloudinary.uploader.upload(fileUri, {
        public_id: publicId,
        resource_type: 'auto'
    });
  } catch (error) {
    return error;
  }
};

