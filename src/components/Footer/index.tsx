import React from "react";
import './index.css';

function Footer() {

    return (
        <footer className="bg-dark" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 qrcode">
                        {/*App下载二维码图片*/}
                        <img src="https://uploadfiles.nowcoder.com/app/app_download.png" className="img-thumbnail"
                             style={{width: "136px"}} alt="App下载二维码"/>
                    </div>
                    <div className="col-8 detail-info">
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
                                        <a className="nav-link text-light" href="#">联系我们</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">免责声明</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">友情链接</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul className="nav btn-group-vertical company-info">
                                    <li className="nav-item text-white-50">
                                        公司地址：北京市朝阳区大屯路东金泉时代x-xxx 北京XXX科技有限公司
                                    </li>
                                    <li className="nav-item text-white-50">
                                        联系方式：010-12345678(电话)&nbsp;&nbsp;&nbsp;&nbsp;welcome@gmail.com
                                    </li>
                                    <li className="nav-item text-white-50">
                                        XXX科技©2018 All rights reserved
                                    </li>
                                    <li className="nav-item text-white-50">
                                        蜀 ICP备2020032347号 &nbsp;&nbsp;&nbsp;&nbsp;
                                        <img src="http://static.nowcoder.com/company/images/res/ghs.png"
                                             style={{width: "18px"}}/>
                                        京公网安备 12345678901234号
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;