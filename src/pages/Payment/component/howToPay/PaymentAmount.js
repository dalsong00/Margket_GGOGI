import React from 'react';
import './PaymentAmount.scss';

const PaymentAmount = ({ calTotalPrice, userPoint }) => {
  const PAYMENT_AMOUNT = [
    {
      id: 1,
      title: '주문금액',
      price: calTotalPrice && parseInt(calTotalPrice()).toLocaleString(),
    },
    {
      id: 2,
      title: '배송비',
      price: 0,
    },
    {
      id: 3,
      title: '적립금 사용',
      price: parseInt(calTotalPrice()).toLocaleString(),
    },
    {
      id: 4,
      title: '최종결제금액',
      price: 0,
    },
  ];
  return (
    <div className="paymentAmount">
      <h2 className="paymentAmountTitle"> 결제 금액</h2>
      <div className="paymentAmountInfo">
        {PAYMENT_AMOUNT.map((item) => {
          const { id, title, price } = item;
          return (
            <div className="paymentAmountItem" key={id}>
              <span className="AmountTitle">{title}</span>
              <span className="paymentAmountNum">{price}원</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentAmount;
