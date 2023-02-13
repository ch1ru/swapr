import { Box, ThemeProvider } from "@mui/system";

export default function Message(props) {
    return (
        <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0059B2',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 120,
          height: 50,
          borderRadius: 2,
          bgcolor: props.origin === 'local' ? 'primary.main' : 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {props.message.content}
      </Box>
    </ThemeProvider>
    )
}