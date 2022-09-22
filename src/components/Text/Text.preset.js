import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const Base = {
  fontFamily: typography.primary,
  fontSize: 15,
  color: colors.black,
};

const Bold = {
  ...Base,
  fontFamily: typography.bold,
};

export const presets = {
  default: Base,
  bold: Bold,

  h1: {
    ...Bold,
    fontSize: 56,
  },
  h2: {
    ...Bold,
    fontSize: 40,
  },
  h3: {
    ...Bold,
    fontSize: 36,
  },
  h4: {
    ...Bold,
    fontSize: 28,
  },
  h5: {
    ...Bold,
    fontSize: 24,
  },
  h6: {
    ...Bold,
    fontSize: 18,
  },
  overline: {
    fontFamily: typography.regular,
    fontsize: 14,
  },
  title: {
    ...Bold,
    fontSize: 14,
  },
  subtitle: {
    ...Bold,
    fontSize: 13,
  },
};
