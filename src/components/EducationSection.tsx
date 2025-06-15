
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EDUCATION = [
  {
    degree: "Masters in Applied Data Science",
    university: "University of Southern California",
    details: [
      "Relevant Coursework: Machine Learning for Data Science, Data Mining, Research Methods and Analysis for User Studies, User Experience Design and Strategy.",
    ],
  },
  {
    degree: "Bachelors in Computer Science",
    university: "GGSIPU, New Delhi, India",
    details: [],
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <Card key={edu.degree} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <CardTitle className="text-xl leading-snug">{edu.degree}</CardTitle>
                <p className="text-muted-foreground font-medium pt-1">
                  {edu.university}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              {edu.details.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
