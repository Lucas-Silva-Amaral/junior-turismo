import Box from 'src/components/atoms/Box'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'

export default function Home() {
  return (
    <Box bgColor={'red'}>
      <Typography variant="h1">
        APROVEITE as promoções DE VIAGEM PARA CONHECER O BRASIL
      </Typography>
      <Button variant={'primary'}>Hello</Button>
    </Box>
  )
}
