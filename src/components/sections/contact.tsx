"use client";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, FormEvent, useState } from "react";
import { email } from "@/lib/email";
import { links } from "@/lib/links";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        email.service_id ?? "",
        email.template_id ?? "",
        form.current,
        email.public_key ?? "",
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error"),
      );

    e.currentTarget.reset();
  };

  const socials = [
    { icon: <FaGithub />, link: links.github, label: "GitHub" },
    { icon: <FaLinkedin />, link: links.linkedin, label: "LinkedIn" },
    { icon: <FaEnvelope />, link: `mailto:${links.email}`, label: "Email" },
    { icon: <FaInstagram />, link: links.instagram, label: "Instagram" },
    { icon: <FaDiscord />, link: links.discord, label: "Discord" },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center px-4 sm:px-6 text-white pt-6 md:pt-12 mb-12"
    >
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto md:mx-0"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-8">
            Contact Me
          </h3>
          <p className="mx-3 md:mx-0 text-sm md:text-base leading-relaxed text-white/90">
            Feel free to reach out anytime — whether it’s about a project,
            collaboration, or just to say hello. I enjoy connecting with people
            who share a passion for building and learning.
          </p>
        </motion.div>

        <div className="w-full px-4 py-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl
                  border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition"
                >
                  <span className="text-lg text-gray-300 hover:text-white transition delay-100 duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm md:text-base font-medium">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-3 md:gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="px-4 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none text-sm"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="px-4 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none text-sm"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="px-4 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none text-sm resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer w-full md:w-auto mx-2 mt-4 px-6 py-4
                rounded-3xl text-sm font-semibold bg-white text-black
                hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {status && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-lg"
          >
            <h2 className="text-xl font-semibold mb-3">
              {status === "success" ? "Message Sent" : "Something Went Wrong"}
            </h2>

            <p className="text-sm text-white/70 mb-6">
              {status === "success"
                ? "Thanks for reaching out. I’ll reply soon."
                : "Failed to send message. Please try again."}
            </p>

            <button
              onClick={() => setStatus(null)}
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
