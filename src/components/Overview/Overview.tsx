import React from "react";
import IconFacebook from "../Icons/IconFacebook";
import IconUp from "../Icons/IconUp";
import IconDown from "../Icons/IconDown";
import IconTwitter from "../Icons/IconTwitter";
import IconInstagram from "../Icons/IconInstagram";

interface OverviewProps {
  data: { views: number; likes: number }[];
}

const Overview: React.FC<OverviewProps> = ({ data }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl text-gray-500">Overview - Today</h2>

      {data.map((item, index) => (
        <article
          key={index}
          className={`mb-4 flex flex-col gap-y-6 bg-gray-200 py-4`}
        >
          <div className="flex items-center justify-around">
            {index === 0 && <IconFacebook />}
            {index === 1 && <IconTwitter />}
            {index === 2 && <IconInstagram />}
            <p className="text-lg text-gray-500">Page Views</p>
          </div>

          <div className="flex items-center justify-around">
            <p className="text-5xl font-bold">{item.views}</p>
            <div className="flex items-center">
              {item.likes >= 0 ? <IconUp /> : <IconDown />}
              <p
                className={item.likes >= 0 ? "text-green-500" : "text-red-500"}
              >
                {Math.abs(item.likes)}%
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Overview;
