import "opentui-spinner/react";
import { Mode } from "@numencode/database/enums";
import { useTheme } from "../providers/theme";

type Props = {
  mode?: Mode;
};

export function Spinner({ mode = Mode.BUILD }: Props) {
  const { colors } = useTheme();
  const activeColor = mode === Mode.PLAN ? colors.dimSeparator : colors.primary;

  return <spinner name="aesthetic" color={activeColor} />;
};