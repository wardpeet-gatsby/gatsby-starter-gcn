import { createElement } from 'react'

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const components = getHeadComponents()

  components.push(
    createElement('link', {
      rel: 'preconnect',
      key: 'ctfassets',
      href: 'https://images.ctfassets.net',
    })
  )

  replaceHeadComponents(components)
}
