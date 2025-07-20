export function decodeBasicAuth(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return null; // Not a Basic Auth header or invalid format
  }

  const base64Credentials = authHeader.substring(6); // Remove "Basic "
  const decodedCredentials = Buffer.from(base64Credentials, "base64").toString(
    "utf8"
  );

  const [username, password] = decodedCredentials.split(":");

  return { username, password };
}
