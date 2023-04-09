declare namespace AuthModule {
  export type Tref = HTMLInputElement | null;
  export type TEmail = string;
  export type TPassword = string;
  export type TConfirmPassword = string;
  export interface Iinput {
    value: string;
    ref: Tref;
  }
}