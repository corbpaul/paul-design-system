export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>;

export const normaliseResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>,
): Readonly<[Keys, Keys, Keys]> => {
  if (typeof value === "string" || typeof value === "number") {
    return [value, value, value];
  }

  if ("length" in value) {
    const { length } = value;
    const [mobileValue, tabletValue] = value;

    switch (+length) {
      case 1:
        return [mobileValue, mobileValue, mobileValue];
      case 2:
        return [mobileValue, tabletValue, tabletValue];
      case 3:
        return value as Readonly<[Keys, Keys, Keys]>;
      default:
        throw new Error(
          `Invalid responsive prop length: ${JSON.stringify(value)}`,
        );
    }
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`);
};

export const mapResponsiveProp = <
  Keys extends string | number,
  MappedValues extends string
>(
  value: ResponsiveProp<Keys> | undefined,
  valueMap: Record<Keys, MappedValues>,
): ResponsiveProp<MappedValues> | undefined => {
  if (value === undefined) {
    return value;
  }

  // If it's not a responsive prop, just map it directly
  if (typeof value === "string" || typeof value === "number") {
    return valueMap[value];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value,
  );

  return [valueMap[mobileValue], valueMap[tabletValue], valueMap[desktopValue]];
};

export const resolveResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>,
  mobileAtoms: Record<Keys, string>,
  tabletAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
) => {
  if (typeof value === "string" || typeof value === "number") {
    return mobileAtoms[value!];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value,
  );

  return `${mobileAtoms[mobileValue!]}${
    tabletValue !== mobileValue ? ` ${tabletAtoms[tabletValue!]}` : ""
  }${desktopValue !== tabletValue ? ` ${desktopAtoms[desktopValue!]}` : ""}`;
};
