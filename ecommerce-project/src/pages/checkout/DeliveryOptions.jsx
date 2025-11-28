import dayjs from "dayjs";
import { formatMoney } from "../../utils/money.js";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map((option) => {

                let priceSrting = 'Free Shipping';

                if (option.priceCents > 0) {
                    priceSrting = `${formatMoney(option.priceCents)} - shipping`;
                }

                return (
                    <div key={option.id} className="delivery-option">
                        <input type="radio"
                            checked={option.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceSrting}
                            </div>
                        </div>
                    </div>
                );
            })}


        </div>
    );
}