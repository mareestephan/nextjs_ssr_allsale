import Link from 'next/link';


class Product extends React.Component {


    render() {



        const listItems = this.props.products[0].matched_products.map((product) =>

            <div key={product.product_id} className="col-6 col-md one-quarter guide mt-0 pl-0 pl-sm-2 pr-1 pr-sm-2">

                < Link href={product.product_link} prefetch={false} >
                    {/* href={product.product_link} */}

                    <a aria-label="product link" >
                        <div className="card product mb-0 mb-sm-2 ">
                            <div className="pb-2 px-2 mx-auto">
                                <img
                                    // src={"https://www.allsale.co.za/cdn-cgi/image/width=180,height=180/prodimage/AKU-GE275-ST/1.jpg"}
                                    src={product.product_image}
                                    className="card-img-top"
                                    aria-label="image for product"
                                />
                            </div>
                            <div className="col-12 text-center text-sm-left product-text">

                                <p className="mb-0">{product.brands}</p>

                                <h6 className="mb-0">{product.product_name}</h6>
                                <div className="row mb-3 mt-2">
                                    <div className="col-12 col-sm-7 price  guide">

                                        <h3 className="mx-auto mx-sm-0 mb-0">{product.price}</h3>

                                    </div>
                                    {/* <div className="col-12 col-sm-5 text-center pl-sm-0 text-sm-right guide">
                                        <div className="discounted guide">

                                            <b>{product.sale_price}</b>

                                        </div>
                                        <div className="text-orange guide discount ">-9%</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </a>

                </Link >
            </div>


        )


        // Render bootstrap div with   class="w-100 my-1 d-sm-block d-none every four items


        var resultsRender = [];
        for (var i = 0; i < listItems.length; i++) {
            resultsRender.push(listItems[i]);
            if (i % 4 === 3) {
                resultsRender.push(<div className="w-100 my-1 d-sm-block d-none"></div>);
            }
        }


        return (
            <div className="container guide">
                <div
                    className="text-center text-dark mt-3 mb-3 font-weight-bold"
                    style={{
                        float: "left",
                        width: "100%"
                    }}
                >
                    <span
                        className="display-4"
                        style={{
                            fontSize: "1.4rem",
                            float: "left"
                        }}
                    >

                    </span>
                    <span
                        className="display-4"
                        style={{
                            fontSize: "1.4rem",
                            float: "left"
                        }}
                    >
                        <small className="font-weight-bold">
                            <a href="/c/accessories/fa">CATEGORIES</a>
                        </small>


                        {/* Using substring we only display after the 4th character of the slug property */}

                        <small >
                            {" "}
                            > <h1 style={{
                                fontSize: "1.2rem",
                                fontWeight: "600",
                                display: "inline-block"


                            }} >{this.props.products[0].slug.substring(4).toUpperCase()}</h1>
                        </small>
                    </span>
                </div>
                <div
                    style={{
                        clear: "both"
                    }}
                />
                <div id="rowGrid" className="row">
                    <div className="col-10 d-block offset-1 col-sm-3 offset-sm-0 px-0 mb-2 filterby-mobile">
                        <a
                            className="bg-teal text-white btn py-2 px-4 col-10 text-left d-sm-none"
                            href="#filterBy"
                            data-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="filterBy"
                        >
                            FILTER BY
            </a>
                        <div
                            className="col-12 side-collapse guide px-0 px-sm-3 mx-auto row collapse multi-collapse d-sm-block"
                            id="filterBy"
                        >
                            <div
                                id="selectedFilters"
                                className="mb-0 mb-sm-4  bg-light-teal pt-3 pr-3 pb-1 pl-3 guide wide-spacing"
                                style={{
                                    display: "none"
                                }}
                            >
                                <span className="font-weight-bold">REFINE BY</span>
                                <div className="text-orange">
                                    <ul className="list-unstyled mt-3 subCategoryFilter">
                                        <li className="removeFilterTemplate">
                                            {" "}
                                            <span className="close-icon">
                                                <img
                                                    className="icon m-auto"
                                                    src="/assets/icons/times.svg"

                                                />
                                            </span>{" "}
                                            <h6 className="bold d-inline-block">
                                                <small />
                                            </h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="mb-0 mb-sm-4 bg-light-teal p-3 guide wide-spacing"
                                style={{}}
                            >
                                <a
                                    id="genderFilter"
                                    className="filterToggle collapsed"
                                    data-toggle="collapse"
                                    href="#gender"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="gender"
                                >
                                    <div className="font-weight-bold bg-light-teal">GENDER</div>
                                </a>
                                <div
                                    className="collapse mt-3 checkboxes filterList"
                                    id="gender"
                                >
                                    <label className="container">
                                        <input
                                            type="checkbox"
                                            className="genderFilter"
                                            data-type="Gender"
                                            data-value="Mens"
                                            data-text="Mens"
                                        />
                                        <span className="checkmark" />
                                        Mens (230)
                  </label>
                                    <label className="container">
                                        <input
                                            type="checkbox"
                                            className="genderFilter"
                                            data-type="Gender"
                                            data-value="Womens"
                                            data-text="Womens"
                                        />
                                        <span className="checkmark" />
                                        Womens (695)
                  </label>
                                </div>
                            </div>
                            <div
                                className="mb-0 mb-sm-4 bg-light-teal p-3 guide wide-spacing"
                                style={{
                                    display: "none"
                                }}
                            >
                                <a
                                    id="categoryFilter"
                                    className="filterToggle collapsed"
                                    data-toggle="collapse"
                                    href="#category"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="category"
                                >
                                    <div className="font-weight-bold bg-light-teal">CATEGORY</div>
                                </a>
                                <div
                                    className="collapse mt-3 checkboxes filterList"
                                    id="category"
                                ></div>
                            </div>
                            <div
                                className="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing"
                                style={{}}
                            >
                                <a
                                    id="brandFilter"
                                    className="filterToggle collapsed"
                                    data-toggle="collapse"
                                    href="#brand"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="brand"
                                >
                                    <div className="font-weight-bold bg-light-teal">BRAND</div>
                                </a>
                                <div className="collapse checkboxes filterList" id="brand">
                                    <div id="showMoreDiv0" data-page={0} style={{}}>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Adidas"
                                                data-text="Adidas"
                                            />
                                            <span className="checkmark" />
                                            Adidas (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Alex And Ani"
                                                data-text="Alex And Ani"
                                            />
                                            <span className="checkmark" />
                                            Alex And Ani (105)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Armani"
                                                data-text="Armani"
                                            />
                                            <span className="checkmark" />
                                            Armani (2)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Armani Exchange"
                                                data-text="Armani Exchange"
                                            />
                                            <span className="checkmark" />
                                            Armani Exchange (2)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Bulova"
                                                data-text="Bulova"
                                            />
                                            <span className="checkmark" />
                                            Bulova (3)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Calvin Klein"
                                                data-text="Calvin Klein"
                                            />
                                            <span className="checkmark" />
                                            Calvin Klein (2)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Casio"
                                                data-text="Casio"
                                            />
                                            <span className="checkmark" />
                                            Casio (7)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Christian Van Sant"
                                                data-text="Christian Van Sant"
                                            />
                                            <span className="checkmark" />
                                            Christian Van Sant (107)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Diesel"
                                                data-text="Diesel"
                                            />
                                            <span className="checkmark" />
                                            Diesel (2)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="DKNY"
                                                data-text="DKNY"
                                            />
                                            <span className="checkmark" />
                                            DKNY (3)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Dogeared"
                                                data-text="Dogeared"
                                            />
                                            <span className="checkmark" />
                                            Dogeared (3)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Ferrari"
                                                data-text="Ferrari"
                                            />
                                            <span className="checkmark" />
                                            Ferrari (12)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Fossil"
                                                data-text="Fossil"
                                            />
                                            <span className="checkmark" />
                                            Fossil (7)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Frederique Constant"
                                                data-text="Frederique Constant"
                                            />
                                            <span className="checkmark" />
                                            Frederique Constant (3)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Hamilton"
                                                data-text="Hamilton"
                                            />
                                            <span className="checkmark" />
                                            Hamilton (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Hugo Boss"
                                                data-text="Hugo Boss"
                                            />
                                            <span className="checkmark" />
                                            Hugo Boss (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Invicta"
                                                data-text="Invicta"
                                            />
                                            <span className="checkmark" />
                                            Invicta (17)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Juicy Couture"
                                                data-text="Juicy Couture"
                                            />
                                            <span className="checkmark" />
                                            Juicy Couture (5)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Kate Spade"
                                                data-text="Kate Spade"
                                            />
                                            <span className="checkmark" />
                                            Kate Spade (5)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Kenneth Cole"
                                                data-text="Kenneth Cole"
                                            />
                                            <span className="checkmark" />
                                            Kenneth Cole (17)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Luminox"
                                                data-text="Luminox"
                                            />
                                            <span className="checkmark" />
                                            Luminox (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Marc Jacobs"
                                                data-text="Marc Jacobs"
                                            />
                                            <span className="checkmark" />
                                            Marc Jacobs (10)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Michael Kors"
                                                data-text="Michael Kors"
                                            />
                                            <span className="checkmark" />
                                            Michael Kors (4)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Mido"
                                                data-text="Mido"
                                            />
                                            <span className="checkmark" />
                                            Mido (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Movado"
                                                data-text="Movado"
                                            />
                                            <span className="checkmark" />
                                            Movado (36)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="N/A"
                                                data-text="N/A"
                                            />
                                            <span className="checkmark" />
                                            N/A (2)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Nixon"
                                                data-text="Nixon"
                                            />
                                            <span className="checkmark" />
                                            Nixon (6)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Pandora"
                                                data-text="Pandora"
                                            />
                                            <span className="checkmark" />
                                            Pandora (188)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Seiko"
                                                data-text="Seiko"
                                            />
                                            <span className="checkmark" />
                                            Seiko (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Skagen"
                                                data-text="Skagen"
                                            />
                                            <span className="checkmark" />
                                            Skagen (16)
                    </label>
                                        <span
                                            className="showMore"
                                            data-target={1}
                                            style={{
                                                color: "cornflowerblue",
                                                cursor: "pointer"
                                            }}
                                        >
                                            Show more
                    </span>
                                    </div>
                                    <div
                                        id="showMoreDiv1"
                                        className="showMoreDiv"
                                        data-page={1}
                                        style={{
                                            display: "none"
                                        }}
                                    >
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Swarovski"
                                                data-text="Swarovski"
                                            />
                                            <span className="checkmark" />
                                            Swarovski (134)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Swatch"
                                                data-text="Swatch"
                                            />
                                            <span className="checkmark" />
                                            Swatch (162)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Swiss Army (Display Models)"
                                                data-text="Swiss Army (Display Models)"
                                            />
                                            <span className="checkmark" />
                                            Swiss Army (Display Models) (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Tag Heuer"
                                                data-text="Tag Heuer"
                                            />
                                            <span className="checkmark" />
                                            Tag Heuer (1)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Timex"
                                                data-text="Timex"
                                            />
                                            <span className="checkmark" />
                                            Timex (33)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Tissot"
                                                data-text="Tissot"
                                            />
                                            <span className="checkmark" />
                                            Tissot (11)
                    </label>
                                        <label className="container">
                                            <input
                                                type="checkbox"
                                                className="brandFilter"
                                                data-type="Brand"
                                                data-value="Tommy Hilfiger"
                                                data-text="Tommy Hilfiger"
                                            />
                                            <span className="checkmark" />
                                            Tommy Hilfiger (13)
                    </label>
                                        <span
                                            className="hideMore"
                                            data-target={2}
                                            style={{
                                                color: "cornflowerblue",
                                                cursor: "pointer",
                                                paddingRight: "114px"
                                            }}
                                        >
                                            Hide
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing"
                                style={{
                                    display: "none"
                                }}
                            >
                                <a
                                    id="colorFilter"
                                    className="filterToggle collapsed"
                                    data-toggle="collapse"
                                    href="#color"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="color"
                                >
                                    <div className="font-weight-bold bg-light-teal">COLOUR</div>
                                </a>
                                <div
                                    className="collapse checkboxes filterList"
                                    id="color"
                                ></div>
                            </div>
                            <div
                                className="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing"
                                style={{
                                    display: "none"
                                }}
                            >
                                <a
                                    id="sizeFilter"
                                    className="filterToggle collapsed"
                                    data-toggle="collapse"
                                    href="#size"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="size"
                                >
                                    <div className="font-weight-bold bg-light-teal">SIZE</div>
                                </a>
                                <div className="collapse checkboxes filterList" id="size"></div>
                            </div>
                            <div
                                className="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing"
                                style={{}}
                            >
                                <a
                                    id="pricefilter"
                                    className="filterToggle collapsed"
                                    data-toggle="collapse"
                                    href="#price"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="price"
                                >
                                    <div className="font-weight-bold bg-light-teal">PRICE</div>
                                </a>
                                <div className="collapse mt-3 filterList" id="price">
                                    <div className="form-group">
                                        <label htmlFor="formControlRange">R0</label>
                                        <label className="float-right" htmlFor="formControlRange">
                                            R38 200
                    </label>
                                        <input
                                            type="range"
                                            className="priceFilter form-control-range"
                                            id="formControlRange"
                                            min={0}
                                            max={38200}
                                            step={100}
                                            defaultValue={0}
                                        />
                                    </div>
                                    <div id="displayPrice">R0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-9 guide px-0 overflow-hidden">
                        <div className="row products mobile-products search-page">
                            <div className="col-12 col-sm-5 guide mx-auto mx-sm-0 text-center text-sm-left mb-3 mb-sm-2 align-self-center">
                                <b className="resultCount text-muted wide-spacing d-none d-sm-block ml-2">
                                    <span>{listItems.length}</span> PRODUCTS FOUND
                </b>
                            </div>
                            <div className="col-12 col-sm-5 guide mx-auto mx-sm-0 text-center text-sm-left mb-3 mb-sm-2 d-block d-sm-none">
                                <b className="resultCount text-muted wide-spacing">
                                    <span>{listItems.length}</span> PRODUCTS FOUND
                </b>
                            </div>
                            <div className="col-10 offset-1 offset-sm-0 col-sm-7 guide search-products text-right d-flex flex-column flex-sm-row align-items-start justify-content-end mb-1">
                                <div
                                    className="dropdown mt-0 mb-2 mr-sm-2 mx-auto ml-sm-0"
                                    id="sortOrder"
                                >
                                    <button
                                        className="btn btn-secondary dropdown-toggle dropdown-button mx-auto"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        NEW IN
                  </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a className="dropdown-item" href="#" data-sort="Savings">
                                            SAVINGS
                    </a>
                                        <a className="dropdown-item" href="#" data-sort="PriceLow">
                                            PRICE LOW TO HIGH
                    </a>
                                        <a className="dropdown-item" href="#" data-sort="PriceHigh">
                                            PRICE HIGH TO LOW
                    </a>
                                        <a className="dropdown-item" href="#" data-sort="Newest">
                                            NEW IN
                    </a>
                                    </div>
                                </div>
                                <div
                                    className="dropdown mt-0 mb-2 d-none d-sm-flex"
                                    id="searchSize"
                                >
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        VIEW 40
                  </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a className="dropdown-item" href="#" data-size={20}>
                                            VIEW 20
                    </a>
                                        <a className="dropdown-item" href="#" data-size={40}>
                                            VIEW 40
                    </a>
                                        <a className="dropdown-item" href="#" data-size={80}>
                                            VIEW 80
                    </a>
                                    </div>
                                </div>
                            </div>




                            {/* RENDER PRODUCTS FROM MAP AND LOOP */}


                            <div id="products4" className="col-12">
                                <div className="row products mb-4 mt-4 mt-sm-0 mx-sm-0 px-3 px-sm-0">

                                    {resultsRender}

                                </div>
                            </div>


                            {/* END OF RENDER PRODUCTS  */}


                        </div>
                    </div>
                </div>

                <div id="rowPaging" className="row">
                    <div className="col-10 col-sm-12 pr-0 text-right">
                        <nav id="catPaging" aria-label="...">
                            <ul className="pagination justify-content-center justify-content-sm-end">
                                <li className="page-item disabled">
                                    <a
                                        className="page-link py-1"
                                        href="#"
                                        tabIndex={-1}
                                        aria-disabled="true"
                                    >
                                        Page
                  </a>
                                </li>
                                <li className="page-item active" aria-current="page">
                                    <a className="linkPage page-link py-1" href="#" data-page={1}>
                                        1 <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="linkPage page-link py-1" href="#" data-page={2}>
                                        2
                  </a>
                                </li>
                                <li className="page-item">
                                    <a className="linkPage page-link py-1" href="#" data-page={3}>
                                        3
                  </a>
                                </li>
                                <li className="page-item">
                                    <a className="linkPage page-link py-1" href="#" data-page={2}>
                                        Next{" "}
                                        <span className="pt-1 pr-2 pb-1 pl-2">
                                            <svg
                                                className="svg-inline--fa fa-angle-right fa-w-8"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="angle-right"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 512"
                                                data-fa-i2svg
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        );


    }
}

export default Product;



