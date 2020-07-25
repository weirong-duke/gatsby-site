import { graphql, useStaticQuery } from "gatsby"
import Img, { FixedObject} from "gatsby-image"
import React, {FC} from "react"
import 'components/Header/Header.scss';
import Icon from 'assets/images/chen.svg'
interface HeaderProps {
  siteTitle: string;
  subTitle: string;
}

const Header: FC<HeaderProps> = ({ siteTitle , subTitle}) => {
  return <div className="Header">
      <h1 style={{ margin: 0 }}>
        <Icon/>
        <div className="title">
          <div className="title__main">
            {siteTitle.split('').map((letter, index) => <div key={index}>{letter}</div>)}
          </div>
          <div className="title__subtitle">
            {subTitle}
          </div>
        </div>
      </h1>
    </div>
}

export default Header;
