import React from "react";
const newsItems = [
  {
    title: "Araniko Souvenir 2025-26",
    text: "Our annual publication showcasing the year's achievements and activities.",
  },
  {
    title: "Newsletter Subscription",
    text: "Subscribe to receive regular updates about our projects and events.",
  },
];
const News = () => {
  return (
    <section className="section" id="news">
      <div className="container">
        <h2>Latest News</h2>
        <p className="section-description">
          Stay updated with our recent activities and upcoming events.
        </p>
        <div className="feature-grid">
          {newsItems.map((item, i) => (
            <div key={i} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
