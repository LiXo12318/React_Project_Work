const RegisterForm = ({ email, setEmail, password, setPassword, handleRegister }) => {
    return (
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Register</button>
      </form>
    );
  };
  
  export default RegisterForm;
  