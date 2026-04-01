"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiPen } from "react-icons/bi";
import { FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";

type Message = {
  id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  message: string;
  created_at: string;
};

export function Guestbook() {
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const fetchMessages = async () => {
    const { data } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
  };

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel("guestbook")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "guestbook" },
        () => fetchMessages(),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const login = async (provider: "github" | "google" | "discord") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/guestbook`,
      },
    });
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    setLoading(true);

    await supabase.from("guestbook").insert({
      user_id: user.id,
      user_name: user.user_metadata.full_name || user.user_metadata.name,
      user_avatar: user.user_metadata.avatar_url,
      message: text,
    });

    setText("");
    setLoading(false);
  };

  return (
    <section
      id="guestbook"
      className="flex flex-col items-center px-6 text-white pt-0 mb-12 md:mb-0 md:pt-12"
    >
      <motion.div
        className="flex flex-col items-center gap-8 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto md:mx-0 space-y-5 md:space-y-8"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10 text-white">
            Guestbook
          </h3>
          <p className="mx-3 md:mx-0 text-sm md:text-base leading-relaxed text-white/90">
            Feel free to leave a message, share your thoughts, or just say hi.
            Sign in with Google, GitHub, or Discord to join the conversation.
          </p>
        </motion.div>
        <motion.div
          className="w-full max-w-2xl lg:max-w-5xl mx-auto px-4 md:px-0 py-4 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {!user ? (
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => login("github")}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl 
               bg-[#171515] text-white text-sm font-medium
               hover:scale-105 hover:opacity-90 transition-all duration-300"
              >
                <FaGithub size={16} />
                GitHub
              </button>
              <button
                onClick={() => login("google")}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl 
               bg-white text-black text-sm font-medium
               hover:scale-105 hover:bg-gray-200 transition-all duration-300"
              >
                <FaGoogle size={16} />
                Google
              </button>

              <button
                onClick={() => login("discord")}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl 
               bg-[#5865F2] text-white text-sm font-medium
               hover:scale-105 hover:opacity-90 transition-all duration-300"
              >
                <FaDiscord size={16} />
                Discord
              </button>
            </div>
          ) : (
            <div>
              <div
                className="flex gap-3 items-start bg-white/10 backdrop-blur-md 
                p-4 rounded-2xl border border-white/10 
                shadow-md shadow-black/20 focus-within:ring-1 focus-within:ring-amber-400/40 transition"
              >
                <Image
                  src={user.user_metadata.avatar_url}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write a message..."
                  rows={2}
                  className="flex-1 bg-transparent outline-none text-sm resize-none 
             placeholder:text-white/40"
                />

                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="cursor-pointer px-4 py-2 rounded-full bg-black/20 text-amber-300 border border-amber-500/30 text-sm font-semibold
                  hover:bg-black/30 transition disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          <div className="w-full space-y-4 max-h-105 overflow-y-auto">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-4 px-6 text-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                <div className="text-xl mb-3">
                  <BiPen />
                </div>
                <p className="mx-3 md:mx-0 text-sm md:text-base leading-relaxed text-center text-white/90">
                  Be the first to leave a message. Your thoughts, feedback, or
                  greetings are highly appreciated.
                </p>
              </div>
            )}

            <div
              className="w-full space-y-4 p-3 rounded-2xl 
                bg-white/5 border border-white/10 
                backdrop-blur-md"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-3 p-4 rounded-2xl
                bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-lg shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black-30 transition-all duration-300"
                >
                  <Image
                    src={msg.user_avatar || "/images/profile/profile_1.jpg"}
                    alt="avatar"
                    width={42}
                    height={42}
                    className="rounded-full border border-white/20 shadow-sm"
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-amber-300 tracking-wide">
                        {msg.user_name}
                      </p>
                      <span className="text-xs text-white/40">• just now</span>
                    </div>

                    <p className="text-sm text-white/80 mt-1 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
