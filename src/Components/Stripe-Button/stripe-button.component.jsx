import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // this is amount converted into cent because deals in cents
  const publishableKey = 'pk_test_51HNaE6DcKDhPL9C1MYxiA23X1eGxhMGjfhvlFEnjZsP5iFRPRlZuhEdkYXkLUIzj6skN6BisdErMGOAYudoctLH600XX0iNnYn'; 
  // publishable key that you got once you loggedin the stripe
  // 
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return ( // below these are the property that are already given by the stripe we are just overridding these.
    <StripeCheckout
      label='Pay Now'
      name='Clothing Ecom'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );// token is basically that is sent to the backend and this would charge but now we'ren't using backend so we are just
  //showing an Alert. 
};

export default StripeCheckoutButton;