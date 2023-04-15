import { Footer } from 'flowbite-react'

export const FooterComponent = () => {
  return (
    <Footer className='w-screen'>
      <Footer.Copyright by='Shashikumar' year={2023} />
      <Footer.LinkGroup>
        <Footer.Link>About</Footer.Link>
        <Footer.Link>Privacy Policy</Footer.Link>
        <Footer.Link>Licensing</Footer.Link>
        <Footer.Link>Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
