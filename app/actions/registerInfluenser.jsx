import { databases } from "@/Config/appwrite"; // Ensure correct path
import { ID } from "appwrite";

export const registerInfluencer = async (formData) => {
    try {
        // Ensure all fields are properly formatted
        // const influencerData = {
        //     name: formData.name || "",
        //     userId: formData.userId || "",
        //     instagramId: formData.instagramId || "",
        //     number: formData.number ? parseInt(formData.number, 10) : 0,
        //     followers: Number(formData.followers) || 0,
        //     password: formData.password || "", // Store plaintext (NOT RECOMMENDED)
        // };
        const influencerData = {
          name: formData.name || "",
          userId: formData.userId || "",
          instagramId: formData.instagramId || "",
          number: formData.number ? String(formData.number).slice(0, 15) : "", // Ensure string & within limit
          followers: formData.followers? String(formData.followers):"0",
          password: formData.password || "",
      };
      
        console.log("Data being sent:", influencerData);

        const newUser = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_INFLUENCER_ID,
            ID.unique(),
            influencerData
        );

        return { success: true, user: newUser };
    } catch (error) {
        console.error("Error:", error.message);
        return { success: false, error: error.message };
    }
};
