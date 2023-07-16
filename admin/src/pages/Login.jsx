import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authStore } from "../store/authStore";
import { generalStore } from "../store/generalStore";

export default function Login() {
  let navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [unameError, setUnameError] = useState("");
  const { authText, loginFetch, loginStatus } = authStore();
  const { options, getOptions } = generalStore();

  useEffect(() => {
    getOptions();
  }, []);

  useEffect(() => {
    if (loginStatus === 200) {
      setTimeout(() => {
         navigate("/")
      }, 1500);
    }
  }, [loginStatus, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    loginFetch(uname, password);
  }

  return (
    <div className="login">
      <div className="d-flex flex-column my-4 justify-content-center align-items-center">
        <img
          src={
            options && `http://api.temaofset.online/api/Files/${options.logo}`
          }
          alt="logo"
          width="250px"
          className="my-5"
        />
        <p className="fs-2 text-secondary fw-bold">Yönetici Girişi</p>
      </div>
      <div className="container login-page align-items-center d-flex flex-column mb-5">
        <div className="login-form d-flex flex-column p-5 shadow m-5 m-lg-0 rounded-3">
          <form>
            <label className="mb-4 fw-bold fs-5">Giriş Yap</label>
            <div className="input-container d-flex flex-column mb-3">
              <label className="mb-2">
                Kullanıcı Adı <span className="text-primary">*</span>
              </label>
              <input
                placeholder="Kullanıcı Adı"
                type="text"
                name="uname"
                onChange={(e) => setUname(e.target.value)}
                required
                className="border rounded-3"
              />
              <p className="text-primary">{unameError}</p>
            </div>
            <div className="input-container d-flex flex-column">
              <label className="mb-2">
                Şifre <span className="text-primary">*</span>
              </label>
              <input
                placeholder="********"
                type="password"
                name="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border rounded-3"
              />
              <p className="text-primary">{passwordError}</p>
            </div>
            <p className="text-black text-center mb-4 mt-2">{authText}</p>
            <div className="button-container d-flex flex-column mb-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn bg-primary text-white py-2 rounded-3"
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
