import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <script
          id='piano-script'
          src='//cdn.tinypass.com/api/tinypass.min.js'
        />
      </Head>
      <h1>Index page</h1>
    </div>
  )
}
