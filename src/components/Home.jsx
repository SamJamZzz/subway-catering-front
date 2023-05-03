import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='home-content'>
      <section className='order-online'>
        <div>
          <h3 className='order-text yellow-text'>DELICIOUS AND DELIVERED</h3>
          <h1 className='order-text'>Get all that good <span className='yellow-text'>SUBWAY&#174;</span> taste without going anywhere</h1>
          <a className='order-text subway-link' href="https://order.subway.com/en-CA/restaurant/11425/menu">ORDER ONLINE</a>
        </div>
        <div>
        <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-6-inch-sub.png" alt="6-inch sub" />
        </div>
      </section>

      <section className='address-info'>
        <h2>6626B East Hastings Street, Unit B Kensington Square Plaza, Burnaby V5B 1S2</h2>
      </section>

      <section className='delivery'>
        <h2>Ordering for one or your whole family? We got you. Check out our partners below.</h2>
        <div className='delivery-services'>
          <div className='service-segment'>
            <a href="https://www.doordash.com/business/subway-3720">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/06/doordash-Logo.png" alt="DoorDash" />
            </a>
            <p>Get all that good Subway&#174; taste without going anywhere with DoorDash! Luckily, DoorDash is available in most major cities in Canada.</p>
          </div>
          <div className='service-segment'>
            <a href="https://www.ubereats.com/ca">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/06/uber-eats-logo-e1620501988311.png" alt="UberEats" />
            </a>
            <p>Get great food from Subway&#174; restaurants fast with Uber Eats! The best part is you can track your sub to your door.</p>
          </div>
          <div className='service-segment'>
            <a href="https://www.skipthedishes.com">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/06/skip-the-dishes-logo-1024x308.png" alt="DoorDash" />
            </a>
            <p>Ordering Subway&#174; delivery with SkipTheDishes is even easier than eating it! Wherever you are, all you gotta do is order and answer the door.</p>
          </div>
        </div>
      </section>

      <section className='delivery-services delivery-info'>
        <div className='service-segment'>
          <img src="https://wecatersubs.com/wp-content/uploads/2020/05/commerce-and-shopping.svg" alt="Fast Delivery" />
          <div>
            <h3>Fast Delivery</h3>
            <p>Your favorite sub delivered right to your doorstep</p>
          </div>
        </div>
        <div className='service-segment'>
          <img src="https://wecatersubs.com/wp-content/uploads/2020/05/location-1.svg" alt="Convenient Location" />
          <div>
            <h3>Convenient Location</h3>
            <p>Your neighborhood Subway for over 17 years</p>
          </div>
        </div>
        <div className='service-segment'>
          <img src="https://wecatersubs.com/wp-content/uploads/2020/05/food-and-restaurant.svg" alt="Delicious Food" />
          <div>
            <h3>Delicious Food</h3>
            <p>Discover a wide variety if great sandwiches</p>
          </div>
        </div>
      </section>

      <section className='menu'>
        <h2 className='yellow-text'>Want a bite? Order now!</h2>
        <p>We Handle The Food & Drink, You Enjoy The Event! Try Subway&#174; Catering Today. Remote Ordering. Subs, Wraps & More. Catering. Make It What You Want&trade;. Quality Ingredients.</p>
        <div className='menu-items'>
          <div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/1008">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/grilled-ciabatta.jpg" alt="Grilled Ciabatta" />
              </a>
              <h4>Grilled Ciabatta</h4>
            </div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/1010">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/grilled-subway.jpg" alt="Grilled Wraps" />
              </a>
              <h4>Grilled Wraps</h4>
            </div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/3">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-sandwiches.jpg" alt="All Sandwiches" />
              </a>
              <h4>All Sandwiches</h4>
            </div>
          </div>
          <div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/4">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-6inch.jpg" alt="8 Under 6" />
              </a>
              <h4>8 Under 6</h4>
            </div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/1">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-breakfast.jpg" alt="Breakfast" />
              </a>
              <h4>Breakfast</h4>
            </div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/5">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/05/kids-pack.jpg" alt="Kids' Pack&#174;" />
              </a>
              <h4>Kids' Pack&#174;</h4>
            </div>
          </div>
          <div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/6">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-salad.jpg" alt="Salads" />
              </a>
              <h4>Salads</h4>
            </div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/7">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-sides.jpg" alt="Sides" />
              </a>
              <h4>Sides</h4>
            </div>
            <div className='menu-item'>
              <a href="https://order.subway.com/en-CA/restaurant/11425/menu/category/8">
                <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-drinks-01.jpg" alt="Drinks" />
              </a>
              <h4>Drinks</h4>
            </div>
          </div>
        </div>
        <a className='subway-link' href="https://order.subway.com/en-CA/restaurant/11425-0/menu">ORDER NOW</a>
      </section>

      <section className='misc'>
        <div className='misc-item'>
          <a href="/school-lunch">
            <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-north-burnaby-store.jpg" alt="Subway North Burnaby Store" />
          </a>
          <p>Ask about our price guarantee and special offer for your first school lunch</p>
        </div>
        <div className='misc-item'>
          <a href="https://www.subway.com/en-CA/MenuNutrition/Nutrition/DownloadTheApp?intcmp=subwayhome:owned:order:remote-ordering-en:fwh-remote-ordering-w2-2020:0:im:0:download-the-pp:mrq:v1&segment_code=0">
            <img src="https://wecatersubs.com/wp-content/uploads/2020/05/catering-subway.jpg" alt="Subway&#174; Mobile App" />
          </a>
          <p>Order ahead and pick up quick with the Subway&#174; App</p>
        </div>
        <div className='misc-item'>
          <a href="https://www.subway.com/en-CA/delivers?intcmp=subwayhome:owned:acquisition:delivery:fwh-delivery-w1-2020:0:im:0:0:mrq:v1&segment_code=0">
            <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-delivery-skip-the-dishes.jpg" alt="Delivery" />
          </a>
          <p>Get it delivered with SkipTheDishes, Uber Eat, DoorDash or Foodora</p>
        </div>
        <div className='misc-item'>
          <a href="https://subway.cashstar.com/store/recipient?locale=en-ca&intcmp=subwayhome%3Aowned%3Aorder%3Agift-card%3Afwh-gift-card-w1-2020%3A0%3Aim%3A0%3A0%3Amrq%3Av1&segment_code=0">
            <img src="	https://wecatersubs.com/wp-content/uploads/2020/05/subway-gift-card.jpg" alt="Gift Card" />
          </a>
          <p>Thank you gift? Saying congrats? Give the gift of subs</p>
        </div>
      </section>
      
      <section className='rewards'>
        <img className='rewards-logo' src="https://wecatersubs.com/wp-content/uploads/2020/05/myway-rewards-logo.png" alt="Subway&#174; Rewards" />
        <div>
          <p>Earn while you eat with Subway&#174; MyWay&trade; Rewards. Get exclusive offers, surprise rewards, and more!</p>
          <a className='subway-link' href="https://id.subway.com/02d64b66-5494-461d-8e0d-5c72dc1efa7f/oauth2/v2.0/authorize?p=b2c_1a_signup-r2&ui_locales=en-CA&client_id=502546f5-a6d5-48ed-be47-6c7a5c984770&redirect_uri=https%3a%2f%2forder.subway.com%2f&response_mode=form_post&response_type=code+id_token&scope=openid&state=OpenIdConnect.AuthenticationProperties%3d3Hxqitd6saC4k6iqyFtPzw9zQq2PNEtHAnbFC1yenEjEXWCmzNV6cfYBWlbSP4ywk2LdYTjvaPsH0Jskj6OuREINIc2lK6fWxSN4sQAeTEAiMGKeVJVQw_m0TbX7bdS_VH8LkCTEm133Jnx2trtkIY28ryonp8Grmt8_rdLnoDITDrwnmbiOpuB0AyDyOrOLFEO6WsKP793FqT7JGHnONvXxIvh-vzZKs8li_xgjUCVxZA20Sr8EWn0kWA_BBjdWxh4CUQ&nonce=637243933197409016.Njk5OGMyOTEtZmRmNS00NDRjLWE1ODYtYzA4YThmMThhMDRkYTE0ZTk3Y2EtZjYwMC00ODU2LTkyNTQtY2VhYmI1MGZlNzBl">JOIN NOW</a>
        </div>
        <img src="https://wecatersubs.com/wp-content/uploads/2020/05/loyalty-token-with-stars.png" alt="Loyalty Token" />
      </section>
    </div>
  )
};

export default Home;