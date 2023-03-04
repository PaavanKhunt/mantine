import { useMantineTheme, MantineTheme } from '@mantine/core';

function getColor(theme: MantineTheme) {
  const random = Math.round(Math.random() * 9);
  console.log(random);

  return theme.colors.blue[random];
}

export function Demo() {
  const theme = useMantineTheme();
  return (
    <div style={{ background: getColor(theme), width: '5rem', height: '5rem' }}>
      <p>Hello World</p>
    </div>
  );
}
