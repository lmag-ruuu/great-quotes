export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Todo model on the frontend
export interface quote {
  _id?: number;
  author: string;
  text: string;
  comments: Array<String>;
}
