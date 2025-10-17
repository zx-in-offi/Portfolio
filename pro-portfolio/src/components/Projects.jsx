import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "A professional portfolio built with React and Tailwind." },
    { title: "E-commerce App", description: "A full-stack e-commerce app using MERN stack." },
    { title: "Blog Platform", description: "A responsive blogging platform with user authentication." },
  ];

  return (
    <section id="projects" className="p-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <Card key={idx} className="hover:shadow-xl transition-shadow">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-2">{proj.title}</Typography>
              <Typography variant="body2" className="text-gray-700">{proj.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}
