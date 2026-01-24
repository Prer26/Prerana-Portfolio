import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";

const About = () => {
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">

        {/* HEADER aligned to text column */}
        <div className="container mx-auto px-8 lg:px-5 lg:pl-[22rem]">
          <SectionHeading
            title="About Me"
            subtitle="As I explored data, I realized AI and Machine Learning were the bridge between information and intelligence."
          />
        </div>

        {/* FIXED PHOTO */}
        <div className="hidden lg:block fixed top-28 left-[max(2rem,calc((100vw-1280px)/2))] z-10">
          <div className="relative inline-block">
            <div className="absolute -inset-1 gradient-bg rounded-2xl blur-sm opacity-20" />
            <img
              src="/profile-photo.jpeg"
              alt="About me"
              className="relative w-72 rounded-2xl shadow-card object-cover"
            />
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Connect with me
            </p>
            <SocialLinks size="md" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="lg:pl-[22rem] w-full space-y-20">

            {/* WHO I AM */}
            <div className="opacity-0 animate-fade-in-up space-y-4">
              <h3 className="font-serif text-[28px] font-medium tracking-tight text-foreground">
                Who I Am
              </h3>
              <div className="w-8 h-[1.5px] bg-primary/80" />

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/90">
                I’m a 3rd-year BE student in the Department of Artificial
                Intelligence and Machine Learning at RajaRajeswari College of
                Engineering. Driven by curiosity, I enjoy exploring how data,
                algorithms, and intelligence come together to solve real-world
                problems. I’m passionate about understanding the stories hidden
                within data and transforming raw information into meaningful
                insights through AI and ML.
              </p>

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/80">
                Beyond technical skills, I bring strong enthusiasm for
                problem-solving and continuous learning across AI, Machine
                Learning, Web Development, and Data. Whether it’s building
                intelligent models, designing interactive web solutions, or
                analyzing datasets, I see every challenge as a puzzle and enjoy
                uncovering the pieces that create meaningful impact.
              </p>
            </div>

            {/* INTERESTS */}
            <div className="opacity-0 animate-fade-in-up space-y-4">
              <h3 className="font-serif text-[28px] font-medium tracking-tight text-foreground">
                What I'm Interested In
              </h3>
              <div className="w-8 h-[1.5px] bg-primary/80" />

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/90">
                My interests span data visualization, data cleaning,
                machine learning–based prediction, website development, and AI
                prompting. I enjoy transforming raw, unstructured data into
                clean insights, building predictive models, and presenting
                results through intuitive dashboards and data-driven web
                applications enhanced with AI.
              </p>

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/80">
                I’m passionate about learning cloud technologies and data
                structures, strengthening my foundation in scalable systems and
                efficient problem-solving.
              </p>
            </div>

            {/* THINKING */}
            <div className="opacity-0 animate-fade-in-up space-y-4">
              <h3 className="font-serif text-[28px] font-medium tracking-tight text-foreground">
                How I Think & Approach Problems
              </h3>
              <div className="w-8 h-[1.5px] bg-primary/80" />

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/90">
                I believe in starting with "why" before diving into "how."
                Understanding the business context and end goals helps me focus
                on what truly matters rather than getting lost in data for data's
                sake. I approach each project with structured curiosity—asking
                the right questions, validating assumptions, and iterating
                toward clarity.
              </p>

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/80">
                My methodology is simple: listen carefully, analyze thoroughly,
                and communicate clearly. I'm not just looking to find answers—
                I'm looking to find the right answers that drive action.
              </p>
            </div>

            {/* MOTIVATION */}
            <div className="opacity-0 animate-fade-in-up space-y-4">
              <h3 className="font-serif text-[28px] font-medium tracking-tight text-foreground">
                What Motivates Me
              </h3>
              <div className="w-8 h-[1.5px] bg-primary/80" />

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/90">
                What drives me to learn machine learning, data, AI prompting, and
                web development is the moment when complexity turns into
                clarity. I enjoy uncovering patterns, building predictive
                intelligence, and then bringing those insights to life through
                websites people can actually interact with.
              </p>

              <p className="text-[15.5px] leading-[1.75] text-muted-foreground/80">
                I'm motivated by growth—both personal and professional. Every
                challenge is an opportunity to learn something new, and I
                actively seek out projects that push me beyond my comfort zone.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
