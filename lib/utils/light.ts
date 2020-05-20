import { getLuminance, parseToHsl, parseToRgb, toColorString } from "polished";

const smoothSaturation = (saturation: number, luminance: number) => {
  const isBright = luminance > 0.6;

  if (isBright) {
    return saturation * 0.8;
  }

  return saturation * 0.45;
};

const smoothLightness = (lightness: number, luminance: number) => {
  const isBright = luminance > 0.6;

  if (isBright) {
    return 0.95 - lightness * 0.03;
  }

  return 0.95 - lightness * 0.06;
};

export function getLightVariant(color: string) {
  const { hue, saturation, lightness } = parseToHsl(color);
  const luminance = getLuminance(color);

  return toColorString({
    hue,
    saturation: smoothSaturation(saturation, luminance),
    lightness: smoothLightness(lightness, luminance),
  });
}

export const isLight = (inputColor: string) => {
  return [inputColor].some((color) => {
    const { red, green, blue } = parseToRgb(color);

    //   - YIQ:
    //     https://en.wikipedia.org/wiki/YIQ
    //   - Calculating contrast:
    //     https://24ways.org/2010/calculating-color-contrast/
    const yiq = (red * 299 + green * 587 + blue * 114) / 1000;

    return yiq >= 128;
  });
};
