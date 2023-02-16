import React from "react";
import './index.css';

function Login() {
    return (
        <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="/icon/nav.png" alt="Band" width={88} height={30}
                             className="d-inline-block align-top m-auto"/>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="username" id="username"
                                       placeholder="账号"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name="password" id="password"
                                       placeholder="密码"/>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" name="captcha" id="captcha"
                                           placeholder="验证码"/>
                                </div>
                                <div className="col-sm-5 d-flex">
                                    <img src="" id="kaptcha"
                                         style={{width: "100px", height: "35px", marginLeft: "auto"}}
                                         className=""/>
                                </div>
                            </div>
                        </form>

                        <div className="d-flex justify-content-between row">
                            <div className="col-4 align-items-center d-flex">
                                <input type="checkbox" id="remember-me" name="rememberme"/>
                                <label className="form-check-label text-muted"
                                       htmlFor="remember-me">&nbsp;记住我</label>
                            </div>
                            <div className="col-4 text-center">
                                <a href="" className="float-right">去注册</a>
                            </div>
                            <div className="col-4 text-end">
                                <a href="forget.html" className="text-muted">忘记密码?</a>
                            </div>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary m-auto w-100">登录</button>
                    </div>
                    <p style={{fontSize: 1}} className="text-muted text-center">
                        登录即同意<a href="">《用户协议》</a>和<a href="">《隐私协议》</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;