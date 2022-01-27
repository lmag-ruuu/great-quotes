//External dependencies

import { ObjectId } from "mongodb";

//Class implementation

export default class Quote {
  constructor(
    public author: string,
    public text: string,
    public id?: ObjectId
  ) {}
}
