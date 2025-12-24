"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User } from "lucide-react"

const teams = [
  {
    id: "madhyapara",
    name: "মধ্যপাড়া সুপার লাইয়ন্স",
    shortName: "Madhyapara Super Lions",
    captain: "সুশান্ত কুমার পাল",
    viceCaptain: "নাইম ভুইয়া",
    teamManager: "জুয়েল মিয়া",
    assistantManager: "জাহাঙ্গীর আলম",
    mentor: "পায়েল আহমেদ",
    players: [
      "মহসিন আহমেদ",
      "হাকিম (মোড়ল)",
      "আমির (চান)",
      "ফেরদৌস (উ)",
      "হাবিবুর শাহ",
      "সায়েম",
      "রাকিবুল (দ)",
      "জসিম (উ)",
      "আবজাল",
      "উজ্জল",
      "শুভ (উ)",
      "নয়ন",
    ],
  },
  {
    id: "chanpara",
    name: "চানপাড়া রয়েল টাইগার্স",
    shortName: "Chanpara Royal Tigers",
    captain: "জসিম আহম্মদ",
    viceCaptain: "সাব্বির মিয়া",
    teamManager: "",
    assistantManager: "",
    mentor: "",
    players: [
      "জলিল (দ)",
      "বাশার (উ)",
      "ইমন আহম্মদ",
      "আমিনুল",
      "রুবেল খা",
      "শরীফ (দ)",
      "টিটু (চান)",
      "জহিরুল",
      "আনিস (দ)",
      "সামাদ মোল্লা",
      "শরীফ (চান)",
      "সৌরভ (পূর্বগ্রাম)",
    ],
  },
  {
    id: "dakshingram",
    name: "দক্ষিণগ্রাম নাইট রাইডার্স",
    shortName: "Dakshingram Night Raiders",
    captain: "সাহাব উদ্দিন",
    viceCaptain: "আমিন শাহ",
    teamManager: "তোফাজ্জেল হোসেন",
    assistantManager: "",
    mentor: "",
    players: [
      "রানা আহম্মদ",
      "সাকিব (উত্তর)",
      "মোশারফ",
      "কাজল",
      "শাহিন ভূইয়া",
      "শামীম (মধ্য)",
      "রাজিব (নয়াবাড়ী)",
      "রাকিব (মোড়ল)",
      "হামিদূল",
      "আব্দুর রহমান",
      "রাসেল শাহ",
      "মোনায়েম"
    ],
  },
  {
    id: "purbagram",
    name: "পূর্বগ্রাম চৌধুরীপাড়া সুপারকিংস",
    shortName: "Purbagram Chowdhuripara Superkings",
    captain: "আজিজুল শাহ",
    viceCaptain: "ব্রজলাল দাস",
    teamManager: "আশিকুর রহমান (পনি)",
    assistantManager: "",
    mentor: "",
    players: [
      "মানিক স্কুলবাড়ি",
      "ফাহিম স্কুলবাড়ি",
      "রায়হান মোল্লা",
      "জাকির মোল্লা",
      "মোঃ বাধন (দ)",
      "সেন্টু (ভূইয়া)",
      "রাজিব (চান)",
      "শিপন (স্কুলবাড়ি)",
      "জুমেল (চান)",
      "রাজেদ (মান্না)",
      "শেখ মাহাদী",
    ],
  },
  {
    id: "panditarbari",
    name: "পন্ডিতবাড়ি ভিক্টোরিয়ান্স",
    shortName: "Panditarbari Victorians",
    captain: "শাকিল আহম্মদ",
    viceCaptain: "রেজোয়ান আহম্মদ",
    teamManager: "শাকিল আহম্মদ",
    assistantManager: "",
    mentor: "",
    players: [
      "রনি আহমেদ",
      "শরিফুল (মোড়ল)",
      "ইসমাইল",
      "জাহাঙ্গীর",
      "রবিন (দ)",
      "খোকন (দ)",
      "মনির (উ)",
      "সিরাজুল",
      "খালেদ (মোড়ল)",
      "রনি (ভুট্টু)",
      "তাইজুল",
      "শিবলু শাহ"
    ],
  },
  {
    id: "moralpara",
    name: "মোড়লপাড়া স্পোর্টিং ক্লাব",
    shortName: "Moralpara Sporting Club",
    captain: "গোলাপ মিয়া",
    viceCaptain: "তকদির",
    teamManager: "",
    assistantManager: "",
    mentor: "",
    players: [
      "মোশাইদ (মধ্য)",
      "সাহাঙ্গীর (মোড়ল)",
      "বাহার",
      "নাজমুল (দ)",
      "পল্লব শুক্ল",
      "সানাউল",
      "আকাশ দাস",
      "ইমন নিয়া ফুলবাড়ি",
      "লিপু",
      "ইসরাইল",
      "বশির (উ)",
      "ইব্রাহিম খলিল"
    ],
  },
]

export function TeamSquads() {
  return (
    <section id="teams" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Team Squads</h2>
          <p className="text-muted-foreground text-lg">Meet all 6 teams competing in BPL 2025-26</p>
        </div>

        <Tabs defaultValue="madhyapara" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {teams.map((team) => (
              <TabsTrigger key={team.id} value={team.id} className="text-xs md:text-sm">
                {team.id === "madhyapara" && "মধ্যপাড়া"}
                {team.id === "chanpara" && "চানপাড়া"}
                {team.id === "dakshingram" && "দক্ষিণগ্রাম"}
                {team.id === "purbagram" && "পূর্বগ্রাম"}
                {team.id === "panditarbari" && "পন্ডিতবাড়ি"}
                {team.id === "moralpara" && "মোড়লপাড়া"}
              </TabsTrigger>
            ))}
          </TabsList>

          {teams.map((team) => (
            <TabsContent key={team.id} value={team.id}>
              <Card className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{team.name}</h3>
                  <p className="text-muted-foreground">{team.shortName}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  <Card className="p-4 text-center md:text-start bg-muted/50">
                    <Badge className="mb-2 pt-2 text-white bg-primary">অধিনায়ক</Badge>
                    <p className="font-semibold text-foreground">{team.captain}</p>
                  </Card>
                  <Card className="p-4 text-center md:text-start bg-muted/50">
                    <Badge className="mb-2 pt-2 text-white bg-secondary">সহ-অধিনায়ক</Badge>
                    <p className="font-semibold text-foreground">{team.viceCaptain}</p>
                  </Card>
                  <Card className="p-4 text-center md:text-start bg-muted/50">
                    <Badge className="mb-2 pt-2 text-white bg-accent">টিম ম্যানেজার</Badge>
                    <p className="font-semibold text-foreground">{team.teamManager}</p>
                  </Card>
                  {team.assistantManager && (
                    <Card className="p-4 text-center md:text-start bg-muted/50">
                      <Badge className="mb-2 pt-2 text-white bg-green-600">সহকারী ম্যানেজার</Badge>
                      <p className="font-semibold text-foreground">{team.assistantManager}</p>
                    </Card>
                  )}
                  {team.mentor && (
                    <Card className="p-4 text-center md:text-start bg-muted/50">
                      <Badge className="mb-2 pt-2 text-white bg-yellow-600">মেন্টর</Badge>
                      <p className="font-semibold text-foreground">{team.mentor}</p>
                    </Card>
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Squad Members
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {team.players.map((player, index) => (
                      <Card key={index} className="p-3 hover:bg-muted/50 transition-colors">
                        <p className="text-sm font-medium text-foreground">{player}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
