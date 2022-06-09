// Project files
import InputField from "../components/InputField";
import form from "../data/recoverPasswordForm.json";
import { recoverUser } from "../scripts/firebaseAuth";
import { onFail } from "../scripts/onFail";

export default function RecoverForm({ emailState, setSent }) {
  const [email, setEmail] = emailState;

  //Methods
  async function onRecover(event) {
    event.preventDefault();

    const result = await recoverUser(email).catch(onFail);

    if (result) onSuccess(email);
  }

  function onSuccess(email) {
    setSent(true);
  }
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>
        We will send you an email with instructions on how to reset your
        password.
      </p>
      <form className="form" onSubmit={onRecover}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <button className="button">Email Me</button>
      </form>
    </div>
  );
}
