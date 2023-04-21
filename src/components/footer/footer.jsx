import { Footer } from 'flowbite-react'

export const FooterComponent = () => {
  return (
    <Footer className='w-screen'>
      <Footer.Copyright by='Shashikumar' year={2023} />
      <Footer.LinkGroup>
        <Footer.Link className='cursor-pointer'>About</Footer.Link>
        <Footer.Link className='cursor-pointer'>Privacy Policy</Footer.Link>
        <Footer.Link className='cursor-pointer'>Licensing</Footer.Link>
        <Footer.Link className='cursor-pointer'>Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
