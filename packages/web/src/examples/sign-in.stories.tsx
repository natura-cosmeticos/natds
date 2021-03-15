import * as React from 'react'
import { Meta, Story } from '@storybook/react'
import { Card } from '../Components/Card'

export default {
  title: 'Examples/Sign In'
} as Meta

const Button = React.lazy(() => import('../Components/Button'))
const Container = React.lazy(() => import('../Components/Container'))
const GridContainer = React.lazy(() => import('../Components/GridContainer'))
const GridItem = React.lazy(() => import('../Components/GridItem'))
const Link = React.lazy(() => import('../Components/Link'))
const Spacing = React.lazy(() => import('../Components/Spacing'))
const TextField = React.lazy(() => import('../Components/TextField'))
const Typography = React.lazy(() => import('../Components/Typography'))

// eslint-disable-next-line max-lines-per-function
const Template : Story = () => (
  <Container component="main" maxWidth="xs">
    <Card>
      <Typography component="h1" variant="h5">Sign in</Typography>
      <form noValidate>
        <Spacing marginBottom="tiny" marginTop="small">
          <TextField
            autoComplete="email"
            fullWidth
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
            placeholder="Valid email address"
            required
            type="email"
            variant="outlined"
          />
        </Spacing>
        <Spacing marginBottom="tiny" marginTop="small">
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            placeholder="Valid password"
            required
            type="password"
            variant="outlined"
          />
        </Spacing>
        <Button
          color="primary"
          fullWidth
          type="submit"
          variant="contained"
        >
          Sign In
        </Button>
        <GridContainer>
          <GridItem xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </GridItem>
          <GridItem>
            Don&#8217;t have an account?
            {' '}
            <Link href="#" variant="body2">
              Sign Up
            </Link>
          </GridItem>
        </GridContainer>
      </form>
    </Card>
  </Container>
)

export const SignIn : Story = Template.bind({})
