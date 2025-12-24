
import { Hero } from "@/components/hero"
import { TournamentSchedule } from "@/components/tournament-schedule"
import { RulesSection } from "@/components/rules-section"
import { PrizesSection } from "@/components/prizes-section"
import { CommitteeSection } from "@/components/committee-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { TeamSquads } from "@/components/team-squads"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TournamentSchedule />
      <TeamSquads />
      <RulesSection />
      <PrizesSection />
      <CommitteeSection />
      <Footer />
    </main>
  )
}
