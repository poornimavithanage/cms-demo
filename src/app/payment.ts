export class Payment{

public id: number;
public orderId: number;
public totalAmount: number;


  constructor(id: number, orderId: number, totalAmount: number) {
    this.id = id;
    this.orderId = orderId;
    this.totalAmount = totalAmount;
  }
}
