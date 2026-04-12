import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science</h4>
                <h5>IIT Roorkee</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Bachelor of Technology from the Indian Institute of Technology,
              Roorkee. CGPA: 7.36/10. Built a strong foundation in distributed
              systems, algorithms, and software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Nucleus Software</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered a multi-tenant loan management platform using Java,
              Quarkus, and Hibernate handling 500+ concurrent users. Implemented
              a multi-step processing pipeline reducing turnaround by 40% and
              optimized backend APIs cutting response time by 35%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Nucleus Software</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected a distributed workflow execution platform on Temporal
              orchestrating 1000+ business processes monthly with 99.9% success
              rate. Built a real-time observability dashboard reducing MTTR by
              60%. Adopted AI-first workflows improving development velocity by 25%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
