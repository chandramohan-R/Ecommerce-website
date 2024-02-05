import React from 'react'
function Data(){


 const products = [
    {
        "id": 1,
        "product": "Thornie",
        "category": "Mobiles",
        "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "prize": 161
    },
    {
        "id": 2,
        "product": "Katey",
        "category": "Laptops",
        "image": "http://dummyimage.com/250x250.png/dddddd/000000",
        "prize": 490
    },
    {
        "id": 3,
        "product": "Freda",
        "category": "Electronics",
        "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "prize": 732
    },
    {
        "id": 4,
        "product": "Cameron",
        "category": "Watch",
        "image": "http://dummyimage.com/250x250.png/dddddd/000000",
        "prize": 626
    },
    {
        "id": 5,
        "product": "Caressa",
        "category": "Mobiles",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 722
    },
    {
        "id": 6,
        "product": "Kayla",
        "category": "Laptops",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 845
    },
    {
        "id": 7,
        "product": "Sherill",
        "category": "Electronics",
        "image": "http://dummyimage.com/250x250.png/dddddd/000000",
        "prize": 700
    },
    {
        "id": 8,
        "product": "Demetra",
        "category": "Mobiles",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 591
    },
    {
        "id": 9,
        "product": "Chaim",
        "category": "Electronics",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 937
    },
    {
        "id": 10,
        "product": "Jennie",
        "category": "Watch",
        "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "prize": 285
    },
    {
        "id": 11,
        "product": "Raddie",
        "category": "Watch",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 511
    },
    {
        "id": 12,
        "product": "Jaquith",
        "category": "Watch",
        "image": "http://dummyimage.com/250x250.png/dddddd/000000",
        "prize": 481
    },
    {
        "id": 13,
        "product": "Rriocard",
        "category": "Mobiles",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 570
    },
    {
        "id": 14,
        "product": "Willy",
        "category": "Mobiles",
        "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "prize": 744
    },
    {
        "id": 15,
        "product": "Kirby",
        "category": "Laptops",
        "image": "http://dummyimage.com/250x250.png/dddddd/000000",
        "prize": 620
    },
    {
        "id": 16,
        "product": "Corrianne",
        "category": "Laptops",
        "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "prize": 476
    },
    {
        "id": 17,
        "product": "Dyana",
        "category": "Laptops",
        "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "prize": 630
    },
    {
        "id": 18,
        "product": "Ardisj",
        "category": "Electronics",
        "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "prize": 650
    },
    {
        "id": 19,
        "product": "Jere",
        "category": "Electronics",
        "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "prize": 251
    },
    {
        "id": 20,
        "product": "Jordan",
        "category": "Mobiles",
        "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "prize": 299
    }
]
return (
    <>
    
    {
        products.map((product)=>(
            <div key={product.id}>
            <div>Id: {products.id}</div>
            <div>product: {products.product}</div>
            <div>category: {products.category}</div>
            <div>
            
            <img src={product.image} alt={product.product} style={{ maxWidth: '250px', maxHeight: '250px' }} />
          </div>            <div>prize: {products.prize}</div>
            <hr />
            </div>



            )

        )
    }
   
    </>
  )
}

export default Data;