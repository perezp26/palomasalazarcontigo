import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
    return(
            <Html>
                <Head>
                    <meta name="decription" content=" Paloma Salazar - Nutrición " />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap" rel="stylesheet" />
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