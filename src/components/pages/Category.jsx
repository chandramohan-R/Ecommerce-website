
import React, { useState } from 'react'
import "./Category.css"
import 'boxicons/css/boxicons.min.css';
import AmazonFooter from './Footer';
import AmazonNavbar from './Navbar';


function Category() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const categories = ['All','Electronics', 'Clothing', 'Shoes', 'Accessories','Computers','Mobiles'];
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

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
  );


 


  const populars = [
    {
      id: 1,
      pcname: "Categories"
    },
    {
      id: 2,
      pcname: "Electronics"
    },
    {
      id: 3,
      pcname: "Decoration"
    },

    {
      id: 4,
      pcname: "Computers"
    },
    {
      id: 5,
      pcname: "Sports"
    },
    {
      id: 6,
      pcname: "Electronics"
    },
    {
      id: 7,
      pcname: "Mobiles"
    }




  ]
  return (
    <>
    <AmazonNavbar />
      <div className="container-fluid position-relative" style={{ zIndex: 99999, backgroundColor: "black", padding: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group input-group-lg">
              <input type="text" id="" name="" className="form-control" placeholder="Search the products......" />
              <select className="form-control form-control-lg rounded-0">
                <option>Categories</option>
                <option>Electronics</option>
                <option>Decoration</option>
                <option>Computers</option>
                <option>Sports</option>
              </select>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary pt-3" type="button"><i className='bx bx-search-alt'></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>


      {/* <div className="popular" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "20px", backgroundColor: "white", alignItems: "center", justifyContent: "center", justifyItems: "center" }}>
        {populars.map((popular) => (
          <div className='pcbox' key={popular.id} style={{ width: "150px", padding: "15px", backgroundColor: "#333", color: "white", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px" }}>
            <h5 style={{ margin: "0" }}>{popular.pcname}</h5>
          </div>

        ))}
      </div>   */}
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' }}>
  {categories.map((category) => (
    <div key={category} style={{ marginRight: '10px', marginBottom: '10px', cursor: 'pointer' }} onClick={() => setSelectedCategory(category)}>
      <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #333', padding: '8px', borderRadius: '8px', backgroundColor: selectedCategory === category ? '#333' : 'white', color: selectedCategory === category ? 'white' : '#333' }}>
        <input
          type="checkbox"
          checked={selectedCategory === category}
          onChange={() => {}}
          style={{ display: 'none' }}
        />
        {category}
      </div>
    </div>
  ))}
</div>
      <hr style={{ padding: "5px" }}></hr>

      <div className='categorycontent'>
        <div className="left">
          <h4><span><i style={{ backgroundColor: "black", padding: "5px", marginRight: "6px" }} className='bx bx-filter '></i></span>
            Filter by
          </h4>
          <h6>Choose from a wide variety of items</h6>
        </div>
        <div className="right">
          <button style={{ borderColor: "black", border: "2px solid black" }} ><h5>Short by: Most popular  <span><i className='bx bxs-chevron-right'></i></span></h5></button>
        </div>
      </div>








      <div className="flex" style={{ display: "flex", flexDirection: "row" }}>
  {/* Left Sidebar Container */}
  <div className="left" style={{ flex: "1", padding: "20px",boxShadow:"0 .5rem 1rem rgba(0, 0, 0, .15)",marginLeft:"5px", marginRight:"5px" }}>
    <h2 className="text-lg font-bold mb-2">Categories</h2>
    <ul style={{listStyle: "none"}}>
      {categories.map((category) => (
        <li key={category}>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            {category}
          </label>
        </li>
      ))}
    </ul>
    <div>
      <h2 className="text-lg font-bold mb-2">Price Range</h2>
      <div className="flex items-center">
        <input
          type="number"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })}
          className="w-1/2 p-2 mr-2"
          placeholder="Min Price"
        />
        <input
          type="number"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })}
          className="w-1/2 p-2"
          placeholder="Max Price"
        />
      </div>
    </div>
  </div>

  {/* Right Container for Product List */}
  <div className="Right" style={{ flex: "2",marginRight:"15px", padding: "10px",boxShadow:"0 .5rem 1rem rgba(0, 0, 0, .15)"}}>
    <h2 className="text-2xl font-bold mb-4">Product List</h2>
    <ul style={{ 
    display: "flex", 
    padding: "20px", 
    flexWrap: "wrap", 
    gap: "50px", 
    listStyle: "none", 
    backgroundColor: "#e5e5e5", 
    borderRadius: "10px", 
    justifyContent: "center",
    alignItems: "center"
  }}>
    {filteredProducts.map((product) => (
      <li key={product.id} className="productlist pt-4" style={{ 
        flex: "1 0 30%", 
        maxWidth: "250px", 
        boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .15)", 
        alignContent: "center", 
        alignItems: "center", 
        backgroundColor: "white", 
        borderRadius: "8px", 
        padding: "15px"
      }}>
<div style={{ display: "grid", placeItems: "center" }}>
  <img src={product.img} alt={product.name} style={{ width: "120px", height: "120px", padding: "5px" }} />
</div>        <div className="mb-2" style={{ color: "#333", fontWeight: "bold",textAlign:"center"  }}>{product.name}</div>
        <div style={{ color: "#555",textAlign:"center" }}>
          <strong>Price:</strong> ${product.price}
        </div>
        <div style={{ color: "#555" ,textAlign:"center" }}>
          <strong>Category:</strong> {product.category}
        </div>
      </li>
    ))}
  </ul>

  </div>
</div>





<div className="flex" style={{ display: "flex", flexDirection: "row" }}>
  <div className='left' style={{flex:"1",marginTop:"50px",marginBottom:"50px"}}>
       <h1>Download the app from diffrent store</h1><br></br><br></br>
       <h2>Get the App </h2>
       <a href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>

<div className="container" style={{marginTop:"80px"}}>
 <center> 
<a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn apple-btn" role="button">
  <span className="market-button-subtitle">Download on the</span>
  <span className="market-button-title">App Store</span>
</a>

<a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn google-btn" role="button">
  <span className="market-button-subtitle">Download on the</span>
  <span className="market-button-title">Google Play</span>
</a>

<a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn windows-btn" role="button">
  <span className="market-button-subtitle">Download on the</span>
  <span className="market-button-title">Windows Store</span>
</a>

<a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn amazon-btn" role="button">
  <span className="market-button-subtitle">Order now at</span>
  <span className="market-button-title">Amazon.com</span>
</a>
  </center> 
</div>

  </div>
  <div className='right' style={{flex:1,marginTop:"50px",marginBottom:"50px"}}>
  
  <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="900px"
  height="400px"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>
  </div>
</div>



<AmazonFooter />
    </>
  )
}

export default Category