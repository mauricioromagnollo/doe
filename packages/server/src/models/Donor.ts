class Donor {

  private _id: string;
  private _name: string;
  private _email: string;
  private _blood: string;

  constructor(id: string, name: string, email: string, blood: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._blood = blood;
  }

  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  set blood(blood: string) {
    this._blood = blood;
  }

  get blood(): string {
    return this._blood;
  }
}

export default Donor;
