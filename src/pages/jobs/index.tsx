// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import ListJobs from 'src/views/jobs/views/ListJobs'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Jobs
          </Link>
        </Typography>
        <Typography variant='body2'>Listado de Jobs</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Listado' titleTypographyProps={{ variant: 'h6' }} />
          <ListJobs />
        </Card>
      </Grid>
      
    </Grid>
  )
}

export default MUITable
