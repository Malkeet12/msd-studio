import GetItOnAppStore from "images/playStore";
import PlayStoreIcon from "images/googlePlay.png";
import { IApp } from "models/app";
import React from "react";
import If from "shared/if";

function MyApp(
  app: IApp,

  index: number
) {
  return (
    <div className={`app index-${index}`} key={index}>
      <img className="app-image" src={app.image} />
      <div className="app-desc">
        <div className="app-name">{app.name}</div>
        <div className="app-info">{app.description}</div>

        <div className="store-links">
          <a target="_blank" href={app.playStoreLink}>
            <img className="app-link" src={PlayStoreIcon} />
          </a>
          <If condition={app.availableOnIos}>
            <a target="_blank" href={app.appStoreLink}>
              <GetItOnAppStore />
            </a>
          </If>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
