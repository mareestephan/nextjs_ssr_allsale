import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer
                className="pt-0 pt-sm-5 pb-0"
                style={{
                    backgroundColor: '#494949 !important',
                    color: 'white !important'
                }}
                id="footer"
            >
                <div className="container footer mb-4">
                    <div className="row ml-4 ml-sm-0">
                        <div className=" d-flex d-sm-none mb-0 mb-sm-5 logo">
                            <a href="/">
                                <img
                                    src="/static/images/new-logo.svg"
                                    width="100%"
                                    aria-label="website logo"
                                />
                            </a>
                        </div>
                        <div className="col-12 col-md-3 guide">
                            <span className="heading">GET STUFF</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.allsale.co.za/c/fashion/f">Fashion</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/c/baby-kids/a">Baby & Kids</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/c/health-beauty/h">Health & Beauty</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/c/household/m">Household</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/c/homeware/l">Homeware</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 guide">
                            <span className="heading">GET HELP</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.allsale.co.za/contactus">Contact Us</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/faq">FAQs</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/deliveryandreturns">Delivery & Returns</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/joiningpage">Membership 101</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 guide">
                            <span className="heading">GET THERE FAST</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.allsale.co.za/login?returnUrl=%2faccount%2flists">Your Wishlist</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/login?returnUrl=%2faccount%2forders">Order History</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/return">Log a Free Return</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/login?returnUrl=%2faccount%2fdetails">Manage Your Details</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 guide">
                            <span className="heading">GET TO KNOW US</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.allsale.co.za/aboutus">About AllSale</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/whoweare">Meet the Team</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/termsandconditions">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="https://www.allsale.co.za/privacypolicy">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 offset-md-4">
                            <a href="https://sacoronavirus.co.za" target="_blank">
                                <img
                                    style={{
                                        maxWidth: "100%"
                                    }}
                                    src="/static/images/Covid19Logo.png"
                                    alt="SA Corona Virus Website"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid"
                    style={{
                        backgroundColor: "#383938"
                    }}
                >
                    <div className="container border-0">
                        <div className="row">
                            <div className="d-none d-sm-block col-12 col-sm-3 pt-sm-4 pr-sm-5 pb-sm-4 pl-0 pl-sm-5 guide footer-logo">
                                <a href="https://www.allsale.co.za/">
                                    <img
                                        src="/static/images/new-logo.svg"
                                        width="100%"
                                        aria-label="website logo"
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-md-9 guide d-flex justify-content-between footer-accreditation my-sm-0 my-4">
                                <div className="row mx-auto mx-sm-0 w-100">
                                    <div className="col-4 col-sm d-flex justify-content-center">
                                        <img
                                            className="mx-auto"
                                            src="/static/images/visa.png"
                                            aria-label="visa picture"
                                        />
                                    </div>
                                    <div className="col-4 col-sm d-flex justify-content-center">
                                        <img
                                            className="mx-auto"
                                            src="/static/images/mc.png"
                                            aria-label="mastercard image"
                                        />
                                    </div>
                                    <div className="col-4 col-sm d-flex justify-content-center">
                                        <img
                                            className="mx-auto"
                                            src="/static/images/ae.png"
                                            aria-label="american express image"
                                        />
                                    </div>
                                    <div className="col-4 col-sm d-flex justify-content-center">
                                        <img
                                            className="mx-auto"
                                            src="/static/images/diners.png"
                                            aria-label="diners pic"
                                        />
                                    </div>
                                    <div className="col-4 col-sm d-flex justify-content-center align-items-center"></div>
                                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center font-weight-normal text-white">
                                        Allsale Club (Pty) Ltd. Reg. No 2018/619595/07.
                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
