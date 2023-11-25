import React from "react";
import IconFacebook from "../Icons/IconFacebook";
import IconUp from "../Icons/IconUp";
import IconTwitter from "../Icons/IconTwitter";
import IconInstagram from "../Icons/IconInstagram";
import "./FollowersCards.css";
import IconDown from "../Icons/IconDown";

export default function FollowersCards() {
  return (
    // FollowersCards (Llaman a los followers de cada red)
    <section>
      <article className="mb-4 flex flex-col items-center justify-center gap-y-6 rounded border-t-4 border-blue-500 bg-gray-200 py-6">
        <div className="flex gap-4">
          <IconFacebook />
          <p className="text-sm font-bold text-gray-500">@user</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">2000</p>
          <p>FOLLOWERS</p>
        </div>

        <div className="flex items-center gap-1">
          <IconUp />
          <p className="text-green-500">12 Today</p>
        </div>
      </article>

      <article className="mb-4 flex flex-col items-center justify-center gap-y-6 rounded border-t-4 border-blue-400 bg-gray-200 py-6">
        <div className="flex gap-4">
          <IconTwitter />
          <p className="text-sm font-bold text-gray-500">@user</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">1232</p>
          <p>FOLLOWERS</p>
        </div>

        <div className="flex items-center gap-1">
          <IconUp />
          <p className="text-green-500">2 Today</p>
        </div>
      </article>

      <article className="border-gradient mb-4 flex flex-col items-center justify-center gap-y-6 rounded border-t-4 bg-gray-200 py-6">
        <div className="flex gap-4">
          <IconInstagram />
          <p className="text-sm font-bold text-gray-500">@user</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">2000</p>
          <p>FOLLOWERS</p>
        </div>

        <div className="flex items-center gap-1">
          <IconDown />
          <p className="text-red-500">12 Today</p>
        </div>
      </article>
    </section>
  );
}
