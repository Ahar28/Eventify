import { postData } from "./utils";

export async function loginUser(userData: any) {
  try {
    const response = await postData(JSON.stringify(userData), "/auth/login");
    return response;
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
}

export async function registerUser(userData: any) {
  try {
    const response = await postData(JSON.stringify(userData), "/auth/register");
    return response;
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
}

export async function sendVerificationLink(emailData: any) {
  try {
    const response = await postData(
      JSON.stringify(emailData),
      "/auth/send-verification"
    );
    return response;
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
}

export async function resetPassword(userData: any) {
  try {
    const response = await postData(
      JSON.stringify(userData),
      "/auth/reset-password"
    );
    return response;
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
}
