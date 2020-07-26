import React, {FC, ReactNode} from 'react';
import './Square.scss';
import BackgroundImage from "gatsby-background-image"

interface Link {
  href: string;
  icon: ReactNode;
  overlay?: string;
}

interface SquareProps {
  image?: any;
  links?: Link[];
  title: string;
}

const Square: FC<SquareProps> = ({children, links, image, title}) => {
  const renderLink = (link: Link): ReactNode => {
    const {href, icon, overlay} = link;
    return <div className="link" key={href}>
      <a href={href} target="_blank">
        {icon}
        {overlay && <div className="link__overlay">
          {overlay}
        </div>}
      </a>
    </div>
  }

  const content = <div className="content">
    <div className="content__title">
      {title}
    </div>
    <div className="content__description">
      {children}
    </div>
    {links && <div className="content__links">
      {links.map(renderLink)}
    </div>}
  </div>
  return image ? <BackgroundImage
    Tag="div"
    backgroundColor={`#FFFFFF`}
    className="Square"
    fixed={image}
  >
    {content}
  </BackgroundImage> : <div className="Square">
    {content}
  </div>
}

export default Square;
