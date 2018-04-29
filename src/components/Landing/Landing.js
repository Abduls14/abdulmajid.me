import React from "react";
import "./Landing.css";

const Landing = () => (
  <div className="wall">
    <div className="container">
      <h1 className="banner header">
        Hi there! 👋 I am <br />Abdulmajid Hamza
      </h1>
      <h4 className="tagline">
        I am a Computer Scientist.<br />
        <span className="subtagline">
          <span>Currently developing cool 😎 software at </span>
          <a target="_blank" href="http://studio14online.co.uk/">
            <img
              className="s14"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAE40lEQVR4nOyZeWgUVxzH59pr1uyszeGBhtREaUmVNg0hqRCatIRS2mJSxdpDN2kiBiwIPaUiSkGJB9QcNlhNL9qUahSNtUIxmBaJhJK2xpbaw2pSIyFxj8nuzOzs7nslJGxDZrNz7JstE+b7X3772+9vPnlv35vfe9QwVo3NLxH/9wOgl4lkBJlIRpCJZASZSEaQiWQEmUhG0DxEolL8PpmXbX28EIvGhHM/QJbX7GMpW+VYV0LmZsEYiN4YEc72R68NabPCNfZLtNWxvpT2VNrKC3FicqgjN/4ZK9sJ/ZzqJ8jOcB9rdDxXguN4PAgh5Dq/8ze0Y7yo2lAdEkVYKx+iXyx3VJcSGY5ZHwZPfBtoaFdVnipclvn1Lio3O+GnfHe/d10TBlVZKkaiVi+nPZX0S+VkjnuuHBAW72Z7sGBYYW0ix5U9cIhampkkx1vbzH/Sq9Bw+lFlM+jGKmfdE5ai/JkTI/Ej2qzW4nzx8q8KazNHtybnwTAs4+1qtUjyKx5z2GN9tECWZ0rkisUKC9tqSuiaMtk0ywPLqcJlCj2nJI8kfDOgwo62K0nDGdrdXK/Q01K6SvkDKEIKvHZCvH5blamsXE0vy065uKh8pSM/nS+bAUZ8Y8Vv2p8vtVc9TK1cgjNOIsNO5eaoKjNTlpJ8Z31VgkIsR7hoaZxwKhr5uJRttWJM6LwidF6Z+sv2TFHWuXdVlflPJMG0NuDE7F8mCITYfSfdTR6NtjOU7hci5+vP2opXSuPs/q7Y0DiSEmlFIgsWuXZvlMajt0ZDLRdQVUkrkrt9G0HbZgUhhP7tH2J8BFWV9CE56irslWukcf50X/jCjwgLpQmJWMwwB7ZI44DlAjs6ENdCazeXmCN15H0Z0nhg9xfgjg9trXQg2TetdaxfK40L3//CtV5EXk53JGKJe2HbVukrIuDD/ro2DKjsHJRURO44S0zLq4R7gTQ+sb8r9teoHhX1RbJWraFrHpPGI78NBw+c1amonkgkwRxMsMpNbkSNxzAxqlNZHZGcO562rs6TxvkzfWKv0jZRg1I9IZpL5Ioc155N0jiEkOvoIQsS9AvEosRHADhDT+YDGBvxYoL8S4Y+SCTh/mh7wqYAx/Gs87tUmTk3Vzg3V0z+O8SI0DPIvvNZ8vMwXSYevtBpeVBdd63I1mpxPFWUdWkvnuNKkqYLEhyf8NW1Qoh+z5mcAZkuxwsJNu649FoewucHgke6dTInkzb5Oq547M7PkR9aTCl2J1mzqOe+FI7664/CWAytKwgJwqmrSRL0fXuI9P/J7juF0BD4JryvvA/u+pPk6LUvxRXcexIMj+N2q2wm9cj9C2qflMaF3utCVx/kxejNUfHq77L9r+5IGIDc8R4lifaNZQmRotduh9T0IIgnHhRU350gF7JRggCw733FdVxCZahZaJAAF/Z5mpMvRBqd2VC4Z1DVVxAgRf4Y8W44qPkeMomEy4O+LS1g+J6qb6WKxJ3p89e2pXJLm1CAD7N7vgwd7tbQyWtHAiwXeONj7jjiHw+EkD/dx771aezvMW0OGpHEn256NxxCfngQHRrzb/sgfPHnVEy03KgTSxcCXxDhke+0bV4WvBeEE0KKPlpGCYwgPkyctr1lwJuL9MhEMoJMJCPIRDKCTCQjyEQygkwkI2geIv0bAAD//wDBmsZS4BLvAAAAAElFTkSuQmCC"
            />
          </a>
        </span>
      </h4>
      <ul className="contacts">
        <li>
          <a target="_blank" href="https://twitter.com/__skampa__">
            <i className="ion-social-twitter-outline" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Abduls14">
            <i className="ion-social-github-outline" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Landing;
