import { Mail, PhoneCall, Activity, Info } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "1. Kilder",
    bg: "bg-blue-50",
    icon: null,
    content: [
      "CARZILLA.dk",
      "Meta (FB/Instagram)",
      "Google Ads",
      "PACE",
      "SEO / Direkte trafik"
    ]
  },
  {
    title: "2. LeadZilla",
    bg: "bg-yellow-50",
    icon: null,
    content: [
      "Formularanalyse",
      "Brugeradfærd",
      "Scoring 0–100%",
      "Kategori 1–5"
    ]
  },
  {
    title: "3. Første Mail",
    bg: "bg-green-50",
    icon: Mail,
    content: [
      "Mail tilpasset kategori",
      "CTA for Kat 1",
      "'Vi kontakter dig' for Kat 5",
      "Reaktion = opgradering"
    ]
  },
  {
    title: "4. Flow",
    bg: "bg-purple-50",
    icon: null,
    content: [
      "Flow 1–5 baseret på score",
      "Definerer handling & tempo"
    ]
  },
  {
    title: "5. Handling",
    bg: "bg-orange-50",
    icon: PhoneCall,
    content: [
      "Salg: Opkald / status",
      "Marketing: Mails & retargeting",
      "Udvikling: Triggers & scoring"
    ],
    details: [
      "Salg: Reagerer på lead baseret på flow. Kat. 5 = ring samme dag. Kat. 1 = afvent.",
      "Marketing: Opsætter flows, annoncer og mailserier baseret på kategori og respons.",
      "Udvikling: Justerer automatisering, scoring og integrerer feedback."
    ]
  },
  {
    title: "6. Dynamik",
    bg: "bg-red-50",
    icon: Activity,
    content: [
      "Klik = opgradering",
      "Inaktiv = nedgradering",
      "Feedback → optimering"
    ],
    details: [
      "Opgraderinger sker ved formularudfyldelse eller klik på CTA.",
      "Nedgraderinger sker ved manglende svar efter mails/opkald.",
      "Alle ændringer trigger automatisk tilpasning i systemet."
    ]
  }
];

export default function LeadFlowChart() {
  const [activeDetail, setActiveDetail] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-6">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${section.bg} p-4 rounded shadow cursor-pointer transition-all duration-200 hover:scale-105`}
          onClick={() => setActiveDetail(activeDetail === index ? null : index)}
        >
          <h2 className="font-bold flex items-center gap-2">
            {section.icon && <section.icon size={16} />} {section.title}
            {section.details && <Info size={14} className="ml-auto text-gray-500" />}
          </h2>
          <ul className="text-sm list-disc ml-4 mt-2">
            {section.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          {activeDetail === index && section.details && (
            <div className="mt-2 border-t pt-2 text-xs text-gray-700">
              <h3 className="font-semibold mb-1">Detaljer:</h3>
              <ul className="list-disc ml-4">
                {section.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
