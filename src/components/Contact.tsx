// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message sent!",
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="py-20 px-4 bg-muted/30">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16 animate-slide-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Let's discuss your next project or collaboration opportunity
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Info */}
//           <div className="space-y-6">
//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Email</h3>
//                   <p className="text-sm text-muted-foreground">nharintharan@gmail.com</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Phone</h3>
//                   <p className="text-sm text-muted-foreground">+94 759738589</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Location</h3>
//                   <p className="text-sm text-muted-foreground">Matara, Sri Lanka</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-primary text-white shadow-elegant">
//               <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
//               <p className="text-sm opacity-90 leading-relaxed">
//                 I'm currently seeking internship and full-time opportunities in software engineering, 
//                 cloud architecture, or blockchain development. Let's connect and explore how we can 
//                 work together!
//               </p>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card className="p-8 gradient-card shadow-card">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="text-sm font-medium mb-2 block">
//                   Your Name
//                 </label>
//                 <Input
//                   id="name"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                   className="bg-background"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="text-sm font-medium mb-2 block">
//                   Email Address
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                   className="bg-background"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="text-sm font-medium mb-2 block">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell me about your project or opportunity..."
//                   rows={5}
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   required
//                   className="bg-background resize-none"
//                 />
//               </div>

//               <Button type="submit" className="w-full shadow-elegant group">
//                 <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message sent!",
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="py-20 px-4 bg-muted/30">
//       <div className="container mx-auto max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-16 animate-slide-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Feel free to reach out for collaboration, opportunities, or project discussions.
//           </p>
//         </div>

//         {/* Layout */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left - Contact Information */}
//           <div className="space-y-6">
//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Email</h3>
//                   <p className="text-sm text-muted-foreground">nharintharan@gmail.com</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Phone</h3>
//                   <p className="text-sm text-muted-foreground">
//                     +94 759738589 
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Location</h3>
//                   <p className="text-sm text-muted-foreground">Batticaloa, Sri Lanka</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <Github className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">GitHub</h3>
//                   <a
//                     href="https://github.com/Harintharan"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm text-primary hover:underline"
//                   >
//                     github.com/Harintharan
//                   </a>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
//                   <Linkedin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">LinkedIn</h3>
//                   <a
//                     href="https://www.linkedin.com/in/hari-nagalingam-233b5720b"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm text-primary hover:underline"
//                   >
//                     linkedin.com/in/hari-nagalingam-233b5720b
//                   </a>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 gradient-primary text-white shadow-elegant">
//               <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
//               <p className="text-sm opacity-90 leading-relaxed">
//                 I’m currently open to full-time and internship roles in{" "}
//                 <strong>Software Engineering</strong>,{" "}
//                 <strong>AI / GenAI Development</strong>,{" "}
//                 <strong>Cloud Architecture</strong>, and{" "}
//                 <strong>Blockchain Engineering</strong>. <br />
//                 Let’s connect and collaborate on something impactful!
//               </p>
//             </Card>
//           </div>

//           {/* Right - Contact Form */}
//           <Card className="p-8 gradient-card shadow-card">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="text-sm font-medium mb-2 block">
//                   Your Name
//                 </label>
//                 <Input
//                   id="name"
//                   placeholder="Your full name"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                   className="bg-background"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="text-sm font-medium mb-2 block">
//                   Email Address
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   required
//                   className="bg-background"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="text-sm font-medium mb-2 block">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell me about your idea, project, or collaboration..."
//                   rows={5}
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   required
//                   className="bg-background resize-none"
//                 />
//               </div>

//               <Button type="submit" className="w-full shadow-elegant group">
//                 <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"; // ✅ Import EmailJS SDK

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_wo4v3il", // ✅ Your EmailJS Service ID
        "template_bme7r5k", // ✅ Your EmailJS Template ID
        formData, // Passes name, email, message
        "FFv5UAo5ypM2BfbYV" // ✅ Your Public Key
      )
      .then(
        () => {
          toast({
            title: "✅ Message Sent Successfully!",
            description:
              "Thank you for reaching out. I’ve received your message and will reply soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "❌ Message Failed!",
            description:
              "Please try again later or email me directly at nharintharan@gmail.com.",
            variant: "destructive",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaboration, opportunities, or project discussions.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    nharintharan@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+94 759738589</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Batticaloa, Sri Lanka
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a
                    href="https://github.com/Harintharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    github.com/Harintharan
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/hari-nagalingam-233b5720b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    linkedin.com/in/hari-nagalingam-233b5720b
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-primary text-white shadow-elegant">
              <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                I’m currently open to full-time and internship roles in{" "}
                <strong>Software Engineering</strong>,{" "}
                <strong>AI / GenAI Development</strong>,{" "}
                <strong>Cloud Deployment</strong>, and{" "}
                <strong>Blockchain Engineering</strong>. <br />
                Let’s connect and collaborate on something impactful!
              </p>
            </Card>
          </div>

          {/* Right - Contact Form */}
          <Card className="p-8 gradient-card shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your idea, project, or collaboration..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className="w-full shadow-elegant group"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

