import React from "react";
import IconFacebook from "../Icons/IconFacebook";
import IconUp from "../Icons/IconUp";
import IconTwitter from "../Icons/IconTwitter";
import IconInstagram from "../Icons/IconInstagram";
import IconDown from "../Icons/IconDown";
import { DataInfo } from "@/app/lib/definitions";

interface FollowersCardsProps {
  data: DataInfo["data"];
}

const FollowersCards: React.FC<FollowersCardsProps> = ({ data }) => {
  return (
    <section>
      {data.map((followerData, index) => (
        <article
          key={index}
          className={`mb-4 flex flex-col items-center justify-center gap-y-6 rounded border-t-4 ${
            index === 0
              ? "border-blue-500"
              : index === 1
                ? "border-blue-400"
                : "border-gradient"
          } bg-gray-200 py-6`}
        >
          <div className="flex gap-4">
            {index === 0 && <IconFacebook />}
            {index === 1 && <IconTwitter />}
            {index === 2 && <IconInstagram />}
            <p className="text-sm font-bold text-gray-500">@user</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-6xl font-bold">{followerData.followers}</p>
            <p>FOLLOWERS</p>
          </div>

          <div className="flex items-center gap-1">
            {index !== 2 ? <IconUp /> : <IconDown />}
            <p className={index !== 2 ? "text-green-500" : "text-red-500"}>
              {index !== 2
                ? followerData.views !== undefined
                  ? `${followerData.views} Today`
                  : "No data available"
                : followerData.retweets !== undefined
                  ? `${followerData.retweets} Today`
                  : "No data available"}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FollowersCards;
