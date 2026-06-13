import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";

import SpeakerEventImg from "../assets/reactplay-speaker.jpeg";
import TeachingImg from "../assets/teaching-photo.jpeg";
import TeachinggImg from "../assets/teaching-sessions.jpeg";
import CodingImg from "../assets/coding-work.jpeg";

const timeline = [
  {
    year: "2023",
    title: "Started AIML Journey",
    desc: "Began my Artificial Intelligence & Machine Learning degree and discovered my passion for intelligent systems.",
  },
  {
    year: "2024",
    title: "Machine Learning Exploration",
    desc: "Built predictive models, explored Deep Learning and strengthened my AI foundations.",
  },
  {
    year: "2025",
    title: "Projects & Internships",
    desc: "Worked on AI, Data Science and Full Stack projects solving real-world challenges.",
  },
  {
    year: "2026",
    title: "Google Gemini Ambassador & Community Speaker",
    desc: "Sharing knowledge, mentoring students and contributing to developer communities.",
  },
];

export default function About() {
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5">

          <SectionHeading
            title="About Me"
            subtitle="The story behind my journey into Artificial Intelligence, Data Science and Technology."
            centered
          />

          <div className="max-w-6xl mx-auto mt-20">

            <div className="text-center mb-24">
              <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🚀 AI Engineer • Data Scientist • Developer
              </div>

              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
                I Don't Just Build Models.
                <br />
                I Build Intelligent Solutions.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Combining Artificial Intelligence, Machine Learning, Data Science
                and Software Development to create impactful solutions that solve
                real-world problems.
              </p>
            </div>

            <div className="card-elevated p-8 md:p-10 mb-24">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
                My Journey
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                What started as curiosity about data and technology evolved into a
                passion for Artificial Intelligence, Machine Learning and software development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                Through projects in healthcare, agriculture and intelligent systems,
                I discovered how technology can create meaningful impact when applied
                to real-world challenges.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I focus on building AI-powered solutions, learning continuously
                and sharing knowledge with the tech community.
              </p>
            </div>

            <div className="mb-24">
              <h2 className="font-serif text-4xl font-bold text-center mb-4">
                Beyond The Screen
              </h2>

              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Technology is only one part of my journey. I enjoy speaking,
                mentoring, building products and engaging with communities.
              </p>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="group card-elevated overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={SpeakerEventImg}
                    alt="Technical Speaker"
                    className="w-full h-[240px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">🎤 Technical Speaker</h3>
                    <p className="text-sm text-muted-foreground">
                      Presenting AI, React and emerging technologies through technical events.
                    </p>
                  </div>
                </div>

                <div className="group card-elevated overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={TeachingImg}
                    alt="Mentor"
                    className="w-full h-[240px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">👩‍🏫 Mentor & Educator</h3>
                    <p className="text-sm text-muted-foreground">
                      Helping students learn programming, AI and problem-solving.
                    </p>
                  </div>
                </div>

                <div className="group card-elevated overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={CodingImg}
                    alt="Developer"
                    className="w-full h-[240px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">💻 Developer & Builder</h3>
                    <p className="text-sm text-muted-foreground">
                      Turning ideas into products using AI, Data Science and Full Stack Development.
                    </p>
                  </div>
                </div>

                <div className="group card-elevated overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={TeachinggImg}
                    alt="Community Leadership"
                    className="w-full h-[240px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">🚀 Community Leadership</h3>
                    <p className="text-sm text-muted-foreground">
                      Building connections, sharing knowledge and contributing to communities.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mb-24">
              <h2 className="font-serif text-4xl font-bold text-center mb-12">
                Journey Timeline
              </h2>

              <div className="space-y-6">
                {timeline.map((item) => (
                  <div key={item.year} className="card-elevated p-6 flex flex-col md:flex-row gap-6">
                    <div className="text-3xl font-bold gradient-text min-w-[100px]">
                      {item.year}
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-24">

  <h2 className="font-serif text-4xl font-bold text-center mb-12">
    Why Work With Me
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="card-elevated p-6">
      <h3 className="font-semibold text-xl mb-3">
        🚀 Fast Learner
      </h3>

      <p className="text-muted-foreground">
        I quickly adapt to new technologies, frameworks and tools,
        allowing me to contribute effectively in dynamic environments.
      </p>
    </div>

    <div className="card-elevated p-6">
      <h3 className="font-semibold text-xl mb-3">
        🧠 Problem Solver
      </h3>

      <p className="text-muted-foreground">
        I enjoy breaking complex challenges into manageable solutions
        using data, logic and creativity.
      </p>
    </div>

    <div className="card-elevated p-6">
      <h3 className="font-semibold text-xl mb-3">
        🤝 Team Player
      </h3>

      <p className="text-muted-foreground">
        Through internships, community events and mentoring activities,
        I have developed strong collaboration and communication skills.
      </p>
    </div>

    <div className="card-elevated p-6">
      <h3 className="font-semibold text-xl mb-3">
        💡 Impact Driven
      </h3>

      <p className="text-muted-foreground">
        Whether building AI solutions for healthcare or agriculture,
        I focus on creating technology that delivers real-world value.
      </p>
    </div>

  </div>

</div>

            <div className="text-center py-16">
              <blockquote className="font-serif text-2xl md:text-4xl italic max-w-4xl mx-auto leading-relaxed">
                "The best solutions emerge when data, intelligence and human creativity work together."
              </blockquote>
            </div>

            <div className="border-t border-border pt-12 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Let's Connect
              </h3>

              <p className="text-muted-foreground mb-6">
                Open to opportunities, collaborations and innovative ideas.
              </p>

              <div className="flex justify-center">
                <SocialLinks size="lg" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
