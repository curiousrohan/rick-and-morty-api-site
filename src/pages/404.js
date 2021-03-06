import React from 'react'
import Helmet from 'react-helmet'

import config from '../../config/SiteConfig'
import ErrorMessage from '../components/Error/Error'
import Layout from '../components/Layout'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title={`Oh Jeez! | ${config.siteTitle}`} />
    <ErrorMessage />
  </Layout>
)

export default NotFoundPage
