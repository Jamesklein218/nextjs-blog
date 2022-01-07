import '../styles/global.css'

export default function App({ Component, pageProps }) {
  console.log("Render App")
  return <Component {...pageProps} />
}
