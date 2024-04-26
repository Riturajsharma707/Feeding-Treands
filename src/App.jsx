import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const handleHide = () => {
    setStatus(!status);
  };

  return (
    <div>
      <div className="m-10 ">
        <h1 className="text-5xl font-bold text-center">Feeding Trends</h1>

        <p className="mt-8">
          <strong>
            10-B) Implement a React/Angular/Vue.js component that toggles
            between showing and hiding content when a button is clicked.
          </strong>
        </p>
        {status ? (
          <p>
            <strong>Feeding Trends</strong> connects global community of 10
            Million readers and writers to Learn, Earn and Grow <br />
            <br />
            <strong>Feeding Trends</strong> is a global community of passionate
            people. Writers, storytellers, experts, explorers, scientists,
            artists, entrepreneurs, thought-leaders, journalists, critics,
            teachers, homemakers, and knowledge seekers. Sharing and learning
            from the experiences of each other, by sharing knowledge, ideas,
            opinions, reviews, asking questions, finding answers criticizing,
            Interacting, and Informing. Feeding Trends is a publishing platform
            that offers uniques tools and resources to writers To Find and build
            an audience To easily create and share writings To earn all sorts of
            rewards, from recognition to ads revenue
          </p>
        ) : null}

        <button
          onClick={handleHide}
          className="border-1 mt-3 p-2 border-black rounded-lg bg-sky-900 text-white"
        >
          {!status ? "Answer" : "Hide"}
        </button>
      </div>
      {/* </section> */}
    </div>
  );
}

export default App;
