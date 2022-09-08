interface EmailData {
  to: string;
  message: string;
  name: string;
}

export const sendEmail = async (email: EmailData) => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email),
  };
  return await fetch("/api/email", request);
};
