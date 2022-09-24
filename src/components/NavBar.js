import React from "react";

function NavBar() {
 
  const links = [
    {
      link :"#home",
      id: 1
    },
    {
      link :"#about",
      id: 2
    },
    {
      link :"#projects",
      id: 3
    },
    
  ]

  return (
    <nav>
      {links.map((link) => (
        <a key={link.id} href={link.link}>
          {link.link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
