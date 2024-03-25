import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement as any,
    });

    if (stripeError) {
      setError(stripeError.message as any);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:8000/api/payment/pay', {
        amount: 1000,
        paymentMethod: paymentMethod.id
      });

      if (data.success) {
        console.log('Payment successful:', data);
        // Handle successful payment here (e.g., display a confirmation message)
      } else {
        console.error('Payment failed:', data.message);
        setError(data.message || 'Payment failed');
      }
    } catch (error: any) {
      console.error('Error during payment:', error.response?.data?.message || error.message);
      setError(error.response?.data?.message || 'An error occurred during payment');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">Card Details</label>
          <div className="mt-1 bg-gray-100 p-3 rounded">
            <CardElement id="card-element" options={{hidePostalCode: true}} />
          </div>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {loading ? 'Processing…' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
