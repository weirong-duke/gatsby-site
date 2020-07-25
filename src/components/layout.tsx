import React, { ReactNode, useState } from "react"
import InstagramEmbed from 'react-instagram-embed';
import ReactPlayer from 'react-player/youtube'

import {FaGithub, FaLink, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope} from 'react-icons/fa';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Expandable from 'components/Expandable';
import Header from "components/Header";
import Square from 'components/Square';
import 'assets/styles/helpers.scss';
import 'assets/styles/styles.css';
import "components/layout.scss"

const GYM_SQUAT_URL = "https://youtu.be/2gSi5MacPl4"
const GYM_DEADLIFT_URL = "https://youtu.be/23NbLvIVzdk";
const GYM_BENCH_URL = "https://www.instagram.com/p/B3DxBuFFzBA/";
const COMP_SQUAT_URL = "https://www.instagram.com/p/Bq6lln0lnJG/";
const COMP_DEADLIFT_URL = "https://www.instagram.com/p/BlR2rg5AjDo/";
const COMP_BENCH_URL = "https://www.instagram.com/p/BVLTkcEhv6l/";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
      file(relativePath: { eq: "images/blackwhite.png" }) {
        childImageSharp {
          fixed(height:1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dlobot: file(relativePath: { eq: "images/dlobot.png" }) {
        childImageSharp {
          fixed(height:400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      stock: file(relativePath: { eq: "images/stockstock.jpg" }) {
        childImageSharp {
          fixed(height:400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      assassin: file(relativePath: { eq: "images/assassin.png" }) {
        childImageSharp {
          fixed(height:400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deadlift: file(relativePath: { eq: "images/deadlift.png" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      games: file(relativePath: { eq: "images/videogames.png" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [overlayContent, setOverlayContent] = useState<ReactNode>(null);

  const renderPowerliftingExpandable = () => {
    return <Expandable image={data.deadlift.childImageSharp.fixed} title="Powerlifting" top={225}>
      <p>
        I've been powerlifting as a hobby since 2013,
        and competing in competitions since 2014. I enjoy approaching it as a game of sorts;
        whenever I hit a new PR at the gym, I see it as some sort of "level up". A little corny,
        to be sure, but certainly one of the most important aspects of my life.</p>
      <p>Here are my <span className="text-bold">gym</span> and <span className="text-bold text-red">competition</span> maxes as of July, 2020:</p>
      <div className="centered">
        <table className="lifting-table">
          <thead>
          <tr>

            <th>Squat</th>
            <th>Bench</th>
            <th>Deadlift</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td onClick={useYoutubeUrl(GYM_SQUAT_URL)}>600</td>
            <td onClick={useInstagramUrl(GYM_BENCH_URL)}>415</td>
            <td onClick={useYoutubeUrl(GYM_DEADLIFT_URL)}>625</td>
          </tr>
          <tr className="text-red">
            <td onClick={useInstagramUrl(COMP_SQUAT_URL)}>546</td>
            <td onClick={useInstagramUrl(COMP_BENCH_URL)}>368.5</td>
            <td onClick={useInstagramUrl(COMP_DEADLIFT_URL)}>578</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p><a href={"https://usapl.liftingdatabase.com/lifters-view?id=14638"} target="_blank">Results</a></p>
      <p>Touchy subject: how much progress I've lost during 2020 quarantine 😂</p>
    </Expandable>
  }

  const renderVideoGameExpandable = () => {
    return <Expandable image={data.games.childImageSharp.fixed} title="Video Games" top={225}>
      <p>
        Gaming has been a part of my life ever since my sister installed Command & Conquer: Red Alert on our home PC when I was 7 (or was I 8?).
        Occasionally I will dabble in a story-driven single player game, but the majority of my playtime is dedicated to both casual and more competitive
        multiplayer games.
      </p>
      <p>
        I've always been a fairly competitive person about mundane activities and I will <span className="text-bold">generally</span> be able to end up
        on the down slope of the bell curve of any playerbase (except for Valorant, I am ... trash at Valorant).
      </p>
      <p>
        For those who, like me, care:
        <div className="text-bold game-links" >
          <a href="https://aoe2.net/#profile-76561198002029424" target="_blank">Age of Empires 2: Definitive Edition</a>
          <a href="https://pubg.op.gg/user/CHENWEIRONG" target="_blank">PlayerUnknown's: Battlegrounds</a>
          <a href="https://apex.tracker.gg/profile/pc/chenweirong90" target="_blank">Apex Legends</a>
          <a href="https://cod.tracker.gg/warzone/profile/battlenet/weirong%231752/overview" target="_blank">Call of Duty: Warzone</a>
          <a href="http://www.heroesofnewerth.com/playerstats/ranked/WeiWeiWeiWei" target="_blank">Heroes of Newerth (old school)</a>

        </div>


      </p>

    </Expandable>
  }

  const useInstagramUrl = (url: string) => () => {
    setOverlayContent(<InstagramEmbed
      url={url}
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />)
  }

  const useYoutubeUrl = (url: string) => () => {
    setOverlayContent(<ReactPlayer url={url} />)
  }

  return (
      <div
        className="Layout"
        style={{
          backgroundColor: "white",
          margin: `0 auto`
        }}
      >
        <div className="Layout__content">
          <Header siteTitle={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subTitle}/>
          <div className="section">
            <div className="description">
              <div className="section__title first">
                React Developer and Full Stack Enthusiast
              </div>
              <div className="section__subtitle">
                Developing front-end applications utilizing REST APIs and custom backends for over 7 years. I've worked with companies ranging from startups to enterprising corporations; I'd like to think that I am versatile and can adjust to get the job done.
              </div>
              <div className="section__subtitle">
                I enjoy video games, powerlifting, new age board games (plz don't ask me about Monopoly)
              </div>
              <div className="section__links">
                <a>About me</a>
              </div>

            </div>

            <BackgroundImage
              Tag="div"
              backgroundColor={`#FFFFFF`}
              className="portrait"
              fixed={data.file.childImageSharp.fixed}
            >
            </BackgroundImage>
          </div>

          <div className="section">
              <div className="section__title right">
                Projects
              </div>
          </div>

          <div className="section">
            <div className="squares">
              <Square
                image={data.assassin.childImageSharp.fixed}
                links={[{
                  href: "https://github.com/weirong-duke/icheatatcodenames",
                  icon: <FaGithub/>
                },
                  {
                    href: "https://icheatatcodenames.herokuapp.com/",
                    icon: <FaLink/>
                  }]}
                title="ICheatAtCodeNames" >
                Cheating application for the spymaster of the board game Codenames. Just add the words you need to win and voilà!
              </Square>
              <Square
                image={data.dlobot.childImageSharp.fixed}
                links={[{
                  href: "https://github.com/weirong-duke/dianhaoBot",
                  icon: <FaGithub/>
                }]}
                title="DLO Bot"
              >
                Discord bot utilizing a Markov Chain generated from over 10K lines of my friend ranting in Discord.</Square>
              <Square
                image={data.stock.childImageSharp.fixed}
                links={[{
                  href: "https://github.com/weirong-duke/wsbills",
                  icon: <FaGithub/>,
                  overlay: 'Django'
                },
                  {
                    href: "https://github.com/weirong-duke/wsbills-react",
                    icon: <FaGithub/>,
                    overlay: 'React'
                  }]}
                title="Bill Split App"
              >
                Full stack application to accept a list of bill payments from separate sources and tally the amount due per participant.</Square>
            </div>

          </div>

          <div className="section">
            <div className="section__title">
              Hobbies
            </div>

          </div>
          <div className="section">
            <div className="hobbies">
              {renderPowerliftingExpandable()}
              {renderVideoGameExpandable()}

            </div>

          </div>

          <div className="section">
            <div className="section__title right">
              Links
            </div>

          </div>
          <div className="section">
            <div className="links">
              <a href="mailto:chenweirongduke@gmail.com?subject=Yo" target="_blank"><FaEnvelope/></a>
              <a href="https://github.com/weirong-duke" target="_blank"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/william-chen-7066b754/" target="_blank"><FaLinkedin/></a>
              <a href="https://www.facebook.com/Chenweirong" target="_blank"><FaFacebook/></a>
              <a href="https://www.instagram.com/weirong90/" target="_blank"><FaInstagram/></a>
            </div>

          </div>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <div className={`overlay ${overlayContent ? 'visible' : ''}`} onClick={() => setOverlayContent(null)}>
          {overlayContent}
        </div>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
