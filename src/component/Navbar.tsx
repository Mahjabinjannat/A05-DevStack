import logoText from '../assets/logo-text.png'

export default function Navbar() {
  return (
    <div className='flex justify-between p-7 container mx-auto'>
      <div>
        <img src={logoText} alt="" />
      </div>
      <ul className='flex justify-between gap-5'>
        <li>Home</li>
        <li className='text-[#475569]'>Technologies</li>
        <li className='text-[#475569]'>Projects</li>
        <li className='text-[#475569]'>About</li>
        <li className='text-[#475569]'>Contact</li>
      </ul>
      <div className='flex gap-5'>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}
