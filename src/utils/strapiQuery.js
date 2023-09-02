import qs from 'qs'
import axios from 'axios'

const strapiBaseUrl = import.meta.env.VITE_REACT_APP_STRAPI_BASE_URL ?? ''
const strapiToken = import.meta.env.VITE_REACT_APP_STRAPI_TOKEN ?? ''
const axiosTimeout = 4000

const axiosHeaders = {
  Authorization: `bearer ${strapiToken}`,
}

const pageFields = [
  'title',
  'underlineTitle',
  'description',
  'useGradientNoiseBackground',
]

const createAxiosConfig = (url, params) => ({
  headers: axiosHeaders,
  timeout: axiosTimeout,
  params,
  paramsSerializer: (params) =>
    qs.stringify(params, { encodeValuesOnly: true }),
})

async function getPropertyByPath(obj, path) {
  const properties = path.split('.')
  let current = obj

  for (const prop of properties) {
    if (current[prop] === undefined) {
      return undefined // Property doesn't exist
    }
    current = current[prop]
  }

  return current
}

async function fetchData(url, params, extraction) {
  const response = {
    data: null,
    error: null,
  }

  try {
    const { data } = await axios.get(url, createAxiosConfig(url, params))
    response.data = extraction
      ? await getPropertyByPath(data, extraction)
      : data.data
  } catch (error) {
    response.error = error
  }

  return response
}

async function getPages(pagesFilter) {
  const params = {
    filters: {
      name: {
        $in: pagesFilter,
      },
    },
    fields: pageFields,
    populate: {
      components: {
        populate: '*',
      },
    },
    publicationState: 'live',
  }

  return await fetchData(`${strapiBaseUrl}/pages`, params)
}

async function getMenu() {
  const params = {
    populate: {
      pages: {
        fields: ['title', 'slug'],
      },
    },
  }

  return await fetchData(
    `${strapiBaseUrl}/menu`,
    params,
    'data.attributes.pages.data'
  )
}

async function getSpaLanding() {
  const params = {
    populate: {
      pages: {
        fields: pageFields,
        populate: [
          'components',
          'components.images',
          'components.sections',
          'components.button',
          'components.cards',
        ],
      },
    },
  }

  return await fetchData(
    `${strapiBaseUrl}/landing-page`,
    params,
    'data.attributes.pages.data'
  )
}

async function getFooter() {
  const params = {
    fields: ['body'],
  }

  return await fetchData(
    `${strapiBaseUrl}/footer`,
    params,
    'data.attributes.body'
  )
}

async function getSocialMedia() {
  const params = {
    fields: ['discord', 'linkedin'],
  }

  return await fetchData(
    `${strapiBaseUrl}/social-media`,
    params,
    'data.attributes'
  )
}
export { getPages, getMenu, getSpaLanding, getFooter, getSocialMedia }
