import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { EmptyLayout } from '@/components/layouts'
import { SWRConfig } from 'swr'
import axiosClient from '@/api/axios-client'
import { AppPropsWithLayout } from '../models'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false

library.add(fas)

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
    </RecoilRoot>
  )
}

export default MyApp
