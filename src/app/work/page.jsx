import Project from '../components/projects'

const projects = [
  {
      title: 'React Blog Site',
      description: 'After learning React this was the first website I created using components. The task was to create a blog website that has components and useStates.',
      image: 'https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,ar_16:9/v1739776481/Screenshot_2_xasz3i.png',
      alt: 'React blog site',
      collaborators: 'red4cted25',
      link: 'https://github.com/sshafe928/react_blog.git'
  },
  {
      title: 'Quiz Application Site',
      description: 'This quiz application was used to learn basic React application. This was used to reinforce the ideas of basic React functionality.',
      image: 'https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,ar_16:9/v1739776485/Screenshot_4_jyhra7.png',
      alt: 'Quiz site',
      collaborators: 'none',
      link: 'https://github.com/sshafe928/quiz_application.git'
  },
  {
      title: 'Capstone Project Site',
      description: 'This capstone project was used to put together all of the things I learned in the first year at West-MEC. It was a website for a fake business.',
      image: 'https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,ar_16:9/v1739776487/Screenshot_5_jdja0d.png',
      alt: 'Capstone site',
      collaborators: 'vedantsingh23, stryderbateman',
      link: 'https://github.com/sshafe928/Shutterscope.git'
  },
  {
      title: 'Event Storage Site',
      description: 'This storage site was used to teach myself how to connect mongoDB to a website.',
      image: 'https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,ar_16:9/v1739776483/Screenshot_3_ma94xu.png',
      alt: 'Event Site',
      collaborators: 'none',
      link: 'https://github.com/sshafe928/event-site.git'
  },
  {
      title: 'FBLA coding and programming website',
      description: 'This is a website that is created for competing in FBLA. The topic was creating a financial tracker app for students.',
      image: 'https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,ar_16:9/v1739777445/Screenshot_6_rxdlkc.png',
      alt: 'FBLA site',
      collaborators: 'DerpNerdd, DanielFreeman068',
      link: 'https://github.com/sshafe928/FBLA-coding-and-programming.git'
  },
];

const WorkPage = () => {
  return (
    <section className="py-12 ">
    <h2 className="text-6xl text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-8 p-11">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </section>
);
};

export default WorkPage