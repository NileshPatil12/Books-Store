import React from 'react';

const About_Compo = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-2xl mx-auto md:px-20 px-4 my-10">
      <div className="text-center mb-12 my-16">
        <h2 className="text-2xl md:text-4xl font-bold">
          About <span className="text-pink-500">Us</span>
        </h2>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 space-y-8">
        <p className="text-sm md:text-xl">
          Welcome to our website, where we believe in the power of learning something new every day. Our platform is dedicated to rediscovering timeless masterpieces that have shaped literature as we know it. Dive into the world of classic literature and experience stories that never grow old.
        </p>
        <p className="text-sm md:text-xl">
          Our mission is to bring you closer to the great works of literature, offering insights and knowledge that enrich your understanding of the world. Whether you are a student, a teacher, or a lifelong learner, our resources are designed to inspire and educate.
        </p>
        <p className="text-sm md:text-xl">
          We are a team of passionate individuals who believe in the transformative power of literature. Our goal is to make these classic works accessible to everyone, fostering a community of readers who appreciate the beauty and depth of great storytelling.
        </p>
        <p className="text-sm md:text-xl">
          Join us on this journey of discovery and let the words of the greatest authors guide you through life's many adventures. From timeless novels to profound poetry, our collection is curated to offer you the very best in literary excellence.
        </p>
        <p className="text-sm md:text-xl">
          Thank you for visiting our website. We hope you find inspiration and joy in the world of classic literature. Stay curious, keep learning, and never stop exploring the wonders of the written word.
        </p>
      </div>
    </div>
  );
};

export default About_Compo;
