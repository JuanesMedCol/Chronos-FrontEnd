// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import {  Box } from '@mui/material';

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()

  //const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Bienvenido a Chronos 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        "Valora cada minuto de tu jornada laboral, pues el tiempo bien empleado no solo impulsa nuestro progreso, sino que también nos acerca a nuestros objetivos con mayor eficiencia y satisfacción."
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
        <Button size='small' variant='contained'>
          Marcar Entrada
        </Button>
        <br></br>
        <Button size='small' variant='contained'>
          Marcar Salida
        </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Trophy
