// Standard Netlify Function Syntax (Robust)
export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Parse the email from the request body
    const { email } = JSON.parse(event.body);

    if (!email) {
      return { statusCode: 400, body: "Email is required" };
    }

    // Send data to Substack
    const substackUrl = "[https://truesun.substack.com/api/v1/free](https://truesun.substack.com/api/v1/free)";
    const body = {
      email: email,
      first_url: "[https://truesun.com](https://truesun.com)",
      first_referrer: "[https://truesun.com](https://truesun.com)",
      current_url: "[https://truesun.com](https://truesun.com)",
    };

    const response = await fetch(substackUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0", // Helps prevent blocking
      },
      body: JSON.stringify(body),
    });

    // Even if Substack returns a 400 (e.g. already subscribed), we treat as success to the user
    if (!response.ok) {
        console.log("Substack Status:", response.status);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" })
    };

  } catch (error) {
    console.error("Function Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
