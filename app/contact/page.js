export default function Page(){
    return <div className="bg-fuchsia-500">
        <h1>Contact</h1>
        <nav className="flex justify-between">
        <a className="underline text-white" href="/">Home</a>
        <a className="underline text-white" href="/about">About</a>
        <a className="underline text-white" href="/products">Products</a>
        <a className="underline text-white" href="/contact">Contact</a>
      </nav>
        <p>This is a simple page.</p>
        <p>Created by GATEWAY.</p>
        <p>Last updated: {new Date().toLocaleString()}</p>
    </div>
}