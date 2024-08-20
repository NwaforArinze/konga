import React from 'react'
import '../css/sponsored.css'

const Sponsored = () => {
    const deals = [
        {
          imgSrc: '', // Add image sources here
          title: 'HP Hp 203a Yellow Original Laser',
          currentPrice: '$121,159',
          originalPrice: '$138,000',
          discount: '-12%',
          savedAmount: 'You saved $16,841',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'Actuated Standard Kit',
          currentPrice: '$525,159',
          originalPrice: '$583,400',
          discount: '-10%',
          savedAmount: 'You saved $58,400',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'iPower 5kva Inverter Infiniti',
          currentPrice: '$1,101,400',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'HP Hp 203a Yellow Original Laser',
          currentPrice: '$121,159',
          originalPrice: '$138,000',
          discount: '-12%',
          savedAmount: 'You saved $16,841',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'Actuated Standard Kit',
          currentPrice: '$525,159',
          originalPrice: '$583,400',
          discount: '-10%',
          savedAmount: 'You saved $58,400',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'iPower 5kva Inverter Infiniti',
          currentPrice: '$1,101,400',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'HP Hp 653 Original Ink',
          currentPrice: '$22,896',
          originalPrice: '$226,200',
          discount: '-13%',
          savedAmount: 'You saved $3,304',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'iTec Electric Start 7.5kw Generator',
          currentPrice: '$689,500',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
        {
          imgSrc: '', // Add image sources here
          title: 'iPower Parallel Kit',
          currentPrice: '$58,600',
          originalPrice: '',
          discount: '',
          savedAmount: '',
        },
      ];
    
      return (
        <div className="overall-sponsored">
          <div className="sponsored-header">
            <h1>Sponsored Products</h1>
          </div>
          <div className="deals-slider">
            {deals.map((deal, index) => (
              <div className="sponsored-item" key={index}>
                <img src={deal.imgSrc} alt={deal.title} />
                <div className="sponsored-info">
                  <p>{deal.title}</p>
                  <div className="sponsored-price-info">
                    <h4>{deal.currentPrice}</h4>
                    {deal.originalPrice && <p>{deal.originalPrice}</p>}
                    {deal.discount && <h6>{deal.discount}</h6>}
                  </div>
                  {deal.savedAmount && <p className='saved-amount'>{deal.savedAmount}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default Sponsored
