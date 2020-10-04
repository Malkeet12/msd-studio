import GetItOnAppStore from "images/get_it_on_app_store";
import PlayStoreIcon from "images/get_it_on_google_play.png";
import { IDev } from "models/dev";
import React from "react";
import If from "shared/if";

function Developer(
  dev: IDev,

  index: number
) {
  return (
    <div className={`dev index-${index}`} key={index}>
      <img className="dev-image" src={dev.dp} />
      <div className="dev-desc">
        <div className="dev-name">{dev.name}</div>
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
