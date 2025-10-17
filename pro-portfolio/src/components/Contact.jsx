import { Button, TextField } from "@mui/material";

export default function Contact() {
  return (
    <section id="contact" className="p-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" type="email" fullWidth required />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
        <Button type="submit" variant="contained" color="primary">Send Message</Button>
      </form>
    </section>
  );
}
