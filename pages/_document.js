import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
    return(
            <Html>
                <Head>
                    <meta name="description" content=" Paloma Salazar - Nutrición " />
                    <meta name="facebook-domain-verification" content="qetz567rndd1smys3z5mnt00wkvtls" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet" />
                </Head>
                <body>
                        <Main />
                        <NextScript /> 
                </body>
            </Html>
    )
}