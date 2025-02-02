export default function Page(){


  return (
    <div className="bg-fuchsia-400 p-20">
      <h1>Welcome to The Flying Baker!</h1>
      <nav className="flex justify-between">
        <a className="underline text-white" href="/">Home</a>
        <a className="underline text-white" href="/about">About</a>
        <a className="underline text-white" href="/products">Products</a>
        <a className="underline text-white" href="/contact">Contact</a>
      </nav>
      <p>This is a simple example of a Next.js app.</p>
    </div>
  )
}