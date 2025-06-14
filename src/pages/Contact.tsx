import { Mail, User, Send, Linkedin, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import SubstackIcon from "@/components/SubstackIcon";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

const socialLinks = [
  {
    label: "Email",
    value: "sai.raina@gmail.com",
    href: "mailto:sai.raina@gmail.com",
    icon: <Mail className="w-5 h-5 text-green-400" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saitigerraina",
    href: "https://www.linkedin.com/in/saitigerraina/",
    icon: <Linkedin className="w-5 h-5 text-green-400" />,
  },
  {
    label: "Substack",
    value: "sairaina.substack.com",
    href: "https://sairaina.substack.com/",
    icon: <SubstackIcon className="w-5 h-5 text-green-400" />,
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("contact_messages")
      .insert([form]);

    setLoading(false);

    if (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error inserting message:", error);
    } else {
      toast.success("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background pt-12 px-2">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-playfair font-bold text-center mb-2 text-green-400">Get In Touch</h1>
        <div className="w-16 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 via-green-300 to-green-400 rounded" />
        <p className="mb-8 text-center text-muted-foreground text-lg font-medium">
          I’m currently exploring exciting opportunities and always open to connecting with like-minded professionals. 
          If you have a role, project, or collaboration in mind, I’d love to hear from you!
        </p>
        <form
          className="bg-background border border-green-500/60 shadow-md rounded-xl p-6 mb-3 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center border border-green-500/30 rounded-lg px-3 bg-background/40">
            <User className="h-5 w-5 text-green-400 mr-2" />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-0 outline-none w-full py-3 text-foreground placeholder:text-muted-foreground"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="flex items-center border border-green-500/30 rounded-lg px-3 bg-background/40">
            <Mail className="h-5 w-5 text-green-400 mr-2" />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-0 outline-none w-full py-3 text-foreground placeholder:text-muted-foreground"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div className="flex items-start border border-green-500/30 rounded-lg px-3 bg-background/40">
            <User className="h-5 w-5 text-green-400 mr-2 mt-3" />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="bg-transparent border-0 outline-none w-full py-3 resize-none text-foreground placeholder:text-muted-foreground"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>
          <button
            className="self-end flex items-center gap-2 mt-2 px-6 py-2 border border-green-400 rounded-lg text-green-400 font-semibold bg-transparent hover:bg-green-400/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 px-4 flex flex-col gap-3">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:underline text-base"
            >
              {link.icon}
              <span>{link.value}</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link
            to="/"
            className="text-muted-foreground text-sm hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
