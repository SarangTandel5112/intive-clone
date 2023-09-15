import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {people: {elemMatch: {company: {eq: "intive"}}}}) {
        id
        siteMetadata {
          siteUrl
          title
          people {
            company
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default FetchData
