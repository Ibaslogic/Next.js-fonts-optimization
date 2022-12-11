import Link from 'next/link';

const menuItems = [
  { label: `Home`, url: `/` },
  { label: `About`, url: `/about` },
  { label: `Contact`, url: `/contact` },
  { label: `TailwindCSS`, url: `/tailwindpage` },
];

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center h-16">
          {menuItems.map(({ url, label }, index) => (
            <li key={index}>
              <Link className="mr-3 text-blue-600" href={url}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
