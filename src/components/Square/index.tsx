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
  const visitLink = (link: string) => (e: React.MouseEvent) => {
    e?.preventDefault();
    window.open(link, "_blank");
  }

  const renderLink = (link: Link): ReactNode => {
    const {href, icon, overlay} = link;
    return <div className="link" key={href} onClick={visitLink(href)}>
      {icon}
      {overlay && <div className="link__overlay">
        {overlay}
      </div>}
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
