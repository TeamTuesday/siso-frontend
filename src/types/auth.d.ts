export namespace AuthModule {
  type Tref = HTMLInputElement | null;
  type TEmail = string;
  type TPassword = string;
  type TConfirmPassword = string;
  interface Iinput {
    value: string;
    ref: Tref;
  }
}