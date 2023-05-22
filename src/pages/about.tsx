import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="px-60 mt-[7rem]">
      <h1 className="flex justify-center text-4xl font-bold mb-20">About Play Hive</h1>
      <p className="text-lg mb-8">Play Hive is a vibrant game library that aims to bring joy, entertainment, and endless possibilities to gaming enthusiasts of all ages. With a diverse collection of games and a user-friendly interface, we strive to create an immersive gaming experience for our community.</p>
      <p className="text-lg mb-8">At Play Hive, we believe that gaming should be accessible to everyone. Whether you're a casual player seeking a quick escape or a hardcore gamer looking for a challenge, we've got you covered. Our extensive library features a wide range of genres, including action, strategy, puzzle, adventure, and more.</p>
      <p className="text-lg mb-8">We are passionate about curating an exceptional gaming selection that caters to different tastes and preferences. Our team carefully handpicks each game, ensuring high quality, captivating gameplay, and memorable experiences.</p>
      <p className="text-lg mb-8">Join the Play Hive community today and discover your next favorite game. Dive into new worlds, embark on epic quests, compete with friends, and unleash your gaming potential. Let the adventure begin!</p>
      <Link href="/">
        <p className="text-lg text-pink-400 hover:underline cursor-pointer">Back to Home</p>
      </Link>
    </div>
  );
};

export default About;
