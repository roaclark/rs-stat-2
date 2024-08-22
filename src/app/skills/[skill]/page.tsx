import { notFound } from "next/navigation";

const skills = ["defence"];

export default function Skill({ params }: { params: { skill: string } }) {
  if (!skills.includes(params.skill)) {
    notFound();
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Skill: {params.skill}
    </div>
  );
}

export async function generateStaticParams() {
  return skills.map((skill) => ({ skill }));
}
