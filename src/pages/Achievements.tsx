import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";

// VIDEO
import tech1Video from "../assets/achievements/tech1.mp4";
import tech0Video from "../assets/achievements/tech0.mp4";
// IMAGES
import tech2 from "../assets/achievements/tech2.jpeg";
import tech3 from "../assets/achievements/tech3.jpeg";
import tech4 from "../assets/achievements/tech4.jpeg";
import tech5 from "../assets/achievements/tech5.jpeg";
import tech6 from "../assets/achievements/tech6.jpeg";
import tech7 from "../assets/achievements/tech7.jpeg";
import tech8 from "../assets/achievements/tech8.jpeg";
import tech9 from "../assets/achievements/tech9.jpeg";
import tech10 from "../assets/achievements/tech10.jpeg";

import hackathon1 from "../assets/achievements/hackathon1.jpeg";
import hackathon2 from "../assets/achievements/hackathon2.jpeg";
import hackathon3 from "../assets/achievements/hackathon3.jpeg";
import hackathon4 from "../assets/achievements/hackathon4.jpeg";
import hackathon5 from "../assets/achievements/hackathon5.jpeg";
import hackathon6 from "../assets/achievements/hackathon6.jpeg";

import ideathon1 from "../assets/achievements/ideathon1.jpeg";
import ideathon2 from "../assets/achievements/ideathon2.jpeg";
import ideathon3 from "../assets/achievements/ideathon3.jpeg";

import gsa from "../assets/achievements/gsa.jpeg";
import gssoc from "../assets/achievements/gssoc.jpeg";

import techmeet1 from "../assets/achievements/techmeet1.jpeg";
import techmeet2 from "../assets/achievements/techmeet2.jpeg";
import techmeet3 from "../assets/achievements/techmeet3.jpeg";

import pythoncoding from "../assets/achievements/pythoncoding.jpeg";
import prize from "../assets/achievements/prize.jpeg";

const speaking = [
  tech2, tech3, tech4, tech5,
  tech6, tech7, tech8, tech9, tech10,
  gssoc
];

const hackathons = [
  hackathon1,
  hackathon2,
  hackathon3,
  hackathon4,
  hackathon5,
  hackathon6,
  ideathon1,
  ideathon2,
  ideathon3,
];

const leadership = [
  gsa,
  techmeet1,
  techmeet2,
];

const development = [
  pythoncoding,
  prize,
];

const moments = [
  techmeet3,
];

const GallerySection = ({
  title,
  images,
  onImageClick,
}: {
  title: string;
  images: string[];
  onImageClick: (img: string) => void;
}) => (
  <div className="mb-20">
    <h2 className="font-serif text-3xl font-bold mb-8">
      {title}
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-2xl card-elevated"
        >
          <img
            src={img}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="
            w-full
            h-64
            md:h-72
            object-cover
            object-center
            transition-transform
            duration-500
            group-hover:scale-105
            "
          />
        </div>
      ))}
    </div>
  </div>
);

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">

        <div className="container mx-auto px-6 lg:px-8">

          <SectionHeading
            title="Achievements & Highlights"
            subtitle="A visual journey through speaking, leadership, development and innovation."
            centered
          />

          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 mb-24">

            <div className="card-elevated p-6 text-center">
              <h3 className="text-3xl font-bold gradient-text">10+</h3>
              <p>Projects</p>
            </div>

            <div className="card-elevated p-6 text-center">
              <h3 className="text-3xl font-bold gradient-text">3</h3>
              <p>Internships</p>
            </div>

            <div className="card-elevated p-6 text-center">
              <h3 className="text-3xl font-bold gradient-text">AI</h3>
              <p>Ambassador</p>
            </div>

            <div className="card-elevated p-6 text-center">
              <h3 className="text-3xl font-bold gradient-text">🎤</h3>
              <p>Speaker</p>
            </div>

          </div>

          {/* VIDEO */}

          {/* FEATURED VIDEOS */}

<div className="mb-24">

  <h2 className="font-serif text-4xl font-bold text-center mb-10">
    🎥 Featured Sessions
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

    <div className="card-elevated p-3">
      <video
        controls
        className="w-full h-[350px] rounded-2xl object-cover"
      >
        <source
          src={tech1Video}
          type="video/mp4"
        />
      </video>

      <p className="mt-3 text-center text-sm text-muted-foreground">
        Technical Session
      </p>
    </div>

    <div className="card-elevated p-3">
      <video
        controls
        className="w-full h-[350px] rounded-2xl object-cover"
      >
        <source
          src={tech0Video}
          type="video/mp4"
        />
      </video>

      <p className="mt-3 text-center text-sm text-muted-foreground">
        Community Event
      </p>
    </div>

  </div>

</div>

          <GallerySection
            title="🎤 Technical Sessions & Public Speaking"
            images={speaking}
            onImageClick={setSelectedImage}
          />

          <GallerySection
            title="🚀 Hackathons & Innovation Challenges"
            images={hackathons}
            onImageClick={setSelectedImage}       
          />

          <GallerySection
            title="🤖 Community Leadership & Ambassador Journey"
            images={leadership}
            onImageClick={setSelectedImage}
          />

          <GallerySection
            title="💻 Development & Technical Growth"
            images={development}
            onImageClick={setSelectedImage}
          />

          <GallerySection
            title="🌟 Memorable Moments"
            images={moments}
            onImageClick={setSelectedImage}
          />

          {/* TIMELINE */}

          <div className="mt-24">

            <h2 className="font-serif text-4xl font-bold text-center mb-10 pb-2 border-b border-primary/20">
              Milestones
            </h2>

            <div className="max-w-4xl mx-auto space-y-4">

              {[
                "Google Gemini Campus Ambassador",
                "Head of Computer Science - AJA Forum",
                "Technical Speaker - ReactPlay",
                "Open Source Contributor",
                "Need It International",
                "InternPe AI Intern",
                "Corizo AI Intern",
              ].map((item) => (
                <div
                  key={item}
                  className="card-elevated p-5"
                >
                  🏆 {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
      {selectedImage && (
  <div
    className="
      fixed
      inset-0
      bg-black/90
      z-[9999]
      flex
      items-center
      justify-center
      p-4
    "
    onClick={() => setSelectedImage(null)}
  >

    <img
      src={selectedImage}
      alt=""
      className="
        max-h-[90vh]
        max-w-[90vw]
        rounded-xl
        object-contain
      "
    />

    <button
      className="
        absolute
        top-6
        right-6
        text-white
        text-4xl
      "
    >
      ×
    </button>

  </div>
)}
    </PageWrapper>
  );
}

