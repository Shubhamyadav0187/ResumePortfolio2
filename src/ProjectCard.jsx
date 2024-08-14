const tagClasses = '  text-xs bg-gray-200 rounded px-2 py-1'
const buttonClasses = 'bg-black text-white hover:bg-primary/80 px-3 py-1 rounded transition flex items-center'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-card rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
      <img src={project.image} alt={project.name} className="rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-accent">{project.name}</h3>
      <p className="text-sm text-muted-foreground">{project.date}</p>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8 ">
        {project.tags.map((tag, index) => (
          <span key={index} className={tagClasses}>
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-1   absolute inset-x-5 bottom-2  ">
        {project.links.map((link, index) => (
          <a key={index} href={link.url} className={buttonClasses}>
            <img src={link.icon} alt={`${link.text} Icon`} className="w-4 h-4 mr-2" />
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard;