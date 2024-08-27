import React from 'react'
import '../css/pictures.css'

const Pictures = () => {
    const deals = [
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_400,f_auto,fl_lossy,dpr_1.0,q_auto/v1664913246/contentservice/furniture.jpg_Sk7P1z9Ms.jpg', // Add image sources here
          title: 'HOME FURNISHING',
          discountInfo: 'Get Up To 70% Off',
          buyNow: 'SHOP NOW >',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_400,f_auto,fl_lossy,dpr_1.0,q_auto/v1664913250/contentservice/fitness.jpg_BJFwyf5Mo.jpg', // Add image sources here
          title: 'FITNESS TOOLS & EQUIPMENT',
          discountInfo: 'Get Fitness Equipment At Amaziing Discounts!',
          buyNow: 'SHOP NOW >',
        },
        {
            imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_400,f_auto,fl_lossy,dpr_1.0,q_auto/v1664913245/contentservice/kids.jpg_B1HPkz9Mo.jpg', // Add image sources here
            title: 'KIDS WEARS & ACCESSORIES',
            discountInfo: 'Get All Kiddies Products At Huge Discounts!',
            buyNow: 'SHOP NOW >',
        },
        {
          imgSrc: 'https://www-konga-com-res.cloudinary.com/image/upload/w_400,f_auto,fl_lossy,dpr_1.0,q_auto/v1664913248/contentservice/tvs.jpg_S1Ew1z9zi.jpg', // Add image sources here
          title: 'TOP DEALS ON TELEVISION',
          discountInfo: 'Get the TV You Want With Bargain Deals!',
          buyNow: 'SHOP NOW >',
        }
    ]

  return (
    <div className='pics'>
      <div className='pics-single'>
        <a href="#"><img src="https://www-konga-com-res.cloudinary.com/image/upload/w_1400,f_auto,fl_lossy,dpr_1.0,q_auto/v1694678388/contentservice/BKTWebMid.jpg_H1cd6Veyp.jpg" alt="" /></a>
      </div>
      <div className='pics-double'>
        <a href=""><img src="https://www-konga-com-res.cloudinary.com/image/upload/w_700,f_auto,fl_lossy,dpr_1.0,q_auto/v1686221838/contentservice/Groctag.jpg_HyEGNN1Pn.jpg" alt="" /></a>
        <a href=""><img src="https://www-konga-com-res.cloudinary.com/image/upload/w_700,f_auto,fl_lossy,dpr_1.0,q_auto/v1686221837/contentservice/Boozetag.jpg_SJNfN41w3.jpg" alt="" /></a>
      </div>

        <div>
            <div className="discount-grid">
            {deals.map((deal, index) => (
            <div className="deal-container" key={index}>
                <div className='desc-image'><img src={deal.imgSrc} alt={deal.title} /></div>
                <div className="discount-container">
                <p className='desc-title'>{deal.title}</p>
                <div className="discount-info">
                    <p>{deal.discountInfo}</p>
                </div>
                <p className='buy-now'>{deal.buyNow}</p>
                </div>
            </div>
            ))}
            </div>
        </div>  

        <div className='about-info'>
            <h3>Konga Online Shopping in Nigeria - Best Shopping Site</h3>
            <p>Konga.com is Nigeria's number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.</p>
        </div>
    </div>
  )
}

export default Pictures
