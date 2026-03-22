import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, Home } from "lucide-react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { useEffect } from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati eos fugiat, impedit sapiente aperiam.",
    image: "/projects/project-image-placeholder.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

const ViewAllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glows */}
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      {/* Background Glows - END */}

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            All Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            A complete
            <span className="font-serif italic font-normal text-white">
              {" "}
              look at my work.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Explore all the projects I’ve worked on, from system features to
            full applications, focused on long-term reliability and real-world
            use.
          </p>
        </div>
        {/* Section Header - END */}

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Project Grid - END */}

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 100);
            }}
          >
            <ArrowLeft /> Back to Home
          </AnimatedBorderButton>
        </div>
      </div>
      {/* Content - END */}
    </section>
  );
};
export default ViewAllProjects;
