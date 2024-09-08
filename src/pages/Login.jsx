import LoginForm from "../feature/form/LoginForm";

function Login() {
  return (
    <div className="flex flex-col align-center justify-center h-[90vh] py-10 ">
      <h1 className="text-center text-3xl my-4 font-bold">User Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
