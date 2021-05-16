export class Customer{

  public id: string;
  public name: string;
  public address: string;
  public contact: string;

  constructor(id: string, name: string, address: string, contact: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.contact = contact;
  }
}
