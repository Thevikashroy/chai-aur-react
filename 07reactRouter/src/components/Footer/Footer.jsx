import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Reusable Footer Section Component
const FooterSection = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
    <ul className="text-gray-500 font-medium">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          {link.href ? (
            // External link (GitHub)
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-orange-500`} // Hover effect for external link
            >
              {link.text}
            </a>
          ) : (
            // Internal link (Discord in this case)
            <Link
              to={link.to}
              className={`hover:text-orange-500`} // Hover effect for internal link
            >
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

// Reusable Social Media Icon Component
const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={icon.viewBox}>
      <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
    </svg>
    <span className="sr-only">{icon.name}</span>
  </a>
);

export default function Footer() {
  const [cursorColor, setCursorColor] = useState('black'); // default cursor color
  
  const handleMouseMove = (e) => {
    const homeSection = document.getElementById('home-section');
    const homeSectionRect = homeSection.getBoundingClientRect();

    // Check if cursor is over the home section
    if (e.clientX >= homeSectionRect.left && e.clientX <= homeSectionRect.right &&
        e.clientY >= homeSectionRect.top && e.clientY <= homeSectionRect.bottom) {
      setCursorColor('red'); // Change to red when over the home section
    } else {
      setCursorColor('black'); // Default cursor color
    }
  };

  useEffect(() => {
    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const resourcesLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
  ];

  const followUsLinks = [
    { href: "https://github.com/Thevikashroy", text: "Github" }, // Correct link to your GitHub profile
    { href: "www.linkedin.com/in/ vikash-kumar018382221", text: "Linkedin" }, // Correct link to your GitHub profile
    { to: "/", text: "Discord" }, // Internal link to Discord or another page
  ];

  const legalLinks = [
    { to: "#", text: "Privacy Policy" },
    { to: "#", text: "Terms & Conditions" },
  ];

  const socialIcons = [
    {
      href: "https://www.facebook.com/Obroy.vikash", // link of Facebook profile
      icon: {
        name: "Facebook page",
        viewBox: "0 0 8 19",
        path: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z",
      },
    },
    {
      href: "https://discord.com", // link to discord link
      icon: {
        name: "Discord community",
        viewBox: "0 0 21 16",
        path: "M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z",
      },
    },
    {
      href: "https://x.com/@Vikashroy70", // X account profile
      icon: {
        name: "X Logo",
        viewBox: "0 0 24 24",
        path: "M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z",
      },
    },
    {
      href: "https://github.com/Thevikashroy", // GitHub profile
      icon: {
        name: "Vikash kumar",
        viewBox: "0 0 20 20",
        path: "M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",
      },
    },
  ];

  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div id="home-section" className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center" style={{ cursor: `url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 64 64%22%3E%3Ccircle cx%3D%2232%22 cy%3D%2232%22 r%3D%2232%22 fill%3D%22${cursorColor}%22%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')` }}>
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
                loading="lazy"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <FooterSection title="Resources" links={resourcesLinks} />
          <FooterSection title="Follow us" links={followUsLinks} />
          <FooterSection title="Legal" links={legalLinks} />
        </div>

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025
            <a href="https://Thevikashroy.com/" className="hover:underline">
              Vikash roy
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} href={icon.href} icon={icon.icon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
