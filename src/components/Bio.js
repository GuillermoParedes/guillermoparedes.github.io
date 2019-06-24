import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './me.jpg'
import githubPic from './github.png'
import linkedinPic from './linkedin.png'
import twitterPic from './twitter.png'
import gmailPic from './gmail.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={profilePic}
            alt={`Kyle Mathews`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
              borderRadius: rhythm(5),
            }}
          />
          <p>
            Hola!, soy <strong>Guillermo Paredes </strong>
            Frontend Developer en los últimos años, Backend Developer en algunas
            ocasiones. He trabajado con equipos de desarrollo y de manera
            freelancer. Puedes seguirme en twitter como
            <a href="https://twitter.com/_GD_DEV_"> @_GD_DEV_</a>
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(2.5),
          }}
        >
          <a
            href="https://github.com/GuillermoParedes"
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
            }}
          >
            <img
              src={githubPic}
              alt={`Kyle Mathews`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1),
                borderRadius: rhythm(5),
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermo-david-paredes-torrez/"
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
            }}
          >
            <img
              src={linkedinPic}
              alt={`https://www.linkedin.com/in/guillermo-david-paredes-torrez/`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1),
                borderRadius: rhythm(5),
              }}
            />
          </a>
          <a
            href="https://twitter.com/_GD_DEV_"
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
            }}
          >
            <img
              src={twitterPic}
              alt={`https://twitter.com/_GD_DEV_`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1),
                borderRadius: rhythm(5),
              }}
            />
          </a>
          <a
            href="mailto:gdavid.ptorrez@gmail.com?Subject=Hola"
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
            }}
          >
            <img
              src={gmailPic}
              alt={`gdavid.ptorrez@gmail.com`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(1),
                height: rhythm(1),
                borderRadius: rhythm(5),
              }}
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Bio
