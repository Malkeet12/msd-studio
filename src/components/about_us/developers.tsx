import { RouterPathEnum } from 'constants/paths';
import { IDev } from 'models/dev';
import React from 'react';

function Developer(
  dev: IDev,

  index: number
) {
  return (
    <div className={`dev index-${index}`} key={index}>
      <img className="dev-image" src={dev.dp} />
      <div className="dev-desc">
        <div className="dev-name">
          <a
            className="footer-link"
            href={RouterPathEnum.DEVELOPER_PORTFOLIO.replace(
              ':name',
              dev.name.toLowerCase().replace(' ', '-')
            )}
          >
            <div className="nav-item" role="img" aria-label="about us">
              💁🏻‍♂️
            </div>
            {dev.name}
          </a>
        </div>
        <div className="dev-info">
          {dev.message}
          <br />
          <br />
          {dev.profile}
        </div>
      </div>
    </div>
  );
}

export default Developer;
