import React from "react";
import './index.css';

function Footer() {

    return (
        <footer className="bg-dark" id="footer">
            <div className="row">
                <div className="col-4 qrcode" id="qrcode">
                    {/*App下载二维码图片*/}
                    <img src="https://uploadfiles.nowcoder.com/app/app_download.png" className="img-thumbnail"
                         style={{width: "120px"}} alt="App下载二维码"/>
                </div>
                <div className="col-8 detail-info" style={{fontSize: "smaller"}}>
                    <div className="row">
                        <div className="col">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">关于本项目</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Github前端仓库</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Github后端仓库</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">GitHub小程序仓库</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">联系我们</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="nav btn-group-vertical company-info">
                                <li className="nav-item text-white-50">
                                    公司地址：北京市朝阳区大屯路 x-xxx 北京XXX科技有限公司
                                </li>
                                <li className="nav-item text-white-50">
                                    联系方式：010-12345678(电话)&nbsp;&nbsp;&nbsp;&nbsp;welcome@gmail.com
                                </li>
                                <li className="nav-item text-white-50">
                                    岸途 ©2023 All rights reserved <a href="https://beian.miit.gov.cn/"
                                                                      className="link-secondary">蜀
                                    ICP备2020032347号</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;