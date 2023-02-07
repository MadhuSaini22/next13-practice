import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="mx-32 my-12">
        <nav className="bg-blue-500 p-4 text-white">
          <ul className="flex">
            <li className="mr-6">
              <a href="/">Home</a>
            </li>
            <li className="mr-6">
              <a href="/about">About</a>
            </li>
            <li className="mr-6">
              <a href="/upcoming">Upcoming</a>
            </li>
            <li className="mr-6">
              <a href="/rated">Top Rated</a>
            </li>
            <li className="mr-6">
              <a href="/trendy">Trendy</a>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
