import Head from "next/head";

const Meta = () => (
    <>
        <Head>
            <title>그린다: 누구든지 하루만에 웹사이트 만들기</title>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#FFFFFF" />
            <meta name="description" content="내 마음대로 초기 mvp 만들기" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta property="og:title" content="Grinda (그린다)" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://grinda.vercel.app/" />
            <meta
                property="og:image"
                content="https://grinda.vercel.app/images/grinda_thumb_primary.png"
            />
            <meta property="og:article:author" content="김하연" />
            <link
                rel="icon"
                href="https://grinda.vercel.app/favicon/favicon-32x32.png"
            />
        </Head>
    </>
);

export default Meta;
