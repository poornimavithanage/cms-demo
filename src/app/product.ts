export class Product{
  public code: string;
  public description: string;
  public size: string;
  public unitPrice: number;
  public qtyOnHand: number;

  constructor(code: string, description: string, size: string, unitPrice: number, qtyOnHand: number) {
    this.code = code;
    this.description = description;
    this.size = size;
    this.unitPrice = unitPrice;
    this.qtyOnHand = qtyOnHand;
  }
}
