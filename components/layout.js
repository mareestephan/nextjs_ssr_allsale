import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import React from 'react'



const Layout = (props, script, link) => (
    <div>

        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>


            <title>Online Shopping | Best Deals in SA | Allsale.co.za</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name='description' content='Allsale Club. Join the Allsale club  and get exclusive shopping deals and discounts - the best anywhere in South Africa.' />
            <link href="fad.html" rel="canonical" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://www.allsale.co.za/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://www.allsale.co.za/favicon-16x16.png" />
            <meta name="theme-color" content="#fafafa" />
        </ Head>

        <Header />

        <Navbar />

        <div >
            {props.children}

        </div>

        <Footer />

    </div>
)

export default Layout;