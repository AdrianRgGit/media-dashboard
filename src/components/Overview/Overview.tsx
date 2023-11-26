import React from "react";
import IconFacebook from "../Icons/IconFacebook";
import IconUp from "../Icons/IconUp";
import IconDown from "../Icons/IconDown";
import IconTwitter from "../Icons/IconTwitter";
import IconInstagram from "../Icons/IconInstagram";

export default function Overview() {
  // Overview (Hay cartas diferentes, por lo tanto se divide en más componentes pero tienen el mismo estilo.
  // Algunas llaman a las views y otros a los likes)
  return (
    <section>
      <h2 className="mb-4 text-2xl text-gray-500">Overview - Today</h2>

      <article className="mb-4 flex flex-col gap-y-6 bg-gray-200 py-4">
        <div className="flex items-center justify-around">
          <p className="text-lg text-gray-500">Page Views</p>
          <IconFacebook />
        </div>

        <div className="flex items-center justify-around">
          <p className="text-5xl font-bold">87</p>
          <div className="flex items-center">
            <IconUp />
            <p className="text-green-500">3%</p>
          </div>
        </div>
      </article>

      <article className="mb-4 flex flex-col gap-y-6 bg-gray-200 py-4">
        <div className="flex items-center justify-around">
          <p className="text-lg text-gray-500">Page Views</p>
          <IconTwitter />
        </div>

        <div className="flex items-center justify-around">
          <p className="text-5xl font-bold">435</p>
          <div className="flex items-center">
            <IconUp />
            <p className="text-green-500">12%</p>
          </div>
        </div>
      </article>

      <article className="mb-4 flex flex-col gap-y-6 bg-gray-200 py-4">
        <div className="flex items-center justify-around">
          <p className="text-lg text-gray-500">Page Views</p>
          <IconInstagram />
        </div>

        <div className="flex items-center justify-around">
          <p className="text-5xl font-bold">23</p>
          <div className="flex items-center">
            <IconDown />
            <p className="text-red-500">15%</p>
          </div>
        </div>
      </article>
    </section>
  );
}
