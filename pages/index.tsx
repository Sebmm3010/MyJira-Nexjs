import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="MyJira | Home">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Pendientes' />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='En progreso' />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Completado' />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default HomePage
