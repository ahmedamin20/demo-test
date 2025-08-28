export type TGlobalResponseType<T> = {
  data: T;
  message: string;
  status: number;
  code: number;
};
