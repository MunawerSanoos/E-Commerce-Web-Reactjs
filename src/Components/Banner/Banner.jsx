import React from "react";
import './Banner.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Banner = () => {

return(        
     <div>
     <AliceCarousel autoPlay autoPlayInterval="3000">
     <img src="https://img.freepik.com/free-vector/black-friday-sale-design-template-conceptual-layout-web-print_91128-1081.jpg?w=996&t=st=1699532429~exp=1699533029~hmac=692b7443800ce81d32c922e60361e2e38c36804e8536afbcad4996e0572004d9" alt="Banner image" 
     className="banner-wrapper"/>
     <img src="https://img.freepik.com/free-vector/black-friday-deals-voucher-banner-design_1017-34750.jpg?w=826&t=st=1699981910~exp=1699982510~hmac=597493049ed7e399101635a9c30d36e9bf7fe628a441b35e047d7f0ed03724a8" alt="Banner image" 
     className="banner-wrapper"/>
     <img src="https://img.freepik.com/free-vector/black-friday-sale-template-banner-with-text-space_1017-34537.jpg?w=826&t=st=1699982083~exp=1699982683~hmac=109163d2c1354fa69c2504e64108fe908a4601357ab6cc0f8f176405505fd712" alt="Banner image" 
     className="banner-wrapper"/>
     </AliceCarousel>
     
</div>


)

}
export default Banner;