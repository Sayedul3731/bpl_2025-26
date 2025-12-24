import { Card } from "@/components/ui/card"
import { Trophy, Medal, Award, Gift } from "lucide-react"

const prizes = [
  { item: "চ্যাম্পিয়ন - এলইডি টিভি, মূল্য ১৫০০০/", sponsor: "", icon: Trophy },
  { item: "রানার্স আপ - মোবাইল সেট, মূল্য ৮০০০/", sponsor: "মোঃ জহিরুল, প্রবাসী", icon: Medal },
  { item: "টুর্নামেন্ট সেরা - ব্যাট, মূল্য ২০০০/", sponsor: "শাকিল আহমেদ, ব্যবসায়ী", icon: Award },
  { item: "সেরা রানদাতা- মূল্য, ১০০০/", sponsor: "", icon: Gift },
  { item: "সেরা উইকেটদাতা- মূল্য, ১০০০/", sponsor: "", icon: Gift },
  { item: "সেরা ফিল্ডার- মূল্য, ৫০০/", sponsor: "", icon: Gift },
  { item: "সেরা ক্যাচ- মূল্য, ৫০০/", sponsor: "রানা আহমেদ, ব্যবসায়ী/ক্রিকেটার", icon: Gift },
  { item: "সেরা উদনীয়মান খেলোয়ার-মূল্য,৫০০/", sponsor: "রানা আহমেদ, ব্যবসায়ী/ক্রিকেটার", icon: Gift },
  { item: "ম্যান অবদা ম্যাচ সব- মূল্য, ১০০/", sponsor: "নাজিম ভূইয়া, প্রবাসী", icon: Gift },
  { item: "সেঞ্চুরিয়ান- মূল্য, ৫০০/", sponsor: "", icon: Gift },
  { item: "হ্যাটট্রিক- মূল্য, ২০০/", sponsor: "", icon: Gift },
  { item: "সেরা টিম ম্যানেজার-/", sponsor: "", icon: Gift },
  { item: "সেরা সহ টিম ম্যানেজার-/", sponsor: "", icon: Gift },
  { item: "সেরা মেন্টর-/", sponsor: "", icon: Gift },
]

export function PrizesSection() {
return (
    <section id="prizes" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prizes & Awards</h2>
                <p className="text-muted-foreground text-lg">পুরস্কার সমূহ - Tournament Rewards</p>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {prizes.map((prize, index) => {
                        const Icon = prize.icon
                        return (
                            <Card
                                key={index}
                                className={`p-4 md:p-6 hover:shadow-lg transition-all ${
                                    index < 2 ? "bg-gradient-to-br from-accent/10 to-primary/10 border-primary" : ""
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${index < 2 ? "bg-primary" : "bg-muted"}`}>
                                        <Icon className={`h-6 w-6 ${index < 2 ? "text-primary-foreground" : "text-primary"}`} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground mb-1 leading-relaxed">{prize.item}</p>
                                        {prize.sponsor && (
                                            <p className="text-xs text-muted-foreground mt-2">
                                                <span className="font-medium">Sponsor:</span> {prize.sponsor}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>

                <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
                    <div className="text-center">
                        <Trophy className="h-10 w-10 text-primary mx-auto mb-3" />
                        <p className="text-foreground font-medium">ছবি ও পরিচয়পত্র বিল বোর্ড ও ব্যানার খরচ আলাদাভাবে দিতে হবে।</p>
                        <p className="text-sm text-muted-foreground mt-2">
                            Additional costs for photos, ID cards, billboards, and banners to be arranged separately.
                        </p>
                    </div>
                </Card>

                <div className="mt-8 text-center">
                    <p className="text-muted-foreground">
                        যারা সম্মানিত স্পন্সর হতে আগ্রহী তারা নিচে দেওয়া নাম্বার গুলোতে যোগাযোগ করার জন্য বিনীতভাবে অনুরোধ করা হলো।
                    </p>
                    <ul className="mt-4 space-y-2 text-foreground font-medium text-lg">
                        <li>আজিজুল শাহ: ০১৯৮৭৬৪৮১৬৭</li>
                        <li>শাকিল শাহ: ০১৬১০৬১৫৬৪৬</li>
                        <li>সুশান্ত কুমার পাল: ০১৭৩৭৯৪৯৬৬৫</li>
                        <li>পায়েল আহম্মদ: ০১৮৮০৫৭০০৯৫</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)
}
