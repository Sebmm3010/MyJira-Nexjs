import { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="MyJira | Home">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              
              <CardHeader title='Pendientes' />

              <NewEntry/>
              <EntryList status="pendiente"/>

            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>

              <CardHeader title='En progreso' />
              <EntryList status="en-progreso"/>

            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>

              <CardHeader title='Completado' />
              <EntryList status="completado"/>

            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default HomePage
