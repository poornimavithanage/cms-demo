export class OrderDetail{

  public productCode: string;
  public orderId: number;
  public quantity: number;
  public price: number;


  constructor(productCode: string, orderId: number, quantity: number, price: number) {
    this.productCode = productCode;
    this.orderId = orderId;
    this.quantity = quantity;
    this.price = price;
  }
}
