import React from 'react';

class Header extends React.Component {
    render() {

        const client_url = 'https://www.allsale.co.za';

        return (

            <header
                className="pt-2 pb-0 pb-sm-2"
                id="header"
                style={{
                    backgroundColor: "#494949 !important"
                }}
            >
                <a href="javascript:" id="scroll-to-top" aria-label="scroll to the top">
                    <i className="icon-return" />
                </a>
                <div className="container">
                    <div className="header-grid">
                        <div className="header-logo mt-4 mb-5 my-sm-0">
                            <a
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                                href="https://www.allsale.co.za/"
                            >
                                <img
                                    className="pr-sm-4 mb-sm-2 goHome"

                                    src="/static/images/new-logo.svg"
                                    style={{
                                        cursor: "pointer"
                                    }}
                                    aria-label="website logo"
                                />

                            </a>
                        </div>
                        {/* <div className="header-mobile-menu-toggle d-flex d-sm-none">
                                <a
                                    className=""
                                    href="#nav"
                                    data-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="nav"
                                >
                                    <img src="/static/images/bars.svg" aria-label="menu image" />
                                </a>
                            </div> */}
                        <div className="header-mobile-menu-toggle d-flex d-sm-none">
                            <a className="" href="#nav" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="nav">
                                <img src="/static/images/bars.svg" alt="bars" aria-label="menu image" />
                            </a>
                        </div>
                        <div className="header-local-tag mr-0 mr-sm-2"></div>
                        <div className="header-contact mr-0 mr-sm-2"></div>
                        <div className="header-about mr-0 mr-sm-2"></div>
                        <div className="header-join mr-0 mr-sm-2">
                            <a className="ml-5 joinClubLink" href="/signup">
                                JOIN THE CLUB
              </a>
                        </div>
                        <div
                            className="header-profile loggedInHeader"
                            style={{
                                display: "none"
                            }}
                        >
                            <a
                                className="mr-2 dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                            >
                                <span
                                    id="userName"
                                    style={{
                                        marginRight: "5px",
                                        color: "white !important"
                                    }}
                                />
                            </a>
                            <div className="dropdown-menu profile-dropdown">
                                <a
                                    className="dropdown-item mt-0"
                                    href="/account/lists?id=WishList"
                                >
                                    View Wishlists
                </a>
                                <a className="dropdown-item" href="/account/details">
                                    Update Personal Details
                </a>
                                <a className="dropdown-item" href="/account/orders">
                                    Order History
                </a>
                                <a className="dropdown-item" href="/return">
                                    Log a Free Return
                </a>
                                <a className="dropdown-item" href="/account/addresses">
                                    Change Address
                </a>
                                <a className="dropdown-item" href="/login">
                                    Logout
                </a>
                            </div>
                            <div className="mx-auto text-light-gray">|</div>
                        </div>
                        <div
                            className="header-wishlist loggedInHeader"
                            style={{
                                display: "none"
                            }}
                        >
                            <a className="mr-2" href="/account/lists?id=Wishlist">
                                <img
                                    src="/static/images/_icons/heart.svg"
                                    aria-label="heart icon for wishlist"
                                />
                            </a>
                            <span
                                id="favouriteListTotalLoggedIn"
                                style={{
                                    color: "white !important"
                                }}
                            />
                        </div>
                        <div
                            className="header-profile joinClubLink"
                            style={{
                                display: "none !important"
                            }}
                        >
                            <a
                                className="mr-2"
                                style={{
                                    color: "white !important"
                                }}
                                href="/login"
                            >
                                SIGN IN
              </a>
                        </div>
                        <div className="header-wishlist joinClubLink">
                            <a className="mr-2" href="/account/lists?id=Wishlist">
                                <img
                                    src="/static/images/_icons/heart.svg"
                                    aria-label="heart icon for wishlist"
                                />
                            </a>
                            <span
                                id="favouriteListTotalNotLoggedIn"
                                style={{
                                    color: "white !important"
                                }}
                            />
                        </div>
                        <div className="header-search-bar px-0 mb-4 mb-sm-0">
                            <div className="input-group guide search-select search-bar search-input">
                                <div className="input-group-prepend">
                                    <button
                                        className="btn btn-grey dropdown-toggle pr-5 pl-4 d-flex align-items-center"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        style={{
                                            textAlign: "center",
                                            minWidth: "181px"
                                        }}
                                        aria-label="All Departments"
                                    >
                                        <span
                                            className="d-none d-sm-inline searchSpan"
                                            style={{
                                                color: "black !important",
                                                margin: "0 auto"
                                            }}
                                            data-categorycode="all"
                                        >
                                            All Departments
                    </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a
                                            className="dropdown-item catSpan"
                                            href="#"
                                            data-categorycode="all"
                                        >
                                            All Departments
                    </a>
                                        <a
                                            className="dropdown-item catSpan"
                                            href="https://www.allsale.co.za/f/fashion"
                                            data-categorycode="F"
                                        >
                                            Fashion
                    </a>
                                        <a
                                            className="dropdown-item catSpan"
                                            href="#"
                                            data-categorycode="A"
                                        >
                                            Baby & Kids
                    </a>
                                        <a
                                            className="dropdown-item catSpan"
                                            href="#"
                                            data-categorycode="H"
                                        >
                                            Health & Beauty
                    </a>
                                        <a
                                            className="dropdown-item catSpan"
                                            href="#"
                                            data-categorycode="M"
                                        >
                                            Household
                    </a>
                                        <a
                                            className="dropdown-item catSpan"
                                            href="#"
                                            data-categorycode="L"
                                        >
                                            Homeware
                    </a>
                                    </div>
                                </div>
                                <input
                                    type="search"
                                    className="form-control mr-0 mr-sm-3"
                                    aria-label="Text input with dropdown button"
                                    id="Search"

                                />
                                <a href="#" className="search-btn-icon" id="SearchButton">
                                    <img
                                        src="/static/images/_icons/magnify-glass.svg"
                                        aria-label="search icon for search"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="header-checkout">
                            <a
                                className="btn btn-success btn-block checkout-btn text-white"
                                href="https://www.allsale.co.za/cart"
                            >
                                <img
                                    className="mr-2 d-none d-sm-inline-block"
                                    src="/static/images/_icons/cart.svg"

                                />
                                <img
                                    className="mr-2 d-flex d-sm-none"
                                    src="/static/images/_icons/cart-orange.svg"
                                    aria-label="image for cart"
                                />
                                <span
                                    id="CartTotal"
                                    style={{
                                        color: "white !important"
                                    }}
                                />{" "}
                                <span className="d-none d-sm-inline-block ml-2">CART</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;


