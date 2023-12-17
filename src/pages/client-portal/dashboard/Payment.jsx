import creditCards from "../../../assets/credit-cards.png"

function Payment() {
    let date = new Date();
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());
    let minExpDate = year + "-" + month;

    return (
        <>
            <h2>Make Payment</h2>
            <p>We accept all major credit and debit cards.</p>
            <img src={creditCards} className="credit-cards"/>
            <form className="payment-form">
                <div className="name-container">
                    <div className="form-item">
                        <label htmlFor="first-name">
                            First name:
                        </label>
                        <input type="text" id="first-name"  className="name-input"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="last-name">
                            Last name:
                        </label>
                        <input type="text" id="last-name" className="name-input"/>
                    </div>

                </div>
                <div className="card-container">
                    <div className="form-item">
                        <label htmlFor="card-number">
                            Card number:
                        </label>
                        <input type="number" id="card-number" className="card-input"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="month">
                            Expiration date:
                        </label>
                        <input type="month" min={minExpDate} id="month" className="exp-input"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="cvv">
                            CVV:
                        </label>
                        <input type="number" min="000" max="999" step="1" pattern="([0-9][0-9][0-9])" id="cvv"  className="cvv-input"/>
                    </div>
                </div>

                <div className="email-zip-container">
                    <div className="form-item">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input type="email" id="email" className="email-input"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="zip-code">
                            Zip code:
                        </label>
                        <input type="number" id="zip-code" className="zip-input"/>
                    </div>

                </div>

                <div className="form-item">
                    <label htmlFor="amount">
                        Amount:
                    </label>
                    <input type="number" min="0.00" step="0.01" pattern="([0-9][0-9][0-9][0-9][0-9].[0-9][0-9])" id="amount"  className="amount-input"/>
                </div>
                <input type="submit" value="Pay Now" className="payment-confirmation-button"/>
            </form>
        </>
    )
}

export default Payment;