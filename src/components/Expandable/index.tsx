import React, {FC, useState} from 'react';

import "./Expandable.scss";
import {FixedObject} from 'gatsby-image';
import BackgroundImage from "gatsby-background-image"

interface ExpandableProps {
  image?: FixedObject;
  top: number;
  title: string;
}

const Expandable: FC<ExpandableProps> = ({children, image, title}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }
  return <div className={`Expandable ${isExpanded ? 'expanded' : ''}`}>
    <div className={`header ${isExpanded ? 'expanded' : ''}`}>
      <BackgroundImage
        Tag="div"
        backgroundColor={`#FFFFFF`}
        className="header__background"
        fixed={image}
      >
        <div className="header__title" onClick={toggleExpanded}>
          {title}
        </div>
      </BackgroundImage>

      <div className={"header__content"}>
        {children}
      </div>
    </div>
  </div>
}

export default Expandable;
