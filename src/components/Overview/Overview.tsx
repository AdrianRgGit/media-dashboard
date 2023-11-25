import React from "react";

export default function Overview() {
  // Overview (Hay cartas diferentes, por lo tanto se divide en más componentes pero tienen el mismo estilo.
  // Algunas llaman a las views y otros a los likes)
  return (
    <section>
      <article>
        <div>
          <p>Page Views</p>
          <p>Media logo</p>
        </div>
        <div>
          <p>87</p>
          <p>3%</p>
        </div>
      </article>

      <article>
        <div>
          <p>Page Views</p>
          <p>Media logo</p>
        </div>
        <div>
          <p>87</p>
          <p>3%</p>
        </div>
      </article>

      <article>
        <div>
          <p>Page Views</p>
          <p>Media logo</p>
        </div>
        <div>
          <p>87</p>
          <p>3%</p>
        </div>
      </article>
    </section>
  );
}
