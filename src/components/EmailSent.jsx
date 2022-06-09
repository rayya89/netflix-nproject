export default function EmailSent({ email }) {
  return (
    <div>
      <h1>Email Sent</h1>
      <p>
        An email with instructions on how to reset your password has been sent
        to {email}.
      </p>
      <p>
        Check your spam or junk folder if you don’t see the email in your inbox.
      </p>
    </div>
  );
}
