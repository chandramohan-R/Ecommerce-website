import React, { useState } from 'react';
import Amazon from "../photos/Amazon.png"
import "./Header.css";
import { Card, Row, Col ,Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AmazonNavbar from './Navbar';
import AmazonFooter from './Footer';
import { Link } from 'react-router-dom';





function Header() {
  const [cart, setCart] = useState([]);

  
  const handleShopNow = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      // If the product is already in the cart, you may want to update quantity or handle accordingly
      alert('Product is already in the cart!');
    } else {
      // If the product is not in the cart, add it to the cart
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      alert('Product added to the cart!');
    }
    addToCart(product, cart);
  };

  




  const products = [

    { id: 1,img:'https://m.media-amazon.com/images/I/71o8VehMHXL._AC_UY327_FMwebp_QL65_.jpg', name: 'Product 1', price: 50, category: 'Electronics' },
    { id: 2,img:'https://m.media-amazon.com/images/I/61DsD89y5rL._AC_UY327_FMwebp_QL65_.jpg', name: 'Product 2', price: 120, category: 'Clothing' },
    { id: 3,img:'https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL480_FMwebp_QL65_.jpg', name: 'Product 3', price: 220, category: 'Shoes' },
    { id: 4,img:'https://m.media-amazon.com/images/I/712am1RDNiL._AC_UY327_FMwebp_QL65_.jpg', name: 'Product 4', price: 320, category: 'Accessories' },
    { id: 5,img:'https://m.media-amazon.com/images/I/41Gt21tmhTL.AC_SX250.jpg', name: 'Product 5', price: 420, category: 'Computers' },
    { id: 6,img:'https://m.media-amazon.com/images/I/71cBRecEqLL._AC_UL480_FMwebp_QL65_.jpg', name: 'Product 6', price: 520, category: 'Mobiles'},
    { id: 7,img:'https://m.media-amazon.com/images/I/81zvQE8fMfL._AC_SR155,154_QL70_.jpg', name: 'Product 7', price: 620, category: 'Mobiles'},
    { id: 8,img:'https://m.media-amazon.com/images/I/81lhCu7dK0L._AC_UY327_FMwebp_QL65_.jpg', name: 'Product 8', price: 720, category: 'Mobiles'},

  ];




  const [images, setImages] = useState([
    'https://m.media-amazon.com/images/G/31/img22/Laptops/Smartchoice/Laptops/Header/Revised/sep_1500x300._CB595974029_.jpg',
    'https://m.media-amazon.com/images/G/31/img24hp/headphones/noise/xero/1500x300._CB583972617_.png',
    'https://m.media-amazon.com/images/G/31/img21/Xiaomi/New/1500x300_2._CB583723329_.jpg',
    'https://m.media-amazon.com/images/G/31/img21/vday/new/R01_VDay24_PC_PlusOneHeader._CB583976611_.jpg',
    'https://m.media-amazon.com/images/G/31/img23/BAU-Dec/Laptops_Brand-Banners/Dell_Vostro14_3420_ELP_1500X300._CB570494119_.jpg'
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  const categories = [
    {
      id: 1,
      name: " Mobiles",
      img: "https://m.media-amazon.com/images/I/71UIZHHo5hL._AC_UY327_QL65_.jpg",
      numberofproducts: " 1024"

    },
    {
      id: 2,
      name: " Laptops",
      img: "https://m.media-amazon.com/images/I/61DsD89y5rL._AC_UY327_FMwebp_QL65_.jpg",
      numberofproducts: " 1300"

    },
    {
      id: 3,
      name: " Watches",
      img: "https://m.media-amazon.com/images/I/71IAFHkf5WL._AC_UL480_FMwebp_QL65_.jpg",
      numberofproducts: " 1500"

    },
    {
      id: 4,
      name: " Electronics",
      img: "https://m.media-amazon.com/images/I/51u2MqPaQwL._AC_UL480_QL65_.jpg",
      numberofproducts: " 1100"

    },
    {
      id: 5,
      name: " Gategates",
      img: "https://m.media-amazon.com/images/I/61ZpUwV8UuL._AC_UY327_FMwebp_QL65_.jpg",
      numberofproducts: " 1250"

    }
  ]


  return (
    <>
    <AmazonNavbar />
      <div
        style={{
          backgroundImage: `url(${Amazon})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          margin: '0 auto',
        }}
      >
        <div>
        <Container className="mx-auto">
  <Form className="d-flex justify-content-between  border shadow-lg" >
    <Form.Control
      type="text"
      name="search"
      className="h-110  px-4 outline-none "
      placeholder="Search the products..."
      
    />
    <Button
      type="submit"
      variant="dark"
      className="text-white h-100 px-6  px-4 py-2"
    >
      Search
    </Button>
  </Form>
</Container>


        </div>



      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <i className="float-left mr-3 bx-3xl bx bxs-ship"></i>
              <p className="h6">Free shipping & Return <br /><small className="text-muted">For all orders over $500</small></p>
            </div>
            <div className="col-md-3">
              <i className="float-left mr-3 bx-3xl bx bxs-truck"></i>
              <p className="h6">Customer Protection <br /><small className="text-muted">From click to delivery.</small></p>
            </div>
            <div className="col-md-3">
              <i className="float-left mr-3 bx bxs-wallet"></i>
              <p className="h6">Safe Payment <br /><small className="text-muted">Use world’s most secure payment methods.</small></p>
            </div>
            <div className="col-md-3">
              <i className="float-left mr-3 bx bxs-timer"></i>
              <p className="h6">Support 24/7 <br /><small className="text-muted">We answer for question all time</small></p>
            </div>
          </div>
        </div>
      </div>




      <div className="amazon-carousel">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={imageUrl} alt={`slide-${index + 1}`} style={{ width: "100%" }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>

      <div>
        <div className='categorycontent'>
          <div className="left">
            <h5>
              Product Categories
            </h5>
            <p>Choose from a wide variety of items</p>
          </div>
          <div className="right">
            <button><h6>All Category <span><i className='bx bxs-chevron-right'></i></span></h6></button>
          </div>
        </div>

        <div className='categorysession  mb-5' style={{ justifyContent: "space-around", alignItems: "center", padding: "15px" }}>
          <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            {categories.map((caty) => (
              <Col key={caty.id} className='mb-4'>
                <Card className='categorybox' style={{ padding: "50px" }}>
                  <Card.Img variant="top" src={caty.img} alt={Amazon} style={{ width: "120px", height: "120px", padding: "5px", borderColor: "black" }} />
                  <Card.Body>
                    <Card.Title className="text-center">{caty.name}</Card.Title>
                    <Card.Text className="text-center">
                      Stocks: {caty.numberofproducts}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>


      <div>
        <h1>Popular products</h1>
        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap',padding:"50px" }}>
      {products.map((product) => (
        <div key={product.id} className="product-item" style={{ width: '100%', maxWidth: '300px', margin: '10px', padding: '10px', boxSizing: 'border-box', border: '1px solid #ddd' }}>
          <img src={product.img} alt={product.name} style={{ width: '50px', height: '50px' }} />
          <div className="product-details" style={{ textAlign: 'center' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleShopNow(product)}>Shop Now</button>

          </div>
        </div>
      ))}
    </div>
    </div>



     

      
      <div className="section">
        <div className="effect-1"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center  content">
                <h1 className="fw-semibold text-black">Services</h1>
                <p className="text-black">We use our technical capabilities and experience to help organisations to help accelerate their adoption of AWS cloud technologies,
                  to achieve successful and sustainable business outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div>
                    <i className='bx bxs-offer fs-1 icon'></i>
                    <h4 className="mt-3">50% Offer products</h4>
                    <p className="text-black-50">All products are good condition</p>
                    <a href="#" className="stretched-link">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div>
                    <i className='bx bx-store-alt fs-1 icon'></i>
                    <h4 className="mt-3">Store  </h4>
                    <p className="text-black-50">All application are available</p>

                    <a href="#" className="stretched-link">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div>
                    <i className='bx bxs-truck fs-1 icon'></i>
                    <h4 className="mt-3">Fast Delivery  </h4>
                    <p className="text-black-50">Free delivery are Avails.</p>
                    <a href="#" className="stretched-link">Learn More</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div>
        <p>Cart Items: {cart.length}</p>
        <Link to="/cart">View Cart</Link>
      </div>

    <AmazonFooter />
    </>
  );
}

export default Header;

