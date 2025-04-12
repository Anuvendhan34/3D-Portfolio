import React from "react";
import { FaSpotify } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center items-center gap-2">
      <p className="text-lg font-semibold">Wanna Join With My Vibe ~</p>
      <a
        href="https://open.spotify.com/playlist/4Fn20SfGXtkhK4GTMfgd0Y" // Replace with your actual Spotify profile link
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition-colors duration-300"
      >
        <FaSpotify size={28} />
      </a>
    </footer>
  );
};

export default Footer;
