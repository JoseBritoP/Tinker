import React from "react";
import FeatureCard from "./FeatureCard";

const featuresListText = [
  {
    label: "Lorem impsun dolor sit amet",
  },
  {
    label: "Consectetur adipsiscing ellt",
  },
  {
    label: "Sed do elusmod tempor incididunt ut labore",
  },
];

interface ArticlesT {
  title: string;
  subTitle: string;
  featuresList: boolean;
  primaryColor: "blue" | "pink" | "green";
  description: string;
  featureSrcImage: string;
  reverse: boolean;
  TagP: string;
  featuresListText?: { label: string }[];
}

const articles: ArticlesT[] = [
  {
    title: "Simplify your sales monitoring",
    subTitle: "Sales monitoring",
    primaryColor: "blue",
    description: `Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.`,
    featureSrcImage: "/assets/feature-1.svg",
    featuresList: true,
    featuresListText,
    reverse: true,
    TagP: "Learn More",
  },
  {
    title: "Get in touch with your customers",
    subTitle: "Customer Support",
    primaryColor: "green",
    reverse: false,
    description: `Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.`,
    featureSrcImage: "/assets/feature-2.svg",
    featuresList: true,
    featuresListText,
    TagP: "Learn More",
  },
  {
    title: "Monitor your site’s new subscribers ",
    subTitle: "Growth Monitoring",
    primaryColor: "pink",
    description: `Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.`,
    featureSrcImage: "/assets/feature-3.svg",
    featuresListText,
    reverse: true,
    featuresList: false,
    TagP: "Learn More",
  },
];

export default function Features() {
  return (
    <section className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
        {/* Cards */}
        {articles.map((art, i) => (
          <FeatureCard
            key={i}
            title={art.title}
            TagP={art.title}
            description={art.description}
            featureSrcImage={`${art.featureSrcImage}`}
            featuresList={art.featuresList}
            primaryColor={art.primaryColor}
            reverse={art.reverse}
            subTitle={art.subTitle}
            featuresListText={featuresListText}
          />
        ))}
      </div>
    </section>
  );
}
