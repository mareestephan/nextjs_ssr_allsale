import React from "react";

class Navbar extends React.Component {
    render() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <div className="container">
                    <nav className="nav nav-pills nav-fill custom-nav collapse" id="nav">
                        <div className="nav-item nav-link">
                            <a
                                href="https://www.allsale.co.za/f/fashion"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                FASHION
        </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{ backgroundColor: "#626262" }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/mens/fc"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            MENS
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/accessories/fck">Accessories</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/activewear/fcb">Activewear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/sweaters-sweatshirts/fch">
                                                    Sweaters &amp; Sweatshirts
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/pants-suits/fce">Pants &amp; Suits</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/denim/fcc">Denim</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/underwear-loungewear/fcj">
                                                    Underwear &amp; Loungewear
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/t-shirts-polos/fci">T Shirts &amp; Polos</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shirts/fcg">Shirts</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/jackets-outerwear/fcd">Jackets &amp; Outerwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/footwear/fca">Footwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shorts/fcf">Shorts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/boys/fe"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            BOYS
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/tops/feg">Tops</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shoes/fed">Shoes</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/underwear-sleepwear/feh">
                                                    Underwear &amp; Sleepwear
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/swimwear/fef">Swimwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/accessories/fea">Accessories</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/jackets/feb">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bottoms/fec">Bottoms</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/suits/fee">Suits</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/baby-boys/fei">Baby Boys</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/sporting-gear-apparel/fek">
                                                    Sporting Gear &amp; Apparel
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/womens/fb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            WOMENS
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/footwear/fba">Footwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/denim/fbc">Denim</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/activewear/fbb">Activewear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/plus-sizes/fbk">Plus Sizes</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/tops-knitwear/fbe">Tops &amp; Knitwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/intimate-loungewear/fbg">
                                                    Intimate &amp; Loungewear
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/maternity/fbl">Maternity</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/pants-shorts/fbf">Pants &amp; Shorts</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/petites/fbj">Petites</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/jackets-outerwear/fbh">Jackets &amp; Outerwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/swimwear/fbi">Swimwear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/dresses-skirts/fbd">Dresses &amp; Skirts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/girls/fd"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            GIRLS
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/accessories/fda">Accessories</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/jackets/fdc">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/dresses/fdb">Dresses</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shoes/fde">Shoes</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bottoms/fdd">Bottoms</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/underwear-sleepwear/fdj">
                                                    Underwear &amp; Sleepwear
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/tops/fdi">Tops</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/skirts/fdf">Skirts</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/swimwear/fdh">Swimwear</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/accessories/fa"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            ACCESSORIES
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/sunglasses-eyewear/fac">
                                                    Sunglasses &amp; Eyewear
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/mens-jewellery/faf">Men's Jewellery</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/womens-jewellery/fae">Women's Jewellery</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/fashion-accessories/fab">Fashion Accessories</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/cold-weather/fag">Cold Weather</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/watches/fad">Watches</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/tech/fah">Tech</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/handbags-leather-smalls/faa">
                                                    Handbags &amp; Leather Smalls
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/luxury-fashion/ff"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            LUXURY FASHION
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/luxury-womens-apparel/fff">
                                                    Luxury Women's Apparel
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/luxury-womens-footwear/ffg">
                                                    Luxury Women's Footwear
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/luxury-accessories/ffa">Luxury Accessories</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/luxury-handbags/ffb">Luxury Handbags</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="https://www.allsale.co.za/a/baby & kids"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                BABY &amp; KIDS
        </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{ backgroundColor: "#626262" }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/feeding/ac"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            FEEDING
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/feeding-gear/aca">Feeding Gear</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/dummies/acd">Dummies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/changing-bathing/aa"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            CHANGING &amp; BATHING
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bath-skincare/aaa">Bath &amp; Skincare</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shampoo-conditioner/aab">
                                                    Shampoo &amp; Conditioner
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/nappies/aad">Nappies</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/wipes/aac">Wipes</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/toys/af"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            TOYS
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/costumes/afh">Costumes</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/educational-toys/afk">Educational Toys</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/games/afc">Games</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/pretend-play/afm">Pretend Play</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/baby-toddler-toys/afa">Baby &amp; Toddler Toys</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/building-blocks/afe">Building Blocks</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/sport-outdoor-toys/afn">
                                                    Sport &amp; Outdoor Toys
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/dolls-action-figures/aff">
                                                    Dolls &amp; Action Figures
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/baby-gear/ab"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            BABY GEAR
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/changing-stations/abd">Changing stations</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="https://www.allsale.co.za/h/health & beauty"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                HEALTH &amp; BEAUTY
        </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{ backgroundColor: "#626262" }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/toiletries/hc"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            TOILETRIES
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/mens/hcb">Mens</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/foot-care/hcl">Foot Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bath-body/hca">Bath &amp; Body</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/hand-nail-care/hcd">Hand &amp; Nail Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/skin-care/hcj">Skin Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/intimate-care/hce">Intimate Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/oral-care/hcf">Oral Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shaving-grooming/hcg">Shaving &amp; Grooming</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/fragrances/ha"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            FRAGRANCES
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/men/haa">Men</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/kids/hae">Kids</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/aromatherapy/had">Aromatherapy</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/unisex/hac">Unisex</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/women/hab">Women</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/makeup/hb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            MAKEUP
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/lips/hbd">Lips</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/packs-sets/hbh">Packs &amp; Sets</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/mens/hbf">Mens</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/tools/hbe">Tools</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/eyes/hbb">Eyes</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/face/hbc">Face</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/hair-care/hd"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HAIR CARE
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/styling-products/hda">Styling Products</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shampoo-conditioners/hdh">
                                                    Shampoo &amp; Conditioners
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/treatments/hdi">Treatments</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/kids/hdf">Kids</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/extensions-wigs/hdj">Extensions &amp; Wigs</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/mens/hde">Mens</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/accessories-tools/hdd">Accessories &amp; Tools</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/hair-colouring/hdc">Hair Colouring</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/health-personal-care/he"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HEALTH &amp; PERSONAL CARE
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/health-care/hea">Health Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/personal-care/heb">Personal Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/vision-care/hec">Vision Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/medical-appliances/hed">Medical Appliances</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="https://www.allsale.co.za/m/household"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                HOUSEHOLD
        </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{ backgroundColor: "#626262" }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/household-cleaning/ma"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HOUSEHOLD CLEANING
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/cleaning-products/maa">Cleaning Products</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/kitchen/mag">Kitchen</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/furniture-upholstery/mae">
                                                    Furniture &amp; Upholstery
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/insect-repellant/maf">Insect Repellant</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bathroom/mac">Bathroom</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/shoe-care/mai">Shoe Care</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/laundry/mah">Laundry</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/floors-carpet/mad">Floors &amp; Carpet</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/general-goods/mb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            GENERAL GOODS
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/general-goods/mba">General Goods</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/pantry/md"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            PANTRY
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/condiments-sauces/mdb">Condiments &amp; Sauces</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/canned-food/mda">Canned Food</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/drinks/mdc">Drinks</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/snacks-cereals/mde">Snacks &amp; Cereals</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/snacks-cereals/mdf">Snacks &amp; Cereals</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/international-cooking/mdg">
                                                    International Cooking
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/dips-spreads/mdh">Dips &amp; Spreads</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/sweeteners/mdi">Sweeteners</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="https://www.allsale.co.za/l/homeware"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                HOMEWARE
        </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{ backgroundColor: "#626262" }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/bed-bath/la"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            BED &amp; BATH
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bathroom-accessories/laa">Bathroom Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/luggage-travel/lf"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            LUGGAGE &amp; TRAVEL
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/travel-accessories/lfb">Travel Accessories</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/suitcases-sets/lfc">Suitcases &amp; Sets</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bags/lfa">Bags</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/kitchen/ld"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            KITCHEN
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/bakeware/lda">Bakeware</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/coffee-tea/ldb">Coffee &amp; Tea</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/cookware/ldc">Cookware</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/small-appliances-accessories/ldd">
                                                    Small Appliances &amp; Accessories
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/food-preparation/ldh">Food Preparation</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/organisation-storage/lde">
                                                    Organisation &amp; Storage
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/utensils-tools/ldf">Utensils &amp; Tools</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/dining-entertaining/le"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            DINING &amp; ENTERTAINING
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/cutlery/leb">Cutlery</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/crockery/lec">Crockery</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/barware/lea">Barware</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/serveware/lef">Serveware</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/drinkware/lee">Drinkware</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/tabletop-accessories/lei">Tabletop Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.allsale.co.za/c/home-decor/lb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HOME DECOR
              </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: 10,
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="https://www.allsale.co.za/c/home-decor-items/lbd">Home Decor Items</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/picture-frames/lbe">Picture Frames</a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/candles-home-fragrances/lbb">
                                                    Candles &amp; Home Fragrances
                  </a>
                                            </li>
                                            <li>
                                                <a href="https://www.allsale.co.za/c/kids-decor-bedding/lbg">
                                                    Kids Decor &amp; Bedding
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a href="https://www.allsale.co.za/brands">BRANDS</a>
                        </div>
                        <div className="nav-item nav-link promo">
                            <a
                                data-toggle="collapse"
                                href="#promoSubMenu"
                                role="button"
                                aria-expanded="false"
                                aria-controls="promoSubMenu"
                                aria-label="Offers"
                            >
                                OFFERS
        </a>
                            <div
                                className="promo-drop-content p-5 text-left collapse"
                                id="promoSubMenu"
                                style={{ cursor: "default" }}
                            >
                                <div className="row mt-4 mb-2">
                                    <div className="col-12 col-sm-3 ml-0 ml-sm-5">
                                        <a
                                            href="javascript:;"
                                            className="font-weight-bold text-white"
                                            role="button"
                                            aria-expanded="false"
                                            style={{ cursor: "default" }}
                                            aria-controls="p1"
                                            aria-label="Quick Links"
                                        >
                                            QUICK LINKS
              </a>
                                        <ul className="list-unstyled mt-4 collapse" id="p1">
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/brands">
                                                    Shop by Brand
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/search?promo=1">
                                                    Featured
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/search?promo=2">
                                                    Everyday Essentials
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/search?promo=3">
                                                    Member Exclusive
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-3">
                                        <a
                                            href="javascript:;"
                                            className="font-weight-bold text-white"
                                            role="button"
                                            aria-expanded="false"
                                            style={{ cursor: "default" }}
                                            aria-controls="p3"
                                            aria-label="New In"
                                        >
                                            NEW IN
              </a>
                                        <ul className="list-unstyled mt-4 collapse" id="p3">
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/c/womens/fb?sort=Newest">
                                                    New In Women's Fashion
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/c/mens/fc?sort=Newest">
                                                    New In Men's Fashion
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/c/homeware/l?sort=Newest">
                                                    New In Home
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/c/watches/fad?sort=Newest">
                                                    New In Watches
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/c/fragrances/ha?sort=Newest">
                                                    New In Fragrances
                  </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="https://www.allsale.co.za/c/toys/af?sort=Newest">
                                                    New In Toys
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Navbar;