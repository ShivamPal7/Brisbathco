import { MotionDiv } from "@/components/ui/motion-wrapper";
import { Star, Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Award, value: "50+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Google Rating" },
  { icon: Shield, value: "1000+", label: "Projects Completed" },
  { icon: Clock, value: "100%", label: "Licensed & Insured" },
];

const TrustBar = () => {
  return (
    <section className="bg-charcoal py-8 lg:py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 lg:justify-center"
            >
              <stat.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xl lg:text-2xl font-display font-semibold text-cream">
                  {stat.value}
                </p>
                <p className="text-xs text-cream/60 font-medium">
                  {stat.label}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
