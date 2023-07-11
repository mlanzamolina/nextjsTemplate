import '@styles/globals.css';

export const metadata = {
    title: "TEMPLATE",
    description: "TEMPLATE to be used for new projects",

}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'>
            </div>
            </div>

            <main className='app'>

                {children}

            </main>
            <div className='footer'>
                <div className='gradient'>
                    <h1>
                        <a href="google.com">TEMPLATE</a>
                    
                    </h1>
                </div>
            </div>

        </body>
    </html>
  )
}

export default RootLayout;