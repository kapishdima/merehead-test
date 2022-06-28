export type Action<P = any> = {
  type: string;
  payload?: P;
};
