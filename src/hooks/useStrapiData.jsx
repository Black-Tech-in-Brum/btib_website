import { useState, useEffect } from 'react'
import { getMenu, getSpaLanding, getFooter, getSocialMedia } from '@utils/strapiQuery'

const strapiErrors = {}

function useStrapiData(queries) {
	/**
	 * 
	 * Loops through an array of passed queries and fetches data from a read-only Strapi endpoint.
	 * 
	 * Returns a number of possible queries and status regarding those queries.
	 * 
	 */

	// TODO: De-duplicate state management
	const [spaPages, setSpaPages] = useState([])
	const [footer, setFooter] = useState('')
	const [socialMedia, setSocialMedia] = useState()
	const [links, setLinks] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		queries.forEach(async(query, index) => {
			try {
				// TODO: Type guard queries with custom types
				if (query === 'menu') {
					const menuRes = await getMenu()
					menuRes.error ? Object.defineProperty(strapiErrors, query, { value: menuRes.error }) : setLinks(menuRes.data)
				} else if (query === 'spaLanding') {
					const spaLandingRes = await getSpaLanding()
					spaLandingRes.error ? Object.defineProperty(strapiErrors, query, { value: spaLandingRes.error }) : setSpaPages(spaLandingRes.data)
				} else if (query === 'footer') {
					const footerRes = await getFooter()
					footerRes.error ? Object.defineProperty(strapiErrors, query, { value: footerRes.error }) : setFooter(footerRes.data)
				} else if (query === 'social-media') {
					const socialMediaRes = await getSocialMedia()
					socialMediaRes.error ? Object.defineProperty(strapiErrors, query, { value: socialMediaRes.error }) : setSocialMedia(socialMediaRes.data)
				}
			} catch(e) {
				console.log(e)
			} finally {
				index === queries.length - 1 && setIsLoading(false)
			}
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { spaPages, footer, links, socialMedia, isLoading, strapiErrors }
}

export default useStrapiData