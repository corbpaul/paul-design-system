import { getLuminance, parseToHsl, toColorString } from "polished";

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
