import { useState } from 'react'
import './Admin.css'


function Admin() {
const [couponCode, setCouponCode] = useState("")
const [couponDiscount, setCouponDiscount] = useState(0)
const [coupons, setCoupons] = useState([])

const [productTitle, setProductTitle] = useState("")
const [productCategory, setProductCategory] = useState("")
const [productImage, setProductImage] = useState("")
const [productPrice, setProductPrice] = useState(0)
const [products, setProducts] = useState([])


function saveProduct() {
    console.log(productTitle)
    console.log(productCategory)
    console.log(productImage)
    console.log(productPrice)

    const newProduct = {
        title: productTitle,
        category: productCategory,
        image: productImage,
        price: productPrice
    }

    setProducts([...products, newProduct])

    setProductTitle()
    setProductCategory()
    setProductImage()
    setProductPrice()
    
}

function saveCoupon() {
    console.log(couponCode)
    console.log(couponDiscount)

    const newCoupon = {
        code: couponCode,
        discount: couponDiscount
    }

    setCoupons([...coupons, newCoupon])
    
}



    return (
        <div>
            <h1>Store administration</h1>

            <div className='d-flex gap-4'>

                <section className='w-50'>
                    <h3>Add Products</h3>
                    <div className='border bg-white p-4'>
                        <div className='mb-4'>
                            <label className='form-label'>Title</label>
                            <input 
                            type="text" 
                            className='form-control'
                            value={productTitle}
                            onChange={(e) => setProductTitle(e.target.value)}
                            />

                        </div>

                        <div className='mb-4'>
                            <label className='form-label'>Category</label>
                            <input 
                            type="text" 
                            className='form-control' 
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                            />

                        </div>

                        <div className='mb-4'>
                            <label className='form-label'>Image (URL)</label>
                            <input 
                            type="url" 
                            className='form-control'
                            placeholder='https://example.com/image.jpg'
                            value={productImage}
                            onChange={(e) => setProductImage(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label'>Price</label>
                            <input 
                            type="number" 
                            className='form-control' 
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}

                            />
                        </div>

                        <button className='btn btn-dark' onClick={saveProduct}>Save Product</button>
                    
                    </div>

                    {/* <div>
                        <h5>Product List:</h5>

                        {
                            products.length == 0
                            ? <p>There are no products</p>
                            :

                            products.map(product => (
                                //card
                                <li>{product.title} - {product.price}</li>
                            ))
                        }
                    </div> */}

        <div>
            <h5>Product List:</h5>

            {products.length === 0 ? (
                <p>There are no products</p>
            ) : (
                <div className="row g-3">
                {products.map((product) => (
                    <div className="col-12 col-md-6 col-lg-4" key={product._id || product.title}>
                    <div className="card shadow-sm h-100">

                        {/* image */}
                        <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{width: "100%", height: "160px", objectFit: "cover" }}
                        />

                        <div className="card-body">
                        {/* category badge */}
                        <span className="badge text-bg-light border mb-2">
                            {product.category}
                        </span>

                        {/* title */}
                        <h6 className="card-title mb-2">{product.title}</h6>

                        {/* price */}
                        <p className="card-text fw-bold mb-0">
                            ${Number(product.price).toFixed(2)}
                        </p>
                        </div>

                    </div>
                    </div>
                ))}
                </div>
            )}
            </div>


                </section>

                <section className='w-50'>
                    <h3>Add Coupons</h3>

                    
                    <div className='border bg-white p-4'>
                        <div className='mb-4'>
                            <label className='form-label'>Coupon Code</label>
                            <input 
                                type='text' 
                                className='form-control'
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='form-label'>Discount</label>
                            <input 
                                type="number"
                                className='form-control' 
                                value={couponDiscount}
                                onChange={(e) => setCouponDiscount(e.target.value)}
                            />
                        </div>

                        <button className='btn btn-dark' onClick={saveCoupon}>Save Coupon</button>
                    </div>

                    <div>
                        <h5>Coupons List</h5>

                        {
                            coupons.length == 0
                            ? <p>There's no coupons</p>
                            :

                            coupons.map(coupon => (
                                <li>{coupon.code} - {coupon.discount}</li>
                            ))
                        }
                    </div>
                </section>

             </div>

        </div>
    )
}

export default Admin