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
        email.service_id,
        email.template_id,
        form.current,
        email.public_key,
      )
      .then(
        () => {
          setStatus("success");
        },
        (error) => {
          setStatus("error");
        },
      );

    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="px-6 bg-black text-white pt-0 mb-12 md:mb-0 md:pt-12"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 items-center">
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10"
          >
            Contact Me
          </motion.h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 pt-2 md:pt-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            You can find me on
          </h3>

          <div className="flex flex-col gap-4">
            {[
              { icon: <FaLinkedin />, link: links.linkedin, label: "LinkedIn" },
              {
                icon: <FaInstagram />,
                link: links.instagram,
                label: "Instagram",
              },
              { icon: <FaGithub />, link: links.github, label: "GitHub" },
              {
                icon: <FaEnvelope />,
                link: `mailto:${links.email}`,
                label: "Email",
              },
              { icon: <FaDiscord />, link: links.discord, label: "Discord" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-text-sm font-semibold rounded-lg border border-white/10 bg-black text-white hover:bg-gray-300 hover:text-black transition duration-300"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">Keep in touch</h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 bg-black border border-white/20 rounded-md focus:ring-1 focus:ring-white/30 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 bg-black border border-white/20 rounded-md focus:ring-1 focus:ring-white/30 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="p-3 bg-black border border-white/20 rounded-md focus:ring-1 focus:ring-white/30 outline-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-3 rounded-lg cursor-pointer"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      {/* {status && ( */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-black border-1 border-white/20 text-white p-8 rounded-2xl shadow-2xl max-w-xs md:max-w-md lg:max-w-lg w-full text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              {status === "success"
                ? "Message Sent!"
                : "Something Went Wrong"}
            </h2>

            <p className="mb-6 text-white/80">
              {status === "success"
                ? "Thank you for reaching out. I’ll get back to you soon."
                : "Failed to send message. Please try again."}
            </p>

            <button
              onClick={() => setStatus(null)}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      {/* )} */}
    </section>
  );
}
