import { useTheme } from "../providers/theme"; // ajustá el path a dónde viva tu Header

export function Header() {
  const { colors } = useTheme();

  return (
    <box justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
        <ascii-font
          font="block"
          text="Numen"
          color={[colors.primary, colors.surface]}
        />
        <ascii-font
          font="block"
          text=" Code"
          color={[colors.dimSeparator, colors.surface]}
        />
      </box>
    </box>
  );
}