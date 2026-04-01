"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { motion } from "framer-motion";

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

  const deleteMessage = async (id: string) => {
    await supabase.from("guestbook").delete().eq("id", id);
  };

  return (
    <section
      id="about"
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
          className="w-full max-w-2xl mx-auto px-4 md:px-0 py-4 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* AUTH / INPUT */}
          {!user ? (
            <div className="flex flex-wrap gap-3 justify-center">
              {["github", "google", "discord"].map((p) => (
                <button
                  key={p}
                  onClick={() => login(p as any)}
                  className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition shadow-lg shadow-white/10"
                >
                  Sign in with {p}
                </button>
              ))}
            </div>
          ) : (
            <div className="w-full space-y-4">
              <div className="flex gap-3 items-start bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg shadow-black/20">
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
                  placeholder="Write something..."
                  className="flex-1 bg-transparent outline-none text-sm resize-none placeholder:text-white/40"
                />

                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="px-4 py-2 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-500 transition disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {/* ✨ MESSAGES SECTION */}
          <div className="w-full space-y-4">
            {messages.length === 0 && (
              <p className="text-center text-white/50 text-sm">
                No messages yet — be the first 👀
              </p>
            )}

            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg shadow-black/20"
              >
                <Image
                  src={msg.user_avatar || "/images/profile/profile_1.jpg"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-amber-300">
                      {msg.user_name}
                    </p>

                    {user?.id === msg.user_id && (
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-xs text-red-400 hover:text-red-500"
                      >
                        delete
                      </button>
                    )}
                  </div>

                  <p className="text-sm text-white/80 mt-1 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
