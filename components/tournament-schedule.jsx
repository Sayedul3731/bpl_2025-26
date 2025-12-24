"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin } from "lucide-react"

const round1Matches = [
  { date: "২৫/১২/২০২৫", day: "বৃহস্পতিবার", team1: "মধ্যপাড়া সুপার লাইয়ন্স", team2: "দক্ষিণগ্রাম নাইট রাইডার্স" },
  { date: "২৬/১২/২০২৫", day: "শুক্রবার", team1: "পূর্বগ্রাম চৌধুরীপাড়া সুপারকিংস", team2: "মোড়লপাড়া স্পোর্টিং ক্লাব" },
  { date: "২৭/১২/২০২৫", day: "শনিবার", team1: "মোড়লপাড়া স্পোর্টিং ক্লাব", team2: "চানপাড়া রয়েল টাইগার্স" },
  { date: "২৮/১২/২০২৫", day: "রবিবার", team1: "পূর্বগ্রাম চৌধুরীপাড়া সুপারকিংস", team2: "দক্ষিণগ্রাম নাইট রাইডার্স" },
  { date: "২৯/১২/২০২৫", day: "সোমবার", team1: "পন্ডিতবাড়ি ভিক্টোরিয়ান্স", team2: "মোড়লপাড়া স্পোর্টিং ক্লাব" },
  { date: "৩০/১২/২০২৫", day: "মঙ্গলবার", team1: "দক্ষিণগ্রাম নাইট রাইডার্স", team2: "চানপাড়া রয়েল টাইগার্স" },
  { date: "৩১/১২/২০২৫", day: "বুধবার", team1: "পূর্বগ্রাম চৌধুরীপাড়া সুপারকিংস", team2: "পন্ডিতবাড়ি ভিক্টোরিয়ান্স" },
  { date: "০১/০১/২০২৬", day: "বৃহস্পতিবার", team1: "মধ্যপাড়া সুপার লাইয়ন্স", team2: "পন্ডিতবাড়ি ভিক্টোরিয়ান্স" },
]

const round2Matches = [
  { date: "০৪/০১/২০২৬", day: "রবিবার", team1: "মোড়লপাড়া স্পোর্টিং ক্লাব", team2: "দক্ষিণগ্রাম নাইট রাইডার্স" },
  { date: "০৫/০১/২০২৬", day: "সোমবার", team1: "পূর্বগ্রাম চৌধুরীপাড়া সুপারকিংস", team2: "মধ্যপাড়া সুপার লাইয়ন্স" },
  { date: "০৬/০১/২০২৬", day: "মঙ্গলবার", team1: "চানপাড়া রয়েল টাইগার্স", team2: "পন্ডিতবাড়ি ভিক্টোরিয়ান্স" },
  { date: "০৭/০১/২০২৬", day: "বুধবার", team1: "মধ্যপাড়া সুপার লাইয়ন্স", team2: "চানপাড়া রয়েল টাইগার্স" },
  { date: "০৮/০১/২০২৬", day: "বৃহস্পতিবার", team1: "পন্ডিতবাড়ি ভিক্টোরিয়ান্স", team2: "দক্ষিণগ্রাম নাইট রাইডার্স" },
  { date: "০৯/০১/২০২৬", day: "শুক্রবার", team1: "পূর্বগ্রাম চৌধুরীপাড়া সুপারকিংস", team2: "চানপাড়া রয়েল টাইগার্স" },
  { date: "১০/০১/২০২৬", day: "শনিবার", team1: "মধ্যপাড়া সুপার লাইয়ন্স", team2: "মোড়লপাড়া স্পোর্টিং ক্লাব" },
]

const semifinals = [
  { date: "১১/০১/২০২৬", day: "রবিবার", match: "১ম সেমিফাইনাল", teams: "পয়েন্ট টেবিলের ১ম দল বনাম ৪র্থ দল" },
  { date: "১২/০১/২০২৬", day: "সোমবার", match: "২য় সেমিফাইনাল", teams: "পয়েন্ট টেবিলের ২য় দল বনাম ৩য় দল" },
]

const finals = {
  date: "১৩/০১/২০২৬",
  day: "মঙ্গলবার",
  match: "ফাইনাল",
  teams: "১ম সেমিফাইনাল বিজয়ী দল বনাম ২য় সেমিফাইনাল বিজয়ী দল",
}

export function TournamentSchedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tournament Schedule</h2>
          <p className="text-muted-foreground text-lg">Full match schedule for BPL 2025-26</p>
        </div>

        <Tabs defaultValue="round1" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="round1">১ম রাউন্ড</TabsTrigger>
            <TabsTrigger value="round2">২য় রাউন্ড</TabsTrigger>
            <TabsTrigger value="semifinals">সেমিফাইনাল</TabsTrigger>
            <TabsTrigger value="finals">ফাইনাল</TabsTrigger>
          </TabsList>

          <TabsContent value="round1" className="space-y-4">
            {round1Matches.map((match, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{match.date}</p>
                      <p className="text-sm text-muted-foreground">{match.day}</p>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-center">
                    <p className="font-semibold text-foreground mb-1">{match.team1}</p>
                    <p className="text-sm text-muted-foreground">vs</p>
                    <p className="font-semibold text-foreground mt-1">{match.team2}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="round2" className="space-y-4">
            {round2Matches.map((match, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{match.date}</p>
                      <p className="text-sm text-muted-foreground">{match.day}</p>
                    </div>
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="font-semibold text-foreground mb-1">{match.team1}</p>
                    <p className="text-sm text-muted-foreground">vs</p>
                    <p className="font-semibold text-foreground mt-1">{match.team2}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="semifinals" className="space-y-4">
            {semifinals.map((match, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow bg-primary/5 border-primary/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{match.date}</p>
                      <p className="text-sm text-muted-foreground">{match.day}</p>
                    </div>
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="font-bold text-primary mb-2">{match.match}</p>
                    <p className="text-sm text-foreground">{match.teams}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="finals">
            <Card className="p-6 md:p-8 hover:shadow-xl transition-shadow bg-accent/10 border-accent">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground">{finals.date}</p>
                    <p className="text-muted-foreground">{finals.day}</p>
                  </div>
                </div>
                <div className="flex-1 md:text-center">
                  <p className="font-bold text-2xl text-accent mb-3">{finals.match}</p>
                  <p className="text-foreground">{finals.teams}</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
