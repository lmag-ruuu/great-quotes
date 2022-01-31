// Interface to define our Todo model on the frontend
export interface quote {
  _id?: string;
  author: string;
  text: string;
  comments: Array<String>;
}
