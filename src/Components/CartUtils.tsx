
export const calculateTotal = (cart: { price: string; quantity: number }[]) => {
    let subtotal = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity && !isNaN(item.quantity) ? item.quantity : 1;
      subtotal += price * quantity;
    });
    return subtotal;
  };
  