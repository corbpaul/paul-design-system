declare module "treat/theme" {
  type TreatTheme = import("./makeTheme").TreatTheme;

  export interface ITheme extends TreatTheme {}
}
