import fetch from "node-fetch";
import fs from "fs";

async function fetchUsers() {
  console.log("Starting fetchUsers...");
  try {
    const response = await fetch("https://challenge.sunvoy.com/api/users", {
      method: "POST",
      headers: {
        Cookie:
          "JSESSIONID=9dbcbcca-f3f8-48c8-bdbb-151247401034; _csrf_token=61ef20052badae56f504ad0273fafb3cc4479b9e4e61cb1a401608e892ff6264; user_preferences=eyJ0aGVtZSI6ImxpZ2h0IiwibGFuZ3VhZ2UiOiJlbiIsInRpbWV6b25lIjoiVVRDIiwibm90aWZpY2F0aW9ucyI6dHJ1ZX0%3D; analytics_id=analytics_41f9bbfca79a10cc7ca2591aff56f612; session_fingerprint=a22283cc0a390d65333318bf372709debdac355dc1c49175fc407a545642b722; feature_flags=eyJuZXdEYXNoYm9hcmQiOnRydWUsImJldGFGZWF0dXJlcyI6ZmFsc2UsImFkdmFuY2VkU2V0dGluZ3MiOnRydWUsImV4cGVyaW1lbnRhbFVJIjpmYWxzZX0%3D; tracking_consent=accepted; device_id=device_8e309cdc104f38c223daf4b0",
      },
    });

    if (!response.ok) throw new Error(`API failed: ${response.status}`);

    const users = await response.json();
    fs.writeFileSync("./output/users.json", JSON.stringify(users, null, 2));
    console.log("Saved users to users.json!");
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
