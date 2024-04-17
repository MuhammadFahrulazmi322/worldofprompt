import '@/styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title:"World Of Prompt",
    description:"Discover all prompts you need & Share AI prompts",
    keywords: ["AI prompts", "prompt sharing", "prompt discovery"],
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;