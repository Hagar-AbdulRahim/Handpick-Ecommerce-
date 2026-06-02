import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './headerStyle.css';

export const BottomHeader = () => {
  const navLinks = [
    { navTitle: 'Home', Link: '/' },
    { navTitle: 'All Products', Link: '/AllProducts' },
    { navTitle: 'about', Link: '/about' },
    { navTitle: 'Contact', Link: '/contact' },
  ];

  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <Navbar expand='lg' className='border-top py-2 bottom-header'>
      <Container>
        <Navbar.Toggle aria-controls='bottom-navbar' />

        <Navbar.Collapse id='bottom-navbar'>
          <Nav className='mx-auto align-items-center gap-3 bottom-nav'>
            {/* Categories */}
            <NavDropdown title='Categories' id='cat-dropdown'>
              {category.map((item, i) => (
                <NavDropdown.Item key={i} href='#'>
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Shop */}
            <NavDropdown title='Shop' id='shop-dropdown'>
              <NavDropdown.Item href='#'>All Products</NavDropdown.Item>
              <NavDropdown.Item href='#'>New Arrivals</NavDropdown.Item>
              <NavDropdown.Item href='#'>Best Sellers</NavDropdown.Item>
            </NavDropdown>

            {/* Links */}
            {navLinks.map((item, i) => (
              <Nav.Link
                key={i}
                href={item.Link}
                className='fw-medium nav-item-custom position-relative'
              >
                {item.navTitle}
                <span className='nav-underline'></span>
              </Nav.Link>
            ))}

            {/* Auth */}
            <div className='d-flex align-items-center gap-2 auth-section ms-lg-3'>
              <Nav.Link href='/login' className='auth-link'>
                Login
              </Nav.Link>

              <Nav.Link href='/register' className='auth-link register'>
                Register
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
