import React from 'react';
import { useInView } from 'react-intersection-observer';
import GetItOnAppStore from 'images/playStore';
import PlayStoreIcon from 'images/googlePlay.png';
import { IApp } from 'models/app';

import If from 'shared/if';

function MyApp(
  app: IApp,

  index: number
) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  return (
    <div
      className={`app index-${index} ${
        inView ? 'start-animation' : 'stop-animation'
      }`}
      key={index}
      ref={ref}
    >
      <img className="app-image" src={app.image} alt="" />
      <div className="app-desc">
        <div className="app-name">{app.name}</div>
        <div className="app-info">{app.description}</div>
        <div className="store-links">
          <a target="_blank" rel="noopener noreferrer" href={app.playStoreLink}>
            <img className="app-link" src={PlayStoreIcon} alt="" />
          </a>
          <If condition={app.availableOnIos}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={app.appStoreLink}
            >
              <GetItOnAppStore />
            </a>
          </If>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
