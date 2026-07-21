function AboutUs() {
  const tags = [
    "Founder",
    "Community Builder",
    "Entrepreneur",
    "Iwanciw Functional Funware",
    "Faith Leader",
  ];

  return (
    <main className="about-page">
      <p className="about-subtitle">THE HEART BEHIND THE VILLAGE</p>
      <h1>Meet the Founder</h1>

      <div className="about-layout">
        <div>
          <div className="founder-photo">
            <div className="founder-letter">W</div>
            <p>Photo coming soon</p>
            <small>Walter Iwanciw</small>
          </div>

          <div className="founder-card">
            <h2>Walter Iwanciw</h2>
            <p>Owner</p>
            <span>Iwanciw Functional Funware</span>
          </div>
        </div>

        <div className="founder-text">
          <h2>
            Building purpose-driven community one
            <em> relationship at a time.</em>
          </h2>

          <p>
            Walter Iwanciw is the founder of One True Pure Love Village and the
            owner of Iwanciw Functional Funware. Driven by a deep conviction
            that people thrive when they are in right relationship with God,
            with one another, and with their own purpose, Walter built the
            village as a living expression of that belief.
          </p>

          <p>
            His work spans community development, entrepreneurship, and
            faith-based collaboration.
          </p>

          <p>
            Walter believes that an abundant life is not passive. It must be
            demonstrated in how we walk, how we work, and how we serve.
          </p>

          <blockquote>
            “Faith in the principle of an abundant life, without being
            demonstrated in our walk, is of no value to anyone.”
            <span>— WALTER IWANCIW</span>
          </blockquote>

          <div className="founder-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;