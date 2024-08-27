import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });
  
//   console.log("Cloudinary configuration:", {
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET
//   });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error("No file path provided");
        }
        

        // Upload the file to Cloudinary
        // console.log("File path:", localFilePath);
        // if (!fs.existsSync(localFilePath)) {
        //     console.error("File does not exist at path:", localFilePath);
        //     return null;
        // }
        // fs.access(localFilePath, fs.constants.R_OK, (err) => {
        //     if (err) {
        //         console.error("File is not readable or does not exist:", localFilePath);
        //     } else {
        //         console.log("File is readable.");
        //     }
        // });
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // Log the URL of the uploaded file
      
        console.log("File uploaded to Cloudinary:", response.url);

        // Remove the local file
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error.message);

        // Remove the local file if there's an error
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        throw new Error("Failed to upload file to Cloudinary");
    }
};

export { uploadOnCloudinary };
