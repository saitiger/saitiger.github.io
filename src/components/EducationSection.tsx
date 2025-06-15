
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EDUCATION = [
  {
    degree: "Master of Science, Applied Data Science",
    university: "University of Southern California",
    dates: "Aug 2022 – May 2024",
    details: [
      "GPA: 3.8/4.0",
      "Relevant Coursework: Machine Learning, Data Mining, Natural Language Processing, Deep Learning.",
    ],
  },
  {
    degree: "Bachelor of Technology, Computer Science",
    university: "XYZ University",
    dates: "Aug 2018 – May 2022",
    details: ["GPA: 3.9/4.0", "Graduated with honors."],
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
                <p className="text-sm text-muted-foreground">{edu.dates}</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
