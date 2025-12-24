import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Phone, Users } from "lucide-react"

const organizers = [
    { name: "রেজোয়ান আহমান", phone: "০১৭০৭১৯৫৮০৮" },
    { name: "আমিন শাহ", phone: "০১৩৩৪৭১৯৩৮৫" },
    { name: "হাকিম", phone: "০১" },
    { name: "ফাহিম আলী", phone: "০১" },
    { name: "সায়েম", phone: "০১" },
    { name: "রাকিব", phone: "০১" },
    { name: "রাশার", phone: "০১" },
]

const sponsors = [
    { name: "পায়েল আহমেদ", phone: "০১৮৮০৫৭০০৯৫" },
    { name: "নিয়ামত আলী শাহ", phone: "০১৬০২৭১৭১৫" },
    { name: "মহসিন চৌধুরী", phone: "০১" },
    { name: "নাইম শাহ (ফান্দাউক)", phone: "০১" },
    { name: "হাসিম ভূইয়া (শ্রীঘর)", phone: "০১" },
    { name: "তোফাজ্জল হোসেন", phone: "০১৬১৫৪২৮৯৯২" },
]

const umpires = [
    { name: "সুশান্ত কুমার পাল", phone: "০১৭৩৭৯৪৯৬৬৫" },
    { name: "গিয়াস উদ্দিন রাকিব", phone: "০১৯৩৯২৬৯২৪৩" },
]

const coordinators = [
    { name: "বোরহান উদ্দিন মোল্লা (পূর্ব)", phone: "০১৬৬০০১০২৭" },
    { name: "কবেল খা (উ)", phone: "০১" },
    { name: "ইমান আহমেদ (স্কুল)", phone: "০১" },
    { name: "রনি আহমদ (মোড়ল)", phone: "০১" },
    { name: "আরমান শাহ (পূর্ব)", phone: "০১" },
    { name: "তরদীর (চান)", phone: "০১" },
    { name: "মনির হোসেন (উ)", phone: "০১" },
]

const supporters = [
    { name: "জাহাঙ্গীর আলম", phone: "০১৬৮৬৯৪২৫৬" },
    { name: "তোফাজ্জল হোসেন", phone: "০১৬১৫৪২৮৯৯২" },
    { name: "সুশান্ত কুমার পাল", phone: "০১৭৩৭৯৪৯৬৬৫" },
    { name: "মহসিন আহমেদ", phone: "০১৭১৫৭২৪০১২" },
    { name: "শরিফুল হাসান", phone: "০১৭২২৯৯২৩২৩" },
]

export function CommitteeSection() {
    return (
        <section id="committee" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Management Committee</h2>
                    <p className="text-muted-foreground text-lg">আয়োজনে - Tournament Organizers & Support Team</p>
                </div>

                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Organizers */}
                    <Card className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold text-foreground">মাঠ সাজসজ্জা কমিটি</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {organizers.map((person, index) => (
                                <Card key={index} className="p-4 hover:bg-muted/50 transition-colors">
                                    <p className="font-semibold text-foreground mb-2">{person.name}</p>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span className="text-sm">{person.phone}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Card>

                    {/* Sponsors */}
                    <Card className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Badge className="bg-accent text-accent-foreground text-base px-3 py-1">Umpires</Badge>
                            <h3 className="text-xl font-bold text-foreground">আম্পায়ার দায়িত্বে থাকা ব্যক্তিবর্গ</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sponsors.map((person, index) => (
                                <Card key={index} className="p-4 hover:bg-muted/50 transition-colors">
                                    <p className="font-semibold text-foreground mb-2">{person.name}</p>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span className="text-sm">{person.phone}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Card>

                    {/* Umpires */}
                    <Card className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Badge className="bg-primary text-primary-foreground text-base px-3 py-1">Umpires</Badge>
                            <h3 className="text-xl font-bold text-foreground">থার্ড আম্পায়ার দায়িত্বে থাকা ব্যক্তিবর্গ</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {umpires.map((person, index) => (
                                <Card key={index} className="p-4 hover:bg-muted/50 transition-colors">
                                    <p className="font-semibold text-foreground mb-2">{person.name}</p>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span className="text-sm">{person.phone}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Card>

                    {/* Coordinators */}
                    <Card className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Badge className="bg-secondary text-secondary-foreground text-base px-3 py-1">Score Boards</Badge>
                            <h3 className="text-xl font-bold text-foreground">স্কোরবোর্ডে দায়িত্বে থাকা ব্যক্তিবর্গ</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {coordinators.map((person, index) => (
                                <Card key={index} className="p-4 hover:bg-muted/50 transition-colors">
                                    <p className="font-semibold text-foreground mb-2">{person.name}</p>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span className="text-sm">{person.phone}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Card>

                    {/* Support Team */}
                    <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
                        <h3 className="text-xl font-bold text-foreground mb-6 text-center">ধারাভাষ্যকার হিসেবে দায়িত্বে থাকা ব্যক্তিবর্গ</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {supporters.map((person, index) => (
                                <Card key={index} className="p-4 hover:bg-background transition-colors">
                                    <p className="font-semibold text-foreground mb-2">{person.name}</p>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4 text-primary" />
                                        <span className="text-sm font-medium">{person.phone}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                        <p className="text-center text-foreground">
                            <strong>আয়োজনে:</strong> বুড়িশ্বর প্রিমিয়ার লীগ (বিপিএল) ২০২৫-২৬ পরিচালন কমিটি।
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
