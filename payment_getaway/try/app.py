from flask import Flask, render_template, abort, redirect, request
import stripe

app = Flask(__name__)


stripe_keys = {
  'secret_key': 
  "sk_test_51L4EufDCIFgnebS8ecIKSEHMi9lphGxwCGp8BcYQqwiH5sTTIEQ9EhCSA1nF2cDP46cySJB06yCXDJ45TMUXF4yq00edA2kWLb",
  'publishable_key': 
  "pk_test_51L4EufDCIFgnebS8yH7LrNXJTl2V6iflGroUeFHJFbdrLuIeSZoQy6nGPdd8d2SShPBCy4Jg0nEXdgJ1dpY6wV1f00WXYLpB0S"
}

stripe.api_key = stripe_keys["secret_key"]

products = {
    'megatutorial': {
        'name': 'The Flask Mega-Tutorial',
        'price': 3900,
    },
    'support': {
        'name': 'Python 1:1 support',
        'price': 20000,
        'per': 'hour',
    },
}

@app.route('/')
def index():
    return render_template('index.html', products=products)

@app.route('/order/<product_id>', methods=['POST'])
def order(product_id):
    if product_id not in products:
        abort(404)

    checkout_session = stripe.checkout.Session.create(
       line_items=[
            {
                'price_data': {
                    'product_data': {
                        'name': products[product_id]['name'],
                    },
                    'unit_amount': products[product_id]['price'],
                    'currency': 'usd',
                },
                'quantity': 1,
            },
        ],
            payment_method_types = ['card'],
            mode = 'payment',
            success_url=request.host_url + 'order/success',
            cancel_url=request.host_url + 'order/cancel',
        )
        
    print(checkout_session.url)
    return redirect(checkout_session.url)


@app.route('/order/success')
def success():
    return render_template('success.html')


@app.route('/order/cancel')
def cancel():
    return render_template('cancel.html')

if __name__ == '__main__':
    app.run(debug = True)