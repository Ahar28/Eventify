import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import Container from '../Container';

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const paymentSummary = {
        description: "Event Registration Fee",
        amount: "100.00",
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        setError(null);

        const cardElement = elements.getElement(CardElement);

        try {
            const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement!,
            });

            if (stripeError) {
                setError(stripeError.message as string);
                setLoading(false);
                return;
            }

            const response = await axios.post('http://localhost:8000/api/payment', {
                amount: 1000, // Amount in cents
                paymentMethodId: paymentMethod!.id,
            });

            if (response.data.success) {
                console.log('Payment successful:', response.data);
                // Handle successful payment here
            } else {
                setError('Payment failed');
            }
        } catch (error) {
            setError('An error occurred during payment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="max-w-4xl mx-auto bg-white p-8 my-5 rounded-lg shadow-md flex justify-between">
                <div className="w-1/2 p-4 border-r">
                    <h3 className="text-lg font-semibold mb-2">Payment Summary</h3>
                    <ul className="space-y-2">
                        <li>
                            <span className="font-medium">{paymentSummary.description}:</span>
                            <span className="float-right">${paymentSummary.amount}</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <span className="font-bold">Total:</span>
                        <span className="float-right font-bold">${paymentSummary.amount}</span>
                    </div>
                </div>

                <div className="w-1/2 p-4">
                    <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">Card Details</label>
                            <div className="mt-1 bg-gray-100 p-3 rounded">
                                <CardElement id="card-element" options={{ hidePostalCode: true }} />
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
            </div>
        </Container>
    );
}

export default PaymentForm;
