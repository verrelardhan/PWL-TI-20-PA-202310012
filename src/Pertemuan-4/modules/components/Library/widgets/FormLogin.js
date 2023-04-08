import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import '../Login.css';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "arya@gmail.com" && password === "arya") {
      setIsLoggedIn(true);
      <Navigate to='/home' replace={true} />
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Email atau Password yang dimasukan salah!");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace={true} />;
    // return <div>Anda berhasil login</div>;
  }

  return (
    <div style={{marginTop: '10rem'}}class="container w-35 box1">
      <form onSubmit={handleLogin}>
        <div class="form-group my-3 kotak">
            <h3 class='judul' >FORM LOGIN MAHASISWA</h3>
          <label for="exampleInputEmail1">Email </label>
          <input
            class="form-control"
            type="email"
            placeholder="Input Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div class="form-group my-3 kotak">
          <label for="exampleInputPassword1">Kata Sandi</label>
          <input class="form-control"
            type="password"
            placeholder="Input Kata Sandi"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div class="row alert">
          {error && <div className="error">{error}</div>}
        </div>
        <div class="text-center tbl">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </div>

  );
}

export default App;