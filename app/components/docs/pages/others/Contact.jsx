import React from 'react';
import menu from '../../../../menu'

require('./Others.css')

const Contact = () => (
  <div className='contact-container'>
    <ul className='contact-ctas'>
      {
        menu.ctas.map((ctas) => {
          const { title, href, icon } = ctas
          return (
            <li key={title}>
              <div>
                <a href={href}>
                  <i className={icon} />
                </a>
              </div>
            </li>
          )
        })
      }
    </ul>
    <p>
    </p>
  </div>
);



export default Contact;